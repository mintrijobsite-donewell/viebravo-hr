/**
 * ============================================================================
 * MÃ GOOGLE APPS SCRIPT ĐỂ TỰ ĐỘNG LƯU ĐƠN ỨNG TUYỂN VÀO GOOGLE SHEETS
 * ============================================================================
 * 
 * HƯỚNG DẪN 3 BƯỚC ĐƠN GIẢN:
 * 
 * 1. Mở một trang Google Sheet mới (Google Trang tính):
 *    - Đặt tên cột tại Dòng 1:
 *      Cột A: Thời gian
 *      Cột B: Họ và tên
 *      Cột C: Số điện thoại
 *      Cột D: Năm sinh / Tuổi
 *      Cột E: Vị trí ứng tuyển
 *      Cột F: Trạng thái liên hệ
 * 
 * 2. Trên thanh menu Google Sheet, chọn:
 *    Tiện ích mở rộng (Extensions) -> Apps Script
 *    - Xóa toàn bộ mã cũ trong đó.
 *    - Dán toàn bộ đoạn mã bên dưới vào.
 *    - Nhấn nút Lưu (biểu tượng đĩa mềm 💾 hoặc Ctrl+S).
 * 
 * 3. Nhấn nút "Triển khai" (Deploy) ở góc trên bên phải:
 *    - Chọn "Tùy chọn triển khai mới" (New deployment).
 *    - Chọn loại: "Ứng dụng web" (Web app).
 *    - Mô tả: "Nhận đơn ứng tuyển Vie Bravo"
 *    - Người có quyền truy cập (Who has access): Chọn "Bất kỳ ai" (Anyone) -> RẤT QUAN TRỌNG!
 *    - Nhấn "Triển khai" (Deploy), cấp quyền truy cập tài khoản Google của bạn.
 *    - Copy "URL ứng dụng web" (có dạng: https://script.google.com/macros/s/AKfycb.../exec).
 * 
 * 4. Mở file index.html của Landing Page, tìm dòng:
 *    const GOOGLE_SHEET_WEBAPP_URL = "DÁN_URL_CỦA_BẠN_VÀO_ĐÂY";
 *    -> Thế là xong! Mọi đơn đăng ký trên web sẽ tự động chảy về Google Sheets ngay lập tức!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Thêm dòng mới vào Google Sheets
    sheet.appendRow([
      data.time || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.birth || "",
      data.pos || "",
      "Mới đăng ký - Chờ gọi"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Đã lưu thành công" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Vie Bravo Recruitment Webhook is active!");
}
