import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo shiny-text">BÀU CÁT TRẮNG</h3>
            <p className="brand-desc">Khu du lịch sinh thái & thể thao mạo hiểm hàng đầu tại Mũi Né, Bình Thuận. Mang lại những trải nghiệm sa mạc hoang dã, sang trọng và trọn vẹn.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span className="material-icons">facebook</span></a>
              <a href="#" aria-label="Instagram"><span className="material-icons">photo_camera</span></a>
              <a href="#" aria-label="YouTube"><span className="material-icons">play_circle_filled</span></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Khám Phá</h4>
            <ul>
              <li><a href="#dieu-huong">Trang Chủ</a></li>
              <li><a href="#dich-vu">Dịch Vụ & Vé Trải Nghiệm</a></li>
              <li><a href="#nha-hang">Thực Đơn Nhà Hàng</a></li>
              <li><a href="#thu-vien">Thư Viện Ảnh Check-in</a></li>
              <li><a href="#danh-gia">Đánh Giá Từ Khách Hàng</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Thông Tin Liên Hệ</h4>
            <ul>
              <li>
                <span className="material-icons">place</span>
                Khu du lịch Bàu Trắng, Hòa Thắng, Bắc Bình, Bình Thuận
              </li>
              <li>
                <span className="material-icons">phone</span>
                Hotline: <a href="tel:0901234567">0901 234 567</a>
              </li>
              <li>
                <span className="material-icons">email</span>
                Email: info@baucattrangmuine.vn
              </li>
              <li>
                <span className="material-icons">schedule</span>
                Giờ hoạt động: 05:00 - 18:00 hàng ngày
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Bàu Cát Trắng Mũi Né. Toàn bộ bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
