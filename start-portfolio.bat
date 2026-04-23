@echo off
setlocal
cd /d "%~dp0"

if exist ".venv\Scripts\python.exe" (
  set "PYTHON_EXE=.venv\Scripts\python.exe"
) else (
  py -3 -m venv .venv 2>nul || python -m venv .venv
  set "PYTHON_EXE=.venv\Scripts\python.exe"
)

"%PYTHON_EXE%" server.py
