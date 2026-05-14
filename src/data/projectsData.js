const filenames = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10c.jpg', '11.jpg', '12.jpg', '18.jpg',
  '_!.jpg', '_!2.jpg', '_10.jpg', '_11.jpg', '_13.jpg', '_14.jpg', '_15.jpg', '_16.jpg', '_17.jpg', '_18.jpg', '_19.jpg', '_2.jpg', '_21.jpg', '_22.jpg', '_23.jpg', '_24.jpg', '_25.jpg', '_26.jpg', '_27.jpg', '_28.jpg', '_29.jpg', '_3.jpg', '_31.jpg', '_32.jpg', '_33.jpg', '_34.jpg', '_35.jpg', '_36.jpg', '_37.jpg', '_38.jpg', '_39.jpg', '_4.jpg', '_40.jpg', '_5.jpg', '_6.jpg', '_7.jpg', '_8.jpg', '_9.jpg',
  'nha1.jpg', 'nha2.jpg', 'nha3.jpg', 'nha4.jpg', 'nha5.jpg', 'nha6.jpg', 'nha7.jpg', 'nha8.jpg'
];

const specificData = {
  'nha1.jpg': { title: 'Dự Án Xây Dựng Nhà Máy Sản Xuất', description: 'Dự án xây dựng và lắp đặt máy móc cho nhà máy sản xuất linh kiện cơ khí' },
  'nha2.jpg': { title: 'Lắp Ráp Dây Chuyền Sản Xuất', description: 'Lắp ráp dây chuyền sản xuất tự động cho ngành công nghiệp ô tô' },
  'nha3.jpg': { title: 'Cải Tạo Xưởng Cơ Khí', description: 'Cải tạo toàn bộ xưởng cơ khí, nâng cấp hệ thống máy móc và trang thiết bị' },
  'nha4.jpg': { title: 'Xây Dựng Kho Chứa Sản Phẩm', description: 'Xây dựng kho chứa sản phẩm cơ khí với hệ thống quản lý tự động' },
  'nha5.jpg': { title: 'Lắp Đặt Hệ Thống Điều Khiển', description: 'Lắp đặt hệ thống điều khiển tự động cho quy trình sản xuất' },
  'nha6.jpg': { title: 'Dự Án Nhà Xưởng Quy Mô Lớn', description: 'Xây dựng nhà xưởng công nghiệp với diện tích 5000m², trang thiết bị hiện đại' },
  'nha7.jpg': { title: 'Nâng Cấp Hệ Thống Năng Lượng', description: 'Nâng cấp hệ thống cấp điện và hệ thống thủy lực cho nhà máy' },
  'nha8.jpg': { title: 'Hoàn Thành Dây Chuyền Đóng Gói', description: 'Hoàn thành lắp ráp dây chuyền đóng gói sản phẩm tự động' },
  '18.jpg': { title: 'Dự Án Cải Tạo Nhà Máy Dệt', description: 'Cải tạo và nâng cấp toàn bộ hệ thống máy móc tại nhà máy dệt' },
  '_!.jpg': { title: 'Lắp Đặt Robot Công Nghiệp', description: 'Lắp đặt robot tự động cho các công đoạn sản xuất phức tạp' },
  '_!2.jpg': { title: 'Xây Dựng Trung Tâm Kỹ Thuật', description: 'Xây dựng trung tâm kỹ thuật với phòng lab, xưởng lắp ráp thử nghiệm' },
  '_2.jpg': { title: 'Nâng Cấp Hệ Thống Logistics', description: 'Nâng cấp hệ thống logistics và kho bãi với trang thiết bị hiện đại' }
};

export const projectsData = filenames.map((file, index) => {
  const customInfo = specificData[file];
  
  const title = customInfo ? customInfo.title : `Công Trình Cơ Khí Chuyên Nghiệp - Dự Án ${index + 1}`;
  const description = customInfo ? customInfo.description : `Thiết kế, thi công và lắp đặt kết cấu thép, gia công cơ khí chính xác. Đảm bảo chất lượng và tiến độ theo yêu cầu.`;
  
  return {
    id: index + 1,
    image: new URL(`../img/${file}`, import.meta.url).href,
    title: title,
    description: description,
    content: `
      <h2>Tổng quan dự án: ${title}</h2>
      <p>Dự án này là một trong những công trình tiêu biểu của chúng tôi. Với hạng mục công việc bao gồm: <strong>${description.toLowerCase()}</strong>.</p>
      <p>Đội ngũ kỹ sư tại Cơ Khí Mạnh Hùng đã áp dụng các giải pháp kỹ thuật tiên tiến nhất để tối ưu hóa chi phí, đảm bảo độ an toàn và độ bền vững của công trình. Từ khâu khảo sát, thiết kế bản vẽ 3D đến chế tạo gia công tại xưởng và lắp dựng thực tế đều được giám sát nghiêm ngặt theo tiêu chuẩn ISO.</p>
      <h3>Chi tiết thi công:</h3>
      <ul>
        <li>Tiến độ hoàn thành: Nhanh chóng, đáp ứng đúng cam kết với chủ đầu tư.</li>
        <li>Vật liệu sử dụng: Thép hợp kim cao cấp, chống ăn mòn, chịu lực tốt.</li>
        <li>Công nghệ áp dụng: Cắt CNC Laser, hàn tự động MIG/MAG.</li>
        <li>Đội ngũ thực hiện: Hơn 20 kỹ sư và công nhân lành nghề.</li>
      </ul>
      <p>Sự hài lòng của khách hàng là minh chứng rõ ràng nhất cho chất lượng dịch vụ mà Cơ Khí Mạnh Hùng mang lại. Chúng tôi tự hào đồng hành cùng các doanh nghiệp trên chặng đường phát triển vững mạnh.</p>
    `,
    date: `Tháng ${Math.floor(Math.random() * 12) + 1}/202${Math.floor(Math.random() * 4) + 2}`,
    client: `Công Ty Cổ Phần Đối Tác ${String.fromCharCode(65 + (index % 26))}`,
    location: `KCN Số ${Math.floor(Math.random() * 10) + 1}, Tỉnh/Thành Phố Việt Nam`
  };
});
