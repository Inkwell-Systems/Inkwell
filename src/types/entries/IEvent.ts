import {CheckEntryValidity, IEntry} from './IEntry.ts';

export type IEvent = IEntry;

export const CheckEventValidity = (event: IEvent): boolean => {
    return CheckEntryValidity(event);
};
