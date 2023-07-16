import {IScope} from '../../../../../../types/IScope.ts';
import styled from 'styled-components';

const ScopeCardContainer = styled.div<{selected: boolean; indent: number}>`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    // margin-left: ${p => p.indent * 1}rem;
    // width: calc(100% - ${p => p.indent * 1}rem);

    border-radius: 0.5rem;
    background-color: ${p => (p.selected ? '#3d3d40' : '#1d1d1f')};
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: #3d3d40;
    }
`;

const ScopeCard = ({
    scope,
    selected,
    onClick,
}: {
    scope: IScope;
    selected: boolean;
    onClick: () => void;
}) => {
    const getFormat = () => {
        if (scope.level < 0) {
            return `- ${scope.key} > (${scope.level})`;
        }

        return `--${'--'.repeat(scope.level)} ${scope.key} > (${scope.level})`;
    };

    return (
        <ScopeCardContainer
            onClick={onClick}
            selected={selected}
            indent={scope.level}
        >
            {getFormat()}
        </ScopeCardContainer>
    );
};

export default ScopeCard;
