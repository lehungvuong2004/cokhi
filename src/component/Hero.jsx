import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-10 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold">
                  Công Nghệ Cơ Khí Tiên Tiến
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Cơ Khí
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Mạnh Hùng
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Giải pháp cơ khí toàn diện với công nghệ laser tiên tiến, hàn kỹ thuật cao và tư vấn thiết kế chuyên sâu.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/lien-he" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span>Liên Hệ Ngay</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/cong-trinh" className="px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-all duration-300">
                Xem Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-amber-400"><CountUp end={150} />+</div>
                <p className="text-sm text-gray-400">Dự Án</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-amber-400"><CountUp end={12} />+</div>
                <p className="text-sm text-gray-400">Năm Kinh Nghiệm</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-amber-400"><CountUp end={50} />+</div>
                <p className="text-sm text-gray-400">Khách Hàng</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <i className="fas fa-laser text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-white">Cắt Laser CNC</p>
                      <p className="text-xs text-gray-400">Độ chính xác cao</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <i className="fas fa-fire text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-white">Hàn Kỹ Thuật</p>
                      <p className="text-xs text-gray-400">Tiêu chuẩn quốc tế</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <i className="fas fa-ruler text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-white">Thiết Kế CAD</p>
                      <p className="text-xs text-gray-400">Tư vấn chuyên sâu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-gray-400">Kéo xuống</span>
          <i className="fas fa-chevron-down text-amber-400"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
