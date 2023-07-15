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
import {ReactElement, useEffect, useState} from 'react';

import CopyIcon from './icons/copy.svg';

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

        return `#${pCtx.value.projectName} > ${
            selectedTable.key
        }/${GetEntryType(selectedEntry)}`;
    };

    const renderAppropriateComponent = () => {
        if (selectedEntry == null) return <div>Nothing selected</div>;

        const type = GetEntryType(selectedEntry);
        switch (type) {
            case 'facts':
                return (
                    <BaseEntryPanel selectedEntry={selectedEntry as IFact} />
                );
            case 'events':
                return (
                    <BaseEntryPanel selectedEntry={selectedEntry as IEvent} />
                );
            case 'rules':
                return <RulePanel selectedRule={selectedEntry as IRule} />;
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

const VerticalBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const HorizontalBox = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    align-items: center;

    margin: 0.5rem 0;
`;

const Label = styled.span`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 300;
    color: #b4b4b4;

    flex: 3;
`;

const Input = styled.input`
    width: 100%;
    height: 2rem;

    flex: 7;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`;

const DisabledInputContainer = styled.div`
    flex: 7;
    position: relative;
`;

const DisabledInputCopyIcon = styled.img`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        filter: brightness(2);
        scale: 1.1;
    }

    &:active {
        filter: invert(75%) sepia(100%) saturate(100%) hue-rotate(100deg)
            brightness(4);

        scale: 0.9;
    }
`;

const DisabledInput = ({value}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <DisabledInputContainer>
            <Input disabled={true} value={value} />
            <DisabledInputCopyIcon
                onClick={copyToClipboard}
                src={CopyIcon}
                alt={'Copy'}
            />
        </DisabledInputContainer>
    );
};

const BaseEntryPanel = ({
    selectedEntry,
    children,
}: {
    selectedEntry: IFact | IEvent | IRule;
    children?: ReactElement;
}) => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        if (selectedEntry === null) return;

        setValue(selectedEntry.value);
    }, [selectedEntry]);

    const handleValueChange = e => {
        setValue(e.target.value);
    };

    return (
        <VerticalBox>
            <HorizontalBox>
                <Label>ID: </Label>
                <DisabledInput value={selectedEntry.id.toString()} />
            </HorizontalBox>
            <HorizontalBox>
                <Label>Key: </Label>
                <DisabledInput value={selectedEntry.key} />
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

const RulePanel = ({selectedRule}: {selectedRule: IRule}) => {
    return (
        <BaseEntryPanel selectedEntry={selectedRule}>
            <h1>RUUUUUULE</h1>
        </BaseEntryPanel>
    );
};

export default EntryPanel;
