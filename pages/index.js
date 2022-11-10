import Head from "next/head";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
// import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div className="text-amber-900 max-w-6xl">
      <Head>
        <title>horizon app</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}
