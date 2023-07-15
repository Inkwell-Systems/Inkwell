import React, {useEffect, useState} from 'react';
import {PanelContentContainer, PanelHeader} from './util.tsx';
import EntryFlowMenu from './entry-flow-menu.component.tsx';
import ITable from '../../../../../../../types/ITable.ts';
import UseProjectProvider from '../../../../../../hooks/project-provider/project-provider.hook.ts';

const TablesPanel = () => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [tables, setTables] = useState<ITable[]>([]);
    const [filteredTables, setFilteredTables] = useState<ITable[]>([]);

    const [selectedTable, setSelectedTable] = useState(0);

    const handleDeleteTable = async () => {
        console.log('Delete table');
    };

    const handleAddTable = async () => {
        console.log('Add table');
    };

    useEffect(() => {
        console.log(pCtx.value);
    }, []);

    return (
        <>
            <PanelHeader>
                <EntryFlowMenu
                    label="Tables"
                    value={searchFilter}
                    setValue={setSearchFilter}
                    handleDelete={handleDeleteTable}
                    handleAdd={handleAddTable}
                />
            </PanelHeader>
            <PanelContentContainer></PanelContentContainer>
        </>
    );
};

export default TablesPanel;
