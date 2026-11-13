(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 10,
    title: "Coretax DJP & Transformasi Administrasi",
    description: "PSIAP, landasan regulasi, tahapan, manfaat, dan posisi Coretax pada 2026 (Materi II, Bab 7).",
    questions: [
      {
        question: "PSIAP adalah singkatan dari ...",
        correct: "Pembaruan Sistem Inti Administrasi Perpajakan",
        wrong: ["Program Sistem Informasi Administrasi Pajak", "Pengembangan Sistem Integrasi Aplikasi Pajak", "Pembaruan Standar Informasi Administrasi Publik"],
        explanation: "Coretax adalah salah satu hasil utama PSIAP."
      },
      {
        question: "Tiga aspek utama yang menjadi fokus PSIAP adalah ...",
        correct: "perancangan ulang proses bisnis, pembaruan teknologi informasi, dan pembenahan basis data",
        wrong: ["pelayanan, pengawasan, dan penegakan hukum", "otorisasi, alokasi, dan distribusi", "pendaftaran, pembayaran, dan pelaporan"],
        explanation: "Ketiganya menjadi fondasi Coretax."
      },
      {
        question: "Dasar hukum awal PSIAP adalah ...",
        correct: "Peraturan Presiden Nomor 40 Tahun 2018",
        wrong: ["Peraturan Presiden Nomor 59 Tahun 2024", "UU Nomor 1 Tahun 2022", "PP Nomor 55 Tahun 2022"],
        explanation: "Perpres 40/2018 mengatur Pembaruan Sistem Inti Administrasi Perpajakan."
      },
      {
        question: "PMK yang mengatur ketentuan perpajakan dalam rangka pelaksanaan Sistem Inti Administrasi Perpajakan adalah ...",
        correct: "PMK Nomor 81 Tahun 2024, mulai berlaku 1 Januari 2025",
        wrong: ["PMK Nomor 168 Tahun 2023, mulai berlaku 1 Januari 2024", "PMK Nomor 136 Tahun 2024, mulai berlaku 1 Januari 2025", "PMK Nomor 8 Tahun 2026, mulai berlaku 1 Januari 2026"],
        explanation: "PMK 81/2024 ditetapkan 14 Oktober 2024 dan menjadi dasar hukum hasil Business Process Reengineering."
      },
      {
        question: "Coretax DJP mulai diimplementasikan secara resmi pada tanggal ...",
        correct: "1 Januari 2025",
        wrong: ["24 Desember 2024", "1 Januari 2026", "14 Oktober 2024"],
        explanation: "Praimplementasi berlangsung 16–31 Desember 2024; WP pemilik akun DJP Online dapat masuk Coretax sejak 24 Desember 2024."
      },
      {
        question: "Fase praimplementasi Coretax berlangsung pada ...",
        correct: "16–31 Desember 2024",
        wrong: ["1–15 Januari 2025", "1–31 Oktober 2024", "1–31 Januari 2026"],
        explanation: "Tujuannya memberi kesempatan WP mempersiapkan diri sebelum implementasi penuh."
      },
      {
        question: "Sistem informasi Coretax dibangun berbasis ...",
        correct: "Commercial Off-the-Shelf (COTS)",
        wrong: ["Open Source Only", "Custom Legacy Mainframe", "Peer-to-Peer Network"],
        explanation: "PSIAP juga merancang ulang proses bisnis dan membenahi basis data."
      },
      {
        question: "Proses bisnis inti administrasi perpajakan yang diintegrasikan Coretax meliputi ...",
        correct: "pendaftaran, pelaporan SPT, pembayaran, pemeriksaan, dan penagihan",
        wrong: ["hanya pelaporan SPT", "hanya pembayaran pajak online", "hanya e-Faktur dan e-Bupot"],
        explanation: "Coretax dianalogikan sebagai 'mesin utama' administrasi perpajakan DJP."
      },
      {
        question: "Mengapa Coretax tidak tepat dipahami sebagai 'sekadar aplikasi'?",
        correct: "karena Coretax adalah sistem inti administrasi perpajakan yang mengintegrasikan proses bisnis, teknologi, dan data",
        wrong: ["karena Coretax adalah jenis pajak baru", "karena Coretax hanya dipakai oleh pegawai DJP", "karena Coretax menggantikan undang-undang pajak"],
        explanation: "Coretax bukan sumber penerimaan pajak; ia infrastruktur administrasi yang membantu DJP mengelola penerimaan."
      },
      {
        question: "Business Process Reengineering (BPR) pada Coretax berarti ...",
        correct: "proses bisnis ditinjau dan dirancang ulang, bukan sekadar memindahkan proses lama ke sistem baru",
        wrong: ["menghapus seluruh proses pelaporan", "menambah jumlah aplikasi pajak", "mengganti seluruh pegawai DJP"],
        explanation: "Tujuannya: lebih sederhana, cepat, konsisten, transparan, mudah diawasi, dan mudah dianalisis."
      },
      {
        question: "Tantangan yang muncul dari pengembangan aplikasi pajak secara bertahap (e-Filing, e-Billing, e-Faktur, dll.) sebelum Coretax adalah ...",
        correct: "fragmentasi sistem dan data",
        wrong: ["tarif pajak yang tidak jelas", "kekurangan petugas pajak lapangan", "hilangnya dasar hukum pajak"],
        explanation: "Satu jenis kewajiban dapat berkaitan dengan beberapa aplikasi sehingga DJP membutuhkan sistem yang terintegrasi menyeluruh."
      },
      {
        question: "Pada 2017, program reformasi perpajakan dikembangkan dengan lima tema utama, kecuali ...",
        correct: "Penerimaan negara bukan pajak",
        wrong: ["Organisasi", "Sumber daya manusia", "Teknologi informasi dan basis data"],
        explanation: "Lima tema: organisasi, SDM, teknologi informasi dan basis data, proses bisnis, dan peraturan perundang-undangan."
      },
      {
        question: "Manfaat Coretax menurut DJP mencakup ...",
        correct: "peningkatan efisiensi dan efektivitas, kualitas layanan, kepatuhan Wajib Pajak, dan kemampuan analisis data",
        wrong: ["penghapusan kewajiban SPT", "penambahan jenis pajak baru", "penghapusan fungsi pemeriksaan"],
        explanation: "Secara ideal, WP memperoleh pengalaman administrasi terintegrasi dengan satu aplikasi."
      },
      {
        question: "Alur hubungan Coretax dan penguatan basis data dimulai dari ... dan berakhir pada ...",
        correct: "pengumpulan data; peningkatan kepatuhan",
        wrong: ["pemeriksaan; penagihan", "analisis; pengumpulan data", "pembayaran; pelaporan"],
        explanation: "Urutan: pengumpulan, integrasi, pemutakhiran, validasi dan pemadanan, analisis, identifikasi potensi, pengawasan berbasis risiko, peningkatan kepatuhan."
      },
      {
        question: "Siklus administrasi perpajakan apabila kewajiban belum diselesaikan dan tidak dibayar sampai jatuh tempo adalah ...",
        correct: "pemeriksaan → penerbitan SKPKB → penagihan",
        wrong: ["penagihan → pemeriksaan → pelaporan", "pendaftaran → pelaporan → pendaftaran ulang", "pembayaran → restitusi → pemeriksaan"],
        explanation: "Dengan sistem terintegrasi, seluruh proses dapat dikelola dalam satu ekosistem administrasi."
      },
      {
        question: "Wajib Pajak yang telah memiliki akun DJP Online mengakses Coretax untuk pertama kali melalui mekanisme ...",
        correct: "set ulang kata sandi",
        wrong: ["pendaftaran NPWP baru", "pembayaran bea meterai", "pemeriksaan pajak"],
        explanation: "DJP menekankan pentingnya email dan nomor telepon yang valid dan aktif."
      },
      {
        question: "Memasuki 2026, posisi Coretax dipandang sebagai tahun ...",
        correct: "konsolidasi dan optimalisasi (2025 adalah tahun implementasi dan adaptasi)",
        wrong: ["peluncuran perdana", "penghentian sistem lama saja", "pengujian awal"],
        explanation: "Pertanyaannya bergeser dari 'apakah Coretax sudah berjalan' menjadi 'seberapa besar perubahan nyata yang dihasilkan'."
      },
      {
        question: "Dimensi ukuran keberhasilan Coretax pada 2026 menurut materi adalah ...",
        correct: "kualitas pelayanan, kualitas data, efektivitas pengawasan, kepatuhan, dan penerimaan",
        wrong: ["jumlah pegawai, jumlah kantor, dan jumlah aplikasi", "tarif, objek, dan subjek pajak", "alokasi, distribusi, dan stabilisasi"],
        explanation: "Coretax mendukung penerimaan melalui perbaikan administrasi, bukan melalui penciptaan jenis pajak baru."
      },
      {
        question: "Kebijakan kedua dalam artikel kebijakan pajak 2026 menyebutkan bahwa mulai 2026 ...",
        correct: "seluruh pelaporan surat pemberitahuan diarahkan melalui Coretax",
        wrong: ["seluruh pelaporan kembali ke e-Filing", "SPT dilaporkan secara manual di KPP", "Coretax dihentikan sementara"],
        explanation: "Tujuannya meningkatkan akurasi data, mengurangi duplikasi informasi, dan memperkuat pengawasan serta penegakan hukum."
      },
      {
        question: "Coretax DJP lebih tepat dipahami sebagai ...",
        correct: "fondasi digital baru administrasi perpajakan Indonesia",
        wrong: ["sumber penerimaan pajak baru", "jenis pajak digital", "pengganti lembaga DJP"],
        explanation: "Ia mengintegrasikan proses bisnis, teknologi, dan data untuk sistem perpajakan yang modern, efektif, efisien, transparan, dan berorientasi kepatuhan."
      }
    ]
  });
})();
