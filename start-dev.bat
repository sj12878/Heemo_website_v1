@echo off
rem Set up Node 22.12.0 portable environment
set "NODE_DIR=C:\Users\user\.gemini\antigravity\scratch\Heemo_Website_v1\node-v22\node-v22.12.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"

echo Kill any process on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul

echo Using Node:
node -v

if not exist node_modules (
    echo Installing dependencies...
    npm install
) else (
    echo node_modules exists, skipping clean install.
)

echo Starting dev server on http://localhost:3000 ...
npm run dev -- --host --port 3000
