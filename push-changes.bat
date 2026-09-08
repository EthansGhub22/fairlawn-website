@echo off
cd /d "%~dp0"
echo Staging and pushing changes in %cd% ...
git add -A
set msg=Update site
set /p msg="Commit message (press Enter to use 'Update site'): "
git commit -m "%msg%"
git push
echo.
echo Done. Press any key to close this window.
pause >nul
