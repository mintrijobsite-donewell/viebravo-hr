@echo off
title VIE BRAVO - DONG BO WEBSITE
echo ========================================================
echo   VIE BRAVO - DONG BO THONG TIN MOI LEN GITHUB PAGES
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] Dang luu cac thay doi vao he thong...
git add .
git commit -m "Cap nhat thong tin tuyen dung: %date%" 2>nul

echo.
echo [2/3] Dang dong bo len GitHub Pages...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   [THANH CONG] WEBSITE DA DUOC CAP NHAT LEN INTERNET!
    echo ========================================================
    echo.
    echo Link website cua ban:
    echo https://mintrijobsite-donewell.github.io/viebravo-hr/
    echo.
    echo (Luu y: GitHub can khoang 30s - 1 phut de cap nhat)
) else (
    echo [LOI] Co loi xay ra khi day len GitHub. Vui long kiem tra mang.
)
echo.
pause