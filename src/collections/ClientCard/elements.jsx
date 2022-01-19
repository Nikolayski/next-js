import styled from "styled-components";

export const ClientCardContainer = styled(({...props}) => <section {...props} />)`
text-align: center;
width: 30%;
@media (max-width: 750px){
    width: 100%;
}
`

export const ClientCardImageContainer = styled(({...props}) => <div {...props} />)`
width: 100%;
`;

export const ClientCardAuthor = styled(({...props}) => <strong {...props} />)`
    font-size: 23px;
`;

export const ClientCardPosition = styled(({...props}) => <p {...props} />)`
    color: grey;
    font-size: 20px;
`;

