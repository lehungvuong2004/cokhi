import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (location.pathname !== prevPath) {
    setIsMobileMenuOpen(false);
    setPrevPath(location.pathname);
  }

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
    <header className="w-full z-50 font-sans relative">

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
                <Link to="https://www.facebook.com/nguyen.manh.hung.751416" target='_blank' rel="noreferrer" className="hover:text-amber-500 transition-colors">
                  <i className="fa-brands fa-facebook text-lg"></i>
                </Link>
                <a href="mailto:nguyenmanhhung28089899@gmail.com
" className="hover:text-amber-500 transition-colors">
                  <i className="fa-solid fa-envelope text-lg"></i>
                </a>
                <Link to="https://zalo.me/0961570201" target='_blank' rel="noreferrer" className="hover:text-amber-500 transition-colors font-bold">Zalo</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-2 text-amber-400 font-bold">
              <i className="fa-solid fa-phone-volume"></i>
              <span>0961.570.201</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full transition-all duration-300 shadow-md z-50 
        ${isScrolled
          ? 'fixed top-0 bg-white/95 backdrop-blur-md py-2'
          : 'relative bg-white py-4'}`}
      >
        <div className="container mx-auto px-4 md:px-10 flex justify-between items-center relative">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group z-50">
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

          {/* Navigation Menu (Desktop) */}
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

          {/* Search & Mobile Toggle */}
          <div className="flex items-center gap-x-4 z-50">
            <button className="p-2 hover:bg-amber-100 rounded-full transition-colors hidden md:block">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button
              className="lg:hidden p-2 text-slate-800 hover:text-amber-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>

        {/* --- 3. MOBILE MENU (Thả xuống) --- */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-bold uppercase tracking-wide py-2 border-b border-slate-50 transition-colors
                  ${location.pathname === item.path ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex gap-4 text-xl text-slate-500">
                <a href="#" className="hover:text-amber-500"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="hover:text-amber-500"><i className="fa-solid fa-envelope"></i></a>
              </div>
              <div className="text-amber-600 font-bold">
                <i className="fa-solid fa-phone-volume mr-2"></i>
                0961.570.201
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;