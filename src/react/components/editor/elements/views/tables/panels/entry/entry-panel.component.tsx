import {
    GetEntryType,
    IEvent,
    IFact,
    IRule,
} from '../../../../../../../../types';
import {PanelContentContainer, PanelHeader} from '../../util.tsx';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import ITable from '../../../../../../../../types/ITable.ts';
import styled from 'styled-components';
import React, {ReactElement, useEffect, useState} from 'react';

import CopyIcon from './icons/copy.svg';
import {
    UpdateEntry,
    UpdateEventTriggers,
} from '../../../../../../../../firebase';
import {
    DisabledInput,
    HorizontalBox,
    Input,
    Label,
    VerticalBox,
} from '../../../utils.tsx';
import {ErrorMessage} from '../../../../../../../../styles/utils.styles.tsx';

const CustomPanelHeader = styled(PanelHeader)`
    display: inline-table;
    padding: 0.4rem;

    div {
        width: 100%;
        height: 100%;

        padding: 0.5rem 1rem;

        border-radius: 0.5rem;

        display: flex;
        justify-content: space-between;

        background-color: #131315;
        color: #b4b4b4;
    }
`;

const EntryPanel = ({
    selectedTable,
    selectedEntry,
}: {
    selectedTable: ITable | null;
    selectedEntry: IFact | IEvent | IRule | null;
}) => {
    const pCtx = UseProjectProvider();

    const getEntryPath = () => {
        if (selectedEntry == null) return '';

        return `#${pCtx.value.projectName} > (${selectedTable.id})${
            selectedTable.key
        }/${GetEntryType(selectedEntry)}`;
    };

    const renderAppropriateComponent = () => {
        if (selectedEntry == null) return <div>Nothing selected</div>;

        const type = GetEntryType(selectedEntry);
        switch (type) {
            case 'facts':
                return (
                    <BaseEntryPanel
                        selectedTable={selectedTable}
                        selectedEntry={selectedEntry as IFact}
                    />
                );
            case 'events':
                return (
                    <EventPanel
                        selectedTable={selectedTable}
                        selectedEvent={selectedEntry as IEvent}
                    />
                );
            case 'rules':
                return (
                    <RulePanel
                        selectedTable={selectedTable}
                        selectedRule={selectedEntry as IRule}
                    />
                );
            default:
                return <div>HMMM</div>;
        }
    };

    return (
        <>
            <CustomPanelHeader>
                <div>
                    <p>{getEntryPath()}</p>
                    <p>{selectedEntry?.key}</p>
                </div>
            </CustomPanelHeader>
            <PanelContentContainer>
                {renderAppropriateComponent()}
            </PanelContentContainer>
        </>
    );
};

const BaseEntryPanel = ({
    selectedTable,
    selectedEntry,
    children,
}: {
    selectedTable: ITable;
    selectedEntry: IFact | IEvent | IRule;
    children?: ReactElement;
}) => {
    const pCtx = UseProjectProvider();

    const [key, setKey] = useState<string>('');
    const [value, setValue] = useState<number>(0);

    const [selfCaused, setSelfCaused] = useState<boolean>(false);

    useEffect(() => {
        if (selectedEntry === null) return;

        setValue(selectedEntry.value);
        setKey(selectedEntry.key);
    }, [selectedEntry]);

    const handleValueChange = e => {
        const newValue = parseInt(e.target.value);
        setValue(newValue);
        setSelfCaused(true);
    };

    const handleKeyChange = e => {
        const newKey = e.target.value;
        setKey(newKey);
        setSelfCaused(true);
    };

    const updateEntry = async () => {
        const entryType = GetEntryType(selectedEntry);

        if (!pCtx.value.cloud) {
            const newEntry = {
                ...selectedEntry,
                key,
                value,
            };

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        [entryType]: {
                            ...selectedTable[entryType],
                            [selectedEntry.id]: newEntry,
                        },
                    },
                },
                entryMap: {
                    ...pCtx.value.entryMap,
                    [selectedEntry.id]: key,
                },
            });

            console.log('Updating entry locally!');
            return;
        }

        await UpdateEntry(
            entryType,
            pCtx.value.projectId,
            selectedTable.id,
            selectedEntry.id,
            key,
            value,
        );
    };

    useEffect(() => {
        if (!selfCaused) return;

        setSelfCaused(false);
        updateEntry();
    }, [value, key]);

    return (
        <VerticalBox>
            <HorizontalBox>
                <Label>ID: </Label>
                <DisabledInput value={selectedEntry.id.toString()} />
            </HorizontalBox>
            <HorizontalBox>
                <Label>Key: </Label>
                <div
                    style={{
                        flex: 7,
                    }}
                >
                    <Input value={key} type="text" onChange={handleKeyChange} />
                </div>
            </HorizontalBox>
            <HorizontalBox>
                <Label>Value: </Label>
                <div
                    style={{
                        flex: 7,
                    }}
                >
                    <Input
                        value={value}
                        type="number"
                        onChange={handleValueChange}
                    />
                </div>
            </HorizontalBox>
            {children}
        </VerticalBox>
    );
};

const EventPanel = ({
    selectedTable,
    selectedEvent,
}: {
    selectedTable: ITable;
    selectedEvent: IEvent;
}) => {
    const pCtx = UseProjectProvider();
    const [triggers, setTriggers] = useState<string>('');
    const [prevProcessedTriggers, setPrevProcessedTriggers] = useState<
        number[]
    >([]);

    useEffect(() => {
        if (selectedEvent === null) return;

        if (selectedEvent.triggers.length > 0) {
            const deprocessedTriggers = selectedEvent.triggers.join(', ');
            setTriggers(deprocessedTriggers);
        }
    }, [selectedEvent]);

    const handleValueChange = async e => {
        if (selectedEvent === null || triggers === null) return;

        const newTriggers = e.target.value;
        setTriggers(newTriggers);

        const processedTriggers = newTriggers
            .split(',')
            .map(t => parseInt(t.trim()))
            .filter(t => !isNaN(t) && t > 0);

        if (!pCtx.value.cloud) {
            // Check if old triggers and current triggers contain the same values
            let same = true;
            if (processedTriggers.length !== prevProcessedTriggers.length) {
                same = false;
            } else {
                for (let i = 0; i < processedTriggers.length; i++) {
                    if (processedTriggers[i] !== prevProcessedTriggers[i]) {
                        same = false;
                        break;
                    }
                }
            }

            if (same) return;

            const newEvent = {
                ...selectedEvent,
                triggers: processedTriggers,
            };

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        events: {
                            ...selectedTable.events,
                            [selectedEvent.id]: newEvent,
                        },
                    },
                },
            });

            console.log('Updating event locally!');
            setPrevProcessedTriggers(processedTriggers);
            return;
        }

        await UpdateEventTriggers(
            pCtx.value.projectId,
            selectedTable.id,
            selectedEvent.id,
            processedTriggers,
        );
    };

    return (
        <BaseEntryPanel
            selectedTable={selectedTable}
            selectedEntry={selectedEvent}
        >
            <>
                <HorizontalBox>
                    <Label>Triggers: </Label>
                    <div
                        style={{
                            flex: 7,
                        }}
                    >
                        <Input
                            value={triggers}
                            type="text"
                            onChange={handleValueChange}
                        />
                    </div>
                </HorizontalBox>
                <ErrorMessage>
                    The `triggers` field is not yet fully UX friendly.
                    <br />
                    For now, you can enter a comma separated list of rule keys.
                    !!! NO RULE VALIDATION IS DONE !!!
                </ErrorMessage>
            </>
        </BaseEntryPanel>
    );
};

const RulePanel = ({
    selectedTable,
    selectedRule,
}: {
    selectedTable: ITable;
    selectedRule: IRule;
}) => {
    return (
        <BaseEntryPanel
            selectedTable={selectedTable}
            selectedEntry={selectedRule}
        >
            <ErrorMessage>
                Rule editing is not yet fully UX friendly.
                <br />
                For `ruleTriggers` and `
            </ErrorMessage>
        </BaseEntryPanel>
    );
};

export default EntryPanel;
