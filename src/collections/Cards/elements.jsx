import styled from "styled-components";

export const CardContainer = styled(({...props}) => <section {...props} />)`
    width: 50%;
    display: flex;
    position: relative;
`;

export const TextCardContainer = styled(({...props}) => <section {...props} />)`
    width: 70%;
    margin:  auto;
    margin-top: 10%;

`;

export const TextCardTitle = styled(({...props}) => <h2 {...props} />)`
    font-size: 85px;
`;

export const TextCardDescription = styled(({...props}) => <p {...props} />)`
    font-size: 25px;
    width: 90%;
    line-height: 1.5;
`;

export const CompleteCardTitle = styled(({...props}) => <h2 {...props} />)`
    position: absolute;
    margin-top: 60%;
    font-size: 50px;
    margin-left: 35%;
`;

export const CompleteCardDescription = styled(({...props}) => <h2 {...props} />)`
    position: absolute;
    margin-top: 70%;
    width: 50%;
    margin-left: 25%;
`;