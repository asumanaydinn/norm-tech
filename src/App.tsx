import React from "react";
import "./App.css";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import SubheroSection from "./sections/SubheroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SubheroSection />
    </div>
  );
}

export default App;
