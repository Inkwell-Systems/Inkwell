import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Bar, Container, Section} from 'react-simple-resizer';
import TablesPanel from './panels/tables-panel.component.tsx';
import EntriesPanel from './panels/entries-panel.component.tsx';

const TablesContainer = styled.div`
    flex: 1;

    border-radius: 0.65rem;
    overflow: hidden;
`;

const YeetableContainer = styled(Container)`
    height: 100%;
`;

const YeetableSection = styled(Section)`
    background-color: #1d1d1f;
`;

const YeetableBar = styled(Bar)`
    background-color: #131315;
    cursor: col-resize;
`;

const TablesView = () => {
    const [thirdSize, setThirdSize] = useState(300);
    const [tableRef, setTableRef] = useState(null);

    useEffect(() => {
        if (typeof tableRef !== 'undefined' && tableRef != null) {
            setThirdSize(tableRef.offsetWidth / 3);
        }
    }, [tableRef]);

    return (
        <TablesContainer>
            <YeetableContainer ref={setTableRef}>
                <YeetableSection defaultSize={thirdSize} minSize={250}>
                    <TablesPanel />
                </YeetableSection>
                <YeetableBar size={5} />
                <YeetableSection defaultSize={thirdSize} minSize={250}>
                    <EntriesPanel />
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
