import {
    CriterionToString,
    GetEntryType,
    ICriterion,
    IEvent,
    IFact,
    IModification,
    IRule,
    ModificationToString,
    StringToCriterion,
    StringToModification,
} from '../../../../../../../../types';
import {PanelContentContainer, PanelHeader} from '../../util.tsx';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import ITable from '../../../../../../../../types/ITable.ts';
import styled from 'styled-components';
import React, {ReactElement, useEffect, useState} from 'react';
import {
    UpdateEntry,
    UpdateEventTriggers,
    UpdateRuleSpecific,
} from '../../../../../../../../firebase';
import {
    DisabledInput,
    HorizontalBox,
    Input,
    Label,
    MultilineInput,
    VerticalBox,
} from '../../../utils.tsx';
import {ErrorMessage, WarningMessage, WarningMessageLeft} from '../../../../../../../../styles/utils.styles.tsx';

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

const CheckArrayEquality = (a, b) => {
    if (a == null || b == null) return false;

    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;

    return true;
};

const CheckObjectEqualityDeep = (a, b) => {
    if (a == null || b == null) return false;

    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (typeof a[key] === 'object') {
            if (!CheckObjectEqualityDeep(a[key], b[key])) return false;
        } else if (a[key] !== b[key]) return false;
    }

    return true;
};

const EntryPanel = ({
    selectedTable,
    selectedEntry,
}: {
    selectedTable: ITable | null;
    selectedEntry: IFact | IEvent | IRule | null;
}) => {
    const pCtx = UseProjectProvider();

    const getEntryPath = () => {
        if (selectedEntry == null || selectedTable == null) return '';

        return `#${pCtx.value.projectName} > (${selectedTable?.id})${
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
            if (CheckArrayEquality(processedTriggers, prevProcessedTriggers))
                return;

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
                <WarningMessageLeft>
                    `<i>triggers</i>` is a comma-separated-list of rule IDs.
                </WarningMessageLeft>
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
    const pCtx = UseProjectProvider();

    const [criteria, setCriteria] = useState<string>('');
    const [modifications, setModifications] = useState<string>('');

    const [prevProcessedCriteria, setPrevProcessedCriteria] = useState<
        ICriterion[]
    >([]);
    const [prevProcessedModifications, setPrevProcessedModifications] =
        useState<IModification[]>([]);

    const convertInputToOutput = (input, fc) => {
        return input
            .split('\n')
            .filter(c => c.startsWith('|') && c.endsWith('|') && c.length > 2)
            .map(c =>
                fc(
                    c
                        .slice(1, c.length - 1)
                        .split(',')
                        .map(s => s.trim()),
                ),
            )
            .filter(c => c !== null);
    };

    useEffect(() => {
        if (selectedRule === null) return;

        const deprocessedCriteria = selectedRule.ruleCriteria
            .map(c => CriterionToString(c))
            .join('\n');
        setCriteria(deprocessedCriteria);

        const deprocessedModifications = selectedRule.ruleModifications
            .map(m => ModificationToString(m))
            .join('\n');
        setModifications(deprocessedModifications);

        if (pCtx.value.cloud) {
            setPrevProcessedCriteria(null);
            setPrevProcessedModifications(null);
        } else {
            setPrevProcessedCriteria(selectedRule.ruleCriteria);
            setPrevProcessedModifications(selectedRule.ruleModifications);
        }
    }, [selectedRule]);

    const handleValueChange = async (e, changed) => {
        if (selectedRule === null || criteria == null || modifications == null)
            return;

        let newProcessedCriteria = null;
        let newProcessedModifications = null;

        if (changed === 'criteria') {
            const newCriteria = e.target.value;
            setCriteria(newCriteria);

            newProcessedCriteria = convertInputToOutput(
                newCriteria,
                StringToCriterion,
            );

            if (!pCtx.value.cloud) {
                const b = CheckObjectEqualityDeep(
                    newProcessedCriteria,
                    prevProcessedCriteria,
                );

                if (!b) {
                    const newRule = {
                        ...selectedRule,
                        ruleCriteria: newProcessedCriteria,
                    };

                    pCtx.setValue({
                        ...pCtx.value,
                        tables: {
                            ...pCtx.value.tables,
                            [selectedTable.id]: {
                                ...selectedTable,
                                rules: {
                                    ...selectedTable.rules,
                                    [selectedRule.id]: newRule,
                                },
                            },
                        },
                    });

                    console.log('Updating rule locally!');
                }
            }

            if (CheckArrayEquality(newProcessedCriteria, prevProcessedCriteria))
                return;

            setPrevProcessedCriteria(newProcessedCriteria);
        } else if (changed === 'modifications') {
            const newModifications = e.target.value;
            setModifications(newModifications);

            newProcessedModifications = convertInputToOutput(
                newModifications,
                StringToModification,
            );

            if (!pCtx.value.cloud) {
                const b = CheckObjectEqualityDeep(
                    newProcessedModifications,
                    prevProcessedModifications,
                );

                if (!b) {
                    const newRule = {
                        ...selectedRule,
                        ruleModifications: newProcessedModifications,
                    };

                    pCtx.setValue({
                        ...pCtx.value,
                        tables: {
                            ...pCtx.value.tables,
                            [selectedTable.id]: {
                                ...selectedTable,
                                rules: {
                                    ...selectedTable.rules,
                                    [selectedRule.id]: newRule,
                                },
                            },
                        },
                    });

                    console.log('Updating rule locally!');
                }
            }

            if (
                CheckArrayEquality(
                    newProcessedModifications,
                    prevProcessedModifications,
                )
            )
                return;

            setPrevProcessedModifications(newProcessedModifications);
        }

        if (!pCtx.value.cloud) {
            return;
        }

        newProcessedCriteria =
            newProcessedCriteria ?? selectedRule.ruleCriteria;
        newProcessedModifications =
            newProcessedModifications ?? selectedRule.ruleModifications;

        await UpdateRuleSpecific(
            pCtx.value.projectId,
            selectedTable.id,
            selectedRule.id,
            newProcessedCriteria,
            newProcessedModifications,
        );
    };

    return (
        <BaseEntryPanel
            selectedTable={selectedTable}
            selectedEntry={selectedRule}
        >
            <>
                <HorizontalBox>
                    <Label
                        style={{
                            alignSelf: 'flex-start',
                        }}
                    >
                        Criteria:{' '}
                    </Label>
                    <div
                        style={{
                            flex: 7,
                        }}
                    >
                        <MultilineInput
                            value={criteria}
                            onChange={e => handleValueChange(e, 'criteria')}
                        />
                    </div>
                </HorizontalBox>
                <WarningMessageLeft>
                    `ruleCriteria` is a {`'\\n'`} separated list of the format.
                    <br />`
                    {`|entryToCheck: id, operator: '=/<=/>=/</>', value: number|`}
                </WarningMessageLeft>
                <HorizontalBox>
                    <Label
                        style={{
                            alignSelf: 'flex-start',
                        }}
                    >
                        Modifications:{' '}
                    </Label>
                    <div
                        style={{
                            flex: 7,
                        }}
                    >
                        <MultilineInput
                            value={modifications}
                            onChange={e =>
                                handleValueChange(e, 'modifications')
                            }
                        />
                    </div>
                </HorizontalBox>
                <WarningMessageLeft>
                    `ruleModifications` is a {`'\\n'`} separated list of the
                    format.
                    <br />`
                    {`|entryToModify: id, operator: '=/+', newValue: number|`}
                </WarningMessageLeft>
            </>
        </BaseEntryPanel>
    );
};

export default EntryPanel;
