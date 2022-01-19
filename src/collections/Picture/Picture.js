import { PictureContainer } from "./elements";

const Picture = ({ src, ...props }) => {
  return (
    <PictureContainer>
      <img src={src} width="100%" />
    </PictureContainer>
  );
};

export default Picture;
