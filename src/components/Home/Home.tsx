"use client";
import React from "react";
import Hero from "../widgets/Hero/Hero";
import Feature from "../widgets/Feature/Feature";
import PopularBurger from "../widgets/PopularBurger/popularBurger";
import Delivery from "../widgets/Delivery/Delivery";
import Team from "../widgets/Team/Team";
import Reservstion from "../widgets/Reservation/Reservstion";
import NewsLetter from "../widgets/NewsLetter/NewsLetter";
import Footer from "../widgets/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 900,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservstion />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
