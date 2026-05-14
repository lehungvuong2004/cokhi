import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Xử lý sự kiện cuộn chuột
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Giới Thiệu', path: '/gioi-thieu' },
    // { name: 'Sản Phẩm', path: '/san-pham' },
    { name: 'Công Trình', path: '/cong-trinh' },
    { name: 'Tin Tức', path: '/tin-tuc' },
    { name: 'Liên Hệ', path: '/lien-he' },
  ];

  return (
    <header className="w-full z-50 font-sans">
      
      {/* --- 1. TOPBAR (Thanh đen) --- 
          Nó sẽ biến mất (ẩn đi) khi lướt xuống nhờ logic !isScrolled
      */}
      <div className={`bg-slate-900 text-white transition-all duration-300 ${isScrolled ? '-translate-y-full absolute' : 'relative'}`}>
        <div className="container mx-auto px-4 md:px-10 py-2 flex justify-between items-center text-sm">
          <div className="hidden md:block italic text-amber-400">
            Chất lượng tạo nên uy tín - Cơ Khí Mạnh Hùng
          </div>
          {/* contact */}
         
          <div className="flex items-center gap-x-6">
             <div className="">
            <div className="flex items-center gap-x-4 border-r border-slate-700 pr-6">
              <a href="https://facebook.com" target='_blank' rel="noreferrer" className="hover:text-amber-500 transition-colors">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
              <a href="mailto:email@gmail.com" className="hover:text-amber-500 transition-colors">
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors font-bold">Zalo</a>
            </div>
          </div>
            <div className="flex items-center gap-x-2 text-amber-400 font-bold">
              <i className="fa-solid fa-phone-volume"></i>
              <span>0961.570.201</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAV (Thanh trắng) --- 
          Khi isScrolled = true, nó sẽ trở thành fixed top-0
      */}
      <div className={`w-full transition-all duration-300 shadow-md z-50 
        ${isScrolled 
          ? 'fixed top-0 bg-white/95 backdrop-blur-md py-2' 
          : 'relative bg-white py-4'}`}
      >
        <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg transition-all 
              ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <i className="fa-solid fa-gear text-xl"></i>
            </div>
            <div>
              <h1 className={`font-black uppercase tracking-tighter text-slate-800 leading-none transition-all
                ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
                Mạnh Hùng
                <span className="text-amber-500 text-[10px] block font-medium tracking-widest mt-1">Mechanical</span>
              </h1>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[14px] font-bold uppercase tracking-wide transition-all duration-300 hover:text-amber-600
                  ${location.pathname === item.path ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Mobile */}
          <div className="flex items-center gap-x-4">
            <button className="p-2 hover:bg-amber-100 rounded-full transition-colors">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button className="lg:hidden">
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;