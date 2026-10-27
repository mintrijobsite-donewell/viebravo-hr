@echo off
chcp 65001 > nul
echo ========================================================
echo   HƯỚNG DẪN ĐẨY LANDING PAGE LÊN GITHUB PAGES (ONLINE)
echo ========================================================
echo.
echo Bước 1: Truy cập https://github.com/new và tạo 1 Repository mới
echo         (Ví dụ đặt tên là: viebravo-tuyendung)
echo.
echo Bước 2: Nhập đường dẫn link Git Repository vừa tạo vào dưới đây:
echo         (Ví dụ: https://github.com/tentk/viebravo-tuyendung.git)
echo.
set /p REPO_URL="Dán link Git Repository vào đây: "

if "%REPO_URL%"=="" (
    echo Bạn chưa nhập link Repository. Hủy tiến trình.
    pause
    exit /b
)

echo.
echo Đang cấu hình và đẩy mã nguồn lên GitHub...
cd /d "%~dp0"

git init
git add .
git commit -m "Khoi tao Landing Page Tuyen Dung Vie Bravo"
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!
echo ========================================================
echo.
echo BƯỚC CUỐI CÙNG ĐỂ BẬT ONLINE (GITHUB PAGES):
echo 1. Vào trang GitHub của Repository vừa tạo.
echo 2. Bấm vào mục "Settings" -> Chọn "Pages" ở cột bên trái.
echo 3. Tại mục "Branch", chọn "main" và bấm "Save".
echo 4. Chờ 1-2 phút, bạn sẽ nhận được đường link online dạng:
echo    https://<ten-user>.github.io/<ten-repo>/
echo.
echo Dùng link đó để ghim lên Bio TikTok, Facebook hoặc Zalo nhé!
echo ========================================================
pause
