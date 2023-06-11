import {Container} from './motivation.styles.tsx';
import useScrollProviderHook from '../../../hooks/scroll-provider/useScrollProvider.hook.ts';

const HomepageMotivation = () => {
    const scroll = useScrollProviderHook();

    return (
        <Container>
            <h1>Why Inkwell</h1>
            <h2>{scroll.value}</h2>
        </Container>
    );
};

export default HomepageMotivation;
