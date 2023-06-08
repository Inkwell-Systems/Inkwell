import {HomeLandingLibrary} from '../../../../assets/assets.ts';
import {
    ButtonContainer,
    Container,
    Header,
    LandingImage,
    SubHeader,
} from './header.styles.tsx';
import {Button} from '../../inputs/button/button.component.tsx';

const HomepageHeader = () => {
    return (
        <Container>
            <LandingImage src={HomeLandingLibrary} alt={'Landing image.'} />

            <div>
                <Header>Inkwell</Header>
                <SubHeader>
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
                </SubHeader>
            </div>

            <ButtonContainer>
                <Button
                    config={{style: 'primary', inverted: false}}
                    style={{marginRight: '2.5em'}}
                >
                    Get Started
                </Button>
                <Button
                    config={{style: 'secondary', inverted: true}}
                    style={{marginRight: '2.5em'}}
                >
                    Contribute
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default HomepageHeader;
