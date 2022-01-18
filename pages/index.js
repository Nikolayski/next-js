import Head from "next/head";
import Image from "next/image";
import Cards from "../src/sections/cards/Cards";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
   <section>
     <Cards />
   </section>
  );
}
