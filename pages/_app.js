import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
   
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

       
        <meta name="name" content="ATK" />
        <meta
          name="description"
          content="ATK."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/atk.png"
        />
        <meta
          property="og:description"
          content="ATK."
        />
        <meta property="og:title" content="ATK" />
        <meta property="og:url" content="https://atk.com" />


        <title>ATK</title>
      </Head>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
