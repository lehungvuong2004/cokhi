import React, { useState } from 'react';
import ImageCard from './ImageCard';

const ProjectGallery = () => {
  // Import all images from img folder
  const imageFiles = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
    '10c.jpg', '11.jpg', '12.jpg', '18.jpg',
    'nha1.jpg', 'nha2.jpg', 'nha3.jpg', 'nha4.jpg', 'nha5.jpg', 'nha6.jpg', 'nha7.jpg', 'nha8.jpg',
    '_!.jpg', '_!2.jpg', '_2.jpg', '_3.jpg', '_4.jpg', '_5.jpg', '_6.jpg', '_7.jpg', '_8.jpg', '_9.jpg',
    '_10.jpg', '_11.jpg', '_13.jpg', '_14.jpg', '_15.jpg', '_16.jpg', '_17.jpg', '_18.jpg', '_19.jpg',
    '_21.jpg', '_22.jpg', '_23.jpg', '_24.jpg', '_25.jpg', '_26.jpg', '_27.jpg', '_28.jpg', '_29.jpg',
    '_31.jpg', '_32.jpg', '_33.jpg', '_34.jpg', '_35.jpg', '_36.jpg', '_37.jpg', '_38.jpg', '_39.jpg', '_40.jpg'
  ];

  // Project data mapping
  const projectData = {
    '1.jpg': { title: 'Công Trình 01', description: 'Cắt laser và hàn kỹ thuật cao' },
    '2.jpg': { title: 'Công Trình 02', description: 'Giải pháp kết cấu thép tối ưu' },
    '3.jpg': { title: 'Công Trình 03', description: 'Xây dựng cải tiến sáng tạo' },
    '4.jpg': { title: 'Công Trình 04', description: 'Tiến độ thi công vượt trội' },
    '5.jpg': { title: 'Công Trình 05', description: 'Chất lượng cao, uy tín' },
    '6.jpg': { title: 'Công Trình 06', description: 'Công nghệ tiên tiến' },
    '7.jpg': { title: 'Công Trình 07', description: 'Thiết kế chuyên nghiệp' },
    '8.jpg': { title: 'Công Trình 08', description: 'Hoàn thiện tập trung chất lượng' },
    '9.jpg': { title: 'Công Trình 09', description: 'Dự án thành công' },
    '10c.jpg': { title: 'Công Trình 10', description: 'Cơ Khí Mạnh Hùng' },
    '11.jpg': { title: 'Công Trình 11', description: 'Hàn kỹ thuật chuyên sâu' },
    '12.jpg': { title: 'Công Trình 12', description: 'Cắt laser precision' },
    '18.jpg': { title: 'Công Trình 13', description: 'Sản phẩm chất lượng' },
    'nha1.jpg': { title: 'Công Trình Xây Dựng 01', description: 'Nhà thép tiêu chuẩn' },
    'nha2.jpg': { title: 'Công Trình Xây Dựng 02', description: 'Kết cấu thép hiện đại' },
    'nha3.jpg': { title: 'Công Trình Xây Dựng 03', description: 'Thi công nhanh gọn' },
    'nha4.jpg': { title: 'Công Trình Xây Dựng 04', description: 'Thiết kế vững chắc' },
    'nha5.jpg': { title: 'Công Trình Xây Dựng 05', description: 'Hàng rào an toàn' },
    'nha6.jpg': { title: 'Công Trình Xây Dựng 06', description: 'Kết cấu chắc chắn' },
    'nha7.jpg': { title: 'Công Trình Xây Dựng 07', description: 'Công trình hoàn thiện' },
    'nha8.jpg': { title: 'Công Trình Xây Dựng 08', description: 'Dự án tổng thể' },
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (filename) => {
    setSelectedImage(filename);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-10">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 uppercase">
              Công Trình & Dự Án
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Những dự án tiêu biểu của Cơ Khí Mạnh Hùng với công nghệ cắt laser và hàn kỹ thuật cao
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {imageFiles.map((filename) => {
              const fileData = projectData[filename] || {
                title: filename.replace('.jpg', '').toUpperCase(),
                description: 'Công trình Cơ Khí Mạnh Hùng'
              };
              
              return (
                <ImageCard
                  key={filename}
                  image={new URL(`../img/${filename}`, import.meta.url).href}
                  title={fileData.title}
                  description={fileData.description}
                  onClick={() => handleImageClick(filename)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white hover:text-amber-500 transition-colors"
            >
              <i className="fa-solid fa-times text-3xl"></i>
            </button>

            {/* Image */}
            <div className="relative w-full aspect-auto">
              <img 
                src={new URL(`../img/${selectedImage}`, import.meta.url).href} 
                alt={selectedImage}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Image info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">
                {projectData[selectedImage]?.title || selectedImage}
              </h3>
              <p className="text-gray-300">
                {projectData[selectedImage]?.description || 'Công trình'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
