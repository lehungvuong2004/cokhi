import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full min-h-dvh overflow-hidden">
      {/* 1. Background Image với Overlay tối để nổi bật chữ */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop')`, // Thay bằng link ảnh của bạn
        }}
      >
        {/* Lớp phủ gradient từ trái sang phải để hỗ trợ đọc text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* 2. Nội dung chính (Container) */}
      <div className="relative z-10 container mx-auto h-full px-4 md:px-10 flex flex-col justify-center min-h-dvh">
        
        {/* Chỉ số trang (01 / 04) */}
        <div className="text-white/80 font-mono text-lg mb-4 flex items-center gap-2">
          <span className="font-bold text-white text-xl">01</span>
          <span className="text-gray-400">/ 04</span>
        </div>

        {/* Tiêu đề chính (Heading) */}
        <h1 className="text-white text-5xl md:text-7xl font-black uppercase leading-[1.1] max-w-2xl mb-6 tracking-tight">
          Xây Dựng <br />
          Cải Tiến <br />
          <span className="text-white">Sáng Tạo.</span>
        </h1>

        {/* Mô tả ngắn */}
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
          Cơ Khí Mạnh Hùng ứng dụng công nghệ cắt Laser và hàn kỹ thuật cao, mang lại giải pháp kết cấu thép tối ưu và tiến độ thi công vượt trội.
        </p>

        {/* Nút bấm (CTA Button) */}
        <div className="flex items-center">
          <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-md font-bold uppercase flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Liên Hệ 
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>

      {/* 3. Thanh điều hướng dọc bên phải (Vertical Indicator) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
        <div className="w-[2px] h-20 bg-gray-500/50 relative">
          {/* Thanh active */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white"></div>
        </div>
      </div>

      {/* 4. Trang trí thêm: Bo góc nhẹ cho toàn bộ banner nếu cần */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default Banner;