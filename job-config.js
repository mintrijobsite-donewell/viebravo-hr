/**
 * ============================================================================
 * 📝 BẢNG CẤU HÌNH THÔNG TIN TUYỂN DỤNG - VIE BRAVO
 * ============================================================================
 * 👉 HƯỚNG DẪN DÀNH CHO HR / QUẢN LÝ:
 * 1. Bạn có thể mở file này bằng Notepad hoặc bấm "🔒 Tự Sửa Bài Tuyển Dụng" trên web.
 * 2. Bạn có thể thêm bao nhiêu vị trí tuyển dụng tùy ý trong mảng "jobs".
 *    - Vị trí đầu tiên (isHot: true) sẽ hiển thị ở Bảng Vàng Nổi Bật trên cùng.
 *    - Các vị trí còn lại sẽ hiển thị ở mục "Các Vị Trí Tuyển Dụng Khác".
 * 3. Sau khi sửa xong, bấm Ctrl + S để lưu lại.
 * 4. Nhấp đúp vào file "1_Cap_Nhat_Len_Mang.bat" để tự động đưa nội dung mới lên web!
 * ============================================================================
 */

window.JOB_CONFIG = {
  // 🔐 0. MÃ PIN BẢO MẬT QUẢN TRỊ (Mặc định: 6868)
  adminPin: "6868",

  // 1. THÔNG TIN LIÊN HỆ & HOTLINE
  hotline: "0333773700",
  hotlineDisplay: "033 • 3773 • 700",
  zaloUrl: "https://zalo.me/0333773700",

  // 2. KHUNG NỔI BẬT ĐẦU TRANG
  brandTitle: "Vie Bravo • Tuyển Dụng Lao Động Bình Dương",
  brandSubtitle: "Kênh tiếp nhận hồ sơ trực tiếp cho công ty Vie Bravo. Đi làm ngay, 100% không qua trung gian, đãi ngộ chu đáo!",
  trustTag1: "⚡ Nhận Việc Trực Tiếp",
  trustTag2: "🛡️ 100% Không Thu Phí",
  trustTag3: "👵 Nhận Đến 58 Tuổi",

  // 3. CAM KẾT VIE BRAVO (3 TIÊU CHÍ)
  commit1: "100% Không thu phí: Tuyệt đối không mất bất kỳ đồng nào.",
  commit2: "Không giữ giấy tờ gốc: Chỉ đối chiếu bản photo/CCCD.",
  commit3: "Hỗ trợ tận tình: Hướng dẫn nhận việc chu đáo trong ngày.",

  // 4. CHÂN TRANG (FOOTER)
  footerCompany: "CÔNG TY TNHH VIE BRAVO",
  footerBranch: "Trụ sở tuyển dụng & Hỗ trợ việc làm tỉnh Bình Dương",

  // =========================================================================
  // 📋 DANH SÁCH CÁC VỊ TRÍ TUYỂN DỤNG (BẠN CÓ THỂ THÊM/SỬA/XÓA TÙY Ý)
  // =========================================================================
  jobs: [
    {
      id: "job-1",
      isHot: true,
      badge: "🔥 TUYỂN GẤP ĐI LÀM NGAY",
      title: "Tuyển Dụng Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng",
      salaryLabel: "Thu Nhập Chuẩn",
      salaryAmount: "7.500.000 đ",
      shiftTime: "7h00 - 16h00",
      shiftNote: "Ca ngày 8 tiếng",
      location: "Nhà xưởng tại KCN Bàu Bàng, Bình Dương.",
      audience: "Chỉ tuyển Nữ • Nhận đến 58 tuổi (ưu tiên các cô, các chị lao động phổ thông).",
      workingHours: "Từ 7h00 sáng đến 16h00 chiều (làm 8 tiếng/ngày, không ép tăng ca).",
      requirements: "Không yêu cầu bằng cấp, không cần kinh nghiệm. Công việc nhẹ nhàng, được hướng dẫn chu đáo từ ngày đầu.",
      benefits: "Cơm trưa tự túc, phụ cấp tiền cơm, môi trường sạch sẽ, thoáng mát, chế độ bảo hiểm và đãi ngộ đầy đủ."
    },
    {
      id: "job-2",
      isHot: false,
      badge: "⚡ VIỆC TỐT LƯƠNG CAO",
      title: "Lắp Ráp Linh Kiện Điện Tử KCN VSIP 2 / Đồng An",
      salaryLabel: "Thu Nhập Bình Quân",
      salaryAmount: "8.000.000 - 11.000.000 đ",
      shiftTime: "Xoay ca / Hành chính",
      shiftNote: "Phụ cấp chuyên cần",
      location: "KCN VSIP 2 / Đồng An 2, TP. Mới Bình Dương.",
      audience: "Nam/Nữ từ 18 đến 35 tuổi, sức khỏe tốt.",
      workingHours: "Ca 8 tiếng hoặc tăng ca tự nguyện, nghỉ Chủ Nhật.",
      requirements: "Biết đọc viết cơ bản, chăm chỉ, nhanh nhẹn. Không yêu cầu tay nghề (được đào tạo).",
      benefits: "Phòng máy lạnh 100%, bao cơm ca miễn phí, thưởng chuyên cần và bảo hiểm đầy đủ."
    },
    {
      id: "job-3",
      isHot: false,
      badge: "📦 VIỆC NHẸ NGỒI LÀM",
      title: "Đóng Gói Bao Bì & Kiểm Hàng KCN Mỹ Phước",
      salaryLabel: "Thu Nhập",
      salaryAmount: "7.500.000 - 9.500.000 đ",
      shiftTime: "7h30 - 16h30",
      shiftNote: "Giờ hành chính",
      location: "KCN Mỹ Phước 1, 2, 3, Bến Cát, Bình Dương.",
      audience: "Nam/Nữ từ 18 đến 45 tuổi, ưu tiên lao động phổ thông.",
      workingHours: "Từ 7h30 sáng đến 16h30 chiều (nghỉ trưa 1 tiếng, tăng ca tự nguyện).",
      requirements: "Cẩn thận, tỉ mỉ, mắt sáng. Được hướng dẫn cụ thể từ ngày đầu.",
      benefits: "Bao cơm trưa, việc nhẹ ngồi làm không mỏi chân, phụ cấp thâm niên và thưởng lễ Tết."
    }
  ]
};
