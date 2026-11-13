(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 2,
    title: "Konsep Dasar Pajak",
    description: "Definisi, ciri, fungsi, pungutan lain, dan asas pemungutan (Materi I, Bab II A–D).",
    questions: [
      {
        question: "Menurut UU KUP, pajak adalah ...",
        correct: "kontribusi wajib kepada negara yang bersifat memaksa berdasarkan undang-undang, tanpa imbalan langsung",
        wrong: ["sumbangan sukarela masyarakat untuk pemerintah", "pembayaran atas jasa tertentu yang diberikan pemerintah", "pungutan tambahan atas pembelian barang mewah"],
        explanation: "Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan, memaksa berdasarkan UU, tanpa imbalan langsung, untuk sebesar-besarnya kemakmuran rakyat."
      },
      {
        question: "Pasal berapa dalam UUD 1945 yang menegaskan bahwa pajak dan pungutan lain yang bersifat memaksa diatur dengan undang-undang?",
        correct: "Pasal 23A",
        wrong: ["Pasal 27 ayat (3)", "Pasal 30 ayat (1)", "Pasal 33"],
        explanation: "Pasal 23A UUD 1945: pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang."
      },
      {
        question: "Manakah yang BUKAN ciri pajak?",
        correct: "Pembayar pajak langsung menerima imbalan yang setara",
        wrong: ["Berdasarkan undang-undang dan bersifat memaksa", "Digunakan untuk keperluan negara", "Wajib Pajak dapat berupa orang pribadi atau badan"],
        explanation: "Pajak tidak memberikan imbalan secara langsung kepada pembayarnya; manfaatnya dirasakan melalui pembiayaan kebutuhan negara dan pelayanan publik."
      },
      {
        question: "Prof. Dr. Rochmat Soemitro menyebut pajak sebagai iuran rakyat kepada kas negara dengan tiada mendapat ...",
        correct: "jasa timbal (tegen prestasi)",
        wrong: ["bunga tahunan", "hadiah undian", "fasilitas pembebasan"],
        explanation: "Definisi Rochmat Soemitro menekankan pajak berdasarkan UU, dapat dipaksakan, tanpa jasa timbal langsung."
      },
      {
        question: "Reformasi perpajakan pertama kali dilakukan pada tahun 1983, yaitu mengubah sistem dari ...",
        correct: "official assessment menjadi self assessment",
        wrong: ["self assessment menjadi withholding", "withholding menjadi official assessment", "official assessment menjadi withholding"],
        explanation: "Sistem lama: pemerintah yang menetapkan pajak terutang. Sistem baru: Wajib Pajak sendiri yang menghitung, membayar, dan melaporkan."
      },
      {
        question: "UU Pajak Penghasilan (UU PPh) tercantum dalam Undang-Undang Nomor ... Tahun 1983.",
        correct: "7",
        wrong: ["6", "8", "12"],
        explanation: "UU 6/1983 = KUP, UU 7/1983 = PPh, UU 8/1983 = PPN dan PPnBM."
      },
      {
        question: "UU Ketentuan Umum dan Tata Cara Perpajakan (UU KUP) adalah Undang-Undang Nomor ... Tahun 1983.",
        correct: "6",
        wrong: ["7", "8", "9"],
        explanation: "UU KUP = UU Nomor 6 Tahun 1983 (terakhir diubah dengan UU Nomor 6 Tahun 2023)."
      },
      {
        question: "Dua fungsi pajak menurut materi adalah ...",
        correct: "fungsi anggaran (budgetair) dan fungsi mengatur (regulerend)",
        wrong: ["fungsi pelayanan dan fungsi pengawasan", "fungsi alokasi dan fungsi distribusi", "fungsi proteksi dan fungsi stabilisasi"],
        explanation: "Proteksi, stabilisasi, dan redistribusi pendapatan adalah bagian dari fungsi mengatur."
      },
      {
        question: "Pajak sebagai sumber penerimaan untuk membiayai pengeluaran rutin dan pembangunan dalam APBN merupakan fungsi ...",
        correct: "anggaran (budgetair)",
        wrong: ["mengatur (regulerend)", "redistribusi pendapatan", "proteksi"],
        explanation: "Fungsi budgetair: pajak sebagai sumber penerimaan pemerintah."
      },
      {
        question: "Pemberian fasilitas Tax Allowance untuk menarik modal luar dan dalam negeri adalah contoh fungsi ...",
        correct: "mengatur (regulerend)",
        wrong: ["anggaran (budgetair)", "penegakan hukum", "pelayanan"],
        explanation: "Pajak digunakan sebagai alat kebijakan pemerintah untuk mencapai tujuan tertentu."
      },
      {
        question: "Mengenakan pajak tinggi pada barang impor untuk melindungi industri dalam negeri adalah fungsi pajak sebagai alat ...",
        correct: "proteksi",
        wrong: ["stabilisasi", "redistribusi pendapatan", "demokrasi"],
        explanation: "Alat proteksi: perlindungan terhadap barang-barang industri produk dalam negeri."
      },
      {
        question: "Pengenaan pajak progresif yang hasilnya dinikmati semua orang tanpa melihat besar penghasilannya menunjukkan fungsi pajak sebagai alat ...",
        correct: "redistribusi pendapatan",
        wrong: ["proteksi", "stabilisasi harga", "pengawasan"],
        explanation: "Pajak dikenakan sesuai penghasilan, sedangkan manfaatnya dinikmati semua orang."
      },
      {
        question: "Retribusi adalah ...",
        correct: "pungutan daerah sebagai pembayaran atas jasa atau izin tertentu yang khusus diberikan Pemerintah Daerah",
        wrong: ["pungutan pemerintah pusat atas dokumen", "sumbangan sukarela kepada korban bencana", "pajak atas konsumsi barang dan jasa"],
        explanation: "Pembayar retribusi langsung mendapat manfaat, misalnya pelayanan persampahan setelah membayar retribusi sampah."
      },
      {
        question: "Retribusi dibagi menjadi tiga jenis, yaitu ...",
        correct: "retribusi jasa umum, retribusi jasa usaha, dan perizinan tertentu",
        wrong: ["retribusi pusat, provinsi, dan kota", "retribusi langsung, tidak langsung, dan final", "retribusi wajib, sukarela, dan khusus"],
        explanation: "Contoh jasa umum: pelayanan kesehatan, persampahan. Jasa usaha: terminal, pasar grosir. Perizinan: IMB, izin trayek."
      },
      {
        question: "Ciri utama sumbangan yang membedakannya dari pajak dan retribusi adalah ...",
        correct: "bersifat sukarela dan tidak memaksa",
        wrong: ["bersifat memaksa tetapi tanpa sanksi", "ditetapkan dengan undang-undang", "hanya dipungut oleh pemerintah daerah"],
        explanation: "Tidak ada sanksi jika seseorang tidak memberikan sumbangan; unsur gotong royong lebih dikedepankan."
      },
      {
        question: "Adam Smith menyebut prinsip pemungutan pajak dengan istilah ...",
        correct: "The Four Maxims",
        wrong: ["The Five Pillars", "The Three Rules", "The Wealth Principles"],
        explanation: "Empat maxim: equality, certainty, convenience of payment, dan economic of collection."
      },
      {
        question: "Prinsip bahwa pemungutan pajak dilakukan pada saat yang paling tepat bagi Wajib Pajak, yaitu sesaat setelah menerima penghasilan, disebut ...",
        correct: "convenience of payment",
        wrong: ["equality", "certainty", "economic of collection"],
        explanation: "Convenience of payment = prinsip ketepatan waktu."
      },
      {
        question: "Prinsip economic of collection menekankan bahwa ...",
        correct: "biaya pemungutan pajak tidak boleh lebih besar dari penerimaan pajak itu sendiri",
        wrong: ["tarif harus sama untuk semua orang", "pajak dipungut sebesar-besarnya", "waktu pembayaran dapat ditawar"],
        explanation: "Pemungutan pajak hendaknya sehemat (seefisien) mungkin."
      },
      {
        question: "Prinsip certainty dalam pemungutan pajak berarti ...",
        correct: "pajak harus terang dan tidak arbitrer, mencakup kepastian subjek, objek, besarnya, dan waktu pembayaran",
        wrong: ["pajak harus sama besar untuk setiap orang", "pajak dipungut setelah akhir tahun", "pajak boleh dinegosiasikan"],
        explanation: "Kepastian hukum memungkinkan Wajib Pajak melaksanakan kewajibannya."
      },
      {
        question: "Prinsip equality (keadilan) dalam pemungutan pajak berarti ...",
        correct: "keseimbangan antara kemampuan Wajib Pajak dan pajak yang dibayar, serta tidak diskriminatif",
        wrong: ["semua orang membayar jumlah yang sama", "hanya pengusaha yang membayar pajak", "pajak ditentukan sepihak oleh petugas"],
        explanation: "Keadilan pajak bukan berarti jumlah yang sama, melainkan mempertimbangkan kemampuan."
      }
    ]
  });
})();
