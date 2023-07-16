// To parse this data:
//
//   import { Convert, IErrorProject } from "./file";
//
//   const iErrorProject = Convert.toIErrorProject(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IErrorProject {
    cloud: boolean;
    entryMap: string[];
    inviteCode: string;
    owner: string;
    projectBanner: string;
    projectCreatedAt: number;
    projectDescription: string;
    projectId: string;
    projectName: string;
    scopes: Array<Scope | null>;
    tables: {[key: string]: Table};
    members: any[];
}

export interface Scope {
    id: number;
    key: string;
    level: number;
}

export interface Table {
    events: {[key: string]: Event};
    facts: Array<Fact | null> | FactsClass;
    id: number;
    key: string;
    rules: {[key: string]: Rule};
}

export interface Event {
    eventGuard: number;
    id: number;
    key: string;
    triggers: number[];
    value: number;
}

export interface Fact {
    factGuard: number;
    id: number;
    key: string;
    value: number;
}

export interface FactsClass {}

export interface Rule {
    id: number;
    key: string;
    ruleGuard: number;
    value: number;
    ruleCriteria: any[];
    ruleModifications: any[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toIErrorProject(json: string): IErrorProject {
        return cast(JSON.parse(json), r('IErrorProject'));
    }

    public static iErrorProjectToJson(value: IErrorProject): string {
        return JSON.stringify(uncast(value, r('IErrorProject')), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(
        `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
            val,
        )}`,
    );
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ
                .map(a => {
                    return prettyTypeName(a);
                })
                .join(', ')}]`;
        }
    } else if (typeof typ === 'object' && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => (map[p.json] = {key: p.js, typ: p.typ}));
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => (map[p.js] = {key: p.json, typ: p.typ}));
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(
    val: any,
    typ: any,
    getProps: any,
    key: any = '',
    parent: any = '',
): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(
            cases.map(a => {
                return l(a);
            }),
            val,
            key,
            parent,
        );
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue(l('array'), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l('Date'), val, key, parent);
        }
        return d;
    }

    function transformObject(
        props: {[k: string]: any},
        additional: any,
        val: any,
    ): any {
        if (val === null || typeof val !== 'object' || Array.isArray(val)) {
            return invalidValue(l(ref || 'object'), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key)
                ? val[key]
                : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(
                    val[key],
                    additional,
                    getProps,
                    key,
                    ref,
                );
            }
        });
        return result;
    }

    if (typ === 'any') return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === 'object' && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === 'object') {
        return typ.hasOwnProperty('unionMembers')
            ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty('arrayItems')
            ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty('props')
            ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== 'number') return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return {literal: typ};
}

function a(typ: any) {
    return {arrayItems: typ};
}

function u(...typs: any[]) {
    return {unionMembers: typs};
}

function o(props: any[], additional: any) {
    return {props, additional};
}

function m(additional: any) {
    return {props: [], additional};
}

function r(name: string) {
    return {ref: name};
}

const typeMap: any = {
    IErrorProject: o(
        [
            {json: 'cloud', js: 'cloud', typ: true},
            {json: 'entryMap', js: 'entryMap', typ: a('')},
            {json: 'inviteCode', js: 'inviteCode', typ: ''},
            {json: 'owner', js: 'owner', typ: ''},
            {json: 'projectBanner', js: 'projectBanner', typ: ''},
            {json: 'projectCreatedAt', js: 'projectCreatedAt', typ: 0},
            {json: 'projectDescription', js: 'projectDescription', typ: ''},
            {json: 'projectId', js: 'projectId', typ: ''},
            {json: 'projectName', js: 'projectName', typ: ''},
            {json: 'scopes', js: 'scopes', typ: a(u(r('Scope'), null))},
            {json: 'tables', js: 'tables', typ: m(r('Table'))},
            {json: 'members', js: 'members', typ: a('any')},
        ],
        false,
    ),
    Scope: o(
        [
            {json: 'id', js: 'id', typ: 0},
            {json: 'key', js: 'key', typ: ''},
            {json: 'level', js: 'level', typ: 0},
        ],
        false,
    ),
    Table: o(
        [
            {json: 'events', js: 'events', typ: m(r('Event'))},
            {
                json: 'facts',
                js: 'facts',
                typ: u(a(u(r('Fact'), null)), r('FactsClass')),
            },
            {json: 'id', js: 'id', typ: 0},
            {json: 'key', js: 'key', typ: ''},
            {json: 'rules', js: 'rules', typ: m(r('Rule'))},
        ],
        false,
    ),
    Event: o(
        [
            {json: 'eventGuard', js: 'eventGuard', typ: 0},
            {json: 'id', js: 'id', typ: 0},
            {json: 'key', js: 'key', typ: ''},
            {json: 'triggers', js: 'triggers', typ: a(0)},
            {json: 'value', js: 'value', typ: 0},
        ],
        false,
    ),
    Fact: o(
        [
            {json: 'factGuard', js: 'factGuard', typ: 0},
            {json: 'id', js: 'id', typ: 0},
            {json: 'key', js: 'key', typ: ''},
            {json: 'value', js: 'value', typ: 0},
        ],
        false,
    ),
    FactsClass: o([], false),
    Rule: o(
        [
            {json: 'id', js: 'id', typ: 0},
            {json: 'key', js: 'key', typ: ''},
            {json: 'ruleGuard', js: 'ruleGuard', typ: 0},
            {json: 'value', js: 'value', typ: 0},
            {json: 'ruleCriteria', js: 'ruleCriteria', typ: a('any')},
            {json: 'ruleModifications', js: 'ruleModifications', typ: a('any')},
        ],
        false,
    ),
};
