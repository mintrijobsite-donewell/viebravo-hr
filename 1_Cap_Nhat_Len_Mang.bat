@echo off
chcp 65001 > nul
title VIE BRAVO - ĐỒNG BỘ NỘI DUNG LÊN WEBSITE
echo ========================================================
echo   VIE BRAVO - TỰ ĐỘNG ĐẨY THÔNG TIN MỚI LÊN INTERNET
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] Đang lưu thông tin thay đổi vào hệ thống...
git add .
git commit -m "HR cap nhat noi dung tuyen dung: %date% %time%"

echo.
echo [2/3] Đang đồng bộ lên GitHub Pages...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   ✅ CHÚC MỪNG! WEBSITE ĐÃ ĐƯỢC CẬP NHẬT THÀNH CÔNG!
    echo ========================================================
    echo.
    echo 🌐 Link website của bạn:
    echo 👉 https://mintrijobsite-donewell.github.io/viebravo-hr/
    echo.
    echo (Lưu ý: Máy chủ GitHub sẽ cập nhật sau khoảng 30s - 1 phút)
) else (
    echo ❌ Có lỗi xảy ra trong lúc đẩy lên mạng. Hãy kiểm tra kết nối Internet.
)
echo.
echo Nhấn phím bất kỳ để đóng cửa sổ này...
pause > nul
