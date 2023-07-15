import React, {useState} from 'react';
import {PanelHeader} from './util.tsx';
import EntryFlowMenu from './entry-flow-menu.component.tsx';

const EntriesPanel = () => {
    const [searchFilter, setSearchFilter] = useState('');

    const handleDeleteEntry = async () => {
        console.log('Delete entry');
    };

    const handleAddEntry = async () => {
        console.log('Add entry');
    };

    return (
        <>
            <PanelHeader>
                <EntryFlowMenu
                    label="Entries"
                    value={searchFilter}
                    setValue={setSearchFilter}
                    handleDelete={handleDeleteEntry}
                    handleAdd={handleAddEntry}
                />
            </PanelHeader>
        </>
    );
};

export default EntriesPanel;
