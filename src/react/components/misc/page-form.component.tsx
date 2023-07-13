import styled from 'styled-components';

const FormContainer = styled.div`
    background: ${p => p.theme.colors.lightBackground};
    border-radius: 0.5em;

    min-width: 30rem;
    min-height: 30rem;
`;

const FormTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 500;
    margin: 1.5rem 2rem;
`;

const FormSeparator = styled.hr`
    border: 0;
    height: 0.2rem;
    background: ${p => p.theme.colors.midBackground};
`;

const FormChildContainer = styled.div`
    margin: 2rem;
`;

const PageForm = ({styles, title, children}) => {
    return (
        <FormContainer>
            <FormTitle>{title}</FormTitle>

            <FormSeparator />

            <FormChildContainer style={styles}>{children}</FormChildContainer>
        </FormContainer>
    );
};

export default PageForm;
