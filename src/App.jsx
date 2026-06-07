import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import FloatingContact from './components/FloatingContact/FloatingContact';
import Footer from './components/Footer/Footer';
import './App.scss';

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Experience Services */}
      <Services />

      {/* Parallax Mid Section */}
      <section className="parallax-section">
        <div className="parallax-overlay"></div>
        <div className="parallax-content text-center">
          <span className="section-tag shiny-text">WILD SAHARA EXPERIENCE</span>
          <h2 className="parallax-title">Bàu Cát Trắng - Trái Tim Mũi Né</h2>
          <p className="parallax-desc">Nơi những cồn cát mênh mông uốn lượn dưới nắng vàng ngọt ngào, hòa cùng nhịp thở hoang dã đầy sức sống của thiên nhiên Bình Thuận.</p>
        </div>
      </section>

      {/* Restaurant Menu */}
      <RestaurantMenu />

      {/* Photo Gallery Check-in */}
      <Gallery />

      {/* Testimonials Slider */}
      <Testimonials />

      {/* Contact Section with Google Maps */}
      <Contact />

      {/* Floating fast widgets (Zalo & Hotline) */}
      <FloatingContact />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
