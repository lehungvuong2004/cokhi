import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Không tìm thấy công trình</h2>
          <Link to="/cong-trinh" className="text-amber-600 hover:text-amber-700 font-medium">
            &larr; Quay lại danh sách công trình
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-amber-600 transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link to="/cong-trinh" className="hover:text-amber-600 transition-colors">Công trình</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{project.title}</span>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 border-l-4 border-amber-500 pl-4">
            {project.description}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Image & Article */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full rounded-xl h-auto object-cover max-h-[600px]"
              />
            </div>
            
            <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-500 prose-img:rounded-xl">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </article>
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="space-y-8">
            {/* Project Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase border-b pb-4">Thông tin dự án</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-gray-400 text-sm font-semibold uppercase mb-1">Khách hàng</span>
                  <span className="text-slate-800 font-medium">{project.client}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-sm font-semibold uppercase mb-1">Thời gian</span>
                  <span className="text-slate-800 font-medium">{project.date}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-sm font-semibold uppercase mb-1">Địa điểm</span>
                  <span className="text-slate-800 font-medium">{project.location}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-sm font-semibold uppercase mb-1">Hạng mục</span>
                  <span className="text-slate-800 font-medium">Gia công, Lắp dựng cơ khí</span>
                </li>
              </ul>
            </div>

            {/* CTA Sidebar */}
            <div className="bg-slate-900 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Bạn có dự án tương tự?</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Liên hệ ngay với đội ngũ kỹ sư của chúng tôi để nhận được tư vấn kỹ thuật và báo giá chi tiết nhất cho công trình của bạn.
              </p>
              <Link to="/lien-he" className="block text-center w-full bg-amber-500 text-slate-900 font-bold uppercase py-3 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30">
                Nhận tư vấn ngay
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
