import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Sẵn Sàng Cho Dự Án Tiếp Theo?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Hãy liên hệ với chúng tôi ngay để nhận tư vấn miễn phí và báo giá chi tiết
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-slate-700">
            <div className="space-y-2">
              <i className="fas fa-phone text-amber-400 text-2xl"></i>
              <p className="text-gray-700 text-sm">Gọi chúng tôi</p>
              <p className="text-white font-bold text-lg">0961.570.201</p>
            </div>
            <div className="space-y-2">
              <i className="fas fa-envelope text-amber-400 text-2xl"></i>
              <p className="text-gray-700 text-sm">Email</p>
              <p className="text-white font-bold text-lg">info@manhhung.com</p>
            </div>
            <div className="space-y-2">
              <i className="fas fa-map-marker-alt text-amber-400 text-2xl"></i>
              <p className="text-gray-700 text-sm">Địa chỉ</p>
              <p className="text-white font-bold text-lg">TP. Hồ Chí Minh</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Link to="/lien-he" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Liên Hệ Ngay</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/lien-he" className="px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              <i className="fas fa-paper-plane"></i>
              <span>Gửi Yêu Cầu</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
