export interface IEntry {
    id: number;
    key: string;
    value: number;
}

export const CheckEntryValidity = (entry: IEntry): boolean => {
    const isIdValid = 'id' in entry && typeof entry.id === 'number';
    const isKeyValid = 'key' in entry && typeof entry.key === 'string';
    const isValueValid = 'value' in entry && typeof entry.value === 'number';

    return isIdValid && isKeyValid && isValueValid;
};
