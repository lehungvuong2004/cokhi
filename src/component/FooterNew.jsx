import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center font-bold">
                <i className="fas fa-cog text-white"></i>
              </div>
              <h3 className="font-black text-white text-lg">Mạnh Hùng</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Cơ Khí Mạnh Hùng - Giải pháp cơ khí toàn diện với công nghệ tiên tiến và đội ngũ chuyên gia giàu kinh nghiệm.
            </p>
            <div className="flex gap-3 pt-4">
              <Link to="https://www.facebook.com/nguyen.manh.hung.751416" target='_blank' className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <i className="fab fa-facebook text-white"></i>
              </Link>
              <Link to="#" target='_blank' className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <i className="fab fa-twitter text-white"></i>
              </Link>
              <Link to="#" target='_blank' className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin text-white"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Dịch Vụ</h4>
            <ul className="space-y-3">
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Cắt Laser CNC</Link></li>
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Hàn Kỹ Thuật</Link></li>
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Gia Công Kim Loại</Link></li>
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Thiết Kế CAD</Link></li>
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Sửa Chữa & Bảo Trì</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Liên Kết</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Trang Chủ</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-amber-400 transition-colors">Giới Thiệu</Link></li>
              <li><Link to="/san-pham" className="hover:text-amber-400 transition-colors">Sản Phẩm</Link></li>
              <li><Link to="/cong-trinh" className="hover:text-amber-400 transition-colors">Công Trình</Link></li>
              <li><Link to="/lien-he" className="hover:text-amber-400 transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-amber-400 mt-1"></i>
                <span>68 Bùi Tấn Diên, Đà Nẵng</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-amber-400 mt-1"></i>
                <span>0961.570.201</span>              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-amber-400 mt-1"></i>
                <span>nguyenmanhhung28089899@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-amber-400 mt-1"></i>
                <span>Thứ Hai - Thứ Chủ nhật: 7:30 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {currentYear} Cơ Khí Mạnh Hùng. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Điều Khoản Dịch Vụ</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Chính Sách Riêng Tư</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
