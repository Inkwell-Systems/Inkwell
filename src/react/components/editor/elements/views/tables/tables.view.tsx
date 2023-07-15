import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TablesPanel from './panels/tables/tables-panel.component.tsx';
import EntriesPanel from './panels/entries/entries-panel.component.tsx';
import {YeetableBar, YeetableContainer, YeetableSection} from './util.tsx';
import ITable from '../../../../../../types/ITable.ts';
import EntryPanel from './panels/entry/entry-panel.component.tsx';
import {IEvent, IFact, IRule} from '../../../../../../types';

const TablesContainer = styled.div`
    flex: 1;

    border-radius: 0.65rem;
    overflow: hidden;
`;

const TablesView = () => {
    const [thirdSize, setThirdSize] = useState(300);
    const [tableRef, setTableRef] = useState(null);

    const [selectedTable, setSelectedTable] = useState<ITable | null>(null);
    const [selectedEntry, setSelectedEntry] = useState<
        IFact | IEvent | IRule | null
    >(null);

    useEffect(() => {
        if (typeof tableRef !== 'undefined' && tableRef != null) {
            setThirdSize(tableRef.offsetWidth / 3);
        }
    }, [tableRef]);

    return (
        <TablesContainer>
            <YeetableContainer ref={setTableRef}>
                <YeetableSection defaultSize={thirdSize} minSize={250}>
                    <TablesPanel setBigSelectedTable={setSelectedTable} />
                </YeetableSection>
                <YeetableBar size={5} />
                <YeetableSection defaultSize={thirdSize} minSize={250}>
                    <EntriesPanel
                        selectedTable={selectedTable}
                        setBigSelectedEntry={setSelectedEntry}
                    />
                </YeetableSection>
                <YeetableBar size={5} />
                <YeetableSection defaultSize={thirdSize} minSize={250}>
                    <EntryPanel
                        selectedTable={selectedTable}
                        selectedEntry={selectedEntry}
                    />
                </YeetableSection>
            </YeetableContainer>
        </TablesContainer>
    );
};

export default TablesView;
