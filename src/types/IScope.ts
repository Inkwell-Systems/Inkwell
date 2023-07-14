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

const DefaultScopeHierarchy: IScopeHierarchy = {};
DefaultScopeHierarchy[GlobalScope.id] = GlobalScope;
export {DefaultScopeHierarchy};
