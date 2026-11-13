(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 9,
    title: "Hak & Kewajiban Wajib Pajak, APBD, Pajak Daerah",
    description: "Syarat subjektif-objektif, daftar-hitung-bayar-lapor, hak WP, PPh Final 4(2), APBD, dan PKB (Materi II, Bab 6).",
    questions: [
      {
        question: "Wajib Pajak menurut UU KUP adalah orang pribadi atau badan yang meliputi ...",
        correct: "pembayar pajak, pemotong pajak, dan pemungut pajak",
        wrong: ["hanya pembayar pajak", "hanya pengusaha dan perusahaan", "hanya karyawan dan pensiunan"],
        explanation: "Wajib Pajak memiliki hak dan kewajiban perpajakan apabila telah memenuhi syarat subjektif dan objektif."
      },
      {
        question: "Seseorang menjadi Wajib Pajak apabila memenuhi ...",
        correct: "persyaratan subjektif dan objektif sekaligus pada saat yang bersamaan",
        wrong: ["persyaratan subjektif saja", "persyaratan objektif saja", "salah satu dari syarat subjektif atau objektif"],
        explanation: "Subjektif: sesuai ketentuan subjek pajak dalam UU PPh. Objektif: menerima penghasilan, kewajiban potong/pungut, atau objek pajak lainnya."
      },
      {
        question: "Subjek pajak dalam negeri orang pribadi mulai menjadi subjek pajak pada saat ...",
        correct: "dilahirkan, berada di Indonesia, atau bertempat tinggal di Indonesia",
        wrong: ["berusia 17 tahun", "mulai bekerja", "mendapatkan NPWP"],
        explanation: "Berakhir saat meninggal atau saat meninggalkan Indonesia untuk selama-lamanya."
      },
      {
        question: "Syarat objektif bagi orang pribadi antara lain adalah ...",
        correct: "memperoleh penghasilan yang besarnya di atas PTKP",
        wrong: ["telah berusia 21 tahun", "memiliki kendaraan bermotor", "memiliki rekening bank"],
        explanation: "Syarat objektif lain: kewajiban memotong/memungut pajak, atau timbulnya objek pajak tertentu."
      },
      {
        question: "Pendaftaran Wajib Pajak orang pribadi secara online dilakukan melalui ...",
        correct: "coretaxdjp.pajak.go.id dengan menyiapkan NIK dan Kartu Keluarga",
        wrong: ["djponline.pajak.go.id dengan NPWP 15 digit", "efaktur.pajak.go.id", "kemenkeu.go.id/alokasipajakmu"],
        explanation: "Data identitas diverifikasi terhubung dengan Dukcapil serta verifikasi email dan nomor HP."
      },
      {
        question: "Format NPWP yang baru memiliki ... digit, sebelumnya 15 digit.",
        correct: "16",
        wrong: ["12", "17", "20"],
        explanation: "Untuk orang pribadi, NIK digunakan sebagai NPWP (pemadanan NIK-NPWP)."
      },
      {
        question: "Kode Otorisasi DJP (KODJP) pada Coretax berfungsi sebagai ...",
        correct: "tanda tangan elektronik",
        wrong: ["kode pembayaran bank", "nomor seri faktur pajak", "kata sandi email"],
        explanation: "Setelah akun aktif, Wajib Pajak mengajukan permohonan KODJP."
      },
      {
        question: "Hak Wajib Pajak atas kelebihan pembayaran pajak, apabila DJP terlambat mengembalikan, adalah menerima bunga ...",
        correct: "2% per bulan, maksimum 24 bulan",
        wrong: ["1% per bulan, maksimum 12 bulan", "5% per bulan, maksimum 6 bulan", "0,5% per bulan, maksimum 36 bulan"],
        explanation: "Pengembalian kelebihan pembayaran pajak pada umumnya dapat diberikan dalam waktu 12 bulan sejak permohonan diterima secara lengkap."
      },
      {
        question: "Bagi Wajib Pajak Patuh, pengembalian pendahuluan kelebihan pembayaran pajak paling lambat ...",
        correct: "3 bulan untuk PPh dan 1 bulan untuk PPN",
        wrong: ["1 bulan untuk PPh dan 3 bulan untuk PPN", "6 bulan untuk PPh dan 3 bulan untuk PPN", "12 bulan untuk PPh dan PPN"],
        explanation: "Pengembalian ini dilakukan tanpa pemeriksaan."
      },
      {
        question: "Hak kerahasiaan Wajib Pajak berarti ...",
        correct: "informasi yang disampaikan kepada DJP, seperti SPT dan laporan keuangan, dilindungi kerahasiaannya",
        wrong: ["Wajib Pajak boleh merahasiakan penghasilan dari DJP", "data Wajib Pajak boleh dibuka kepada siapa pun", "hanya data badan usaha yang dilindungi"],
        explanation: "Pihak lain yang bertugas di bidang perpajakan, termasuk tenaga ahli yang ditunjuk, juga dilarang mengungkapkan kerahasiaan Wajib Pajak."
      },
      {
        question: "Pengurangan PBB-P2 (yang telah dialihkan ke daerah) diurus di ...",
        correct: "Kantor Dinas Pendapatan kota/kabupaten setempat, bukan KPP",
        wrong: ["Kantor Pelayanan Pajak (KPP)", "Kantor Wilayah DJP", "Kantor Pusat DJP"],
        explanation: "PBB-P2 adalah pajak daerah."
      },
      {
        question: "Fasilitas PPh Final 0,5% menurut materi Penyisihan II diatur dalam PP Nomor 55 Tahun 2022 yang disesuaikan melalui ...",
        correct: "PP Nomor 20 Tahun 2026, untuk WP Orang Pribadi, Perseroan Perorangan, dan Koperasi",
        wrong: ["PP Nomor 9 Tahun 2022, untuk perusahaan besar", "PMK Nomor 81 Tahun 2024, untuk badan asing", "PP Nomor 92 Tahun 2010, untuk karyawan"],
        explanation: "Peredaran bruto sampai Rp4,8 miliar; WP Orang Pribadi dengan peredaran bruto sampai Rp500 juta dibebaskan."
      },
      {
        question: "Tiga pengurang penghasilan bruto menurut UU PPh adalah ...",
        correct: "biaya untuk mendapatkan, menagih, dan memelihara penghasilan; kompensasi kerugian lima tahun; dan PTKP bagi orang pribadi",
        wrong: ["hanya biaya konsumsi pribadi", "gaji direksi, dividen, dan bunga", "PPN masukan, PPh Pasal 21, dan bea meterai"],
        explanation: "Dasar hukumnya Pasal 6 ayat (1), (2), dan (3) UU PPh."
      },
      {
        question: "Pelunasan PBB berdasarkan SPPT yang diterbitkan KPP menunjukkan penerapan sistem ...",
        correct: "official assessment",
        wrong: ["self assessment", "withholding", "voluntary"],
        explanation: "Wajib Pajak tidak perlu menghitung sendiri; cukup membayar sesuai SPPT."
      },
      {
        question: "Tarif PPh Final hadiah undian menurut tabel PPh Pasal 4 ayat (2) adalah ...",
        correct: "25% dari jumlah bruto nilai hadiah",
        wrong: ["10% dari jumlah bruto", "2,5% dari jumlah bruto", "0,1% dari jumlah bruto"],
        explanation: "Bunga deposito/tabungan 20%, sewa tanah/bangunan 10%, dividen OP 10%, pengalihan tanah/bangunan 2,5%, penjualan saham di bursa 0,1%."
      },
      {
        question: "Tarif PPh Final jasa konstruksi untuk pelaksanaan konstruksi oleh penyedia berkualifikasi kecil adalah ...",
        correct: "1,75%",
        wrong: ["2,65%", "4%", "6%"],
        explanation: "Kontraktor menengah/besar/spesialis 2,65%; tanpa SBU 4%; konsultansi dengan SBU 3,5% dan tanpa SBU 6%."
      },
      {
        question: "APBD adalah rencana keuangan tahunan pemerintah daerah yang disetujui bersama DPRD dan ditetapkan melalui ...",
        correct: "Peraturan Daerah (Perda)",
        wrong: ["Peraturan Presiden", "Keputusan Menteri Keuangan", "Undang-Undang"],
        explanation: "Tahun anggaran APBD berlaku 1 Januari sampai 31 Desember."
      },
      {
        question: "Tiga komponen utama APBD adalah ...",
        correct: "pendapatan daerah, belanja daerah, dan pembiayaan daerah",
        wrong: ["pajak, retribusi, dan sumbangan", "DAU, DAK, dan DBH", "alokasi, distribusi, dan stabilisasi"],
        explanation: "Pendapatan daerah mencakup PAD, dana transfer, dan lain-lain pendapatan yang sah."
      },
      {
        question: "Dasar pengenaan Pajak Kendaraan Bermotor (PKB) adalah hasil perkalian ...",
        correct: "nilai jual kendaraan bermotor dan bobot yang mencerminkan tingkat kerusakan jalan/pencemaran lingkungan",
        wrong: ["harga beli dan tahun pembuatan", "kapasitas mesin dan jumlah penumpang", "jarak tempuh dan harga bahan bakar"],
        explanation: "Tarif PKB ditetapkan sebesar 1% untuk kepemilikan dan/atau penguasaan kendaraan bermotor."
      },
      {
        question: "Kewajiban perpajakan Wajib Pajak setelah memenuhi syarat subjektif dan objektif adalah ...",
        correct: "mendaftarkan diri, menghitung, membayar, dan melaporkan pajak",
        wrong: ["hanya membayar pajak saat ditagih", "menunggu ketetapan pajak dari petugas", "melaporkan pajak hanya jika diperiksa"],
        explanation: "Alur pemenuhan kewajiban perpajakan: daftar, hitung, bayar, lapor."
      }
    ]
  });
})();
