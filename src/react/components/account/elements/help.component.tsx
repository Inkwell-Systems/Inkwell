import React from 'react';
import {
    AccountButtonSubtext,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import TextInput from '../../inputs/input/text-input.component.tsx';
import styled from 'styled-components';

const Link = styled.a`
    color: #18a5ec;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
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
                    <AccountButtonSubtext>
                        Or click{' '}
                        <Link href="https://github.com/Inkwell-Systems/InkwellAPI">
                            here
                        </Link>
                        .
                    </AccountButtonSubtext>
                </div>
            </AccountElementContainer>
        </AccountElementContainer>
    );
};

export default Help;
