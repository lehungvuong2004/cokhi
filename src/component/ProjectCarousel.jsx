import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectCarousel = ({ projects }) => {
  return (
    <div className="w-full py-12 h-[400px]">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-96 md:h-[500px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 max-w-xl">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
