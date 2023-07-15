import React from 'react';
import SearchIcon from '../icons/search.svg';
import PlusIcon from '../icons/plus.svg';
import TextInput from '../../../../../inputs/input/text-input.component.tsx';
import styled from 'styled-components';

const FlowMenuContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: space-between;
    gap: 1rem;
`;

const FlowMenuButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 1rem;
        aspect-ratio: 1;
        cursor: pointer;

        user-select: none;
    }
`;

const FlowMenuImage = styled.img`
    aspect-ratio: 1;
    cursor: pointer;
    height: 1.5rem;
`;

const EntryFlowMenu = ({label, value, setValue, handleDelete, handleAdd}) => {
    return (
        <FlowMenuContainer>
            <div>
                <FlowMenuImage src={SearchIcon} alt="Search Icon" />
            </div>
            <div
                style={{
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextInput
                    label={label}
                    value={value}
                    innerStyles={{
                        color: '#b4b4b4',
                        padding: 0,
                    }}
                    labelStyles={{
                        top: '0.3rem',
                        left: '0rem',
                        fontSize: '0.9rem',
                        opacity: `${value.length > 0 ? '0' : '100'}`,
                    }}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <FlowMenuButtonContainer>
                <FlowMenuImage
                    src={PlusIcon}
                    alt="New table / entry"
                    onClick={handleAdd}
                />
                <FlowMenuImage
                    style={{
                        transform: 'rotate(45deg)',
                    }}
                    src={PlusIcon}
                    alt="Remove table / entry"
                    onClick={handleDelete}
                />
            </FlowMenuButtonContainer>
        </FlowMenuContainer>
    );
};

export default EntryFlowMenu;
