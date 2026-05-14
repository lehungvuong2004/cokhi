import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';

const Projects = () => {
  const projectImages = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', 
    '5.jpg', '6.jpg', '7.jpg', '8.jpg'
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-600 text-sm font-semibold mb-4">
            🏆 CÔNG TRÌNH NỔI BẬT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Các Dự Án Tiêu Biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những sản phẩm chất lượng cao từ Cơ Khí Mạnh Hùng được khách hàng tin tưởng
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projectImages.map((image, index) => (
            <ImageCard
              key={index}
              image={new URL(`../img/${image}`, import.meta.url).href}
              title={`Công Trình ${index + 1}`}
              description="Cắt laser - Hàn kỹ thuật"
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link to="/cong-trinh" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
            Xem Tất Cả Công Trình →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
