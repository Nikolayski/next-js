import {  ClientCardContainer, ClientCardImageContainer, ClientCardAuthor, ClientCardPosition} from "./elements";
import { TextCardDescription } from '../Cards/elements';
import Image from 'next/image';

const ClientCards = ({src, description, author, position, ...props}) => {
  return (
    <ClientCardContainer>
      <ClientCardImageContainer>
      <img src={src} style={{width:'20%', borderRadius: '50%'}} />
      </ClientCardImageContainer>
      <TextCardDescription>
        {description}
      </TextCardDescription>
      <ClientCardAuthor>{author}</ClientCardAuthor>
      <ClientCardPosition>{position}</ClientCardPosition>
    </ClientCardContainer>
  );
};
export default ClientCards;
