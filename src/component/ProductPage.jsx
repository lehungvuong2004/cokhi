import React from 'react';
import ProductCarousel from './ProductCarousel';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: '/src/img/1.jpg',
      title: 'Máy Gia Công CNC',
      description: 'Máy gia công CNC hiện đại, độ chính xác cao, phù hợp cho sản xuất các chi tiết phức tạp'
    },
    {
      id: 2,
      image: '/src/img/2.jpg',
      title: 'Máy Khoan Công Nghiệp',
      description: 'Máy khoan tự động với công suất mạnh, ứng dụng trong các xưởng sản xuất quy mô lớn'
    },
    {
      id: 3,
      image: '/src/img/3.jpg',
      title: 'Hệ Thống Truyền Động',
      description: 'Các hệ thống truyền động tiên tiến, giảm tiếng ồn, tăng hiệu suất làm việc'
    },
    {
      id: 4,
      image: '/src/img/4.jpg',
      title: 'Thiết Bị Hàn Công Nghiệp',
      description: 'Thiết bị hàn tự động, chất lượng hàn cao, tiết kiệm điện năng, bền bỉ'
    },
    {
      id: 5,
      image: '/src/img/5.jpg',
      title: 'Máy Tiện CNC Cao Cấp',
      description: 'Máy tiện CNC với độ phân giải cao, hỗ trợ gia công chi tiết lăn tròn, hình trụ'
    },
    {
      id: 6,
      image: '/src/img/6.jpg',
      title: 'Bộ Phận Cơ Khí Chính Xác',
      description: 'Các bộ phận được gia công với độ chính xác 0.01mm, đáp ứng tiêu chuẩn quốc tế'
    },
    {
      id: 7,
      image: '/src/img/7.jpg',
      title: 'Hệ Thống Thủy Lực',
      description: 'Hệ thống thủy lực đầy đủ, bền bỉ, áp lực hoạt động ổn định từ 0 - 300 bar'
    },
    {
      id: 8,
      image: '/src/img/8.jpg',
      title: 'Máy Cắt Laser',
      description: 'Máy cắt laser CO2 công suất cao, cắt chính xác trên các loại vật liệu khác nhau'
    },
    {
      id: 9,
      image: '/src/img/9.jpg',
      title: 'Lò Nung Công Nghiệp',
      description: 'Lò nung nhiệt độ cao, kiểm soát nhiệt độ tự động, an toàn tuyệt đối'
    },
    {
      id: 10,
      image: '/src/img/10c.jpg',
      title: 'Bộ Truyền Động Bánh Răng',
      description: 'Bánh răng công nghiệp chính xác cao, bền bỉ, giảm tiếng ồn, truyền động mạnh'
    },
    {
      id: 11,
      image: '/src/img/11.jpg',
      title: 'Máy Nén Không Khí',
      description: 'Máy nén không khí công suất cao, tiết kiệm năng lượng, độ ồn thấp'
    },
    {
      id: 12,
      image: '/src/img/12.jpg',
      title: 'Hệ Thống Kiểm Soát Tự Động',
      description: 'PLC và HMI hiện đại, hỗ trợ tự động hóa toàn bộ quy trình sản xuất'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="pt-40 pb-16 bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-amber-500">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Sản Phẩm Cơ Khí
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Các sản phẩm cơ khí chất lượng cao, hiện đại, đáp ứng tiêu chuẩn quốc tế
          </p>
        </div>
      </div>

      {/* Products Carousel - Featured Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
          Sản Phẩm Nổi Bật
        </h2>
        <ProductCarousel products={products} />
      </div>

      {/* Products Grid - All Products */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 border-t-2 border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Tất Cả Sản Phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ImageCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Quan Tâm Đến Sản Phẩm Nào?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Hãy liên hệ với chúng tôi để nhận tư vấn và báo giá chi tiết
          </p>
          <a
            href="/lien-he"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
          >
            Liên Hệ Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
