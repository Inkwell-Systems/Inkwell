import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import UseProjectProvider from '../../../../hooks/project-provider/project-provider.hook.ts';
import {
    GetFormattedProjectDate,
    GetProjectEntryCount,
    GetProjectMemberCount,
    GetProjectScopeCount,
    GetProjectScopeLevel,
    GetProjectTableCount,
} from '../../../../../types';
import OverviewCard from './overview-card.component.tsx';
import {set} from 'firebase/database';

const OverviewContainer = styled.div`
    width: 100%;
    padding: 2rem;

    overflow: hidden;
    overflow-y: scroll;
`;

const OverviewBanner = styled.img`
    width: 100%;
    aspect-ratio: 16/5;
    max-height: 20rem;
    object-fit: cover;

    border-radius: 1rem;
    margin-bottom: 2rem;
`;

const OverviewDescription = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #b4b4b4;
    margin-bottom: 2rem;

    &:last-child {
        margin-left: auto;
    }
`;

const NSplitDiv = styled.div<{n: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.n}, 1fr);
    grid-gap: 2rem;
    margin-bottom: 2rem;
`;

const SideSeparator = styled.hr<{w?: string}>`
    border: 2px solid #48484a;
    margin-bottom: 1rem;
    border-radius: 1rem;
    width: ${props => props?.w ?? '25%'};

    &:last-child {
        margin-left: auto;
    }
`;

const OverviewView = () => {
    const pCtx = UseProjectProvider();
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(pCtx.value !== null);
    }, [pCtx.value]);

    const middleStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return render ? (
        <OverviewContainer>
            <OverviewBanner
                src={pCtx.value.projectBanner}
                alt="Project banner."
            />

            <NSplitDiv n={2}>
                <OverviewDescription style={{width: '50%'}}>
                    {pCtx.value.projectDescription}
                </OverviewDescription>

                <OverviewDescription>
                    {GetFormattedProjectDate(
                        new Date(pCtx.value.projectCreatedAt),
                    )}
                </OverviewDescription>
            </NSplitDiv>

            <NSplitDiv n={3}>
                <SideSeparator w="50%" />

                <p
                    style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#b4b4b4',
                        ...middleStyle,
                    }}
                >
                    Stats
                </p>

                <SideSeparator w="50%" />
            </NSplitDiv>

            <NSplitDiv n={3}>
                <OverviewCard
                    title="Entries"
                    description={`You've created ${GetProjectEntryCount(
                        pCtx.value,
                    )} entries! Woah!`}
                    background="#1D1D1F"
                />

                <OverviewCard
                    title="Tables"
                    description={`You've created ${GetProjectTableCount(
                        pCtx.value,
                    )} tables! Insane!`}
                    background="#1D1D1F"
                />

                <OverviewCard
                    title="Scopes 1"
                    description={`You've created ${GetProjectScopeCount(
                        pCtx.value,
                    )} scopes! Crazy!`}
                    background="#1D1D1F"
                />
            </NSplitDiv>

            <NSplitDiv n={2}>
                <OverviewCard
                    title="Scopes 2"
                    description={`You've gone over ${GetProjectScopeLevel(
                        pCtx.value,
                    )} levels deep! Insanity!`}
                    background="#1D1D1F"
                />

                <OverviewCard
                    title="Members"
                    description={`You've invited ${GetProjectMemberCount(
                        pCtx.value,
                    )} members! Wow!`}
                    background="#1D1D1F"
                />
            </NSplitDiv>
        </OverviewContainer>
    ) : (
        <h1>No</h1>
    );
};

export default OverviewView;
