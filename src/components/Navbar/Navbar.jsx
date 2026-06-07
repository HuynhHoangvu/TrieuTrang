import React, { useState, useEffect } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleDrawer} aria-label="Mở Menu">
              <span className="material-icons">menu</span>
            </button>
            <span className="header-phone">
              <span className="material-icons">phone</span> 0901 234 567
            </span>
          </div>
          <div className="header-center">
            <a href="#" className="logo shiny-text">BÀU CÁT TRẮNG</a>
          </div>
          <div className="header-right">
            <a href="#dich-vu" className="btn btn-outline-light header-cta">Đặt Vé Ngay</a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="logo">BÀU CÁT TRẮNG</span>
          <button className="drawer-close" onClick={toggleDrawer}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <ul className="drawer-menu">
          <li><a href="#dieu-huong" className="drawer-link" onClick={closeDrawer}>Trang Chủ</a></li>
          <li><a href="#dich-vu" className="drawer-link" onClick={closeDrawer}>Dịch Vụ & Trải Nghiệm</a></li>
          <li><a href="#nha-hang" className="drawer-link" onClick={closeDrawer}>Thực Đơn Nhà Hàng</a></li>
          <li><a href="#thu-vien" className="drawer-link" onClick={closeDrawer}>Thư Viện Ảnh</a></li>
          <li><a href="#danh-gia" className="drawer-link" onClick={closeDrawer}>Đánh Giá Khách Hàng</a></li>
          <li>
            <a href="tel:0901234567" className="drawer-link contact-drawer" onClick={closeDrawer}>
              <span className="material-icons">phone</span> Gọi 0901 234 567
            </a>
          </li>
        </ul>
      </div>
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
    </>
  );
}
