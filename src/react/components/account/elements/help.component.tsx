import React from 'react';
import {AccountElementContainer, AccountSettingsHeader} from './utils.tsx';
import TextInput from '../../inputs/input/text-input.component.tsx';
import styled from 'styled-components';

const Link = styled.a`
    color: #18a5ec;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Subtext = styled.p`
    font-size: 0.75rem;
    color: #a0a0a0;
    margin-top: 0.25rem;
`;

const Help = () => {
    return (
        <AccountElementContainer>
            <AccountSettingsHeader>Help</AccountSettingsHeader>

            <AccountElementContainer>
                <TextInput
                    label={'Support Email'}
                    value={'support@inkwell.systems'}
                    onChange={_ => {}}
                />

                <div>
                    <TextInput
                        label={'Documentation'}
                        value={'https://github.com/Inkwell-Systems/InkwellAPI'}
                        onChange={_ => {}}
                    />
                    <Subtext>
                        Or click{' '}
                        <Link href="https://github.com/Inkwell-Systems/InkwellAPI">
                            here
                        </Link>
                        .
                    </Subtext>
                </div>
            </AccountElementContainer>
        </AccountElementContainer>
    );
};

export default Help;
