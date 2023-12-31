import React, {ReactElement} from 'react';
import SearchIcon from './tables/icons/search.svg';
import PlusIcon from './tables/icons/plus.svg';
import TextInput from '../../../inputs/input/text-input.component.tsx';
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

const SectionHeaderMenu = ({
    label,
    value,
    setValue,
    handleDelete,
    handleAdd,
    setAddEntryRef,
    secondInput,
}: {
    label: string;
    value: string;
    setValue: (string) => void;
    handleDelete: () => void;
    handleAdd: () => void;
    setAddEntryRef?: (any) => void;
    secondInput?: ReactElement;
}) => {
    return (
        <FlowMenuContainer>
            <div>
                <FlowMenuImage src={SearchIcon} alt="Search Icon" />
            </div>
            <div
                style={{
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <TextInput
                        label={label}
                        value={value}
                        innerStyles={{
                            color: '#b4b4b4',
                            backgroundColor: '#131315',
                            padding: 0,
                        }}
                        labelStyles={{
                            top: '0.2rem',
                            left: '0rem',
                            fontSize: '0.9rem',
                            opacity: `${value.length > 0 ? '0' : '100'}`,
                        }}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>

                {secondInput !== null && (
                    <div
                        style={{
                            flex: 1,
                        }}
                    >
                        {secondInput}
                    </div>
                )}
            </div>
            <FlowMenuButtonContainer>
                <FlowMenuImage
                    ref={setAddEntryRef ? setAddEntryRef : null}
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

export default SectionHeaderMenu;
