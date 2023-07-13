export enum Operator {
    Equal = 'equal',
    NotEqual = 'notEqual',
    GreaterThan = 'greaterThan',
    GreaterThanOrEqual = 'greaterThanOrEqual',
    LessThan = 'lessThan',
    LessThanOrEqual = 'lessThanOrEqual',
}

export const CheckOperatorValidity = (str: string): boolean => {
    return Object.values(Operator).includes(str as Operator);
};
