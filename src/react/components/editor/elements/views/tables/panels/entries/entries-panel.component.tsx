import React, {useEffect, useState} from 'react';
import {
    PanelContentContainer,
    PanelHeader,
    YeetableBar,
    YeetableContainer,
    YeetableSection,
} from '../../util.tsx';
import SectionHeaderMenu from '../../../section-header-flow.component.tsx';
import styled from 'styled-components';
import ITable, {GetTableEntries} from '../../../../../../../../types/ITable.ts';
import {
    CreateProjectEvent,
    CreateProjectFact,
    CreateProjectRule,
    GetEntryType,
    GetIEntryFromId,
    GetMinimumEntryIdFromProject,
    IEntry,
    IEvent,
    IFact,
    IRule,
    IsEvent,
    IsFact,
    IsRule,
} from '../../../../../../../../types';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import EntryCard from '../entry-card.component.tsx';
import {
    CreateEvent,
    CreateFact,
    CreateRule,
    DeleteEntry,
    UpdateEntry,
} from '../../../../../../../../firebase';

const EntryContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;

    overflow-x: hidden;
    overflow-y: auto;
`;

const CreateEntryDropdown = styled.div`
    position: absolute;
    z-index: 100;
    background-color: #131315;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const CreateEntryOption = styled.div`
    width: 100%;
    padding: 0.5rem;

    border-radius: 0.5rem;

    color: #b4b4b4;

    display: flex;
    align-items: center;
    cursor: pointer;

    user-select: none;

    &:hover {
        background-color: #1d1d1f;
        color: #e3e3e3;
    }
`;

const EntriesPanel = ({
    selectedTable,
    setBigSelectedEntry,
}: {
    selectedTable: ITable;
    setBigSelectedEntry: (entry: IFact | IEvent | IRule | null) => void;
}) => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [filteredEntries, setFilteredEntries] = useState<IEntry[]>([]);
    const [selectedEntry, setSelectedEntry] = useState(0);

    const [thirdSize, setThirdSize] = useState(300);
    const [containerRef, setContainerRef] = useState(null);

    const [displayAddEntry, setDisplayAddEntry] = useState(false);
    const [addEntryRef, setAddEntryRef] = useState(null);

    const [forceUpdate, setForceUpdate] = useState(0);

    const handleDeleteEntry = async () => {
        const entry = GetIEntryFromId(pCtx.value, selectedEntry);
        const type = GetEntryType(entry);

        if (!pCtx.value.cloud) {
            const newEntryMap = {...pCtx.value.entryMap};
            delete newEntryMap[selectedEntry];

            const newTable = {...selectedTable};
            delete newTable[type][selectedEntry];

            pCtx.setValue({
                ...pCtx.value,
                entryMap: newEntryMap,
                tables: {
                    ...pCtx.value.tables,
                },
            });

            console.log('Deleted local entry!');
            return;
        }

        await DeleteEntry(
            pCtx.value.projectId,
            selectedTable.id,
            type,
            selectedEntry,
        );
    };

    const handleAddEntry = async () => {
        if (selectedTable === null) {
            console.log(
                'Tried adding entry with no table selected. Aborting...',
            );
            return;
        }

        setDisplayAddEntry(!displayAddEntry);
    };

    const handleCreateFact = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            const factId = GetMinimumEntryIdFromProject(pCtx.value);
            const newFact = CreateProjectFact(factId);

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        facts: {
                            ...selectedTable.facts,
                            [factId]: newFact,
                        },
                    },
                },
                entryMap: {
                    ...pCtx.value.entryMap,
                    [factId]: newFact.key,
                },
            });
            console.log('Created local fact!');
            return;
        }

        await CreateFact(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleCreateEvent = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            const eventId = GetMinimumEntryIdFromProject(pCtx.value);
            const event = CreateProjectEvent(eventId);

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        events: {
                            ...selectedTable.events,
                            [eventId]: event,
                        },
                    },
                },
                entryMap: {
                    ...pCtx.value.entryMap,
                    [eventId]: event.key,
                },
            });

            console.log('Created local event!');
            return;
        }

        await CreateEvent(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleCreateRule = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            const ruleId = GetMinimumEntryIdFromProject(pCtx.value);
            const rule = CreateProjectRule(ruleId);

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        rules: {
                            ...selectedTable.rules,
                            [ruleId]: rule,
                        },
                    },
                },
                entryMap: {
                    ...pCtx.value.entryMap,
                    [ruleId]: rule.key,
                },
            });

            console.log('Created local rule!');
            return;
        }

        await CreateRule(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleRenameEntry = async (newKey, entry) => {
        if (!pCtx.value.cloud) {
            const newEntryMap = {...pCtx.value.entryMap};
            newEntryMap[entry.id] = newKey;

            const newTable = {...selectedTable};
            newTable[GetEntryType(entry)][entry.id].key = newKey;

            pCtx.setValue({
                ...pCtx.value,
                entryMap: newEntryMap,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: newTable,
                },
            });

            console.log('Renamed local entry!');
            return;
        }

        const type = GetEntryType(entry);
        await UpdateEntry(
            type,
            pCtx.value.projectId,
            selectedTable.id,
            entry.id,
            newKey,
        );
    };

    const getFilteredFacts = () => {
        return filteredEntries
            .filter(entry => IsFact(entry))
            .map(entry => entry as IFact);
    };

    const getFilteredEvents = () => {
        return filteredEntries
            .filter(entry => IsEvent(entry))
            .map(entry => entry as IEvent);
    };

    const getFilteredRules = () => {
        return filteredEntries
            .filter(entry => IsRule(entry))
            .map(entry => entry as IRule);
    };

    useEffect(() => {
        if (selectedTable == null) {
            setFilteredEntries([]);
            return;
        }

        const e = GetTableEntries(selectedTable).filter(entry =>
            entry.key.toLowerCase().includes(searchFilter.toLowerCase()),
        );

        setFilteredEntries(e);
        setForceUpdate(forceUpdate + 1);
    }, [searchFilter, selectedTable, pCtx.value]);

    useEffect(() => {
        if (typeof containerRef !== 'undefined' && containerRef != null) {
            setThirdSize(containerRef.offsetWidth / 3);
        }
    }, [containerRef]);

    useEffect(() => {
        if (selectedEntry == null || selectedTable == null) {
            return;
        }

        const ientry = GetIEntryFromId(pCtx.value, selectedEntry);
        if (ientry == null) return;

        setBigSelectedEntry(ientry);
    }, [selectedEntry, pCtx.value]);

    return (
        <>
            {displayAddEntry && (
                <CreateEntryDropdown
                    style={{
                        top:
                            addEntryRef?.offsetTop +
                            addEntryRef?.offsetHeight +
                            20,
                        right:
                            window.innerWidth -
                            addEntryRef?.offsetLeft -
                            addEntryRef?.offsetWidth,
                    }}
                >
                    <CreateEntryOption onClick={handleCreateFact}>
                        Fact
                    </CreateEntryOption>
                    <CreateEntryOption onClick={handleCreateEvent}>
                        Event
                    </CreateEntryOption>
                    <CreateEntryOption onClick={handleCreateRule}>
                        Rule
                    </CreateEntryOption>
                </CreateEntryDropdown>
            )}

            <PanelHeader>
                <SectionHeaderMenu
                    setAddEntryRef={setAddEntryRef}
                    label="Entries"
                    value={searchFilter}
                    setValue={setSearchFilter}
                    handleDelete={handleDeleteEntry}
                    handleAdd={handleAddEntry}
                />
            </PanelHeader>
            <PanelContentContainer ref={setContainerRef}>
                <YeetableContainer vertical={true}>
                    <YeetableSection defaultSize={thirdSize} minSize={100}>
                        <h1>{'> Facts'}</h1>
                        <EntryContainer>
                            {getFilteredFacts().map(fact => (
                                <EntryCard
                                    indentLevel={2}
                                    onFinishEditing={key =>
                                        handleRenameEntry(key, fact)
                                    }
                                    defaultKey={fact.key}
                                    onClick={() => {
                                        setSelectedEntry(fact.id);
                                    }}
                                    selected={selectedEntry === fact.id}
                                    key={fact.id + forceUpdate * 2}
                                />
                            ))}
                        </EntryContainer>
                    </YeetableSection>
                    <YeetableBar size={5} />
                    <YeetableSection defaultSize={thirdSize} minSize={100}>
                        <h1>{'> Events'}</h1>
                        <EntryContainer>
                            {getFilteredEvents().map(event => (
                                <EntryCard
                                    indentLevel={2}
                                    onFinishEditing={key =>
                                        handleRenameEntry(key, event)
                                    }
                                    defaultKey={event.key}
                                    onClick={() => {
                                        setSelectedEntry(event.id);
                                    }}
                                    selected={selectedEntry === event.id}
                                    key={event.id + forceUpdate * 4}
                                />
                            ))}
                        </EntryContainer>
                    </YeetableSection>
                    <YeetableBar size={5} />
                    <YeetableSection defaultSize={thirdSize} minSize={100}>
                        <h1>{'> Rules'}</h1>
                        <EntryContainer>
                            {getFilteredRules().map(rule => (
                                <EntryCard
                                    indentLevel={2}
                                    onFinishEditing={key =>
                                        handleRenameEntry(key, rule)
                                    }
                                    defaultKey={rule.key}
                                    onClick={() => {
                                        setSelectedEntry(rule.id);
                                    }}
                                    selected={selectedEntry === rule.id}
                                    key={rule.id + forceUpdate * 12}
                                />
                            ))}
                        </EntryContainer>
                    </YeetableSection>
                </YeetableContainer>
            </PanelContentContainer>
        </>
    );
};

export default EntriesPanel;
