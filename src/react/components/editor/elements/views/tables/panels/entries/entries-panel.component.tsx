import React, {useEffect, useState} from 'react';
import {
    PanelContentContainer,
    PanelHeader,
    YeetableBar,
    YeetableContainer,
    YeetableSection,
} from '../../util.tsx';
import EntryFlowMenu from '../entry-flow-menu.component.tsx';
import styled from 'styled-components';
import ITable, {GetTableEntries} from '../../../../../../../../types/ITable.ts';
import {
    GetEntryType,
    GetIEntryFromId,
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
    UpdateEntryKey,
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

const EntriesPanel = ({selectedTable}: {selectedTable: ITable}) => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [filteredEntries, setFilteredEntries] = useState<IEntry[]>([]);
    const [selectedEntry, setSelectedEntry] = useState(0);

    const [thirdSize, setThirdSize] = useState(300);
    const [containerRef, setContainerRef] = useState(null);

    const [displayAddEntry, setDisplayAddEntry] = useState(false);
    const [addEntryRef, setAddEntryRef] = useState(null);

    const handleDeleteEntry = async () => {
        if (!pCtx.value.cloud) {
            return;
        }

        const entry = GetIEntryFromId(pCtx.value, selectedEntry);
        const type = GetEntryType(entry);
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

    // TODO(calco): Handle local entry creation
    const handleCreateFact = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            return;
        }

        await CreateFact(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleCreateEvent = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            return;
        }
        await CreateEvent(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleCreateRule = async () => {
        setDisplayAddEntry(false);

        if (!pCtx.value.cloud) {
            return;
        }
        await CreateRule(pCtx.value.projectId, selectedTable.id);
        setSearchFilter('');
    };

    const handleRenameEntry = async (newKey, entry) => {
        if (!pCtx.value.cloud) {
            return;
        }

        const type = GetEntryType(entry);
        await UpdateEntryKey(
            newKey,
            type,
            pCtx.value.projectId,
            selectedTable.id,
            entry.id,
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
    }, [searchFilter, selectedTable, pCtx.value]);

    useEffect(() => {
        if (typeof containerRef !== 'undefined' && containerRef != null) {
            setThirdSize(containerRef.offsetWidth / 3);
        }
    }, [containerRef]);

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
                <EntryFlowMenu
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
                                    key={fact.id}
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
                                    key={event.id}
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
                                    key={rule.id}
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
