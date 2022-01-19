import { CardContainer, TextCardContainer, TextCardDescription, TextCardTitle } from "./elements";

const TextCard = ({ title, description, ...props }) => {
  return (
    <CardContainer>
      <TextCardContainer>
        <TextCardTitle>{title}</TextCardTitle>
        <TextCardDescription>{description}</TextCardDescription>
        <button style={{marginBottom: "30px"}}>LEARN MORE</button>
      </TextCardContainer>
    </CardContainer>
  );
};

export default TextCard;
