import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TablesPanel from './panels/tables/tables-panel.component.tsx';
import EntriesPanel from './panels/entries/entries-panel.component.tsx';
import {YeetableBar, YeetableContainer, YeetableSection} from './util.tsx';
import ITable from '../../../../../../types/ITable.ts';

const TablesContainer = styled.div`
    flex: 1;

    border-radius: 0.65rem;
    overflow: hidden;
`;

const TablesView = () => {
    const [thirdSize, setThirdSize] = useState(300);
    const [tableRef, setTableRef] = useState(null);

    const [selectedTable, setSelectedTable] = useState<ITable | null>(null);

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
                    <EntriesPanel selectedTable={selectedTable} />
                </YeetableSection>
                <YeetableBar size={5} />
                <YeetableSection
                    defaultSize={thirdSize}
                    minSize={250}
                ></YeetableSection>
            </YeetableContainer>
        </TablesContainer>
    );
};

export default TablesView;
