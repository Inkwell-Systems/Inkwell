import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
    const nav = useNavigate();

    const navigateToPreviousPage = () => {
        nav(-1);
    };

    return (
        <div>
            <h1>Wrong path! Page not found!</h1>
            <div>
                <button onClick={navigateToPreviousPage}>Go back</button>
                <button onClick={() => nav('/')}>Go to home page</button>
            </div>
        </div>
    );
};

export default PageNotFound;
