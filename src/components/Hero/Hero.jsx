import React, { useEffect, useState } from 'react';
import './Hero.scss';

export default function Hero({ onBooking }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const titleText = "Bàu Cát Trắng";
  const words = titleText.split(" ");
  let charCount = 0;

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="hero" id="dieu-huong">
      <div className="hero-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          className={`hero-video ${videoLoaded ? 'loaded' : ''}`}
        >
          <source src="/hero_v.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <span 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <span className="hero-tag">THIÊN ĐƯỜNG SA MẠC MŨI NÉ</span>
        <h1 className="hero-title">
          {words.map((word, wordIndex) => {
            const chars = word.split("");
            return (
              <span key={wordIndex} className="split-word">
                {chars.map((char, charIndex) => {
                  const delay = charCount * 0.04;
                  charCount++;
                  return (
                    <span 
                      key={charIndex} 
                      className="split-char" 
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
                {wordIndex < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
        </h1>
        <p className="hero-subtitle">
          Trải nghiệm tốc độ đỉnh cao, cưỡi lạc đà giữa sa mạc cát trắng và tận hưởng ẩm thực địa phương độc đáo.
        </p>
        
        <div className="hero-actions">
          <button 
            onClick={onBooking || (() => window.location.href = '#dich-vu')} 
            className="btn btn-primary"
          >
            Khám phá dịch vụ
          </button>
          <a href="#thu-vien" className="btn btn-outline-light">
            Xem thư viện ảnh
          </a>
        </div>
      </div>
      
      <div className="scroll-down">
        <span className="material-icons">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
