import React, { useState } from 'react';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SectionDivider from './components/SectionDivider.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
      {/* Dynamic Ambient Background Effects */}
      <BackgroundEffects />

      {/* 1. Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* 2. Sticky Navbar */}
      <Navbar />

      {/* 3. Main Content Area */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Divider before About */}
        <SectionDivider nextSectionLabel="01 / About" />

        {/* About Section */}
        <About />

        {/* Divider before Skills */}
        <SectionDivider nextSectionLabel="02 / Skills" />

        {/* Skills Section */}
        <Skills />

        {/* Divider before Projects */}
        <SectionDivider nextSectionLabel="03 / Projects" />

        {/* Projects Section */}
        <Projects />

        {/* Divider before Education */}
        <SectionDivider nextSectionLabel="04 / Education" />

        {/* Education Section */}
        <Education />

        {/* Divider before Achievements */}
        <SectionDivider nextSectionLabel="05 / Achievements" />

        {/* Achievements Section */}
        <Achievements />

        {/* Divider before Resume */}
        <SectionDivider nextSectionLabel="06 / Resume" />

        {/* Resume Section */}
        <Resume />

        {/* Divider before Contact */}
        <SectionDivider nextSectionLabel="07 / Contact" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
