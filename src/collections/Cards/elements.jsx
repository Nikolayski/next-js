import styled from "styled-components";

export const CardContainer = styled(({...props}) => <section {...props} />)`
    width: 50%;
    display: flex;
    position: relative;
    @media (max-width: 750px){
        width: 100%;
        margin: auto;
    }
`;

export const TextCardContainer = styled(({...props}) => <section {...props} />)`
    width: 70%;
    margin:  auto;
    margin-top: 10%;

`;

export const TextCardTitle = styled(({...props}) => <h2 {...props} />)`
    font-size: 85px;
    @media (max-width: 1600px){
        font-size: 60px;
        margin: 0;
    }
    @media (max-width: 1000px){
        font-size: 40px;
    }
`;

export const TextCardDescription = styled(({...props}) => <p {...props} />)`
    font-size: 22px;
    width: 90%;
    line-height: 1.2;
    @media (max-width:1600px){
        font-size: 20px;
    }
`;

export const CompleteCardTitle = styled(({...props}) => <h2 {...props} />)`
    position: absolute;
    margin-top: 60%;
    font-size: 50px;
    margin-left: 35%;
    @media  (max-width:1600px){
        margin-top: 50%;
    }
    @media (max-width: 1200px){
        font-size: 38px;
    }
    @media (max-width: 880px){
        font-size: 30px;
    }
`;

export const CompleteCardDescription = styled(({...props}) => <h2 {...props} />)`
    position: absolute;
    margin-top: 70%;
    width: 50%;
    margin-left: 25%;
    font-weight: 300;
    @media  (max-width:1600px){
        margin-top: 60%;
    }
    @media  (max-width:1200px){
        font-size: 20px;
        width:60%;
    }
    @media  (max-width:1000px){
        font-size: 18px;
        width:60%;
    }
    @media  (max-width:880px){
        font-size: 18px;
        width:70%;
    }
`;