import styled from "styled-components";

export const ClientsContainer = styled(({...props}) => <section {...props} />)`
    margin: 5% auto;
`;

export const ClientsCardsContainer = styled(({...props}) => <section {...props} />)`
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 50px auto;
`;