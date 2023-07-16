import {IScope} from '../../../../../../types/IScope.ts';
import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {
    DisabledInput,
    HorizontalBox,
    Input,
    Label,
    VerticalBox,
} from '../utils.tsx';
import UseProjectProvider from '../../../../../hooks/project-provider/project-provider.hook.ts';
import {UpdateScope} from '../../../../../../firebase';

const ScopeEditorContainer = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
`;

const ScopeEditorHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 2;

        h1 {
            font-size: 1rem;
            font-weight: 500;
            color: #b4b4b4;
        }
    }
`;

const ScopeEditorSeparator = styled.hr`
    margin: 0.5rem 0;
    border: none;
    border-bottom: 5px solid #141419;
    flex: 1;
`;

const ScopeEditorContentContainer = styled.div`
    flex: 1;
`;

const ScopeEditor = ({selectedScope}: {selectedScope: IScope}) => {
    const pCtx = UseProjectProvider();

    const [key, setKey] = useState<string>('');
    const [level, setLevel] = useState<number>(0);

    const [selfCaused, setSelfCaused] = useState<boolean>(false);

    const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKey(e.target.value);
        setSelfCaused(true);
    };

    const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);

        if (value < 0) {
            console.log("Level can't be negative.");
            return;
        }

        if (isNaN(value)) {
            console.log('Level must be a number.');
            return;
        }

        setLevel(value);
        setSelfCaused(true);
    };

    const updateScope = async () => {
        if (!pCtx.value.cloud) {
            console.log('Editing local scope.');
            // TODO(calco): Local scope
            return;
        }

        await UpdateScope(pCtx.value.projectId, selectedScope.id, level, key);
    };

    useEffect(() => {
        if (selectedScope === null || selectedScope === undefined) {
            return;
        }

        setKey(selectedScope.key);
        setLevel(selectedScope.level);
    }, [selectedScope]);

    useEffect(() => {
        if (!selfCaused) return;

        setSelfCaused(false);
        updateScope();
    }, [key, level]);

    return (
        <ScopeEditorContainer>
            <ScopeEditorHeader>
                <ScopeEditorSeparator />
                <div>
                    <h1>SCOPE EDITOR</h1>
                </div>
                <ScopeEditorSeparator />
            </ScopeEditorHeader>
            <ScopeEditorContentContainer>
                {selectedScope === null ? (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <p>Please select a scope.</p>
                    </div>
                ) : (
                    <VerticalBox>
                        <HorizontalBox>
                            <Label>ID: </Label>
                            <DisabledInput
                                value={selectedScope?.id.toString() || -69}
                            />
                        </HorizontalBox>
                        <HorizontalBox>
                            <Label>Key: </Label>
                            <div
                                style={{
                                    flex: 7,
                                }}
                            >
                                <Input value={key} onChange={handleKeyChange} />
                            </div>
                        </HorizontalBox>
                        <HorizontalBox>
                            <Label>Level: </Label>
                            <div
                                style={{
                                    flex: 7,
                                }}
                            >
                                <Input
                                    value={level.toString()}
                                    type="number"
                                    onChange={handleLevelChange}
                                />
                            </div>
                        </HorizontalBox>
                    </VerticalBox>
                )}
            </ScopeEditorContentContainer>
        </ScopeEditorContainer>
    );
};

export default ScopeEditor;
