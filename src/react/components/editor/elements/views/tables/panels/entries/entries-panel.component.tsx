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

const EntryContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
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
        console.log('Delete entry');
    };

    const handleAddEntry = async () => {
        setDisplayAddEntry(!displayAddEntry);
    };

    const handleCreateFact = async () => {
        setDisplayAddEntry(false);
        console.log('Create fact');
    };

    const handleCreateEvent = async () => {
        setDisplayAddEntry(false);
        console.log('Create event');
    };

    const handleCreateRule = async () => {
        setDisplayAddEntry(false);
        console.log('Create rule');
    };

    const handleRenameEntry = async (newKey, entry) => {
        console.log(`Rename entry ${entry.key} to ${newKey}`);
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
        if (selectedTable == null) return;

        const e = GetTableEntries(selectedTable).filter(entry =>
            entry.key.toLowerCase().includes(searchFilter.toLowerCase()),
        );
        setFilteredEntries(e);
    }, [searchFilter, pCtx.value]);

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
                    </YeetableSection>
                    <YeetableBar size={5} />
                    <YeetableSection defaultSize={thirdSize} minSize={100}>
                        <h1>{'> Rules'}</h1>
                    </YeetableSection>
                </YeetableContainer>
            </PanelContentContainer>
        </>
    );
};

export default EntriesPanel;
