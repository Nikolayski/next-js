import SocialMedia from "../../collections/SocialMedia/SocialMedia";
import { FooterContainer, FooterLogo, FooterNavigation, FooterNavigationLink } from "./elements";
import {NavigationLinkItem} from '../Header/elements';

const Footer = (props) => {
  return (
    <FooterContainer>
        <FooterLogo>sunnyside</FooterLogo>
      <FooterNavigation>
        <FooterNavigationLink>
          <NavigationLinkItem color="whitesmoke" href="">About</NavigationLinkItem>
        </FooterNavigationLink>
        <FooterNavigationLink>
          <NavigationLinkItem color="whitesmoke" href="">Services</NavigationLinkItem>
        </FooterNavigationLink>
        <FooterNavigationLink>
          <NavigationLinkItem color="whitesmoke" href="">Projects</NavigationLinkItem>
        </FooterNavigationLink>
      </FooterNavigation>
      <SocialMedia />
    </FooterContainer>
  );
};

export default Footer;
