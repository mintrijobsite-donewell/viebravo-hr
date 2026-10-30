/**
 * ============================================================================
 * ⭐ GOOGLE APPS SCRIPT: HỆ THỐNG QUẢN LÝ TUYỂN DỤNG VIE BRAVO (CHUẨN HÓA 100%)
 * ============================================================================
 * Tương thích chuẩn xác với Google Sheet:
 * "Theo dõi Tuyển dụng & Ứng viên (Fanpage - Website)"
 * URL Sheet: https://docs.google.com/spreadsheets/d/1MMJ7hRfrfuiF1MGplD3yPUESFYbEXz7tII7y2XQy1_c/edit
 * 
 * CÁC CỘT CHUẨN XÁC TRÊN SHEET:
 * Cột A (1): STT
 * Cột B (2): Ngày tiếp nhận
 * Cột C (3): Nguồn ứng viên
 * Cột D (4): Họ và tên
 * Cột E (5): Số điện thoại / Zalo
 * Cột F (6): Vị trí ứng tuyển (Xóa bỏ hoàn toàn "GPM Auto", chuẩn hóa theo Landing Page)
 * Cột G (7): Link CV / Hồ sơ
 * Cột H (8): Trạng thái xử lý (Chờ liên hệ, Đã hẹn PV, Nhận việc...)
 * Cột I (9): Lịch phỏng vấn
 * Cột J (10): Người phụ trách (HR)
 * Cột K (11): Kết quả PV
 * Cột L (12): Ghi chú chi tiết (Lưu độ tuổi / năm sinh của ứng viên)
 * ============================================================================
 */

// 1. TỰ ĐỘNG TIẾP NHẬN ĐƠN TỪ LANDING PAGE
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Danh_Sach_Ung_Vien") || ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Tìm dòng trống tiếp theo (bắt đầu sau hàng tiêu đề thứ 7)
    var lastRow = sheet.getLastRow();
    if (lastRow < 7) lastRow = 7;
    var nextRow = lastRow + 1;
    var stt = nextRow - 7; // Số thứ tự bắt đầu từ 1

    var time = data.time || Utilities.formatDate(new Date(), "GMT+7", "HH:mm:ss dd/MM/yyyy");
    var name = (data.name || "").trim();
    var phone = (data.phone || "").trim();
    if (phone && !phone.startsWith("'")) {
      phone = "'" + phone; // Giữ lại số 0 đầu tiên của SĐT
    }
    var birth = (data.birth || "").trim();
    var pos = (data.pos || "Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng (7.5 Tr)").trim();
    
    // Tuyệt đối không để GPM Auto lọt vào
    if (pos.toLowerCase().indexOf("gpm") !== -1 || pos === "") {
      pos = "Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng (7.5 Tr)";
    }

    var rowValues = [
      stt,                                       // Cột A: STT
      time,                                      // Cột B: Ngày tiếp nhận
      "Landing Page Vie Bravo",                  // Cột C: Nguồn ứng viên
      name,                                      // Cột D: Họ và tên
      phone,                                     // Cột E: Số điện thoại / Zalo
      pos,                                       // Cột F: Vị trí ứng tuyển
      "",                                        // Cột G: Link CV / Hồ sơ
      "Chờ liên hệ (Mới)",                      // Cột H: Trạng thái xử lý
      "",                                        // Cột I: Lịch phỏng vấn
      "",                                        // Cột J: Người phụ trách (HR)
      "",                                        // Cột K: Kết quả PV
      birth ? ("Năm sinh/Tuổi: " + birth) : ""   // Cột L: Ghi chú chi tiết
    ];

    sheet.getRange(nextRow, 1, 1, rowValues.length).setValues([rowValues]);

    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Đã lưu đơn thành công", "stt": stt }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Vie Bravo Recruitment Webhook is running perfectly!");
}

// 2. TẠO MENU TRÊN GOOGLE SHEETS ĐỂ HR BẤM 1 CLICK LÀ CHUẨN HÓA BẢNG
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("⭐ VIE BRAVO HR")
    .addItem("⚡ Chuẩn Hóa Cột & Sửa 'GPM Auto'", "chuanHoaVaSuaGpmAuto")
    .addToUi();
}

// 3. HÀM TỰ ĐỘNG DỌN DẸP DÒNG CŨ, SỬA 'GPM AUTO' VÀ CĂN CHỈNH ĐÚNG CỘT
function chuanHoaVaSuaGpmAuto() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Danh_Sach_Ung_Vien") || ss.getActiveSheet();
  var lastRow = sheet.getLastRow();

  // Tạo Menu thả xuống (Data Validation) cho Cột F (Vị trí ứng tuyển)
  var danhMucViTri = [
    "Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng (7.5 Tr)",
    "Lắp Ráp Linh Kiện Điện Tử KCN VSIP 2 (8 - 11 Tr)",
    "Đóng Gói Bao Bì & Kiểm Hàng KCN Mỹ Phước (7.5 - 9.5 Tr)",
    "Tư vấn việc làm khác phù hợp gần nhà"
  ];
  var ruleViTri = SpreadsheetApp.newDataValidation()
    .requireValueInList(danhMucViTri, true)
    .setAllowInvalid(true)
    .build();
  sheet.getRange("F8:F500").setDataValidation(ruleViTri);

  // Tạo Menu thả xuống cho Cột H (Trạng thái)
  var danhMucTrangThai = [
    "Chờ liên hệ (Mới)",
    "Đã liên hệ - Đang trao đổi",
    "Đã hẹn phỏng vấn",
    "Nhận việc thành công",
    "Không phù hợp / Hủy"
  ];
  var ruleTrangThai = SpreadsheetApp.newDataValidation()
    .requireValueInList(danhMucTrangThai, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange("H8:H500").setDataValidation(ruleTrangThai);

  // Duyệt qua các dòng dữ liệu từ dòng 8 trở đi để nắn lại cột bị lệch
  if (lastRow >= 8) {
    for (var r = 8; r <= lastRow; r++) {
      var valA = sheet.getRange(r, 1).getValue();
      var valB = sheet.getRange(r, 2).getValue();
      var valC = sheet.getRange(r, 3).getValue();
      var valF = sheet.getRange(r, 6).getValue();

      // Nếu dòng bị lệch kiểu cũ: Col A là thời gian (chứa dấu : hoặc /)
      if (typeof valA === "string" && (valA.indexOf(":") !== -1 || valA.indexOf("/") !== -1)) {
        var stt = r - 7;
        var time = valA;
        var name = valB;
        var phone = String(valC);
        if (!phone.startsWith("'") && phone.indexOf("http") === -1) {
          phone = "'" + (phone.startsWith("0") ? phone : "0" + phone);
        }
        var pos = "Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng (7.5 Tr)";
        if (valF && typeof valF === "string" && valF.indexOf("GPM") === -1 && valF !== "") {
          pos = valF;
        }

        sheet.getRange(r, 1, 1, 8).setValues([[
          stt,
          time,
          "Landing Page Vie Bravo",
          name,
          phone,
          pos,
          "",
          "Chờ liên hệ (Mới)"
        ]]);
      } else if (String(valF).indexOf("GPM") !== -1) {
        // Đổi GPM Auto thành vị trí Tạp Vụ Nữ Bàu Bàng
        sheet.getRange(r, 6).setValue("Tạp Vụ Nữ Nhà Xưởng KCN Bàu Bàng (7.5 Tr)");
      }
    }
  }

  // Hiển thị thông báo Toast nhẹ nhàng ở góc phải bảng tính (không làm đơ/chờ script)
  ss.toast("Đã chuẩn hóa cột và xóa bỏ GPM Auto thành công!", "Vie Bravo HR", 5);
  Logger.log("Chuẩn hóa hoàn tất!");
}
