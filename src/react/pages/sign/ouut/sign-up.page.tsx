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
import {SignUpWithPassword} from '../../../../firebase/auth/password.auth.ts';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import {ErrorMessage} from '../../../../styles/utils.styles.tsx';
import {SignWithGoogle} from '../../../../firebase/auth/google.auth.ts';

const SignUp = () => {
    const uCtx = UseUserProvider();
    const nav = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const handleSignIn = () => {
        nav('/sign/in');
    };

    const handleSignUp = async () => {
        setEmail('');
        setPassword('');

        const result = await SignUpWithPassword(email, password);
        setError(result.error);

        if (result.data) {
            uCtx.setValue(result.data);
            nav('/projects');
        }
    };

    const handleGoogleSingUp = async () => {
        const result = await SignWithGoogle();
        setError(result.error);

        if (result.data) {
            uCtx.setValue(result.data);
            nav('/projects');
        }
    };

    return (
        <SignContainer>
            <Navigation />

            <PageForm
                addonOnClick={{}}
                outerStyles={{}}
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
                    type="password"
                    value={password}
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <TextInput
                    type="password"
                    value={passwordConfirm}
                    label="Confirm Password"
                    onChange={e => setPasswordConfirm(e.target.value)}
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

                <GoogleButton onClick={handleGoogleSingUp} src={GoogleIcon} />
                <p>
                    Already have an account?{' '}
                    <SignUpStyles onClick={handleSignIn}>SIGN IN</SignUpStyles>
                </p>
            </PageForm>
        </SignContainer>
    );
};

export default SignUp;
