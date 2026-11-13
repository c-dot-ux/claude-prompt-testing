(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 5,
    title: "PPN, PBB P5L, Bea Meterai, dan Pajak Karbon",
    description: "Pajak atas konsumsi, PKP, tarif PPN, PBB sektor P5L, bea meterai, dan pajak karbon (Materi I, Bab II H.4–7).",
    questions: [
      {
        question: "PPN dikenakan atas konsumsi ...",
        correct: "Barang Kena Pajak (BKP) dan/atau Jasa Kena Pajak (JKP) di dalam Daerah Pabean",
        wrong: ["penghasilan orang pribadi dan badan dalam satu tahun pajak", "dokumen yang bersifat perdata", "emisi karbon yang dihasilkan perusahaan"],
        explanation: "PPN adalah pajak tidak langsung, sehingga beban akhirnya pada umumnya berada pada konsumen akhir."
      },
      {
        question: "Pihak yang paling penting dalam administrasi PPN, yang memungut, menyetor, dan melaporkan PPN terutang, adalah ...",
        correct: "Pengusaha Kena Pajak (PKP)",
        wrong: ["Penghasilan Kena Pajak (PKP)", "Wajib Pajak Orang Pribadi karyawan", "konsumen akhir"],
        explanation: "Perhatikan: PKP di PPN = Pengusaha Kena Pajak; PKP di PPh = Penghasilan Kena Pajak."
      },
      {
        question: "Pengusaha kecil pada dasarnya tidak wajib dikukuhkan sebagai PKP apabila peredaran dan/atau penerimaan brutonya dalam satu tahun buku tidak lebih dari ...",
        correct: "Rp4,8 miliar",
        wrong: ["Rp500 juta", "Rp50 miliar", "Rp54 juta"],
        explanation: "Pengusaha kecil tetap dapat memilih untuk dikukuhkan sebagai PKP."
      },
      {
        question: "Rina memiliki toko pakaian dengan omzet Rp2 miliar setahun dan tidak memilih menjadi PKP. Konsekuensinya ...",
        correct: "ia bukan PKP dan tidak memungut PPN atas penjualannya",
        wrong: ["ia wajib memungut PPN 12%", "ia wajib memungut PPN 11%", "ia dikenai PPN atas seluruh asetnya"],
        explanation: "Omzet Rp2 miliar di bawah batas Rp4,8 miliar."
      },
      {
        question: "Perusahaan distributor dengan omzet Rp6 miliar setahun yang menyerahkan BKP objek PPN ...",
        correct: "wajib dikukuhkan sebagai PKP",
        wrong: ["tidak wajib dikukuhkan sebagai PKP", "hanya wajib membayar bea meterai", "wajib membayar PPh Final 0,5%"],
        explanation: "Omzet telah melebihi Rp4,8 miliar, sehingga wajib melaporkan usaha untuk dikukuhkan sebagai PKP."
      },
      {
        question: "Tarif PPN atas ekspor BKP berwujud oleh PKP adalah ...",
        correct: "0%",
        wrong: ["5%", "11%", "12%"],
        explanation: "Ekspor memperoleh perlakuan PPN dengan tarif 0%."
      },
      {
        question: "Sejak 1 Januari 2025, tarif PPN secara ketentuan adalah 12%. Untuk barang dan jasa selain barang mewah, PPN dihitung dengan DPP nilai lain sebesar ...",
        correct: "11/12 dari harga jual, sehingga tarif efektif 11%",
        wrong: ["12/11 dari harga jual, sehingga tarif efektif 13%", "50% dari harga jual, sehingga tarif efektif 6%", "10/12 dari harga jual, sehingga tarif efektif 10%"],
        explanation: "12% × 11/12 = 11% efektif. Untuk barang mewah (PPnBM), PPN efektifnya 12%."
      },
      {
        question: "Komputer dijual oleh PKP seharga Rp12.000.000 (bukan barang mewah). PPN yang terutang menurut materi adalah ...",
        correct: "Rp1.320.000",
        wrong: ["Rp1.440.000", "Rp1.200.000", "Rp13.320.000"],
        explanation: "PPN = 12% × (11/12 × Rp12.000.000) = Rp1.320.000; konsumen membayar Rp13.320.000."
      },
      {
        question: "Contoh barang kebutuhan pokok yang mendapat pengecualian/fasilitas PPN dalam materi adalah ...",
        correct: "beras, telur, susu, daging, buah, dan sayuran",
        wrong: ["laptop dan ponsel", "televisi dan sepatu", "jasa periklanan dan konsultasi"],
        explanation: "Jasa pendidikan, kesehatan, keuangan, asuransi, dan angkutan umum juga diberi pengecualian sesuai kriteria."
      },
      {
        question: "Mekanisme yang membuat PPN tidak berulang sepenuhnya pada setiap tahap rantai distribusi adalah ...",
        correct: "PKP mengkreditkan Pajak Masukan terhadap Pajak Keluaran",
        wrong: ["PKP membebankan PPN pada produsen", "pembeli dibebaskan dari PPN", "PPN dipungut hanya pada tahap produksi"],
        explanation: "Beban akhir PPN pada umumnya tetap berada pada konsumen akhir."
      },
      {
        question: "Menggunakan jasa digital dari perusahaan luar negeri merupakan contoh ...",
        correct: "pemanfaatan JKP dari luar Daerah Pabean di dalam Daerah Pabean",
        wrong: ["ekspor JKP oleh PKP", "impor BKP", "penyerahan BKP di dalam Daerah Pabean"],
        explanation: "Membeli barang dari luar negeri adalah impor; membeli dari toko PKP adalah penyerahan BKP."
      },
      {
        question: "Ciri BKP yang tergolong mewah (dikenai PPnBM) menurut materi adalah ...",
        correct: "bukan kebutuhan pokok, dikonsumsi masyarakat berpenghasilan tinggi, atau untuk menunjukkan status",
        wrong: ["merupakan kebutuhan pokok masyarakat", "dikonsumsi seluruh lapisan masyarakat secara merata", "hanya berupa barang impor"],
        explanation: "Barang yang dapat merusak kesehatan dan moral atau mengganggu ketertiban masyarakat juga termasuk."
      },
      {
        question: "PBB atas perkebunan kelapa sawit milik perusahaan dikelola oleh ...",
        correct: "Pemerintah Pusat melalui Direktorat Jenderal Pajak (DJP)",
        wrong: ["pemerintah kabupaten/kota", "pemerintah provinsi", "pemerintah desa"],
        explanation: "Kuncinya: PBB-P2 → daerah; PBB P5L → pusat/DJP."
      },
      {
        question: "Objek 'sektor lainnya' dalam PBB P5L antara lain mencakup ...",
        correct: "perikanan tangkap, budidaya ikan, jaringan pipa, kabel, dan jalan tol",
        wrong: ["rumah tinggal di perkotaan", "tanah pertanian rakyat di perdesaan", "kendaraan bermotor"],
        explanation: "Rumah tinggal masyarakat pada umumnya termasuk PBB-P2 yang dikelola pemerintah daerah."
      },
      {
        question: "Sejak Januari 2021, tarif Bea Meterai yang berlaku untuk setiap dokumen adalah ...",
        correct: "Rp10.000",
        wrong: ["Rp3.000", "Rp6.000", "Rp5.000"],
        explanation: "Pemerintah menghapus meterai Rp3.000 dan Rp6.000 dan menggantinya menjadi satu tarif Rp10.000."
      },
      {
        question: "Dokumen yang menyatakan penerimaan atau pelunasan utang terutang Bea Meterai bila nilai nominalnya lebih dari ...",
        correct: "Rp5 juta",
        wrong: ["Rp500 ribu", "Rp1 juta", "Rp10 juta"],
        explanation: "Bea Meterai juga dikenakan atas dokumen yang digunakan sebagai alat bukti di pengadilan."
      },
      {
        question: "Andi dan Budi membuat perjanjian pinjam-meminjam uang Rp20 juta. Bea Meterai yang terutang adalah ...",
        correct: "Rp10.000, karena dokumennya merupakan dokumen perdata",
        wrong: ["Rp20.000, karena nilainya Rp20 juta", "Rp200.000, yaitu 1% dari nilai pinjaman", "tidak ada, karena nilai di bawah Rp50 juta"],
        explanation: "Bea Meterai dikenakan atas dokumen, bukan atas uang yang dipinjam."
      },
      {
        question: "Untuk dokumen elektronik, pelunasan Bea Meterai dapat dilakukan antara lain menggunakan ...",
        correct: "meterai elektronik (e-Meterai)",
        wrong: ["e-Faktur", "e-Bupot", "SPPT"],
        explanation: "Tidak setiap surat atau dokumen harus ditempeli meterai; hanya yang termasuk objek Bea Meterai."
      },
      {
        question: "Tarif pajak karbon ditetapkan paling rendah ...",
        correct: "Rp30 per kilogram CO₂e",
        wrong: ["Rp30 per ton CO₂e", "Rp300 per kilogram CO₂e", "Rp3 per kilogram CO₂e"],
        explanation: "Tarif harus lebih tinggi atau sama dengan harga karbon di pasar karbon sesuai aturan yang berlaku."
      },
      {
        question: "Pajak karbon dikenakan atas ...",
        correct: "emisi karbon yang berdampak negatif bagi lingkungan, diukur dalam karbon dioksida ekuivalen (CO₂e)",
        wrong: ["konsumsi barang kebutuhan pokok", "kepemilikan kendaraan bermotor", "dokumen perjanjian perdata"],
        explanation: "Pajak karbon mendorong pengurangan emisi dan penggunaan energi yang lebih ramah lingkungan, bukan sekadar menambah penerimaan negara."
      }
    ]
  });
})();
