import styled from 'styled-components';

const Element = styled.div<{selected: boolean}>`
    padding: 1rem 0.5rem;

    background-color: ${p => (p.selected ? '#131315' : 'transparent')};
    border-radius: 0.5rem;

    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;
    user-select: none;

    &:hover {
        color: #e3e3e3;
    }
`;

const InnerSidebarElement = ({title, selected, onClick}) => {
    return (
        <Element selected={selected} onClick={onClick}>
            {title}
        </Element>
    );
};

export default InnerSidebarElement;
