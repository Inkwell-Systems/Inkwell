interface IEntry {
    id: number;
    key: string;
    value: number;
}

export type IFact = IEntry;

export type IEvent = IEntry;

export enum Operator {
    Add,
    Increment,
}

export interface IModification {
    entry: IEntry;
    operator: Operator;
}

export interface ICriterion {
    entry: IEntry;
    operator: Operator;
    value: number;
}

export interface IRule extends IEntry {
    triggers: IEvent[];
    criteria: ICriterion[];
    modifications: IModification[];
}
