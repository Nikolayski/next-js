import styled from "styled-components";

export const PictureContainer = styled(({...props}) => <section {...props} />)`
    width: 25%;
    @media (max-width: 1000px){
        width: 50%;
    }
`;