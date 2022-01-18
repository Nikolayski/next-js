import Link from "next/link";
import Image from 'next/image';
import {
  HeaderContent,
  HeaderContainer,
  Navigation,
  HeaderImageContainer,
  NavigationLogo,
  NavigationLink,
  NavigationLinkItem,
  HeaderMainText,
} from "./elements";

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderImageContainer>
        <img src="/static/images-desktop/image-header.jpg" width={'100%'} />
      </HeaderImageContainer>
      <HeaderContent>
        <NavigationLogo>sunnyside</NavigationLogo>
        <Navigation>
          <NavigationLink>
            <NavigationLinkItem href="">About</NavigationLinkItem>
          </NavigationLink>
          <NavigationLink>
            <NavigationLinkItem href="">Services</NavigationLinkItem>
          </NavigationLink>
          <NavigationLink>
            <NavigationLinkItem href="">Projects</NavigationLinkItem>
          </NavigationLink>
          <NavigationLink>
            <NavigationLinkItem href="">Contact</NavigationLinkItem>
          </NavigationLink>
        </Navigation>
      </HeaderContent>
      <HeaderMainText>WE ARE CREATIVES</HeaderMainText>
    </HeaderContainer>
  );
};

export default Header;
