import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      author: 'Nguyễn Văn A',
      position: 'Công Ty Xây Dựng ABC',
      comment: 'Dịch vụ của Cơ Khí Mạnh Hùng tuyệt vời, giao hàng đúng hạn và chất lượng vượt mong đợi.',
      rating: 5
    },
    {
      author: 'Trần Thị B',
      position: 'Nhà Máy Kim Loại XYZ',
      comment: 'Chất lượng sản phẩm cao, giá cả hợp lý. Chúng tôi sẽ tiếp tục hợp tác lâu dài.',
      rating: 5
    },
    {
      author: 'Lê Văn C',
      position: 'Công Ty Thiết Kế DEF',
      comment: 'Đội ngũ tư vấn thiết kế chuyên nghiệp, giúp tôi tiết kiệm chi phí và thời gian sản xuất.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-600 text-sm font-semibold mb-4">
            ⭐ ĐÁNH GIÁ KHÁCH HÀNG
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Lời Từ Khách Hàng
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khách hàng của chúng tôi luôn hài lòng với chất lượng dịch vụ và sản phẩm
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex justify-center">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
