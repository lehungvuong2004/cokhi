import React from 'react';

const AboutPage = () => {
  return (
    <div className=" bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* CỘT TRÁI: TIÊU ĐỀ VÀ MÔ TẢ */}
        <div className="lg:w-1/3 space-y-8 order-2 lg:order-1">
          {/* Counter & Subtitle */}
          <div className="text-gray-400 font-bold flex items-center gap-4">
            <span className="text-slate-900">03 / 04</span>
            <span className="uppercase tracking-[0.2em] text-xs">Về chúng tôi</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.1] text-slate-900 tracking-tighter">
            Gia Công <br /> 
            <span className="text-slate-900">Cơ Khí</span>
          </h1>

          {/* Intro Text */}
          <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
            Cơ Khí Mạnh Hùng: Cung cấp các dự án sáng tạo, chất lượng cao đúng tiến độ, 
            nâng cao công năng và tính thẩm mỹ cho mọi công trình bền vững.
          </p>

          {/* CTA Button */}
          <button className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold uppercase flex items-center gap-3 hover:bg-slate-900 transition-all duration-300 shadow-lg group">
            Liên Hệ Ngay
            <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        {/* CỘT GIỮA: HÌNH ẢNH TRUNG TÂM */}
        <div className="lg:w-1/3 relative order-1 lg:order-2">
          <div className="rounded-[60px] md:rounded-[80px] overflow-hidden shadow-2xl h-[500px] md:h-[650px] border-[12px] border-gray-50">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
              alt="Mạnh Hùng Mechanical"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nút điều hướng trên ảnh */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* CỘT PHẢI: DANH SÁCH ĐẶC ĐIỂM (FEATURES) */}
        <div className="lg:w-1/3 space-y-10 order-3">
          {/* Feature 1 */}
          <div className="group">
            <h4 className="font-black uppercase text-slate-900 text-xl mb-2 flex items-center gap-2 group-hover:text-amber-500 transition-colors">
              Tối Ưu Công Năng:
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-amber-500 transition-all">
              Sản phẩm được thiết kế riêng để đáp ứng chính xác nhu cầu kỹ thuật, tối ưu hóa quy trình vận hành và hiệu quả công việc.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <h4 className="font-black uppercase text-slate-900 text-xl mb-2 flex items-center gap-2 group-hover:text-amber-500 transition-colors">
              Thẩm Mỹ Tinh Tế:
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-amber-500 transition-all">
              Các mối hàn và bề mặt cơ khí được gia công tỉ mỉ, tạo ấn tượng chuyên nghiệp cho các hệ thống máy móc và nhà xưởng.
            </p>
          </div>

          {/* Feature 3 - Highlighted */}
          <div className="group">
            <h4 className="font-black uppercase text-amber-600 text-xl mb-2 flex items-center gap-2">
              Công Nghệ Đột Phá:
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-amber-500 pl-4 font-medium italic">
              Đầu tư vào hệ thống máy cắt Laser và CNC mới nhất giúp nâng cao độ chính xác tuyệt đối và tiết kiệm thời gian gia công.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group">
            <h4 className="font-black uppercase text-slate-900 text-xl mb-2 flex items-center gap-2 group-hover:text-amber-500 transition-colors">
              An Toàn & Tiêu Chuẩn:
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-amber-500 transition-all">
              Tuân thủ nghiêm ngặt các quy chuẩn kỹ thuật và an toàn lao động, đảm bảo sản phẩm bền bỉ và vận hành an toàn trong mọi môi trường.
            </p>
          </div>
        </div>

      </div>

      {/* TẦM NHÌN VÀ SỨ MỆNH */}
      <div className="container mx-auto px-4 md:px-10 mt-24">
        <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-amber-500 font-bold mb-4">Tầm nhìn</h3>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Trở thành đơn vị dẫn đầu ngành cơ khí khu vực</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Cơ Khí Mạnh Hùng hướng tới mục tiêu phát triển bền vững, không ngừng đổi mới công nghệ để cung cấp những giải pháp gia công và lắp dựng cơ khí tối ưu nhất. Chúng tôi khao khát xây dựng những công trình mang tầm vóc quốc tế, đóng góp vào sự phát triển công nghiệp hóa của đất nước.
            </p>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-amber-500 font-bold mb-4">Sứ mệnh</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-gem text-amber-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Chất lượng hàng đầu</h4>
                  <p className="text-slate-400">Mang đến những sản phẩm đạt tiêu chuẩn kỹ thuật khắt khe nhất.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-handshake text-amber-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Đồng hành cùng đối tác</h4>
                  <p className="text-slate-400">Xây dựng mối quan hệ tin cậy, hợp tác lâu dài và đôi bên cùng có lợi.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LỊCH SỬ PHÁT TRIỂN */}
      <div className="bg-gray-50 mt-24 py-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 mb-4">Hành Trình <span className="text-amber-500">Phát Triển</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Từ một xưởng gia công nhỏ, chúng tôi đã vươn lên trở thành đối tác tin cậy của nhiều doanh nghiệp lớn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="text-5xl font-black text-slate-200 group-hover:text-amber-500 transition-colors mb-4">2010</div>
              <h4 className="font-bold text-xl text-slate-900 mb-2">Thành lập</h4>
              <p className="text-gray-500 text-sm">Bắt đầu với xưởng gia công nhỏ quy mô 10 nhân sự tại TP.HCM.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group mt-0 md:mt-8">
              <div className="text-5xl font-black text-slate-200 group-hover:text-amber-500 transition-colors mb-4">2015</div>
              <h4 className="font-bold text-xl text-slate-900 mb-2">Mở rộng xưởng</h4>
              <p className="text-gray-500 text-sm">Chuyển sang nhà xưởng 2000m², đầu tư máy cắt CNC tiên tiến.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="text-5xl font-black text-slate-200 group-hover:text-amber-500 transition-colors mb-4">2020</div>
              <h4 className="font-bold text-xl text-slate-900 mb-2">Đạt chuẩn ISO</h4>
              <p className="text-gray-500 text-sm">Hoàn thiện quy trình quản lý chất lượng và ký kết nhiều dự án FDI.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group mt-0 md:mt-8">
              <div className="text-5xl font-black text-slate-200 group-hover:text-amber-500 transition-colors mb-4">2026</div>
              <h4 className="font-bold text-xl text-slate-900 mb-2">Vươn tầm khu vực</h4>
              <p className="text-gray-500 text-sm">Thành lập trung tâm nghiên cứu và ứng dụng tự động hóa vào sản xuất.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ĐỘI NGŨ NHÂN SỰ */}
      <div className="container mx-auto px-4 md:px-10 mt-24 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 mb-4">Đội Ngũ <span className="text-amber-500">Chuyên Gia</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Con người là tài sản quý giá nhất. Chúng tôi tự hào sở hữu đội ngũ kỹ sư và thợ cơ khí lành nghề, tận tâm với công việc.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Thành viên 1 */}
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-amber-500 p-1 group-hover:scale-105 transition-transform duration-300 shadow-xl bg-white">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Nguyễn Văn A</h3>
            <p className="text-amber-600 font-medium uppercase tracking-wide text-sm mb-3">Giám Đốc Điều Hành</p>
            <p className="text-gray-500 text-sm px-4">Hơn 15 năm kinh nghiệm quản lý các dự án cơ khí trọng điểm, định hướng chiến lược phát triển công ty.</p>
          </div>

          {/* Thành viên 2 */}
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-200 p-1 group-hover:border-amber-500 group-hover:scale-105 transition-all duration-300 shadow-xl bg-white">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Kỹ sư trưởng" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Trần Thị B</h3>
            <p className="text-amber-600 font-medium uppercase tracking-wide text-sm mb-3">Kỹ Sư Trưởng</p>
            <p className="text-gray-500 text-sm px-4">Chuyên gia về kết cấu thép và ứng dụng công nghệ cắt CNC laser vào tự động hóa sản xuất.</p>
          </div>

          {/* Thành viên 3 */}
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-200 p-1 group-hover:border-amber-500 group-hover:scale-105 transition-all duration-300 shadow-xl bg-white">
              <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop" alt="Quản đốc xưởng" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Lê Văn C</h3>
            <p className="text-amber-600 font-medium uppercase tracking-wide text-sm mb-3">Quản Đốc Phân Xưởng</p>
            <p className="text-gray-500 text-sm px-4">Đảm bảo tiến độ, chất lượng gia công tại xưởng và tuân thủ tuyệt đối an toàn lao động.</p>
          </div>
        </div>
      </div>

      {/* NĂNG LỰC SẢN XUẤT */}
      <div className="bg-slate-900 text-white mt-24 py-20 border-t-8 border-amber-500 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
        
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-2">Cơ Sở Vật Chất</h3>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Năng Lực Sản Xuất <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Vượt Trội</span></h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Hệ thống nhà xưởng rộng 5,000m² được trang bị dây chuyền máy móc nhập khẩu hiện đại nhất. Từ máy cắt CNC Plasma/Laser, máy chấn thủy lực, đến robot hàn tự động, chúng tôi tự tin đáp ứng các đơn hàng có độ phức tạp cao với dung sai nhỏ nhất.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <i className="fa-solid fa-check text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Cắt CNC Laser</h4>
                    <p className="text-sm text-slate-400">Độ chính xác cao, cắt nhiều vật liệu</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <i className="fa-solid fa-check text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Chấn Thủy Lực</h4>
                    <p className="text-sm text-slate-400">Định hình kim loại chuẩn xác</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <i className="fa-solid fa-check text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hàn MIG/MAG/TIG</h4>
                    <p className="text-sm text-slate-400">Mối hàn bền đẹp, chống rỉ sét</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <i className="fa-solid fa-check text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Sơn Tĩnh Điện</h4>
                    <p className="text-sm text-slate-400">Bảo vệ bề mặt, tăng tuổi thọ</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative w-full mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-20 rounded-full -z-10 transform scale-150"></div>
                <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=500&auto=format&fit=crop" alt="Máy CNC" className="w-full h-48 md:h-80 object-cover rounded-3xl shadow-2xl transform translate-y-8 md:translate-y-12 border-4 border-slate-800 hover:border-amber-500 transition-colors duration-500" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop" alt="Robot hàn" className="w-full h-48 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-slate-800 hover:border-amber-500 transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;