import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface IFact extends IEntry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _fact_guard: number;
}

export const CheckFactValidity = (fact: IFact): boolean => {
    return CheckEntryValidity(fact);
};
