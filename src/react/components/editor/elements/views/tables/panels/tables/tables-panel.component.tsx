import React, {useEffect, useState} from 'react';
import {PanelContentContainer, PanelHeader} from '../../util.tsx';
import EntryFlowMenu from '../entry-flow-menu.component.tsx';
import ITable, {
    CreateProjectTable,
} from '../../../../../../../../types/ITable.ts';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import {
    CreateTable,
    DeleteTable,
    UpdateTableKey,
} from '../../../../../../../../firebase';
import EntryCard from '../entry-card.component.tsx';

const TablesPanel = ({setBigSelectedTable}) => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [filteredTables, setFilteredTables] = useState<ITable[]>([]);

    const [selectedTable, setSelectedTable] = useState(0);

    useEffect(() => {
        const t = Object.values(pCtx.value.tables).filter(table =>
            table.key.toLowerCase().includes(searchFilter.toLowerCase()),
        );
        setFilteredTables(t);
    }, [searchFilter, pCtx.value]);

    useEffect(() => {
        // Check if current selected table was just deleted
        if (selectedTable === -1 || !pCtx.value.tables[selectedTable]) {
            console.log('Deselecting table.');
            setSelectedTable(-1);
            setBigSelectedTable(null);
        }

        setBigSelectedTable(pCtx.value.tables[selectedTable]);
    }, [selectedTable, pCtx.value]);

    const handleDeleteTable = async () => {
        await DeleteTable(pCtx.value.projectId, selectedTable);
    };

    const handleAddTable = async () => {
        // TODO(calco): Check local table adding.
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

    const handleRenameTable = async (newKey, table) => {
        await UpdateTableKey(newKey, pCtx.value.projectId, table.id);
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
                    <EntryCard
                        onFinishEditing={key => handleRenameTable(key, table)}
                        defaultKey={table.key}
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
