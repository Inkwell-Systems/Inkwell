import styled from 'styled-components';

const FormContainer = styled.div`
    background: ${p => p.theme.colors.lightBackground};
    border-radius: 0.5em;

    min-width: 30rem;
    height: 30rem;

    overflow-x: hidden;
    overflow-y: scroll;
`;

const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FormTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 500;
    margin: 1.5rem 2rem;
`;

const FormAddon = styled.div`
    font-size: 1.5rem;
    margin: 1.5rem 2rem;
    user-select: none;
    cursor: pointer;
`;

const FormSeparator = styled.hr`
    border: 0;
    height: 0.2rem;
    background: ${p => p.theme.colors.midBackground};
`;

const FormChildContainer = styled.div`
    margin: 2rem;
`;

const PageForm = ({
    outerStyles,
    styles,
    title,
    children,
    addon,
    addonOnClick,
}) => {
    return (
        <FormContainer style={outerStyles}>
            <FormHeader>
                <FormTitle>{title}</FormTitle>

                {addon !== null && (
                    <FormAddon onClick={addonOnClick}>{addon}</FormAddon>
                )}
            </FormHeader>

            <FormSeparator />

            <FormChildContainer style={styles}>{children}</FormChildContainer>
        </FormContainer>
    );
};

export default PageForm;
