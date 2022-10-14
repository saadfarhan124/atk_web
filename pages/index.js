import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sliderr from "../components/Slider";
import Footer from "../components/Footer";
import Agency from "../components/Agency";
import GlobalBrand from "../components/GlobalBrand";
import BrandStrategy from "../components/BrandStrategy";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Sliderr />
      <GlobalBrand />
      <BrandStrategy />
      <Agency />
      <Footer />
    </div>
  );
}


// mport Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Header from '../components/Header'
// import Sliderr from '../components/Slider';
// import Footer from '../components/Footer';
// import Overview from '../components/Overview';
// import Brand from '../components/Brand';
// export default function Home() {
//   return (
//     <div >
//           {/* <Header/> */}
//          {/* <Sliderr/> */}
//          <Overview/>
//           {/* <Brand/> */}