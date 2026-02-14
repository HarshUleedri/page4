import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Protfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Protfolio />
      <Testimonial />
    </>
  );
};

export default Home;
