import styled from 'styled-components';

const CreateProjectCardContainer = styled.div`
    width: 100%;
    display: flex;
    border-radius: 0.5rem;

    padding: 1rem;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #1d1d1f;
    }

    h1 {
        font-size: 1.3rem;
        font-weight: normal;
        margin: 0;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
    }
`;

const CreateProjectCardLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    font-size: 2rem;
`;

const CreateProjectCard = ({title, description, onClick}) => {
    return (
        <CreateProjectCardContainer onClick={onClick}>
            <CreateProjectCardLeft>+</CreateProjectCardLeft>

            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </CreateProjectCardContainer>
    );
};

export default CreateProjectCard;
