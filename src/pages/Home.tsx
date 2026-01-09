import HeroSection from "../sections/HeroSection";
import SubheroSection from "../sections/SubheroSection";
import Services from "../sections/Services";
import HowWeWork from "../sections/HowWeWork";
import Stats from "../sections/Stats";
import FAQ from "../sections/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SubheroSection />
      <Services />
      <HowWeWork />
      <Stats />
      <FAQ />
    </>
  );
};

export default Home;
