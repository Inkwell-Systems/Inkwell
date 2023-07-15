import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface IEvent extends IEntry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    eventGuard: number;
}

export const CheckEventValidity = (event: IEvent): boolean => {
    return CheckEntryValidity(event);
};
