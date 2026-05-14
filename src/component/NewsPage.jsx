import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsData = [
    {
      id: 1,
      title: "Bàn giao hệ thống khung thép tiền chế tại KCN Trà Nóc",
      date: "20/03/2026",
      category: "Dự án",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop",
      excerpt: "Cơ Khí Mạnh Hùng vừa hoàn thiện và bàn giao hạng mục khung nhà xưởng cho đối tác Nhật Bản. Dự án đánh dấu bước ngoặt lớn trong quý I."
    },
    {
      id: 2,
      title: "5 kỹ thuật hàn hiện đại giúp tăng độ bền cho kết cấu thép",
      date: "15/03/2026",
      category: "Kỹ thuật",
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=500&auto=format&fit=crop",
      excerpt: "Chia sẻ các phương pháp hàn MIG/TIG tối ưu nhất để đảm bảo mối hàn không bị rỉ sét và chịu lực tốt trong mọi điều kiện thời tiết."
    },
    {
      id: 3,
      title: "Cơ Khí Mạnh Hùng đầu tư hệ thống máy cắt CNC Laser mới",
      date: "10/03/2026",
      category: "Tin công ty",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=500&auto=format&fit=crop",
      excerpt: "Với mục tiêu nâng cao độ chính xác, chúng tôi đã đưa vào vận hành máy cắt Laser công suất lớn phục vụ cho các chi tiết phức tạp."
    },
    {
      id: 4,
      title: "Quy trình kiểm tra an toàn tại xưởng gia công",
      date: "05/03/2026",
      category: "Tin công ty",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=500&auto=format&fit=crop",
      excerpt: "An toàn lao động luôn là ưu tiên hàng đầu. Khám phá các bước kiểm tra an toàn nghiêm ngặt mà mọi kỹ sư tại xưởng đều phải tuân thủ."
    },
    {
      id: 5,
      title: "Tối ưu hóa chi phí khi xây dựng nhà xưởng công nghiệp",
      date: "28/02/2026",
      category: "Kiến thức",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=500&auto=format&fit=crop",
      excerpt: "Những lưu ý quan trọng khi lập dự toán và lựa chọn vật liệu nhằm tiết kiệm tối đa ngân sách mà vẫn đảm bảo độ bền công trình."
    },
    {
      id: 6,
      title: "Ứng dụng tự động hóa trong ngành cơ khí tại Việt Nam",
      date: "20/02/2026",
      category: "Kỹ thuật",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop",
      excerpt: "Robot và hệ thống PLC đang dần thay đổi diện mạo ngành cơ khí. Cùng tìm hiểu xu hướng công nghệ nổi bật trong năm 2026."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900 py-16 mb-12">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 tracking-tight">
            Tin Tức <span className="text-amber-500">& Sự Kiện</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Cập nhật những hoạt động mới nhất, dự án tiêu biểu và kiến thức chuyên ngành cơ khí từ Cơ Khí Mạnh Hùng.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10">
        {/* Categories / Filter (Visual only for now) */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['Tất cả', 'Tin công ty', 'Dự án', 'Kỹ thuật', 'Kiến thức'].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                idx === 0 
                ? 'bg-amber-500 text-slate-900 shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase rounded-md shadow-md backdrop-blur-sm bg-opacity-90">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <i className="fa-regular fa-calendar-check text-amber-500"></i>
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 uppercase mb-3 leading-snug">
                  <Link to={`/tin-tuc/${item.id}`}>{item.title}</Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {item.excerpt}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <Link 
                    to={`/tin-tuc/${item.id}`}
                    className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    Đọc tiếp <i className="fa-solid fa-arrow-right-long text-sm transform group-hover:translate-x-2 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="w-10 h-10 rounded-lg bg-amber-500 text-white font-bold shadow-md flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all font-bold">
            2
          </button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
