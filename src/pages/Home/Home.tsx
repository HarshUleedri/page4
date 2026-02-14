import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
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
      <Experience />
      <Protfolio />
      <Testimonial />
    </>
  );
};

export default Home;
