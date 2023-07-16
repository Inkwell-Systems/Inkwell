export enum Modification {
    Set = 'set',
    Increment = 'increment',
}

export interface IModification {
    modifiedEntry: number;
    modificationOperator: Modification;
    modifyWithValue: number;
}

export const StringToModificationOperator = (
    s: string,
): Modification | null => {
    switch (s) {
        case '=':
            return Modification.Set;
        case '+':
            return Modification.Increment;
        default:
            return null;
    }
};

export const ModificationOperatorToString = (op: Modification): string => {
    switch (op) {
        case Modification.Set:
            return '=';
        case Modification.Increment:
            return '+';
        default:
            return '';
    }
};

export const StringToModification = (s: string[]): IModification | null => {
    const op = StringToModificationOperator(s[1]);

    const s1 = parseInt(s[0]);
    const s2 = parseInt(s[2]);

    if (!isNaN(s1) && op !== null && !isNaN(s2))
        return {
            modifiedEntry: s1,
            modificationOperator: op,
            modifyWithValue: s2,
        };
    else return null;
};

export const ModificationToString = (m: IModification): string => {
    const op = ModificationOperatorToString(m.modificationOperator);

    const s1 = m.modifiedEntry;
    const s2 = m.modifyWithValue;

    return `|${s1}, ${op}, ${s2}|`;
};
