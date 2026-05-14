import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-laser',
      title: 'Cắt Laser CNC',
      description: 'Cắt laser tinh xảo với độ chính xác cao, đáp ứng các tiêu chuẩn quốc tế, xử lý mọi loại vật liệu kim loại.'
    },
    {
      icon: 'fa-fire',
      title: 'Hàn Kỹ Thuật',
      description: 'Hàn chuyên nghiệp sử dụng các kỹ thuật hiện đại, đảm bảo chất lượng và độ bền cao của sản phẩm.'
    },
    {
      icon: 'fa-cube',
      title: 'Gia Công Kim Loại',
      description: 'Gia công chi tiết máy, mẫu công nghiệp với máy móc hiện đại và đội ngũ kỹ sư giàu kinh nghiệm.'
    },
    {
      icon: 'fa-ruler-combined',
      title: 'Thiết Kế CAD',
      description: 'Thiết kế chi tiết sản phẩm, hỗ trợ tối ưu hóa chi phí và quy trình sản xuất với đội ngũ chuyên gia.'
    },
    {
      icon: 'fa-hammer',
      title: 'Sửa Chữa & Bảo Trì',
      description: 'Dịch vụ sửa chữa, bảo trì thiết bị công nghiệp với hỗ trợ 24/7 từ kỹ sư giàu kinh nghiệm.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Kiểm Định Chất Lượng',
      description: 'Kiểm tra chất lượng sản phẩm theo tiêu chuẩn ISO, đảm bảo độ tin cậy và an toàn tối đa.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-600 text-sm font-semibold mb-4">
            ⚙️ DỊCH VỤ CHÍNH
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Dịch Vụ Cơ Khí Chuyên Nghiệp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cung cấp giải pháp cơ khí toàn diện từ thiết kế đến sản xuất với chất lượng đạt chuẩn quốc tế
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-gray-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">Tìm hiểu thêm</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>

              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
