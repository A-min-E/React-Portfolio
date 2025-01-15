import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
// import Toggle from "./components/Toggle/Toggle";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  // const [isLight, setIsLight] = useState(false);

  return (
    // <div data-theme={isLight ? "light" : "dark"}>
    <div>
      {/* <Toggle isChecked={isLight} handleChange={() => setIsLight(!isLight)} /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
