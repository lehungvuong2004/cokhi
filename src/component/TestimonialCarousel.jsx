import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="w-full py-12">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
        }}
        className="w-full max-w-xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 md:p-12 shadow-lg border-2 border-amber-200 h-80 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-1 text-amber-500 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-700 text-lg italic flex-grow my-4">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
