import React, { useState } from 'react';
import './RestaurantMenu.scss';

export default function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState('menu-mon-chinh');

  const menuData = {
    'menu-mon-chinh': [
      { name: 'Lẩu thả Phan Thiết', price: '350.000đ', desc: 'Món ăn mang đậm nét văn hóa ẩm thực Bình Thuận với cá suốt, bắp chuối, trứng và thịt ba chỉ.' },
      { name: 'Bánh xèo miền Trung', price: '80.000đ', desc: 'Bánh xèo giòn rụm với nhân tôm thịt tươi, ăn kèm nước chấm đậu phộng đặc trưng.' },
      { name: 'Dông cát nướng muối ớt', price: '250.000đ', desc: 'Đặc sản đồi cát trứ danh, thịt dông thơm ngọt, dai giòn được tẩm ướp đậm đà.' },
      { name: 'Cơm gà đồi Cát Trắng', price: '120.000đ', desc: 'Thịt gà thả đồi chắc thịt thơm ngon ăn kèm cơm chiên tỏi và nước mắm chua ngọt.' }
    ],
    'menu-hai-san': [
      { name: 'Mực một nắng nướng sa tế', price: '180.000đ', desc: 'Mực ống tươi roi rói được phơi qua một nắng giòn ngọt, nướng muối ớt sa tế cay tê nách.' },
      { name: 'Tôm hùm Bình Thuận hấp nước dừa', price: 'Theo mùa', desc: 'Tôm hùm biển ngọt thịt được hấp cùng nước dừa xiêm béo ngậy, ngọt lịm tim.' },
      { name: 'Sò điệp nướng mỡ hành', price: '90.000đ', desc: 'Sò điệp béo múp nướng xèo xèo cùng mỡ hành, đậu phộng rang giòn bùi thơm nức.' },
      { name: 'Ghẹ hấp bia sả', price: '320.000đ/kg', desc: 'Ghẹ xanh đánh bắt trong ngày hấp bia thơm nồng sả ớt, chấm muối tiêu chanh chuẩn vị.' }
    ],
    'menu-giai-khat': [
      { name: 'Nước dừa tươi xiêm quả', price: '30.000đ', desc: 'Dừa xiêm ngọt thanh mát lạnh, thức uống lý tưởng sau những giờ đùa giỡn đồi cát nắng ấm.' },
      { name: 'Sinh tố thanh long đỏ', price: '40.000đ', desc: 'Được xay nhuyễn từ loại trái cây đặc sản nổi tiếng nhất Bình Thuận, giàu vitamin.' },
      { name: 'Nước ép chanh dây mát lạnh', price: '35.000đ', desc: 'Hương thơm nồng nàn chua chua ngọt ngọt đánh tan cơn khát tức thì.' },
      { name: 'Cà phê sữa đá Sài Gòn', price: '25.000đ', desc: 'Cà phê phin đậm đặc pha sữa đặc thơm béo ngậy kèm đá bào sảng khoái ngày hè.' }
    ]
  };

  const tabs = [
    { id: 'menu-mon-chinh', label: 'Món Đặc Sản' },
    { id: 'menu-hai-san', label: 'Hải Sản Tươi Sống' },
    { id: 'menu-giai-khat', label: 'Nước Giải Khát' }
  ];

  return (
    <section className="restaurant-section" id="nha-hang">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag shiny-text">LOCAL TASTES & FLAVORS</span>
          <h2 className="section-title">Thực Đơn Nhà Hàng</h2>
          <div className="section-divider"></div>
        </div>

        <div className="menu-tabs-wrapper">
          <ul className="menu-tabs">
            {tabs.map(tab => (
              <li 
                key={tab.id}
                className={`menu-tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-content-container">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              className={`menu-pane ${activeTab === tab.id ? 'active' : ''}`}
            >
              <div className="menu-grid">
                {menuData[tab.id].map((item, idx) => (
                  <div key={idx} className="menu-item">
                    <div className="menu-item-details">
                      <h4 className="menu-item-title">
                        {item.name} <span>{item.price}</span>
                      </h4>
                      <p className="menu-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
