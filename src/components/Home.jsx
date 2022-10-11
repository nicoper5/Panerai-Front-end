import HomeCarousel from "./HomeCarousel";
import Navigation from "./Navigation";
import BestSellers from "./BestSellers";
import Footer from "./Footer";
import InfoCardW from "./InfoCardW";
import InfoCardB from "./InfoCardB";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <HomeCarousel />
      <BestSellers />
      <InfoCardB />
      <InfoCardW />
      <Footer />
    </>
  );
}
