export enum Modification {
    Set = 'set',
    Increment = 'increment',
}

export interface IModification {
    modifiedEntry: number;
    modificationOperator: Modification;
    modifyWithValue: number;
}

export const CheckModificationValidity = (
    modification: IModification,
): boolean => {
    const isModifiedEntryValid =
        'modifiedEntry' in modification &&
        typeof modification.modifiedEntry === 'number';

    const isModificationOperatorValid =
        'modificationOperator' in modification &&
        typeof modification.modificationOperator === 'string' &&
        Object.values(Modification).includes(
            modification.modificationOperator as Modification,
        );

    const isModifyWithValueValid =
        'modifyWithValue' in modification &&
        typeof modification.modifyWithValue === 'number';

    return (
        isModifiedEntryValid &&
        isModificationOperatorValid &&
        isModifyWithValueValid
    );
};
