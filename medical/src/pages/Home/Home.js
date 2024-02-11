import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Info from "../../components/Info/Info";
import Counter from "../../components/Counter/Counter";
import Props from "../../components/Props/Props";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Slider />
      <Info />
      <Counter />
      <Props />
      <Contact />
    </>
  );
};

export default Home;
