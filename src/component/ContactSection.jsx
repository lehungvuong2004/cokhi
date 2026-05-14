import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Tiêu đề trang */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">
            Liên Hệ Với <span className="text-amber-500">Chúng Tôi</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Quý khách có nhu cầu về gia công cơ khí, lắp đặt công trình hoặc cần tư vấn kỹ thuật, 
            vui lòng để lại thông tin hoặc liên hệ trực tiếp qua hotline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* CỘT 1 & 2: THÔNG TIN LIÊN HỆ */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase">Địa Chỉ Xưởng</h4>
                  <p className="text-gray-600 mt-1">Ninh Kiều, Cần Thơ (Gần khu công nghiệp...)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-slate-900">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone-volume text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase">Điện Thoại</h4>
                  <p className="text-gray-600 mt-1">0961.570.201</p>
                  <p className="text-gray-600 italic text-sm">Hỗ trợ 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase">Email Liên Hệ</h4>
                  <p className="text-gray-600 mt-1">nguyenmanhhung28089899@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 3: FORM LIÊN HỆ */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase">Gửi yêu cầu tư vấn</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Họ và Tên</label>
                    <input type="text" placeholder="Nhập họ tên..." 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Số Điện Thoại</label>
                    <input type="tel" placeholder="Nhập số điện thoại..." 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email (nếu có)</label>
                  <input type="email" placeholder="Nhập email của bạn..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nội dung yêu cầu</label>
                  <textarea rows="4" placeholder="Bạn cần tư vấn về sản phẩm hay công trình nào?" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" 
                  className="w-full md:w-max px-10 py-4 bg-slate-900 text-white font-bold uppercase rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                  Gửi Thông Tin
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bản đồ Google Maps (Placeholder) */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-inner h-[400px] bg-gray-200 relative">
           <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
             {/* Bạn có thể thay thế <iframe> Google Maps vào đây */}
             Bản đồ vị trí Cơ Khí Mạnh Hùng
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;