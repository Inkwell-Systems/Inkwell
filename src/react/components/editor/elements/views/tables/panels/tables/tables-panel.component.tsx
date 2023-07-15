import React, {useEffect, useState} from 'react';
import {PanelContentContainer, PanelHeader} from '../util.tsx';
import EntryFlowMenu from '../entry-flow-menu.component.tsx';
import ITable, {
    CreateProjectTable,
} from '../../../../../../../../types/ITable.ts';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import {CreateTable} from '../../../../../../../../firebase';
import TableCard from './table-card.component.tsx';

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
        if (!pCtx.value.cloud) {
            const table = CreateProjectTable('New Table', pCtx.value);
            pCtx.setValue({
                ...pCtx.value,
                entryMap: {...pCtx.value.entryMap, [table.id]: table},
            });

            console.log('Created a local table.');
            return;
        }

        const res = await CreateTable('New Table', pCtx.value.projectId);
        if (res.error) {
            console.log(
                `Error creating cloud table. (tables-panel.component.tsx)`,
            );
            console.error(res.error);
            return;
        }
    };

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
            <PanelContentContainer>
                {pCtx.value.tables.map((table: ITable, index) => (
                    <TableCard
                        table={table}
                        onClick={() => {
                            setSelectedTable(index);
                        }}
                        selected={index === selectedTable}
                        key={index}
                    />
                ))}
            </PanelContentContainer>
        </>
    );
};

export default TablesPanel;
