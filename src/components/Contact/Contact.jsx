import React from 'react';
import { 
  ParkingCircle, 
  Bath, 
  Shirt, 
  Coffee, 
  Wifi, 
  Clock 
} from 'lucide-react';
import ShinyText from '../animations/ShinyText';
import SplitText from '../animations/SplitText';
import './Contact.scss';

export default function Contact() {
  const amenities = [
    { label: 'Bãi đậu xe', icon: <ParkingCircle size={14} /> },
    { label: 'WC', icon: <Bath size={14} /> },
    { label: 'Thay đồ', icon: <Shirt size={14} /> },
    { label: 'Nước uống', icon: <Coffee size={14} /> },
    { label: 'WiFi', icon: <Wifi size={14} /> },
    { label: 'Mở cửa 24/7', icon: <Clock size={14} /> },
  ];

  return (
    <section
      id="lien-he"
      className="flex w-full scroll-mt-28 snap-start flex-col bg-black lg:min-h-[min(80dvh,48rem)] lg:flex-row lg:items-stretch"
    >
      
      {/* ── KHỐI THÔNG TIN BÊN TRÁI ── */}
      <div className="info-block flex w-full shrink-0 flex-col justify-center p-8 text-white sm:p-10 lg:w-[380px] lg:max-h-[min(88dvh,52rem)] lg:overflow-y-auto lg:p-10 xl:w-[420px]">
        
        <ShinyText 
          text="Liên hệ với chúng tôi" 
          className="contact-shiny-tag font-black text-[10px] uppercase tracking-[0.4em] mb-4 whitespace-nowrap" 
        />
        <h2 className="contact-title text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 [text-wrap:balance] text-white text-center lg:text-left">
          <SplitText 
            text="Đến đây dễ dàng" 
            delay={0.05} 
            className="justify-center lg:justify-start"
          />
        </h2>
        
        <p className="contact-desc mb-6 pr-0 text-sm font-medium leading-relaxed text-white/70 [text-wrap:balance]">
          Hệ thống dịch vụ xe địa hình, ATV, Jeep và những trải nghiệm đồi cát đẳng cấp nhất tại Bàu Trắng. Luôn sẵn sàng đón tiếp bạn.
        </p>

        <h3 className="contact-sub-title font-black text-lg mb-4 uppercase tracking-wider text-white">Thông tin liên hệ</h3>

        <div className="mb-6 flex-col">
           <div className="info-row py-4 border-b border-white/10">
              <p className="info-tag text-[10px] font-black uppercase tracking-widest mb-1">Hotline</p>
              <div className="info-val font-black uppercase text-sm text-white">
                <a href="tel:0979391234" className="hover-gold transition-colors">0979 391 234</a> 
                <span className="divider text-white/40 mx-1">/</span> 
                <a href="tel:0909737797" className="hover-gold transition-colors">0909 737 797</a>
              </div>
           </div>

           <div className="info-row py-4 border-b border-white/10">
              <p className="info-tag text-[10px] font-black uppercase tracking-widest mb-1">Địa chỉ</p>
              <div className="info-val info-val-muted font-black uppercase text-sm text-white/80">
                <a href="https://maps.app.goo.gl/TLHNvxT7k9VyjmmA9" className="hover-gold transition-colors">HÒA THẮNG, LÂM ĐỒNG</a>
              </div>
           </div>

           <div className="info-row py-4 border-b border-white/10">
              <p className="info-tag text-[10px] font-black uppercase tracking-widest mb-1">Giờ mở cửa</p>
              <div className="info-val info-val-muted font-black uppercase text-sm text-white/80">
                5:00 – 17:30 Hàng ngày
              </div>
           </div>
        </div>

        <h3 className="contact-sub-title mb-4 font-black text-lg uppercase tracking-wider text-white">Tiện ích</h3>
        
        <div className="amenities-grid grid grid-cols-2 gap-y-4">
          {amenities.map(item => (
            <div key={item.label} className="amenity-item flex items-center gap-2 text-white/80 font-black text-[10px] uppercase tracking-widest group">
              <span className="amenity-icon group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </span> 
              {item.label}
            </div>
          ))}
        </div>

      </div>

      {/* ── KHỐI BẢN ĐỒ ── */}
      <div className="map-container relative min-h-[min(44dvh,22rem)] w-full flex-1 overflow-hidden bg-neutral-950 max-lg:h-[min(48dvh,26rem)] lg:min-h-0 border border-white/10 shadow-2xl">
        <div className="map-btn-overlay absolute top-6 right-6 lg:top-8 lg:right-8 z-10 flex gap-2">
           <a 
             href="tel:0979391234" 
             className="map-call-btn text-white px-8 py-4 font-black text-xs uppercase tracking-widest transition-colors shadow-2xl"
           >
             Gọi Ngay
           </a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.658846134229!2d108.42467151032308!3d11.064183953775157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769535095d4b13%3A0x9386976cf4ad0ef2!2zRHUgTGnMo2NoIFRyacOqzIB1IFRyYW5n!5e0!3m2!1svi!2s!4v1776017354477!5m2!1svi!2s" 
          width="100%"
          height="100%"
          className="absolute inset-0 h-full w-full border-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Bàu Cát Trắng - Maps"
        />
      </div>
    </section>
  );
}
