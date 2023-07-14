import styled from 'styled-components';

const OverviewCardContainer = styled.div<{bg: string}>`
    background: ${props => props.bg};

    width: 100%;
    aspect-ratio: 16/9;
    max-height: 10rem;

    border-radius: 1rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: end;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #3e3e3e;
        scale: 1.05;
    }

    &:active {
        scale: 0.95;
    }
`;

const OverviewCardTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: normal;
    margin: 0;
    color: #e3e3e3;
`;

const OverviewCardDescription = styled.p`
    font-size: 1rem;
    font-weight: lighter;
    color: #b4b4b4;
`;

const OverviewCard = ({title, description, background}) => {
    return (
        <OverviewCardContainer bg={background}>
            <OverviewCardTitle>{title}</OverviewCardTitle>
            <OverviewCardDescription>{description}</OverviewCardDescription>
        </OverviewCardContainer>
    );
};

export default OverviewCard;
