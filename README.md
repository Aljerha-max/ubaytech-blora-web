# UBAYTECH BLORA - Web Auto Deploy

Template web siap Vercel + GitHub + Google Sheet.

## Cara Deploy ke Vercel (1x)
1. Upload folder ini ke GitHub: Aljerha-max/ubaytech-blora-web
   - Buka github.com > New repository > ubaytech-blora-web > Create
   - Upload semua file ini
2. Buka vercel.com > Add New Project > Import Git Repository > pilih ubaytech-blora-web > Deploy
3. Jadi! Link: ubaytech-blora-web.vercel.app

## Cara Update Stok dari HP (Tanpa Coding)
1. Buka dashboard HP: UBAYTECH-VERCEL-SHEET-AUTO-DEPLOY.html
2. Isi Setup: repo = Aljerha-max/ubaytech-blora-web , token ghp_xxx , path = data/products.json
3. Tambah produk > klik DEPLOY
4. GitHub ke-update > Vercel auto build 30 detik > Web live!

## File Penting
- data/products.json = database produk (dibaca web)
- pages/index.js = tampilan web
- public/ = untuk gambar/logo

## Google Sheet Backup
Set sheet webhook URL di dashboard, setiap tambah produk masuk Sheet juga.

Ubay - Blora 2026
