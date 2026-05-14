import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  // Dữ liệu mẫu (Sau này bạn có thể gọi từ API hoặc CMS)
  const newsData = [
    {
      id: 1,
      title: "Bàn giao hệ thống khung thép tiền chế tại KCN Trà Nóc",
      date: "20/03/2026",
      category: "Dự án",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop",
      excerpt: "Cơ Khí Mạnh Hùng vừa hoàn thiện và bàn giao hạng mục khung nhà xưởng cho đối tác Nhật Bản..."
    },
    {
      id: 2,
      title: "5 kỹ thuật hàn hiện đại giúp tăng độ bền cho kết cấu thép",
      date: "15/03/2026",
      category: "Kỹ thuật",
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=500&auto=format&fit=crop",
      excerpt: "Chia sẻ các phương pháp hàn MIG/TIG tối ưu nhất để đảm bảo mối hàn không bị rỉ sét và chịu lực tốt..."
    },
    {
      id: 3,
      title: "Cơ Khí Mạnh Hùng đầu tư hệ thống máy cắt CNC Laser mới",
      date: "10/03/2026",
      category: "Tin công ty",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=500&auto=format&fit=crop",
      excerpt: "Với mục tiêu nâng cao độ chính xác, chúng tôi đã đưa vào vận hành máy cắt Laser công suất lớn..."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Tiêu đề & Nút xem tất cả */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 leading-none">
              Tin Tức <span className="text-amber-500">& Sự Kiện</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg font-medium">
              Cập nhật những hoạt động mới nhất, dự án tiêu biểu và kiến thức chuyên ngành cơ khí.
            </p>
          </div>
          <Link to="/tin-tuc" className="mt-4 md:mt-0 text-amber-600 font-bold uppercase text-sm flex items-center gap-2 hover:text-slate-900 transition-colors">
            Xem tất cả bài viết <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        {/* Danh sách tin tức */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Ảnh Thumbnail */}
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-video shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase rounded-md shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Nội dung bài viết */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 uppercase">
                  <Link to={`/tin-tuc/${item.id}`}>{item.title}</Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <Link 
                  to={`/tin-tuc/${item.id}`}
                  className="inline-block pt-2 font-bold text-slate-900 border-b-2 border-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:px-2 transition-all duration-300"
                >
                  Đọc tiếp
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;