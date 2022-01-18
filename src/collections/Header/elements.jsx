import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled(({...props}) => <section {...props} />)`
    color: whitesmoke;
`
export const HeaderImageContainer = styled(({...props}) => <div {...props} />)`
`

export const HeaderContent = styled(({...props}) => <article {...props} />)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 5px 20px;
    top: 0;
`;

export const Navigation = styled(({...props}) => <ul {...props} />)`
    display: flex;
    justify-content: space-around;
    width: 30%;
`;

export const NavigationLogo= styled(({...props}) => <p {...props} />)`
    font-weight: 700;
    font-size: 35px;
`
export const NavigationLink= styled(({...props}) => <li {...props} />)`
     list-style: none;
    `;

export const NavigationLinkItem = styled(({...props}) => <a {...props} />)`
    text-decoration: none;
    color: white;
    font-size: 30px;
`;

export const HeaderMainText = styled(({...props}) => <h1 {...props} />)`
    position: absolute;
    font-size: 60px;
    top: 25%;
    left: 35%;
    color: white;
`;