import ClientCard from "../../collections/ClientCard/ClientCard";
import { ClientsCardsContainer, ClientsContainer } from "./elements";

const Clients = (props) => {
  return (
    <ClientsContainer>
      <h2 style={{textAlign: 'center'}}>CLIENT TESTIMONIALS</h2>
      <ClientsCardsContainer>
        <ClientCard
          src="/static/image-emily.jpg"
          description=" We put our trust in Sunnyside and they delivered, making sure our
                      needs were met and deadilnes were always hit."
          author="Emily R."    
          position="Marketing director"        
        />
        <ClientCard
          src="/static/image-thomas.jpg"
          description="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          author="Thomas S."  
          position="Chief operating officer"
       />
        <ClientCard
          src="/static/image-jennie.jpg"
          description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Hight recommended!"
          author="Jenny F."  
          position="Business owner"
       />
      </ClientsCardsContainer>
    </ClientsContainer>
  );
};

export default Clients;
