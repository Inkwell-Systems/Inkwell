import styled from 'styled-components';
import CopyIcon from './tables/panels/entry/icons/copy.svg';

export const VerticalBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const HorizontalBox = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    align-items: center;

    margin: 0.5rem 0;
`;

export const Label = styled.span`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 300;
    color: #b4b4b4;

    flex: 3;
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;

    flex: 7;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`;
export const MultilineInput = styled.textarea`
    width: 100%;
    height: 10rem;

    flex: 7;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`;

export const DisabledInputContainer = styled.div`
    flex: 7;
    position: relative;
`;

export const DisabledInputCopyIcon = styled.img`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        filter: brightness(2);
        scale: 1.1;
    }

    &:active {
        filter: invert(75%) sepia(100%) saturate(100%) hue-rotate(100deg)
            brightness(4);

        scale: 0.9;
    }
`;

export const DisabledInput = ({value}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <DisabledInputContainer>
            <Input disabled={true} value={value} />
            <DisabledInputCopyIcon
                onClick={copyToClipboard}
                src={CopyIcon}
                alt={'Copy'}
            />
        </DisabledInputContainer>
    );
};
