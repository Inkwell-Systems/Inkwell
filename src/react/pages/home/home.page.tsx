import HomepageHeader from '../../components/home-page/header/header.component.tsx';
import Navigation from '../../components/navigation/navigation.component.tsx';

const Home = () => {
    return (
        <div className="page-container">
            <Navigation />

            <HomepageHeader />
            {/*<main>*/}
            {/*    <HomepageMotivation />*/}
            {/*    <HomepageShowcase />*/}
            {/*    <HomepageDocs />*/}
            {/*    <HomepageCallToAction />*/}
            {/*</main>*/}
        </div>
    );
};

export default Home;
