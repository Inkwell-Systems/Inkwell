import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface IEvent extends IEntry {
    eventGuard: number;
    triggers: number[];
}

export const CreateProjectEvent = (eventId: number): IEvent => ({
    key: 'New Event',
    id: eventId,
    value: 0,
    eventGuard: 1,
    triggers: [],
});

export const CheckEventValidity = (event: IEvent): boolean => {
    return CheckEntryValidity(event);
};
