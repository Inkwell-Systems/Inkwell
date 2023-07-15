import React, {useEffect, useState} from 'react';
import {PanelContentContainer, PanelHeader} from '../util.tsx';
import EntryFlowMenu from '../entry-flow-menu.component.tsx';
import ITable, {
    CreateProjectTable,
} from '../../../../../../../../types/ITable.ts';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import {CreateTable, DeleteTable} from '../../../../../../../../firebase';
import TableCard from './table-card.component.tsx';

const TablesPanel = () => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [filteredTables, setFilteredTables] = useState<ITable[]>([]);

    const [selectedTable, setSelectedTable] = useState(0);

    useEffect(() => {
        const t = pCtx.value.tables.filter(table =>
            table.key.toLowerCase().includes(searchFilter.toLowerCase()),
        );
        setFilteredTables(t);
    }, [searchFilter, pCtx.value]);

    const handleDeleteTable = async () => {
        await DeleteTable(pCtx.value.projectId, selectedTable);
    };

    const handleAddTable = async () => {
        if (!pCtx.value.cloud) {
            const table = CreateProjectTable('New Table', pCtx.value);
            pCtx.setValue({
                ...pCtx.value,
                entryMap: {...pCtx.value.entryMap, [table.id]: table.key},
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
                {filteredTables.map((table: ITable) => (
                    <TableCard
                        table={table}
                        onClick={() => {
                            setSelectedTable(table.id);
                        }}
                        selected={selectedTable === table.id}
                        key={table.id}
                    />
                ))}
            </PanelContentContainer>
        </>
    );
};

export default TablesPanel;
