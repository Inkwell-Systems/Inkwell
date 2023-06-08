import HomepageCallToAction from '../../components/home-page/call-to-action.component';
import HomepageDocs from '../../components/home-page/documentation.component';
import HomepageHeader from '../../components/home-page/header.component';
import HomepageReasons from '../../components/home-page/reasons.component';
import HomepageShowcase from '../../components/home-page/showcase.component';

const Home = () => {
    return (
        <div className="page-container">
            <HomepageHeader />
            <main>
                <HomepageReasons />
                <HomepageShowcase />
                <HomepageDocs />
                <HomepageCallToAction />
            </main>
        </div>
    );
};

export default Home;
