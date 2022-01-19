import styled from "styled-components";

export const ButtonBurgerContainer = styled(({...props}) => <section {...props} />)`
    display: none;
    @media (max-width: 780px){
        display: block;
    }
`;