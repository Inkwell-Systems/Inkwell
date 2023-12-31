import {HomeLandingLibrary} from '../../../../assets/assets.ts';
import {
    ButtonContainer,
    Container,
    Header,
    LandingImage,
    SubHeader,
} from './header.styles.tsx';
import {Button} from '../../inputs/button/button.component.tsx';
import {useNavigate} from 'react-router-dom';

const HomepageHeader = () => {
    const nav = useNavigate();

    const openInNewTab = url => {
        window.open(url, '_blank', 'noreferrer');
    };

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
                    onClick={() => nav('/sign/in')}
                >
                    Get Started
                </Button>
                <Button
                    config={{style: 'secondary', inverted: true}}
                    style={{marginRight: '2.5em'}}
                    onClick={() =>
                        openInNewTab(
                            'https://github.com/Inkwell-Systems/Inkwell',
                        )
                    }
                >
                    Contribute
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default HomepageHeader;
