(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 6,
    title: "APBN, Manfaat Pajak, dan Kesadaran Pajak",
    description: "Manfaat pajak, angka RAPBN 2026 (Materi I), kesadaran vs kepatuhan, free rider, gotong royong (Bab II B & Bab III).",
    questions: [
      {
        question: "Ketika seseorang membayar pajak Rp1 juta, apa yang terjadi menurut materi?",
        correct: "Pajak menjadi bagian penerimaan negara yang dikelola melalui APBN, bukan kembali dalam bentuk uang langsung",
        wrong: ["ia pasti menerima kembali Rp1 juta dalam bentuk fasilitas", "ia berhak menentukan penggunaan uangnya", "uangnya disimpan sampai ia pensiun"],
        explanation: "Pajak tidak kembali kepada pembayar dalam bentuk uang secara langsung; manfaatnya dirasakan masyarakat secara luas."
      },
      {
        question: "Dalam contoh siswa bernama Andi, kesimpulan yang tepat adalah ...",
        correct: "belum menjadi pembayar pajak bukan berarti belum merasakan manfaat pajak",
        wrong: ["hanya Wajib Pajak yang boleh memakai fasilitas publik", "siswa wajib membayar PPh sejak bersekolah", "manfaat pajak hanya dinikmati orang dewasa"],
        explanation: "Andi menikmati jalan, sekolah, puskesmas, fasilitas olahraga, dan ruang publik walau belum memiliki kewajiban PPh."
      },
      {
        question: "Pajak dapat dipahami sebagai salah satu bentuk ... dalam kehidupan bernegara.",
        correct: "gotong royong",
        wrong: ["kompetisi", "investasi pribadi", "tabungan individu"],
        explanation: "Kontribusi dihimpun negara dan digunakan untuk kebutuhan bersama."
      },
      {
        question: "Menurut materi Penyisihan I, total pendapatan negara dalam RAPBN 2026 direncanakan sebesar ...",
        correct: "Rp3.147,7 triliun",
        wrong: ["Rp3.786,5 triliun", "Rp2.357,7 triliun", "Rp2.692 triliun"],
        explanation: "Terdiri atas penerimaan perpajakan Rp2.692 triliun dan PNBP Rp455 triliun."
      },
      {
        question: "Menurut materi Penyisihan I (RAPBN 2026), penerimaan perpajakan Rp2.692 triliun terdiri atas ...",
        correct: "penerimaan pajak Rp2.357,7 triliun dan penerimaan bea dan cukai Rp334,3 triliun",
        wrong: ["penerimaan pajak Rp455 triliun dan PNBP Rp2.357,7 triliun", "pajak Rp3.147,7 triliun dan hibah Rp334,3 triliun", "PNBP Rp334,3 triliun dan bea cukai Rp2.357,7 triliun"],
        explanation: "Penerimaan pajak menjadi komponen yang sangat penting dalam menopang pendapatan negara."
      },
      {
        question: "Realisasi penerimaan pajak hingga 31 Agustus 2026 menurut materi Penyisihan I adalah ...",
        correct: "Rp1.409 triliun, tumbuh 24,1% dan mencapai 59,8% dari target",
        wrong: ["Rp1.459,4 triliun, tumbuh 21,4% dan mencapai 46,3% dari target", "Rp2.357,7 triliun, tumbuh 7,69% dan mencapai 100% dari target", "Rp1.409 triliun, tumbuh 5,61% dan mencapai 24,1% dari target"],
        explanation: "Target penerimaan pajak 2026 sebesar Rp2.357,7 triliun. (Angka Rp1.459,4 triliun/46,3% adalah pendapatan negara s.d. 30 Juni 2026 pada Materi II.)"
      },
      {
        question: "Menurut RAPBN 2026 (Materi I), total belanja negara direncanakan sebesar ...",
        correct: "Rp3.786,5 triliun, terdiri atas belanja pemerintah pusat Rp3.136,5 triliun dan transfer ke daerah Rp650 triliun",
        wrong: ["Rp3.147,7 triliun, terdiri atas belanja pusat Rp2.692 triliun dan transfer ke daerah Rp455 triliun", "Rp3.786,5 triliun, terdiri atas belanja pusat Rp650 triliun dan transfer ke daerah Rp3.136,5 triliun", "Rp2.357,7 triliun, terdiri atas belanja pusat dan bea cukai"],
        explanation: "Karena pendapatan lebih kecil dari belanja, RAPBN 2026 merencanakan defisit."
      },
      {
        question: "Defisit anggaran RAPBN 2026 yang direncanakan menurut Materi I adalah ...",
        correct: "Rp638,8 triliun atau 2,48% dari PDB",
        wrong: ["Rp638,8 triliun atau 5,61% dari PDB", "Rp334,3 triliun atau 2,48% dari PDB", "Rp455 triliun atau 3% dari PDB"],
        explanation: "Defisit = belanja negara − pendapatan negara (Rp3.786,5 T − Rp3.147,7 T)."
      },
      {
        question: "Memiliki NIK pada administrasi perpajakan saat ini berarti ...",
        correct: "NIK digunakan sebagai NPWP bagi Wajib Pajak orang pribadi penduduk, tetapi belum otomatis wajib membayar pajak",
        wrong: ["seseorang otomatis wajib membayar PPh", "seseorang otomatis wajib melaporkan SPT dan membayar PPN", "NIK hanya digunakan untuk BPJS"],
        explanation: "Kewajiban muncul apabila seseorang memenuhi persyaratan subjektif dan objektif dalam ketentuan perpajakan."
      },
      {
        question: "Orang pribadi yang belum memenuhi persyaratan melaksanakan kewajiban perpajakan, misalnya yang belum bekerja, dapat ...",
        correct: "membuat akun Coretax DJP tanpa melakukan aktivasi NIK sebagai NPWP",
        wrong: ["langsung dikenai PPh Final 0,5%", "dilarang membuat akun Coretax", "wajib mengaktifkan NPWP badan"],
        explanation: "Memiliki akses Coretax tidak berarti telah menjadi Wajib Pajak yang aktif melaksanakan kewajiban."
      },
      {
        question: "Mekanisme pemotongan PPh Pasal 21 oleh pemberi kerja menunjukkan bahwa ...",
        correct: "kewajiban pajak tidak selalu berarti menyerahkan uang pajak secara langsung kepada negara",
        wrong: ["karyawan tidak memiliki kewajiban pajak apa pun", "pajak hanya dibayar oleh pengusaha", "pegawai tidak berhak atas bukti potong"],
        explanation: "Dalam kehidupan sehari-hari terdapat mekanisme pemotongan atau pemungutan pajak oleh pihak lain."
      },
      {
        question: "Perbedaan kesadaran pajak dan kepatuhan pajak adalah ...",
        correct: "kesadaran menjelaskan mengapa kewajiban dilakukan, kepatuhan menunjukkan kewajiban benar-benar dilaksanakan",
        wrong: ["keduanya sama persis", "kesadaran berarti dipaksa sanksi, kepatuhan berarti sukarela", "kesadaran hanya milik petugas pajak"],
        explanation: "Kepatuhan terlihat dari perilaku nyata: mendaftar, memberi data benar, menghitung, membayar, dan melapor SPT."
      },
      {
        question: "Kepatuhan yang tumbuh dari pemahaman dan kemauan untuk memenuhi kewajiban disebut ...",
        correct: "voluntary compliance",
        wrong: ["forced compliance", "enforcement compliance", "cooperative audit"],
        explanation: "Sistem self-assessment sangat bergantung pada kepercayaan dan kemampuan Wajib Pajak."
      },
      {
        question: "Perkembangan kesadaran pajak menurut materi mengikuti alur ...",
        correct: "mengetahui → memahami → melaksanakan → menjadi kebiasaan patuh",
        wrong: ["melaksanakan → mengetahui → memahami → patuh", "takut → membayar → lupa → patuh", "memahami → menghindari → membayar → patuh"],
        explanation: "Kesadaran dapat dibangun dari pengalaman sehari-hari, bahkan sebelum menjadi Wajib Pajak."
      },
      {
        question: "Free rider (penumpang gelap) dalam konteks pajak adalah ...",
        correct: "pihak yang menikmati hasil pembangunan tanpa ikut berkontribusi sebagaimana mestinya",
        wrong: ["pihak yang membayar pajak lebih banyak dari seharusnya", "pegawai pajak yang menerima gratifikasi", "pengusaha yang memilih menjadi PKP"],
        explanation: "Misalnya orang yang telah memenuhi syarat kewajiban pajak tetapi tidak memenuhinya, namun tetap memakai fasilitas publik."
      },
      {
        question: "Dalam keadilan pajak, 'keadilan horizontal' berarti ...",
        correct: "pihak dengan kondisi yang sama pada dasarnya diperlakukan sama",
        wrong: ["pihak berpenghasilan lebih besar membayar lebih banyak", "semua orang membayar jumlah yang sama", "pihak miskin dibebaskan sepenuhnya"],
        explanation: "Keadilan vertikal mempertimbangkan kemampuan atau kondisi yang berbeda sehingga beban pajak dapat berbeda."
      },
      {
        question: "Dasar konstitusional yang menyatakan setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara adalah ...",
        correct: "Pasal 27 ayat (3) UUD 1945",
        wrong: ["Pasal 23A UUD 1945", "Pasal 33 UUD 1945", "Pasal 4 ayat (1) UUD 1945"],
        explanation: "Membayar pajak merupakan kontribusi nonfisik yang mendukung kemampuan negara menjaga keberlangsungan kehidupan masyarakat."
      },
      {
        question: "Membayar pajak sebagai bentuk bela negara disebut kontribusi ...",
        correct: "nonfisik",
        wrong: ["fisik", "militer", "diplomatik"],
        explanation: "Membayar pajak bukan berarti melakukan kegiatan pertahanan secara langsung."
      },
      {
        question: "Generasi sadar pajak adalah generasi yang ...",
        correct: "memahami alasan di balik kewajiban pajak dan mampu menerapkannya secara bertanggung jawab",
        wrong: ["hanya hafal istilah-istilah perpajakan", "menghindari semua jenis pajak secara legal", "hanya membayar pajak ketika diperiksa"],
        explanation: "Kesadaran pajak juga berarti tidak menjadi free rider dan ikut merawat hasil pembangunan."
      },
      {
        question: "Contoh manfaat pajak di bidang kesehatan menurut materi adalah ...",
        correct: "puskesmas, imunisasi, dan dukungan pembiayaan program jaminan kesehatan",
        wrong: ["klinik swasta berbayar penuh", "pembelian obat pribadi", "asuransi kesehatan perusahaan"],
        explanation: "Ketika seseorang berobat ke puskesmas atau mengikuti imunisasi, ada anggaran yang diperlukan untuk tenaga kesehatan, obat, gedung, dan peralatan."
      }
    ]
  });
})();
