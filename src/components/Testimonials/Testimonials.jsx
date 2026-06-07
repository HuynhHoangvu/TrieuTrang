import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.scss';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Placeholder avatar SVG - reduces network requests and eliminates CORS issues
  const placeholderAvatar = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%22100%22 fill=%22%23ddd%22/%3E%3Ccircle cx=%22100%22 cy=%2280%22 r=%2240%22 fill=%22%23999%22/%3E%3Cellipse cx=%22100%22 cy=%22140%22 rx=%2250%22 ry=%2235%22 fill=%22%23999%22/%3E%3C/svg%3E';

  const reviews = [
    {
      id: 1,
      name: 'Nguyễn Văn Minh',
      role: 'Khách du lịch từ TP.HCM',
      text: 'Trải nghiệm lái mô tô địa hình ATV leo đồi cát cực kỳ đỉnh! Lúc đầu hơi sợ nhưng được các anh hướng dẫn hỗ trợ nhiệt tình nên chạy rất an tâm. Jeep đi cũng rất phê.',
      rating: 5,
      date: '10/05/2026',
      avatarFallback: placeholderAvatar
    },
    {
      id: 2,
      name: 'Trần Thị Thu Thảo',
      role: 'Khách du lịch từ Hà Nội',
      text: 'Mấy chú lạc đà ở đây siêu dễ thương luôn ấy! Chụp ảnh phong cách boho cực kỳ hợp. Cảm giác thong dong giữa đồi cát trắng xóa giống y như đang đi tour Dubai hay Morocco vậy.',
      rating: 5,
      date: '02/05/2026',
      avatarFallback: placeholderAvatar
    },
    {
      id: 3,
      name: 'Michael Harrison',
      role: 'Khách du lịch từ Australia',
      text: 'Stunning place! The sand dunes are gorgeous and ride prices are very reasonable. Riding camel was unforgettable experience. The seafood at their restaurant is super fresh!',
      rating: 5,
      date: '28/04/2026',
      avatarFallback: placeholderAvatar
    }
  ];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, [reviews.length]);

  // Framer Motion variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    }
  };

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <section className="testimonials-section" id="danh-gia">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag shiny-text">CUSTOMER REVIEWS</span>
          <h2 className="section-title">Khách Hàng Nói Về Chúng Tôi</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="testimonials-slider-wrapper">
          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex} 
                className="testimonial-slide active"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="testimonial-card">
                  <div className="rating-stars">
                    {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                      <span key={i} className="material-icons">star</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{reviews[activeIndex].text}"</p>
                  <div className="testimonial-user">
                    <img 
                      className="user-avatar" 
                      src={reviews[activeIndex].avatarFallback} 
                      alt={reviews[activeIndex].name} 
                    />
                    <div className="user-info">
                      <h4 className="user-name">{reviews[activeIndex].name}</h4>
                      <span className="user-role">{reviews[activeIndex].role}</span>
                    </div>
                  </div>
                  <div className="testimonial-date">{reviews[activeIndex].date}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="slider-dots">
            {reviews.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
