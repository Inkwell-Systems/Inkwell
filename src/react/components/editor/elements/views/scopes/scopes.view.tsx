import React, {useEffect, useState} from 'react';
import {
    EditorElementContainer,
    EditorSectionContainer,
    EditorSectionTitle,
} from '../../utils.tsx';
import UseProjectProvider from '../../../../../hooks/project-provider/project-provider.hook.ts';
import {IScope} from '../../../../../../types/IScope.ts';
import ScopeCard from './scope-card.component.tsx';
import SectionHeaderMenu from '../section-header-flow.component.tsx';
import {PanelHeader} from '../tables/util.tsx';
import {CreateScope, DeleteScope} from '../../../../../../firebase';
import NumberInput from '../../../../inputs/input/number-input.component.tsx';
import ScopeEditor from './scope-editor.component.tsx';

const ScopesView = () => {
    const pCtx = UseProjectProvider();

    const [searchFilter, setSearchFilter] = useState('');
    const [levelFilter, setLevelFilter] = useState(null);
    const [shouldFilter, setShouldFilter] = useState(false);

    const [filteredScopes, setFilteredScopes] = useState<IScope[]>([]);
    const [selectedScopeId, setSelectedScopeId] = useState<number | null>(null);

    const [forceUpdate, setForceUpdate] = useState(0);

    const handleAddScope = async () => {
        if (!pCtx.value.cloud) {
            console.log('Creating local scope! TODO');
            // TODO(calco): local scope
            return;
        }

        await CreateScope(pCtx.value.projectId);
    };

    const handleDeleteScope = async () => {
        if (selectedScopeId == null) return;

        if (!pCtx.value.cloud) {
            console.log('Deleting local scope! TODO');
            // TODO(calco): local scope
            return;
        }

        await DeleteScope(pCtx.value.projectId, selectedScopeId);

        setSelectedScopeId(null);
    };

    useEffect(() => {
        if (pCtx.value?.scopes == null) return;

        const scopes = pCtx.value.scopes;

        const filteredScopes: IScope[] = Object.values(scopes).filter(
            (scope: IScope) => {
                return (
                    (!shouldFilter ||
                        scope.level === -1 ||
                        scope.level == levelFilter) &&
                    scope.key.toLowerCase().includes(searchFilter.toLowerCase())
                );
            },
        );

        const sortedScopes = filteredScopes.sort((a: IScope, b: IScope) => {
            if (a.level == b.level) {
                return a.key.localeCompare(b.key);
            }

            return a.level - b.level;
        });

        setFilteredScopes(sortedScopes);
        setForceUpdate(forceUpdate + 1);
    }, [levelFilter, searchFilter, pCtx.value]);

    return (
        <EditorElementContainer>
            <EditorSectionTitle>Scopes</EditorSectionTitle>
            <EditorSectionContainer>
                <PanelHeader>
                    <SectionHeaderMenu
                        label="Scopes"
                        value={searchFilter}
                        setValue={setSearchFilter}
                        handleAdd={handleAddScope}
                        handleDelete={handleDeleteScope}
                        secondInput={
                            <NumberInput
                                label={'Level'}
                                value={levelFilter}
                                innerStyles={{
                                    color: '#b4b4b4',
                                    backgroundColor: '#131315',
                                    padding: 0,
                                }}
                                labelStyles={{
                                    top: '0.2rem',
                                    left: '0rem',
                                    fontSize: '0.9rem',
                                    opacity: `${shouldFilter ? '0' : '100'}`,
                                }}
                                onChange={e => {
                                    const value = parseInt(e.target.value);

                                    if (value < 0) {
                                        return;
                                    }

                                    if (isNaN(value)) {
                                        setShouldFilter(false);
                                        setLevelFilter(null);
                                    } else {
                                        setLevelFilter(value);
                                        setShouldFilter(true);
                                    }
                                }}
                            />
                        }
                    />
                </PanelHeader>
                <div>
                    {filteredScopes.map((scope: IScope) => (
                        <ScopeCard
                            onClick={() => setSelectedScopeId(scope.id)}
                            selected={
                                selectedScopeId === null
                                    ? false
                                    : selectedScopeId === scope.id
                            }
                            scope={scope}
                            key={scope.id + forceUpdate}
                        />
                    ))}
                </div>
                <ScopeEditor
                    selectedScope={
                        selectedScopeId == null
                            ? null
                            : pCtx?.value.scopes[selectedScopeId]
                    }
                />
            </EditorSectionContainer>
        </EditorElementContainer>
    );
};

export default ScopesView;
