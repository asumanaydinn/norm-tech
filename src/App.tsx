import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./sections/Header";
import Home from "./pages/Home";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import ProjeReferanslari from "./pages/ProjeReferanslari";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Iletisim from "./pages/Iletisim";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Add padding-top to account for fixed header */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
            <Route
              path="/proje-referanslarimiz"
              element={<ProjeReferanslari />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
