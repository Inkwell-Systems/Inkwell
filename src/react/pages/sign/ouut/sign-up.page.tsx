import {
    GoogleButton,
    SignContainer,
    SignUpStyles,
} from '../../../components/sign/sign.styles.tsx';
import Navigation from '../../../components/navigation/navigation.component.tsx';
import React, {useState} from 'react';
import TextInput from '../../../components/inputs/input/text-input.component.tsx';
import {Button} from '../../../components/inputs/button/button.component.tsx';
import Separator from '../in/separator.svg';
import GoogleIcon from '../in/google.svg';
import PageForm from '../../../components/misc/page-form.component.tsx';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const nav = useNavigate();

    const handleSignIn = () => {
        console.log('Sign in');
        nav('/sign/in');
    };

    const handleSignUp = () => {
        console.log('Sign up');
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
                title="SIGN UP"
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

                <TextInput
                    value={passwordConfirm}
                    label="Confirm Password"
                    onChange={e => setPasswordConfirm(e.target.value)}
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
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>

                <img
                    src={Separator}
                    style={{
                        width: '100%',
                    }}
                    alt={'Sign up with google'}
                />

                <GoogleButton src={GoogleIcon} />
                <p>
                    Already have an account?{' '}
                    <SignUpStyles onClick={handleSignUp}>SIGN UP</SignUpStyles>
                </p>
            </PageForm>
        </SignContainer>
    );
};

export default SignUp;
