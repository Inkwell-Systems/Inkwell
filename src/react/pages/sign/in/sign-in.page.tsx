import Navigation from '../../../components/navigation/navigation.component.tsx';
import PageForm from '../../../components/misc/page-form.component.tsx';
import TextInput from '../../../components/inputs/input/text-input.component.tsx';
import React, {useState} from 'react';
import {Button} from '../../../components/inputs/button/button.component.tsx';

import Separator from './separator.svg';
import GoogleIcon from './google.svg';

import {useNavigate} from 'react-router-dom';
import {
    GoogleButton,
    SignContainer,
    SignUpStyles,
} from '../../../components/sign/sign.styles.tsx';
import {SignInWithPassword} from '../../../../firebase/auth/password-auth.ts';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import {ConvertToUser} from '../../../../types';
import {ErrorMessage} from '../../../../styles/utils.styles.tsx';

const SignIn = () => {
    const uCtx = UseUserProvider();
    const nav = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const handleSignIn = async () => {
        setEmail('');
        setPassword('');

        const result = await SignInWithPassword(email, password);
        setError(result.error);

        if (result.data) {
            const user = ConvertToUser(result.data);
            uCtx.setValue(user);

            nav('/projects');
        }
    };

    const handleSignUp = () => {
        nav('/sign/up');
    };

    return (
        <SignContainer>
            <Navigation />

            <PageForm
                outerStyles={{}}
                addonOnClick={{}}
                addon={null}
                styles={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    alignItems: 'center',
                }}
                title="SIGN IN"
            >
                <TextInput
                    value={email}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <TextInput
                    value={password}
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <ErrorMessage style={{color: 'red'}}>
                    {error?.message}
                </ErrorMessage>

                <Button
                    style={{
                        color: '#1D1D1F',
                        margin: 'auto',
                        width: '50%',
                    }}
                    config={{
                        style: 'secondary',
                        inverted: false,
                    }}
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>

                <img
                    src={Separator}
                    style={{
                        width: '100%',
                    }}
                    alt={'Sign up with google'}
                    onClick={handleSignUp}
                />

                <GoogleButton src={GoogleIcon} />
                <p>
                    Need an account?{' '}
                    <SignUpStyles onClick={handleSignUp}>SIGN UP</SignUpStyles>
                </p>
            </PageForm>
        </SignContainer>
    );
};

export default SignIn;
