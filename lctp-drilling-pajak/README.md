# Drilling Kuis Pajak – LCTP Riau 2026

Website latihan soal perpajakan berbasis materi Penyisihan I & II. Statis murni (HTML + CSS + JavaScript), tanpa build step.

## Struktur

```
index.html          ← di root, otomatis tampil saat deploy
css/style.css
js/
  utils.js          fungsi bantu (shuffle, buat elemen, dll.)
  storage.js        pembungkus localStorage
  question-bank.js  menyusun level, kartu → soal, pilihan jawaban otomatis
  progress.js       skor, bintang, kunci level
  quiz.js           logika sesi kuis (tanpa DOM)
  ui-levels.js      render beranda & kartu level
  ui-quiz.js        render soal & hasil
  ui-cards.js       form kartu, ekspor/impor
  app.js            navigasi & inisialisasi
  data/level-01.js … level-10.js   soal bawaan (20 soal per level)
```

## Cara pakai

- Level 1–10 berisi 20 soal. Lulus bila skor ≥ 70% untuk membuka level berikutnya
  (atau aktifkan "Buka semua level").
- **Kartu Saya**: isi Soal, Jawaban benar, Penjelasan (opsional), pilihan salah (opsional).
  Soal kuis dibuat otomatis. Tanpa pilihan salah, sistem mengambil dari jawaban soal lain.
  Kartu masuk ke "Level Kartu Saya" (otomatis 20 soal per level) atau ditambahkan ke level materi tertentu.
- Ekspor/Impor kartu dalam JSON untuk berbagi antaranggota tim.
- Kartu & progres tersimpan di localStorage browser masing-masing.

## Menambah soal bawaan

Edit `js/data/level-XX.js`: tambahkan objek `{ question, correct, wrong: [3 pilihan], explanation }`.
Level baru: salin satu file, ubah `number`, lalu tambahkan `<script>` di `index.html`.

## Deploy

Push ke GitHub, lalu hubungkan ke Cloudflare Pages atau Vercel. Framework: **None**, build command kosong,
output directory `/` (root).
