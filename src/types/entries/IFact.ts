import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface IFact extends IEntry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    factGuard: number;
}

export const CheckFactValidity = (fact: IFact): boolean => {
    return CheckEntryValidity(fact);
};
