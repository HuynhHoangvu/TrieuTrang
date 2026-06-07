import React, { useState } from 'react';
import './Gallery.scss';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Not Available%3C/text%3E%3C/svg%3E';

const images = [
    { id: 1, path: '/images/atv.jpg', fallback: placeholderImg, alt: 'Trải nghiệm ATV', size: 'tall' },
    { id: 2, path: '/images/camel.jpg', fallback: placeholderImg, alt: 'Cưỡi Lạc Đà', size: 'medium' },
    { id: 3, path: '/images/jeep.jpg', fallback: placeholderImg, alt: 'Xe Jeep', size: 'short' },
    { id: 4, path: '/images/ostrich.jpg', fallback: placeholderImg, alt: 'Đà Điểu', size: 'tall' },
    { id: 5, path: '/images/gallery-1.jpg', fallback: placeholderImg, alt: 'Check-in Bàu Cát Trắng', size: 'medium' },
    { id: 6, path: '/images/background.jpg', fallback: placeholderImg, alt: 'Cảnh Quan', size: 'short' },
    { id: 7, path: '/images/hero-fallback.jpg', fallback: placeholderImg, alt: 'Hero Fallback', size: 'tall' },
    { id: 8, path: '/images/atv.jpg', fallback: placeholderImg, alt: 'ATV Adventure', size: 'medium' },
    { id: 9, path: '/images/camel.jpg', fallback: placeholderImg, alt: 'Lạc Đà Sa Mạc', size: 'short' },
    { id: 10, path: '/images/jeep.jpg', fallback: placeholderImg, alt: 'Xe Jeepoff-road', size: 'tall' },
    { id: 11, path: '/images/ostrich.jpg', fallback: placeholderImg, alt: 'Đà Điểu Safari', size: 'medium' },
    { id: 12, path: '/images/background.jpg', fallback: placeholderImg, alt: 'Sa Mạc Cát Trắng', size: 'short' }
  ];

  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="gallery-section" id="thu-vien">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag shiny-text">VISUAL MEMORIES</span>
          <h2 className="section-title">Thư Viện Ảnh Check-in</h2>
          <div className="section-divider"></div>
        </div>

        <div className="masonry-grid">
          {images.map(img => (
            <div 
              key={img.id} 
              className={`masonry-item masonry-item--${img.size}`}
              onClick={() => openLightbox(img.path)}
            >
              <img 
                src={img.path} 
                onError={(e) => { e.target.src = img.fallback; }} 
                alt={img.alt} 
              />
              <div className="gallery-hover-overlay">
                <span className="material-icons">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox open" onClick={(e) => { if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) closeLightbox(); }}>
          <span className="lightbox-close material-icons" onClick={closeLightbox}>close</span>
          <img className="lightbox-img" src={selectedImage} alt="Zoomed view" onError={(e) => {
            const matched = images.find(img => img.path === selectedImage);
            if (matched) e.target.src = matched.fallback;
          }} />
        </div>
      )}
    </section>
  );
}
