import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const heroSlides = [
    {
      title: 'Cơ Khí Mạnh Hùng',
      subtitle: 'Giải pháp cơ khí toàn diện',
      description: 'Công nghệ laser tiên tiến, hàn kỹ thuật cao',
      icon: 'fa-laser',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      title: 'Sản Xuất Chất Lượng',
      subtitle: 'Đạt tiêu chuẩn quốc tế',
      description: 'Máy móc hiện đại, đội ngũ chuyên nghiệp',
      icon: 'fa-cube',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Dịch Vụ Tư Vấn',
      subtitle: 'Tổng đài 24/7',
      description: 'Hỗ trợ thiết kế CAD và tối ưu hóa quy trình',
      icon: 'fa-headset',
      gradient: 'from-red-600 to-pink-600',
    },
  ];

  return (
    <Swiper
      effect={'fade'}
      fadeEffect={{
        crossFade: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-96 md:h-[600px] rounded-2xl overflow-hidden"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center overflow-hidden`}>
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 md:px-8 space-y-6 animate-fade-in">
              <div className="text-6xl md:text-7xl mb-4">
                <i className={`fas ${slide.icon}`}></i>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-white/90">{slide.subtitle}</p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">{slide.description}</p>
              <div className="pt-4">
                <Link 
                  to="/lien-he" 
                  className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
                >
                  Tìm Hiểu Thêm
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
