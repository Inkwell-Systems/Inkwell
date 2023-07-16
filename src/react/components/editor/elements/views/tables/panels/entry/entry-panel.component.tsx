import {
    GetEntryType,
    IEvent,
    IFact,
    IRule,
} from '../../../../../../../../types';
import {PanelContentContainer, PanelHeader} from '../../util.tsx';
import UseProjectProvider from '../../../../../../../hooks/project-provider/project-provider.hook.ts';
import ITable from '../../../../../../../../types/ITable.ts';
import styled from 'styled-components';
import React, {ReactElement, useEffect, useState} from 'react';

import CopyIcon from './icons/copy.svg';
import {UpdateEntry} from '../../../../../../../../firebase';
import {
    DisabledInput,
    HorizontalBox,
    Input,
    Label,
    VerticalBox,
} from '../../../utils.tsx';

const CustomPanelHeader = styled(PanelHeader)`
    display: inline-table;
    padding: 0.4rem;

    div {
        width: 100%;
        height: 100%;

        padding: 0.5rem 1rem;

        border-radius: 0.5rem;

        display: flex;
        justify-content: space-between;

        background-color: #131315;
        color: #b4b4b4;
    }
`;

const EntryPanel = ({
    selectedTable,
    selectedEntry,
}: {
    selectedTable: ITable | null;
    selectedEntry: IFact | IEvent | IRule | null;
}) => {
    const pCtx = UseProjectProvider();

    const getEntryPath = () => {
        if (selectedEntry == null) return '';

        return `#${pCtx.value.projectName} > (${selectedTable.id})${
            selectedTable.key
        }/${GetEntryType(selectedEntry)}`;
    };

    const renderAppropriateComponent = () => {
        if (selectedEntry == null) return <div>Nothing selected</div>;

        const type = GetEntryType(selectedEntry);
        switch (type) {
            case 'facts':
                return (
                    <BaseEntryPanel
                        selectedTable={selectedTable}
                        selectedEntry={selectedEntry as IFact}
                    />
                );
            case 'events':
                return (
                    <BaseEntryPanel
                        selectedTable={selectedTable}
                        selectedEntry={selectedEntry as IEvent}
                    />
                );
            case 'rules':
                return (
                    <RulePanel
                        selectedTable={selectedTable}
                        selectedRule={selectedEntry as IRule}
                    />
                );
            default:
                return <div>HMMM</div>;
        }
    };

    return (
        <>
            <CustomPanelHeader>
                <div>
                    <p>{getEntryPath()}</p>
                    <p>{selectedEntry?.key}</p>
                </div>
            </CustomPanelHeader>
            <PanelContentContainer>
                {renderAppropriateComponent()}
            </PanelContentContainer>
        </>
    );
};

const BaseEntryPanel = ({
    selectedTable,
    selectedEntry,
    children,
}: {
    selectedTable: ITable;
    selectedEntry: IFact | IEvent | IRule;
    children?: ReactElement;
}) => {
    const pCtx = UseProjectProvider();

    const [key, setKey] = useState<string>('');
    const [value, setValue] = useState<number>(0);

    const [selfCaused, setSelfCaused] = useState<boolean>(false);

    useEffect(() => {
        if (selectedEntry === null) return;

        setValue(selectedEntry.value);
        setKey(selectedEntry.key);
    }, [selectedEntry]);

    const handleValueChange = e => {
        const newValue = parseInt(e.target.value);
        setValue(newValue);
        setSelfCaused(true);
    };

    const handleKeyChange = e => {
        const newKey = e.target.value;
        setKey(newKey);
        setSelfCaused(true);
    };

    const updateEntry = async () => {
        const entryType = GetEntryType(selectedEntry);

        if (!pCtx.value.cloud) {
            const newEntry = {
                ...selectedEntry,
                key,
                value,
            };

            pCtx.setValue({
                ...pCtx.value,
                tables: {
                    ...pCtx.value.tables,
                    [selectedTable.id]: {
                        ...selectedTable,
                        [entryType]: {
                            ...selectedTable[entryType],
                            [selectedEntry.id]: newEntry,
                        },
                    },
                },
                entryMap: {
                    ...pCtx.value.entryMap,
                    [selectedEntry.id]: key,
                },
            });

            console.log('Updating entry locally!');
            return;
        }

        await UpdateEntry(
            entryType,
            pCtx.value.projectId,
            selectedTable.id,
            selectedEntry.id,
            key,
            value,
        );
    };

    useEffect(() => {
        if (!selfCaused) return;

        setSelfCaused(false);
        updateEntry();
    }, [value, key]);

    return (
        <VerticalBox>
            <HorizontalBox>
                <Label>ID: </Label>
                <DisabledInput value={selectedEntry.id.toString()} />
            </HorizontalBox>
            <HorizontalBox>
                <Label>Key: </Label>
                <div
                    style={{
                        flex: 7,
                    }}
                >
                    <Input value={key} type="text" onChange={handleKeyChange} />
                </div>
            </HorizontalBox>
            <HorizontalBox>
                <Label>Value: </Label>
                <div
                    style={{
                        flex: 7,
                    }}
                >
                    <Input
                        value={value}
                        type="number"
                        onChange={handleValueChange}
                    />
                </div>
            </HorizontalBox>
            {children}
        </VerticalBox>
    );
};

const RulePanel = ({
    selectedTable,
    selectedRule,
}: {
    selectedTable: ITable;
    selectedRule: IRule;
}) => {
    return (
        <BaseEntryPanel
            selectedTable={selectedTable}
            selectedEntry={selectedRule}
        >
            <h1>RUUUUUULE</h1>
        </BaseEntryPanel>
    );
};

export default EntryPanel;
