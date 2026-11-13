(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 7,
    title: "Negara Mengelola Pajak",
    description: "Lembaga negara, DJP, administrasi vs distribusi pajak, APBN, dan kebijakan perpajakan 2026 (Materi II, Bab 4).",
    questions: [
      {
        question: "Secara horizontal, pemerintahan Indonesia terdiri atas lembaga ...",
        correct: "eksekutif, legislatif, dan yudikatif yang berkedudukan sederajat",
        wrong: ["pusat, provinsi, dan kabupaten/kota", "absolut, konkuren, dan umum", "primer, sekunder, dan tersier"],
        explanation: "Secara vertikal, pemerintahan terdiri atas pemerintah pusat dan pemerintahan daerah otonom."
      },
      {
        question: "Sistem pemerintahan Indonesia menurut UUD 1945 (Pasal 4 ayat 1) adalah ...",
        correct: "presidensiil, dengan Presiden sebagai kepala negara sekaligus kepala pemerintahan",
        wrong: ["parlementer, dengan Presiden sebagai simbol", "semi-presidensiil, dengan perdana menteri", "monarki konstitusional"],
        explanation: "Presiden berada di luar pengawasan langsung DPR dan tidak bertanggung jawab kepada DPR."
      },
      {
        question: "Menurut UU Nomor 23 Tahun 2014, klasifikasi urusan pemerintahan terdiri atas ...",
        correct: "urusan pemerintahan absolut, konkuren, dan umum",
        wrong: ["urusan pusat, provinsi, dan kota", "urusan wajib, pilihan, dan khusus", "urusan eksekutif, legislatif, dan yudikatif"],
        explanation: "Urusan konkuren dibagi lagi menjadi urusan pemerintahan wajib dan pilihan."
      },
      {
        question: "Urusan pemerintahan yang sepenuhnya menjadi kewenangan Pemerintah Pusat disebut urusan ...",
        correct: "absolut",
        wrong: ["konkuren", "umum", "pilihan"],
        explanation: "Konkuren dibagi antara pusat dan daerah; umum menjadi kewenangan Presiden sebagai kepala pemerintahan."
      },
      {
        question: "Mengelola pajak mencakup dua kegiatan, yaitu ...",
        correct: "mengadministrasikan pajak dan mendistribusikan hasil pajak",
        wrong: ["memeriksa pajak dan memidanakan pelanggar", "menghitung pajak dan melaporkan pajak", "membuat undang-undang dan menetapkan tarif"],
        explanation: "Mengadministrasikan = memungut dan mengumpulkan; mendistribusikan = mengalokasikan anggaran melalui APBN/APBD."
      },
      {
        question: "Tiga fungsi utama kegiatan administrasi pajak oleh DJP adalah ...",
        correct: "pelayanan, pengawasan, dan penegakan hukum",
        wrong: ["alokasi, distribusi, dan stabilisasi", "otorisasi, perencanaan, dan pengawasan", "proteksi, stabilisasi, dan redistribusi"],
        explanation: "Contoh: registrasi NPWP/pelaporan SPT (pelayanan), pemeriksaan/ekstensifikasi (pengawasan), penagihan/penyidikan (penegakan hukum)."
      },
      {
        question: "Registrasi NPWP dan pelaporan SPT merupakan contoh fungsi ...",
        correct: "pelayanan",
        wrong: ["pengawasan", "penegakan hukum", "distribusi"],
        explanation: "Pemeriksaan pajak dan ekstensifikasi Wajib Pajak baru termasuk fungsi pengawasan."
      },
      {
        question: "Pajak pusat diadministrasikan oleh ... yang berada di bawah ...",
        correct: "Direktorat Jenderal Pajak (DJP), Kementerian Keuangan",
        wrong: ["Dinas Pendapatan Daerah, Pemerintah Provinsi", "Direktorat Jenderal Bea dan Cukai, Kementerian Perdagangan", "Badan Pemeriksa Keuangan, DPR"],
        explanation: "Kantor Pusat DJP beralamat di Jalan Gatot Subroto Kavling 40-42, Jakarta; situs resmi www.pajak.go.id."
      },
      {
        question: "Unit kantor operasional DJP terdiri atas ...",
        correct: "Kanwil DJP, KPP, KP2KP, PPDDP, dan KLIP",
        wrong: ["Sekretariat, Direktorat, dan Tenaga Pengkaji", "DPR, DPRD, dan BPK", "Kanwil, Dispenda, dan BPKAD"],
        explanation: "Kantor pusat terdiri atas Sekretariat Direktorat Jenderal, Direktorat, dan jabatan Tenaga Pengkaji."
      },
      {
        question: "Pajak daerah diadministrasikan di ...",
        correct: "Dinas Pendapatan/Pengelolaan Keuangan dan Aset Daerah atau kantor sejenisnya di bawah pemerintah daerah",
        wrong: ["Kantor Pelayanan Pajak Pratama", "Kantor Wilayah DJP", "Kementerian Dalam Negeri"],
        explanation: "Pajak daerah ada karena Indonesia menganut asas desentralisasi."
      },
      {
        question: "Fungsi mendistribusikan hasil pajak pusat berada pada ...",
        correct: "DPR, pemerintah pusat, dan kementerian terkait melalui APBN",
        wrong: ["Direktorat Jenderal Pajak", "Dinas Pendapatan Daerah", "KPP Pratama"],
        explanation: "DJP dan dinas pendapatan hanya mengadministrasikan (memungut dan mengumpulkan) pajak. Pajak daerah didistribusikan melalui APBD bersama DPRD."
      },
      {
        question: "Kewenangan negara memungut pajak didasarkan pada pendekatan ...",
        correct: "benefit approach (pendekatan manfaat)",
        wrong: ["ability to pay saja", "social contract tanpa undang-undang", "voluntary approach"],
        explanation: "Karena negara menciptakan manfaat bagi seluruh warga, negara berwenang memungut pajak dengan cara yang dapat dipaksakan berdasarkan undang-undang."
      },
      {
        question: "Penerimaan negara terdiri atas tiga sumber, yaitu ...",
        correct: "penerimaan perpajakan, penerimaan negara bukan pajak (PNBP), dan hibah",
        wrong: ["PPh, PPN, dan PBB", "pajak pusat, pajak daerah, dan retribusi", "APBN, APBD, dan dana desa"],
        explanation: "Penerimaan perpajakan terdiri atas penerimaan pajak dan penerimaan bea dan cukai."
      },
      {
        question: "Tiga fungsi ekonomi APBN adalah ...",
        correct: "alokasi, distribusi, dan stabilisasi",
        wrong: ["otorisasi, perencanaan, dan pengawasan", "pelayanan, pengawasan, dan penegakan hukum", "anggaran, mengatur, dan demokrasi"],
        explanation: "Alokasi: anggaran untuk tujuan pembangunan; distribusi: pendapatan dan subsidi; stabilisasi: menjaga stabilitas ekonomi."
      },
      {
        question: "Transfer Dana Perimbangan ke daerah meliputi ...",
        correct: "Dana Bagi Hasil Pajak, DBH Sumber Daya Alam, Dana Alokasi Umum, dan Dana Alokasi Khusus",
        wrong: ["PAD, retribusi, hibah, dan pembiayaan", "PKB, BBNKB, PBBKB, dan Pajak Rokok", "Dana Otsus Papua, Dana Otsus Aceh, dan Dana Desa"],
        explanation: "Transfer ke Daerah terdiri atas Dana Perimbangan serta Dana Otonomi Khusus dan Penyesuaian."
      },
      {
        question: "Menurut Thomas R. Dye, kebijakan publik adalah ...",
        correct: "apa pun pilihan pemerintah untuk melakukan sesuatu atau tidak melakukan sesuatu",
        wrong: ["keputusan hakim dalam sengketa pajak", "hanya peraturan yang tertulis dalam undang-undang", "hanya program yang dibiayai APBN"],
        explanation: "Kebijakan perpajakan (tax policy) adalah bagian dari kebijakan publik dan instrumen kebijakan fiskal."
      },
      {
        question: "Menurut artikel Antara dalam materi (Januari 2026), tantangan utama perpajakan Indonesia terletak pada ...",
        correct: "efektivitas pemungutan, kepatuhan Wajib Pajak, serta kualitas dan integrasi basis data",
        wrong: ["tingkat tarif yang terlalu rendah", "kurangnya jumlah undang-undang pajak", "terlalu banyak insentif pajak"],
        explanation: "Rasio pajak Indonesia 2025 diperkirakan sekitar 10,03% terhadap PDB, masih tertinggal dibanding Malaysia dan Thailand (di atas 14%)."
      },
      {
        question: "Kebijakan ketiga pajak 2026 dalam artikel adalah penerapan penuh pajak minimum global bagi perusahaan multinasional besar sebesar ...",
        correct: "15 persen",
        wrong: ["10 persen", "22 persen", "25 persen"],
        explanation: "Tax holiday juga disesuaikan agar sejalan dengan global minimum tax 15 persen."
      },
      {
        question: "Menurut Materi II, target penagihan DJP untuk tahun 2026 dari Wajib Pajak yang memiliki tunggakan adalah ...",
        correct: "Rp28,38 triliun",
        wrong: ["Rp2.357,7 triliun", "Rp1.459,4 triliun", "Rp459,2 triliun"],
        explanation: "Penguatan penagihan pajak merupakan salah satu dari sepuluh upaya penguatan DJP 2026."
      },
      {
        question: "Pendekatan Intelligence-Led Compliance yang dikembangkan DJP memanfaatkan ...",
        correct: "Big Data, Advanced Analytics, dan kecerdasan buatan (AI)",
        wrong: ["hanya pemeriksaan lapangan manual", "hanya laporan keuangan tahunan", "hanya pertukaran data kertas antarkantor"],
        explanation: "Tujuannya mengidentifikasi risiko ketidakpatuhan dan menentukan prioritas pengawasan."
      }
    ]
  });
})();
