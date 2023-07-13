import Navigation from '../../../components/navigation/navigation.component.tsx';
import PageForm from '../../../components/misc/page-form.component.tsx';
import Input from '../../../components/inputs/input/input.component.tsx';
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

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    const handleSignIn = () => {
        console.log('Sign in');
    };

    const handleSignUp = () => {
        console.log('Sign up');
        nav('/sign/up');
    };

    return (
        <SignContainer>
            <Navigation />

            <PageForm
                addon={null}
                styles={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    alignItems: 'center',
                }}
                title="SIGN IN"
            >
                <Input
                    value={email}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    value={password}
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                />

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
