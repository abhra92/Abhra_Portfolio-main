import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-6xl mx-auto relative z-10">
        <Home />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
