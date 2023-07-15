import {IFact} from './IFact.ts';
import {IEvent} from './IEvent.ts';
import {IRule} from './IRule.ts';

export interface IEntry {
    id: number;
    key: string;
    value: number;
}

export type IEntryType = 'facts' | 'events' | 'rules';

export const GetEntryType = (entry: IEntry): IEntryType => {
    return IsFact(entry) ? 'facts' : IsEvent(entry) ? 'events' : 'rules';
};

export const IsFact = (entry: IEntry): entry is IFact => {
    return (entry as IFact).factGuard !== undefined;
};

export const IsEvent = (entry: IEntry): entry is IEvent => {
    return (entry as IEvent).eventGuard !== undefined;
};

export const IsRule = (entry: IEntry): entry is IRule => {
    return (entry as IRule).ruleGuard !== undefined;
};

export const CheckEntryValidity = (entry: IEntry): boolean => {
    const isIdValid = 'id' in entry && typeof entry.id === 'number';
    const isKeyValid = 'key' in entry && typeof entry.key === 'string';
    const isValueValid = 'value' in entry && typeof entry.value === 'number';

    return isIdValid && isKeyValid && isValueValid;
};
