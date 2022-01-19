import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { SocialMediaContainer } from "./elements";

const SocialMedia = (props) => {
  return (
    <SocialMediaContainer>
      <FacebookShareButton>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
