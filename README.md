LearnHub — Static Website

What I changed/added:
- Ensured asset references are relative (use `public/...`).
- Added a minimal `404.html` (friendly fallback).
- Implemented simple client-side signup/login using `localStorage` (no backend).

How to run locally:
1. From project root run (PowerShell):

   python -m http.server 8000 --directory "C:\Users\ADMIN\OneDrive\Desktop\webproject"

2. Open http://localhost:8000/ in your browser.

Notes about deployment:
- For GitHub Pages (project page), push the repository to GitHub and enable Pages from the `main` branch (root). Use relative paths (already used here). Do NOT use leading `/` in asset URLs.
- This project uses client-side auth (localStorage) for demo purposes only. Do NOT use it for production authentication.

Next steps I can do for you:
- Commit changes (I can create git commits if you want).
- Add simple CI build or optimize images.
- Wire up a backend (Node/Express or Firebase) for real auth and form handling.
