import {HomeLandingLibrary} from '../../../../assets/assets.ts';
import {
    ButtonContainer,
    HeaderContainer,
    HeaderLandingImage,
} from './header.styles.tsx';
import {Button} from '../../inputs/button/button.component.tsx';

const HomepageHeader = () => {
    return (
        <HeaderContainer>
            <HeaderLandingImage
                src={HomeLandingLibrary}
                alt={'Landing image.'}
            />

            <div>
                <h1 style={{marginBottom: '0.25em'}}>Inkwell</h1>
                <p>
                    Shape up{' '}
                    <span style={{color: 'var(--ink-blue-main)'}}>
                        intricate stories
                    </span>{' '}
                    with a simple and
                    <br />
                    <span style={{color: 'var(--ink-turquoise-green-main)'}}>
                        flexible system
                    </span>
                    .
                </p>
            </div>

            <ButtonContainer>
                <Button
                    config={{style: 'primary', color: 'filled'}}
                    style={{marginRight: '2.5em'}}
                >
                    Get Started
                </Button>
                <Button
                    config={{style: 'secondary', color: 'outlined'}}
                    style={{marginRight: '2.5em'}}
                >
                    Contribute
                </Button>
            </ButtonContainer>
        </HeaderContainer>
    );
};

export default HomepageHeader;
