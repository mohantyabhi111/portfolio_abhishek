import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10]">
      <Header />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Achievements data={portfolioData.achievements} />
      <Contact data={portfolioData.personal} />
      <Footer data={portfolioData.personal} />
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
