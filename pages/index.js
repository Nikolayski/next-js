import Head from "next/head";
import Image from "next/image";
import Cards from "../src/sections/cards/Cards";
import Clients from "../src/sections/clients/Clients";
import Pictures from "../src/sections/pictures/Pictures";
import styles from "../styles/Home.module.css";

export default function Home({...props}) {
  return (
   <section>
     <Cards {...props} />
     <Clients {...props} />
     <Pictures {...props} />
   </section>
  );
}
