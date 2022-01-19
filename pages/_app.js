import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import { GlobalStyles } from "../src/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <title>We are creative</title>
        <meta name='description' content='We are creative' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default MyApp;
