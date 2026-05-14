import React from 'react';

const Features = () => {
  const features = [
    {
      number: '01',
      title: 'Công Nghệ Tiên Tiến',
      description: 'Sử dụng máy móc và công nghệ mới nhất từ các hãng hàng đầu thế giới'
    },
    {
      number: '02',
      title: 'Đội Ngũ Chuyên Gia',
      description: 'Kỹ sư và thợ lành nghề với hơn 10+ năm kinh nghiệm trong ngành'
    },
    {
      number: '03',
      title: 'Tiêu Chuẩn Quốc Tế',
      description: 'Tuân thủ đúng tiêu chuẩn ISO, đạt chuẩn chất lượng quốc tế'
    },
    {
      number: '04',
      title: 'Giao Hàng Đúng Hạn',
      description: 'Cam kết giao hàng đúng thời gian với mức độ hoàn thiện cao nhất'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold">
                ✨ VÌ SAO CHỌN CHÚNG TÔI
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Cam Kết Chất Lượng & Uy Tín
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Với 12 năm hoạt động trong lĩnh vực cơ khí, chúng tôi luôn đặt chất lượng lên hàng đầu và cam kết thỏa mãn khách hàng.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-lg group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      {feature.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur hover:border-amber-500 transition-colors duration-300">
                <div className="text-4xl font-black text-amber-400 mb-2">150+</div>
                <p className="text-gray-300 font-semibold">Dự Án Hoàn Thành</p>
                <p className="text-sm text-gray-500 mt-2">Trong nhiều lĩnh vực khác nhau</p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur hover:border-amber-500 transition-colors duration-300">
                <div className="text-4xl font-black text-amber-400 mb-2">50+</div>
                <p className="text-gray-300 font-semibold">Khách Hàng Tin Tưởng</p>
                <p className="text-sm text-gray-500 mt-2">Từ các công ty lớn</p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur hover:border-amber-500 transition-colors duration-300">
                <div className="text-4xl font-black text-amber-400 mb-2">12+</div>
                <p className="text-gray-300 font-semibold">Năm Kinh Nghiệm</p>
                <p className="text-sm text-gray-500 mt-2">Phát triển liên tục</p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur hover:border-amber-500 transition-colors duration-300">
                <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
                <p className="text-gray-300 font-semibold">Hài Lòng Khách</p>
                <p className="text-sm text-gray-500 mt-2">Độ tín nhiệm cao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
