import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroIntro from './components/HeroIntro';
import HomeSection from './components/HomeSection';
import ProcessSection from './components/ProcessSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import AchievementsSection from './components/AchievementsSection';
import ClientsSection from './components/ClientsSection';
import TeamSection from './components/TeamSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';

function MainPage() {
  return (
    <div className="min-h-screen bg-[#05060b] text-slate-100 selection:bg-cyan-400 selection:text-[#05060b]">
      <Navbar />
      <HeroIntro />
      <HomeSection />
      <ProcessSection />
      <FeaturesSection />
      <ServicesSection />
      <AchievementsSection />
      <ClientsSection />
      <TeamSection />
      <BlogPreviewSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}
