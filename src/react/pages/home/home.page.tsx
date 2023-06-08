import HomepageCallToAction from '../../components/home-page/call-to-action/call-to-action.component.tsx';
import HomepageDocs from '../../components/home-page/documentation/documentation.component.tsx';
import HomepageHeader from '../../components/home-page/header/header.component.tsx';
import HomepageMotivation from '../../components/home-page/motivation/motivation.component.tsx';
import HomepageShowcase from '../../components/home-page/showcase/showcase.component.tsx';

const Home = () => {
    return (
        <div className="page-container">
            <HomepageHeader />
            <main>
                <HomepageMotivation />
                <HomepageShowcase />
                <HomepageDocs />
                <HomepageCallToAction />
            </main>
        </div>
    );
};

export default Home;
