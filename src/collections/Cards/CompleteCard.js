import { CardContainer, CompleteCardDescription, CompleteCardTitle } from "./elements";

const CompleteCard = ({src, title, description, ...props}) => {
  return (
    <CardContainer>
        <img src={src} width={'100%'}/>
      <CompleteCardTitle>{title}</CompleteCardTitle>
      <CompleteCardDescription>
        {description}
      </CompleteCardDescription>
    </CardContainer>
  );
};

export default CompleteCard;
