import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';

const AnimatedGallery = ({ images, title }) => {
  return (
    <div className="w-full py-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">{title}</h2>
      <Swiper
        effect={'creative'}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCreative, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-80 md:h-96">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-200 text-sm mt-2">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimatedGallery;
