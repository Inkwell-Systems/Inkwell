export interface IScopeHierarchy {
    [key: number]: IScope;
}

export interface IScope {
    id: number;
    key: string;
    level: number;
}

export const GlobalScope: IScope = {
    id: 0,
    key: 'global',
    level: 0,
};

export const CreateProjectScope = (id: number, key: string, level: number) => ({
    id: id,
    key: key,
    level: level,
});

const DefaultScopeHierarchy: IScopeHierarchy = {};
DefaultScopeHierarchy[GlobalScope.id] = GlobalScope;
export {DefaultScopeHierarchy};
