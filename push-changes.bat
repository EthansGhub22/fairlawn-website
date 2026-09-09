@echo off
cd /d "%~dp0"
echo Staging and pushing changes in %cd% ...
git add -A
git commit -m "Update site"
git push
echo.
echo Done. (If it said "nothing to commit", that just means everything was already pushed.)
pause
