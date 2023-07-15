import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';

const TableCardContainer = styled.div<{selected: boolean; indent: number}>`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    margin-left: ${p => p.indent * 0.5}rem;
    width: calc(100% - ${p => p.indent * 0.5}rem);

    border-radius: 0.5rem;
    background-color: ${p => (p.selected ? '#3d3d40' : '#1d1d1f')};
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: #3d3d40;
    }
`;

const TableCardName = styled.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 300;

    &:focus {
        outline: none;

        color: #e3e3e3;
    }
`;

const TableCardEditButton = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
`;

const EntryCard = ({
    defaultKey,
    onClick,
    selected,
    onFinishEditing,
    indentLevel,
}: {
    defaultKey: string;
    onClick: () => void;
    selected: boolean;
    onFinishEditing: (string) => void;
    indentLevel?: number;
}) => {
    const [key, setKey] = useState(defaultKey);
    const [editing, setEditing] = useState(false);

    const keyInputRef = useRef(null);

    const handleFinishEditing = async () => {
        setEditing(false);
        await onFinishEditing(key);
    };

    const handleKeyDown = async e => {
        if (e.key === 'Enter') await handleFinishEditing();
    };

    useEffect(() => {
        if (editing) {
            keyInputRef.current.focus();
        }
    }, [editing]);

    return (
        <TableCardContainer
            indent={indentLevel || 0}
            selected={selected}
            onClick={onClick}
        >
            <TableCardName
                ref={keyInputRef}
                disabled={!editing}
                value={key}
                onChange={e => setKey(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            {editing ? (
                <TableCardEditButton
                    onClick={handleFinishEditing}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.7801 4.22007C13.9205 4.3607 13.9994 4.55132 13.9994 4.75007C13.9994 4.94882 13.9205 5.13945 13.7801 5.28007L6.53007 12.5301C6.38944 12.6705 6.19882 12.7494 6.00007 12.7494C5.80132 12.7494 5.61069 12.6705 5.47007 12.5301L2.22007 9.28007C2.08766 9.13781 2.01555 8.94976 2.01891 8.75544C2.02227 8.56113 2.10082 8.37568 2.23807 8.23807C2.37567 8.10083 2.56112 8.02227 2.75544 8.01892C2.94975 8.01556 3.1378 8.08766 3.28007 8.22007L6.00007 10.9401L12.7201 4.22007C12.8607 4.07962 13.0513 4.00073 13.2501 4.00073C13.4488 4.00073 13.6394 4.07962 13.7801 4.22007Z"
                        fill="#E3E3E3"
                    />
                </TableCardEditButton>
            ) : (
                <TableCardEditButton
                    onClick={() => setEditing(true)}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.0131 1.42692C11.3412 1.099 11.7862 0.914795 12.2501 0.914795C12.714 0.914795 13.1589 1.099 13.4871 1.42692L14.5731 2.51292C14.901 2.84107 15.0852 3.28601 15.0852 3.74992C15.0852 4.21384 14.901 4.65877 14.5731 4.98692L5.9631 13.5969C5.7531 13.8069 5.4931 13.9609 5.2071 14.0419L1.9561 14.9719C1.82742 15.0087 1.69124 15.0104 1.5617 14.9768C1.43216 14.9432 1.31396 14.8755 1.21938 14.7808C1.1248 14.6862 1.05728 14.5679 1.02382 14.4383C0.99036 14.3087 0.992181 14.1726 1.0291 14.0439L1.9581 10.7939C2.0391 10.5079 2.1931 10.2469 2.4031 10.0359L11.0131 1.42592V1.42692ZM11.1891 6.24992L9.7501 4.80992L3.4641 11.0969C3.43403 11.127 3.41202 11.1641 3.4001 11.2049L2.8421 13.1579L4.7951 12.5999C4.8359 12.588 4.87304 12.566 4.9031 12.5359L11.1891 6.24992ZM12.4271 2.48692C12.4039 2.46364 12.3763 2.44517 12.3459 2.43256C12.3155 2.41996 12.283 2.41347 12.2501 2.41347C12.2172 2.41347 12.1847 2.41996 12.1543 2.43256C12.1239 2.44517 12.0963 2.46364 12.0731 2.48692L10.8111 3.74992L12.2501 5.18992L13.5131 3.92692C13.5364 3.9037 13.5548 3.87611 13.5675 3.84574C13.5801 3.81537 13.5865 3.7828 13.5865 3.74992C13.5865 3.71704 13.5801 3.68448 13.5675 3.6541C13.5548 3.62373 13.5364 3.59614 13.5131 3.57292L12.4271 2.48692Z"
                        fill="#B4B4B4"
                    />
                </TableCardEditButton>
            )}
        </TableCardContainer>
    );
};

export default EntryCard;
