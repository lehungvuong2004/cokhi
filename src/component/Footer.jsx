import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* CỘT 1: THÔNG TIN THƯƠNG HIỆU */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-slate-900 shadow-lg group-hover:rotate-90 transition-transform duration-500">
                <i className="fa-solid fa-gear text-xl"></i>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tighter">
                Mạnh Hùng <br />
                <span className="text-amber-500 text-[10px] block font-medium tracking-[0.2em] -mt-1">Mechanical Engineering</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tự hào là đơn vị hàng đầu trong lĩnh vực gia công cơ khí chính xác và lắp đặt kết cấu thép. 
              Chất lượng bền bỉ - Tiến độ thần tốc.
            </p>
            {/* Mạng xã hội */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-b-2 border-amber-500 w-max pb-1">
              Điều hướng
            </h4>
            <ul className="space-y-4">
              {['Trang Chủ', 'Giới Thiệu', 'Sản Phẩm', 'Công Trình', 'Tin Tức', 'Liên Hệ'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-amber-500 hover:translate-x-2 transition-all flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: DỊCH VỤ CHÍNH */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-b-2 border-amber-500 w-max pb-1">
              Dịch vụ
            </h4>
            <ul className="space-y-4">
              {[
                'Gia công CNC chính xác',
                'Cắt Laser tấm & ống',
                'Hàn kỹ thuật cao MIG/TIG',
                'Lắp đặt kết cấu nhà xưởng',
                'Chế tạo máy theo yêu cầu'
              ].map((service) => (
                <li key={service} className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-solid fa-screwdriver-wrench text-amber-500 text-sm"></i>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ TRỰC TIẾP */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-b-2 border-amber-500 w-max pb-1">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-amber-500"></i>
                <span className="text-gray-400 text-sm">Ninh Kiều, Cần Thơ</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-amber-500"></i>
                <span className="text-gray-400 text-sm">0961.570.201</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-amber-500"></i>
                <span className="text-gray-400 text-sm">nguyenmanhhung28089899@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-clock mt-1 text-amber-500"></i>
                <span className="text-gray-400 text-sm">
                  Thứ 2 - Thứ 7: 07:30 - 17:30 <br />
                  Chủ Nhật: Nghỉ
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* THANH BẢN QUYỀN DƯỚI CÙNG */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 <span className="text-white font-bold">Cơ Khí Mạnh Hùng</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;