import {INavElement} from '../../pages/account/account.page.tsx';
import styled from 'styled-components';

const Container = styled.div<{selected: boolean}>`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;

    padding: 2rem 1rem;

    cursor: pointer;
    user-select: none;

    &:last-child {
        margin-top: auto;
    }

    background-color: ${p => (p.selected ? '#1d1d1f' : '#3e3e3e')};
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #1d1d1f;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    h1 {
        font-size: 1rem;
        font-weight: 400;
        color: #e3e3e3;

        margin: 0 0 0 1rem;
    }
`;

const AccountNavElement = ({
    props,
    onClick,
    selected,
}: {
    props: INavElement;
    onClick: () => void;
    selected: boolean;
}) => {
    return (
        <Container onClick={onClick} selected={selected}>
            <img src={props.icon} alt={props.title} />
            <h1>{props.title}</h1>
        </Container>
    );
};

export default AccountNavElement;
