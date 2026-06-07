import React from 'react';
import './Services.scss';

export default function Services() {
  // Placeholder SVG to prevent CORS/ORB blocking and reduce network lag
  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Not Available%3C/text%3E%3C/svg%3E';

  const experiences = [
    {
      id: 'atv',
      title: 'ATV / Mô tô địa hình',
      desc: 'Thử thách lòng dũng cảm, tự tay chinh phục những cồn cát nhấp nhô đầy phấn khích với động cơ mạnh mẽ.',
      price: '800k / Xe',
      image: '/images/atv.jpg',
      fallback: placeholderImg
    },
    {
      id: 'jeep',
      title: 'Chinh Phục Xe Jeep',
      desc: 'Thả mình vào những góc nghiêng ngoạn mục, phi vút lên đỉnh đồi cát trắng và chụp những bức hình check-in cực ngầu.',
      price: '800k / Xe',
      image: '/images/jeep.jpg',
      fallback: placeholderImg
    },
    {
      id: 'camel',
      title: 'Cưỡi Lạc Đà Sa Mạc',
      desc: 'Cảm giác độc bản như lạc vào sa mạc Sahara thực thụ. Thong thả dạo bước và chụp ảnh nghệ thuật cùng những chú lạc đà dễ thương.',
      price: '200k / Lượt',
      image: '/images/camel.jpg',
      fallback: placeholderImg
    },
    {
      id: 'ostrich',
      title: 'Cưỡi Đà Điểu Kịch Tính',
      desc: 'Trải nghiệm ngồi trên lưng đà điểu chạy sải bước cực kỳ vui nhộn và độc đáo. Hoạt động thu hút cả người lớn và trẻ nhỏ.',
      price: '100k / Lượt',
      image: '/images/ostrich.jpg',
      fallback: placeholderImg
    }
  ];

  return (
    <section className="services-section" id="dich-vu">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag shiny-text">ADVENTURE & EXPERIENCES</span>
          <h2 className="section-title">Dịch Vụ & Trải Nghiệm</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="service-card">
              <div className="card-img-wrapper">
                <img 
                  src={exp.image} 
                  onError={(e) => { e.target.src = exp.fallback; }} 
                  alt={exp.title} 
                />
                <div className="price-badge">{exp.price}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-desc">{exp.desc}</p>
                <div className="card-footer">
                  <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <span className="material-icons">chat</span> Đặt Ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
