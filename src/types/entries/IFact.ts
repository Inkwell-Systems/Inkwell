import {CheckEntryValidity, IEntry} from './IEntry.ts';

export type IFact = IEntry;

export const CheckFactValidity = (fact: IFact): boolean => {
    return CheckEntryValidity(fact);
};
