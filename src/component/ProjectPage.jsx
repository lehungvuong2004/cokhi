import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ProjectCarousel from './ProjectCarousel';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white overflow-hidden">
      {/* Hero Section */}
      <div className={`pt-40 pb-16 bg-linear-to-r from-amber-50 to-orange-50 border-b-2 border-amber-500 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Công Trình Đã Thực Hiện
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Những công trình tiêu biểu, quy mô lớn, đạt tiêu chuẩn quốc tế
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-12 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-4xl font-bold text-amber-600 mb-2">150+</h3>
            <p className="text-slate-600">Dự Án Hoàn Thành</p>
          </div>
          <div className="text-center p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-4xl font-bold text-amber-600 mb-2">50K+</h3>
            <p className="text-slate-600">Diện Tích Xây Dựng</p>
          </div>
          <div className="text-center p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-4xl font-bold text-amber-600 mb-2">100+</h3>
            <p className="text-slate-600">Khách Hàng</p>
          </div>
          <div className="text-center p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-4xl font-bold text-amber-600 mb-2">20+</h3>
            <p className="text-slate-600">Năm Kinh Nghiệm</p>
          </div>
        </div>
      </div>

      {/* Projects Carousel - Featured */}
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-16 transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
          Công Trình Nổi Bật
        </h2>
        <ProjectCarousel projects={projectsData.slice(0, 6)} />
      </div>

      {/* Projects Grid - All Projects */}
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-16 border-t-2 border-slate-200 transform transition-all duration-1000 delay-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Tất Cả Công Trình
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ImageCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              onClick={() => navigate(`/cong-trinh/${project.id}`)}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bạn Có Dự Án Cần Thực Hiện?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực
          </p>
          <a
            href="/lien-he"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
          >
            Liên Hệ Tư Vấn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
