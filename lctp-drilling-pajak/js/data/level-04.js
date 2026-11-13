(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 4,
    title: "Perhitungan Pajak Penghasilan (PPh)",
    description: "PPh Badan, PPh Orang Pribadi, TER, NPPN, PPh Final UMKM, Pasal 23/26/4(2) (Materi I, Bab II H).",
    questions: [
      {
        question: "Tarif PPh Badan dalam negeri dan bentuk usaha tetap yang berlaku mulai tahun pajak 2022 adalah ...",
        correct: "22%",
        wrong: ["25%", "20%", "17%"],
        explanation: "Tarif 22% diterapkan atas Penghasilan Kena Pajak, bukan atas omzet."
      },
      {
        question: "PT XYZ memiliki peredaran usaha Rp10.000.000.000 dan biaya yang dapat dikurangkan Rp8.000.000.000 tanpa kompensasi kerugian. PPh Badan terutangnya adalah ...",
        correct: "Rp440.000.000",
        wrong: ["Rp2.200.000.000", "Rp1.760.000.000", "Rp220.000.000"],
        explanation: "PKP = Rp2 miliar; PPh = 22% × Rp2.000.000.000 = Rp440.000.000."
      },
      {
        question: "Tarif 22% PPh Badan diterapkan terhadap ...",
        correct: "Penghasilan Kena Pajak, bukan omzet",
        wrong: ["peredaran usaha (omzet)", "seluruh aset perusahaan", "total biaya perusahaan"],
        explanation: "PKP diperoleh dari peredaran usaha dan penghasilan lain dikurangi biaya dan kompensasi kerugian fiskal."
      },
      {
        question: "WP Badan dalam negeri dengan peredaran bruto sampai Rp50 miliar memperoleh pengurangan tarif 50% atas bagian PKP dari peredaran bruto sampai dengan ...",
        correct: "Rp4,8 miliar, sehingga tarif efektif bagian itu 11%",
        wrong: ["Rp500 juta, sehingga tarif efektif 11%", "Rp50 miliar, sehingga tarif efektif 11%", "Rp4,8 miliar, sehingga tarif efektif 5%"],
        explanation: "22% × 50% = 11% untuk bagian PKP dari peredaran bruto sampai Rp4,8 miliar."
      },
      {
        question: "Tarif PPh Orang Pribadi Pasal 17 untuk PKP sampai dengan Rp60 juta adalah ...",
        correct: "5%",
        wrong: ["10%", "15%", "25%"],
        explanation: "Lapisan: ≤ Rp60 juta 5%; > 60–250 juta 15%; > 250–500 juta 25%; > 500 juta–5 miliar 30%; > 5 miliar 35%."
      },
      {
        question: "Tarif PPh Orang Pribadi untuk PKP di atas Rp250 juta sampai dengan Rp500 juta adalah ...",
        correct: "25%",
        wrong: ["15%", "30%", "35%"],
        explanation: "Lapisan ketiga tarif Pasal 17 UU PPh adalah 25%."
      },
      {
        question: "Tarif PPh Orang Pribadi untuk PKP di atas Rp5 miliar adalah ...",
        correct: "35%",
        wrong: ["30%", "25%", "40%"],
        explanation: "Lapisan tertinggi tarif Pasal 17 UU PPh adalah 35%."
      },
      {
        question: "Pada masa pajak selain masa pajak terakhir, PPh Pasal 21 karyawan dihitung menggunakan ...",
        correct: "Tarif Efektif Rata-Rata (TER)",
        wrong: ["tarif Pasal 17 UU PPh", "tarif final 0,5%", "tarif Pasal 23"],
        explanation: "PPh Pasal 21 = penghasilan bruto sebulan × TER."
      },
      {
        question: "Untuk pegawai tetap, TER A antara lain digunakan untuk status PTKP ...",
        correct: "TK/0, TK/1, dan K/0",
        wrong: ["TK/2, TK/3, K/1, dan K/2", "hanya K/3", "hanya TK/0"],
        explanation: "TER B: TK/2, TK/3, K/1, K/2. TER C: K/3."
      },
      {
        question: "Andi (TK/0) bergaji bruto tetap Rp10.000.000 per bulan dengan TER A 2,00%. PPh Pasal 21 per bulan (Januari–November) adalah ...",
        correct: "Rp200.000",
        wrong: ["Rp20.000", "Rp2.000.000", "Rp500.000"],
        explanation: "Rp10.000.000 × 2,00% = Rp200.000."
      },
      {
        question: "Pada masa pajak terakhir (umumnya Desember), PPh Pasal 21 karyawan tetap dihitung kembali dengan ...",
        correct: "tarif Pasal 17 UU PPh, lalu dikurangi PPh Pasal 21 yang sudah dipotong sebelumnya",
        wrong: ["TER yang sama dengan bulan sebelumnya", "tarif final 0,5%", "tarif Pasal 26"],
        explanation: "PPh terutang setahun = PKP setahun × tarif Pasal 17. Selisih setelah dikurangi potongan Januari–November dipotong pada masa terakhir."
      },
      {
        question: "WP Orang Pribadi usaha/pekerjaan bebas dapat menggunakan NPPN apabila peredaran brutonya ...",
        correct: "kurang dari Rp4,8 miliar dalam satu tahun pajak",
        wrong: ["lebih dari Rp4,8 miliar", "kurang dari Rp500 juta", "tepat Rp50 miliar"],
        explanation: "NPPN juga mensyaratkan pemberitahuan penggunaannya kepada DJP dalam jangka waktu yang ditentukan."
      },
      {
        question: "WP Orang Pribadi TK/0 memiliki peredaran bruto Rp1 miliar dengan persentase NPPN 30% (ilustrasi) dan PTKP Rp54 juta. PKP-nya adalah ...",
        correct: "Rp246 juta",
        wrong: ["Rp300 juta", "Rp954 juta", "Rp270 juta"],
        explanation: "Penghasilan neto = Rp300 juta; PKP = Rp300 juta − Rp54 juta = Rp246 juta."
      },
      {
        question: "Tarif PPh Final bagi WP dengan peredaran bruto tertentu (UMKM) adalah ...",
        correct: "0,5% dari peredaran bruto, untuk peredaran tidak melebihi Rp4,8 miliar",
        wrong: ["1% dari laba bersih", "2% dari peredaran bruto", "0,5% dari laba bersih"],
        explanation: "Tarif 0,5% dikenakan atas peredaran bruto, bukan laba."
      },
      {
        question: "Pak Andi memiliki toko kelontong dengan omzet setahun Rp720 juta (WP Orang Pribadi, PPh Final 0,5%). PPh Final terutangnya adalah ...",
        correct: "Rp1.100.000",
        wrong: ["Rp3.600.000", "Rp2.500.000", "Rp0"],
        explanation: "Rp500 juta pertama tidak dikenai PPh. (720 juta − 500 juta) × 0,5% = Rp1.100.000."
      },
      {
        question: "Bagian peredaran bruto WP Orang Pribadi yang tidak dikenai PPh Final dalam satu tahun pajak adalah sampai dengan ...",
        correct: "Rp500 juta",
        wrong: ["Rp54 juta", "Rp4,8 miliar", "Rp50 miliar"],
        explanation: "Fasilitas khusus bagi WP Orang Pribadi: peredaran bruto sampai Rp500 juta tidak dikenai PPh."
      },
      {
        question: "Tarif PPh Pasal 23 yang umum digunakan untuk dividen, bunga, royalti, serta hadiah/penghargaan tertentu adalah ...",
        correct: "15% dari jumlah bruto",
        wrong: ["2% dari jumlah bruto", "20% dari jumlah bruto", "10% dari jumlah bruto"],
        explanation: "Untuk sewa harta dan jasa tertentu tarifnya 2% dari jumlah bruto."
      },
      {
        question: "PT Maju membayar jasa konsultasi Rp100 juta kepada perusahaan konsultan dalam negeri yang menjadi objek PPh Pasal 23. PPh yang dipotong adalah ...",
        correct: "Rp2 juta",
        wrong: ["Rp15 juta", "Rp10 juta", "Rp20 juta"],
        explanation: "2% × Rp100 juta = Rp2 juta."
      },
      {
        question: "Tarif umum PPh Pasal 26 atas penghasilan bruto yang diterima Wajib Pajak luar negeri adalah ...",
        correct: "20%, atau tarif P3B bila persyaratannya terpenuhi",
        wrong: ["15%, tanpa pengecualian", "2%, tanpa pengecualian", "25%, atau tarif P3B"],
        explanation: "P3B = Persetujuan Penghindaran Pajak Berganda."
      },
      {
        question: "Seseorang menyewakan ruko dengan nilai sewa Rp100 juta kepada perusahaan. PPh Final Pasal 4 ayat (2) atas persewaan tanah/bangunan adalah ...",
        correct: "Rp10 juta (tarif 10% dari jumlah bruto)",
        wrong: ["Rp2 juta (tarif 2%)", "Rp15 juta (tarif 15%)", "Rp1 juta (tarif 1%)"],
        explanation: "PPh Final persewaan tanah dan/atau bangunan 10% dari jumlah bruto."
      }
    ]
  });
})();
