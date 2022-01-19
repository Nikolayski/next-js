import styled from "styled-components";

export const FooterContainer = styled(({...props}) => <section {...props} />)`
    background-color: cyan;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const FooterLogo = styled(({...props}) => <h2 {...props} />)`
    color: whitesmoke;
    font-size: 40px;
    text-align: center;
`;

export const FooterNavigation= styled(({...props}) => <ul {...props} />)`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-self: center;
`;

export const FooterNavigationLink = styled(({...props}) => <li {...props} />)`
    list-style: none;
`;