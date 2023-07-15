import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface IFact extends IEntry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    factGuard: number;
}

export const CreateProjectFact = (factId: number): IFact => ({
    key: 'New Fact',
    id: factId,
    value: 0,
    factGuard: 1,
});

export const CheckFactValidity = (fact: IFact): boolean => {
    return CheckEntryValidity(fact);
};
