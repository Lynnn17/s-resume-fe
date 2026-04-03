import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar />
      <div className="contain-paint"><HeroSection /></div>
      <div className="contain-paint"><AboutSection /></div>
      <div className="contain-paint"><PortfolioSection /></div>
      <div className="contain-paint"><SkillsSection /></div>
      <div className="contain-paint"><ExperienceSection /></div>
      <div className="contain-paint"><ContactSection /></div>
      <Footer />
    </div>
  );
}