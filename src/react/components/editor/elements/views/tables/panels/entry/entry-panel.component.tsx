import {
    GetEntryType,
    IEvent,
    IFact,
    IRule,
} from '../../../../../../../../types';

const EntryPanel = ({
    selectedEntry,
}: {
    selectedEntry: IFact | IEvent | IRule | null;
}) => {
    const renderAppropriateComponent = () => {
        if (selectedEntry == null) return <div>Nothing selected</div>;

        const type = GetEntryType(selectedEntry);
        switch (type) {
            case 'facts':
                return <FactPanel selectedFact={selectedEntry as IFact} />;
            case 'events':
                return <EventPanel selectedEvent={selectedEntry as IEvent} />;
            case 'rules':
                return <RulePanel selectedRule={selectedEntry as IRule} />;
            default:
                return <div>HMMM</div>;
        }
    };

    return <div>{renderAppropriateComponent()}</div>;
};

const FactPanel = ({selectedFact}: {selectedFact: IFact}) => {
    return <div>FACT: {selectedFact.key}</div>;
};

const EventPanel = ({selectedEvent}: {selectedEvent: IEvent}) => {
    return <div>EVENT: {selectedEvent.key}</div>;
};

const RulePanel = ({selectedRule}: {selectedRule: IRule}) => {
    return <div>RULE: {selectedRule.key}</div>;
};

export default EntryPanel;
