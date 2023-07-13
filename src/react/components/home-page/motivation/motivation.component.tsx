import {Container, ScrollHeader} from './motivation.styles.tsx';
import useScrollProviderHook from '../../../hooks/scroll-provider/useScrollProvider.hook.ts';

const HomepageMotivation = () => {
    const scroll = useScrollProviderHook();

    return (
        <>
            <Container>
                <ScrollHeader scroll={scroll.value}>Why Inkwell</ScrollHeader>
                <h2>{scroll.value}</h2>
                <h2>{window.innerHeight}</h2>
                <h2>{scroll.value - window.innerHeight}</h2>
            </Container>

            <Container>
                <ScrollHeader scroll={scroll.value}>Why Inkwell</ScrollHeader>
                <h2>{scroll.value}</h2>
                <h2>{window.innerHeight}</h2>
                <h2>{scroll.value - window.innerHeight * 2}</h2>
            </Container>
        </>
    );
};

export default HomepageMotivation;
