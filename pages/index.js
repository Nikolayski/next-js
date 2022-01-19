import Cards from "../src/sections/cards/Cards";
import Clients from "../src/sections/clients/Clients";
import Pictures from "../src/sections/pictures/Pictures";

export default function Home({...props}) {
  return (
   <section>
     <Cards {...props} />
     <Clients {...props} />
     <Pictures {...props} />
   </section>
  );
}
