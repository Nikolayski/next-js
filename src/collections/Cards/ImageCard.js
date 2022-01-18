import { CardContainer } from "./elements";
import Image from 'next/image'

const ImageCard = ({ src, ...props }) => {
  return (
    <CardContainer>
      <img src={src} width={'100%'} />
    </CardContainer>
  );
};

export default ImageCard;
