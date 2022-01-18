import CompleteCard from "../../collections/Cards/CompleteCard";
import ImageCard from "../../collections/Cards/ImageCard";
import TextCard from "../../collections/Cards/TextCard";
import { CardsContainer } from "./elements";

const Cards = (props) => {
  return (
    <CardsContainer>
      <TextCard
        title="Tranform your brand"
        description="We are a full-service creative agency specializing in helping brands
                  grow fast. Engage your clients through compelling visual that do
                  most of the marketing for you."
      />
      <ImageCard src={"/static/images-desktop/image-transform.jpg"} />
      <ImageCard src={"/static/images-desktop/image-stand-out.jpg"} />
      <TextCard
        title="Stand right to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
      />
       <CompleteCard src="/static/images-desktop/image-graphic-design.jpg"
                     title="Graphic Design"
                     description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention." 
        />
        <CompleteCard src="/static/images-desktop/image-photography.jpg"
                     title="Photography"
                     description="Increase your credibility by getting the most stunning, high-quality
                     photos that improve your business image." 
        />  
    </CardsContainer>
  );
};

export default Cards;
