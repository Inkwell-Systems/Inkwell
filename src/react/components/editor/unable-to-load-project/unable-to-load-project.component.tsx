const UnableToLoadProject = () => {
    return (
        <div>
            <h1>Unable to load project. Among possible causes:</h1>
            <ul>
                <li>Project does not exist</li>
                <li>Project is not public</li>
                <li>You do not have access to the project</li>
            </ul>
        </div>
    );
};

export default UnableToLoadProject;
