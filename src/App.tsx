import React from "react";
import "./App.css";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import SubheroSection from "./sections/SubheroSection";
import Services from "./sections/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SubheroSection />
      <Services />
    </div>
  );
}

export default App;
