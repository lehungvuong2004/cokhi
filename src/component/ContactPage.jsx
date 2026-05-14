import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ liên hệ lại sớm!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Địa Chỉ Trụ Sở',
      content: '123 Đường Công Nghiệp, KCN Tân Bình, TP.HCM'
    },
    {
      icon: 'fa-solid fa-phone-volume',
      title: 'Hotline 24/7',
      content: '0961.570.201\n028.3812.3456'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email Hỗ Trợ',
      content: 'info@manhhungmec.com\nsale@manhhungmec.com'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Giờ Làm Việc',
      content: 'Thứ 2 - Thứ 7: 8:00 - 17:30\nChủ Nhật: Nghỉ định kỳ'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Hero Section */}
      <div className="pt-40 pb-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay"></div>
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Hỗ Trợ Nhanh Chóng</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
            Liên Hệ <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Với Chúng Tôi</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của Cơ Khí Mạnh Hùng luôn sẵn sàng tư vấn giải pháp tối ưu và báo giá chi tiết cho dự án của bạn.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 relative z-20">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <i className={`${info.icon} text-2xl text-amber-500 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{info.title}</h3>
              <p className="text-slate-500 whitespace-pre-line text-sm leading-relaxed">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex-col-reverse lg:flex-row">

          {/* Form */}
          <div className="lg:col-span-3 p-8 md:p-12 order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">Gửi Yêu Cầu Tư Vấn</h2>
              <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Họ Tên <span className="text-red-500">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Nhập họ tên đầy đủ" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Điện Thoại <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Số điện thoại liên hệ" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Địa chỉ email (không bắt buộc)" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Chủ Đề <span className="text-red-500">*</span></label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Vd: Báo giá gia công nhà xưởng" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Nội Dung Chi Tiết <span className="text-red-500">*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none" placeholder="Mô tả chi tiết yêu cầu, bản vẽ kỹ thuật (nếu có)..."></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-wide hover:bg-amber-500 transition-colors duration-300 shadow-lg flex items-center justify-center gap-3">
                Gửi Yêu Cầu <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          {/* Map and Socials */}
          <div className="lg:col-span-2 bg-slate-900 text-white flex flex-col justify-between order-1 lg:order-2">
            {/* Map iframe */}
            <div className="h-64 md:h-80 lg:h-[450px] w-full bg-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3919.060281987515!2d106.62624891533423!3d10.806694692300898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zS0NOIFTDom4gQsOsbmg!5e0!3m2!1svi!2s!4v1689234567890!5m2!1svi!2s"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ chỉ đường"
              ></iframe>
            </div>

            <div className="p-8 md:p-10 flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-amber-500 uppercase">Kết Nối Với Chúng Tôi</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Theo dõi các trang mạng xã hội của chúng tôi để cập nhật những dự án mới nhất và kiến thức chuyên ngành cơ khí.
              </p>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-lg">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-lg">
                  <i className="fa-brands fa-youtube text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-lg">
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-lg">
                  <i className="fa-brands fa-tiktok text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
