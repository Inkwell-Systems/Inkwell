import {IFetchedUser} from '../../../../../../types';
import styled from 'styled-components';
import UseProjectProvider from '../../../../../hooks/project-provider/project-provider.hook.ts';
import {useEffect, useState} from 'react';
import UseUserProvider from '../../../../../hooks/user-provider/userProvider.hook.ts';

const CardContainer = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: #131315;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
`;

const OwnerCardContainer = styled(CardContainer)``;

const LeftSideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 3rem;
        height: 3rem;
        aspect-ratio: 1/1;
        border-radius: 0.3rem;

        margin-right: 1rem;
    }

    flex: 1;
`;

const LeftSideUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #b4b4b4;
    }

    p {
        font-size: 0.9rem;
        font-weight: 300;
        color: #616161;
    }
`;

const LeftSide = (user: IFetchedUser) => {
    return (
        <LeftSideContainer>
            <img
                src={user.profilePicture}
                alt={`${user.name}s profile picture.`}
            />
            <LeftSideUserContainer>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </LeftSideUserContainer>
        </LeftSideContainer>
    );
};

const OwnerRightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;

const RoleDropdownContainer = styled.div`
    width: 10rem;
    height: 2rem;
    background-color: #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    position: relative;

    label {
        position: absolute;
    }
`;

const RoleDropdownSelect = styled.select`
    width: 100%;
    height: 100%;
    background-color: #2c2c2e;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
    }
`;

const RoleDropdownOption = styled.option`
    width: 100%;
    height: 100%;
    background-color: #2c2c2e;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const RoleDropdown = ({onChange, defaultRole, disabled}) => {
    const [role, setRole] = useState(defaultRole);

    const handleRoleChange = e => {
        setRole(e.target.value);
        onChange(e.target.value);

        console.log(e.target.value);
    };

    return (
        <RoleDropdownContainer>
            <label>{role}</label>
            <RoleDropdownSelect
                disabled={disabled}
                value={role}
                onChange={handleRoleChange}
            >
                <RoleDropdownOption value="owner">Owner</RoleDropdownOption>
                <RoleDropdownOption value="member">Member</RoleDropdownOption>
            </RoleDropdownSelect>
        </RoleDropdownContainer>
    );
};

const KickUserButton = styled.svg`
    cursor: pointer;
    fill: #b4b4b4;

    transition: all 0.2s ease-in-out;

    &:hover {
        scale: 1.5;
        fill: #e02c2a;
    }

    &:active {
        scale: 0.8;
    }
`;

const UserCard = (user: IFetchedUser) => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();

    const handleKickUser = async () => {
        console.log('Kicking user: ' + user.id);
    };

    const handleChangeUserRole = async role => {
        console.log('Changing user role: ' + user.id + ' to ' + role);
    };

    return (
        <>
            {pCtx.value.owner === user.id ? (
                <OwnerCardContainer>
                    <LeftSide
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        profilePicture={user.profilePicture}
                    />
                    <OwnerRightSide>
                        <p>--/--/----</p>
                    </OwnerRightSide>
                </OwnerCardContainer>
            ) : (
                <CardContainer>
                    <LeftSide
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        profilePicture={user.profilePicture}
                    />
                    <RightSide>
                        <p>--/--/----</p>
                        <RoleDropdown
                            disabled={uCtx.value.id !== pCtx.value.owner}
                            defaultRole="member"
                            onChange={handleChangeUserRole}
                        />
                        <KickUserButton
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleKickUser}
                        >
                            <path
                                d="M5.57999 5.58021C5.79092 5.36953 6.07686 5.2512 6.37499 5.2512C6.67311 5.2512 6.95905 5.36953 7.16999 5.58021L12 10.4102L16.83 5.58021C16.9675 5.43212 17.1424 5.32387 17.3363 5.26684C17.5301 5.20982 17.7358 5.20615 17.9316 5.25621C18.1274 5.30627 18.306 5.40821 18.4487 5.55129C18.5915 5.69437 18.6929 5.87329 18.7425 6.06921C18.7926 6.26477 18.7891 6.47023 18.7324 6.66398C18.6756 6.85772 18.5677 7.0326 18.42 7.17021L13.59 12.0002L18.42 16.8302C18.5681 16.9677 18.6763 17.1426 18.7333 17.3365C18.7904 17.5304 18.794 17.736 18.744 17.9318C18.6939 18.1276 18.592 18.3063 18.4489 18.449C18.3058 18.5917 18.1269 18.6932 17.931 18.7427C17.7354 18.7928 17.53 18.7893 17.3362 18.7326C17.1425 18.6758 16.9676 18.5679 16.83 18.4202L12 13.5902L7.16999 18.4202C6.95659 18.6188 6.67452 18.727 6.38304 18.7219C6.09157 18.7169 5.81339 18.5991 5.60699 18.3932C5.40112 18.1868 5.28329 17.9086 5.27825 17.6172C5.27322 17.3257 5.38137 17.0436 5.57999 16.8302L10.41 12.0002L5.57999 7.17021C5.36931 6.95927 5.25098 6.67334 5.25098 6.37521C5.25098 6.07708 5.36931 5.79115 5.57999 5.58021Z"
                                // fill={hovered ? '#E02C2A' : '#B4B4B4'}
                            />
                        </KickUserButton>
                    </RightSide>
                </CardContainer>
            )}
        </>
    );
};

export default UserCard;
