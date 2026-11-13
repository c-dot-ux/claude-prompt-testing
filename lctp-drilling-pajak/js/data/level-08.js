(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 8,
    title: "Bela Negara & Ketahanan Nasional",
    description: "Hak dan kewajiban WNI, bela negara, Asta Gatra, AGHT, dan arah belanja negara 2026 (Materi II, Bab 5).",
    questions: [
      {
        question: "Hak dan kewajiban warga negara dalam upaya bela negara tercantum dalam ...",
        correct: "Pasal 27 ayat (3) UUD 1945",
        wrong: ["Pasal 23A UUD 1945", "Pasal 26 ayat (1) UUD 1945", "Pasal 4 ayat (1) UUD 1945"],
        explanation: "Ketentuan bela negara diatur lebih lanjut dalam UU Nomor 3 Tahun 2002 tentang Pertahanan Negara."
      },
      {
        question: "Keikutsertaan warga negara dalam upaya bela negara (Pasal 9 ayat 2 UU 3/2002) diselenggarakan melalui ...",
        correct: "pendidikan kewarganegaraan, pelatihan dasar kemiliteran secara wajib, pengabdian sebagai prajurit TNI, dan pengabdian sesuai profesi",
        wrong: ["hanya menjadi anggota TNI", "hanya pelatihan fisik di akademi militer", "keanggotaan partai politik dan organisasi massa"],
        explanation: "Bela negara tidak hanya dengan menjadi tentara; setiap warga negara dapat berperan sesuai profesi."
      },
      {
        question: "Yang dimaksud upaya bela negara menurut penjelasan Pasal 9 ayat (1) UU 3/2002 adalah ...",
        correct: "sikap dan perilaku warga negara yang dijiwai kecintaan kepada NKRI berdasarkan Pancasila dan UUD 1945 untuk menjamin kelangsungan hidup bangsa dan negara",
        wrong: ["kewajiban membayar pajak tepat waktu", "kewajiban mengikuti wajib militer seumur hidup", "pelatihan baris-berbaris dan kemiliteran"],
        explanation: "Selain kewajiban dasar manusia, bela negara juga merupakan kehormatan bagi setiap warga negara."
      },
      {
        question: "Bela negara secara fisik dalam usaha pertahanan negara dilakukan oleh ...",
        correct: "TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung/cadangan",
        wrong: ["DJP dan Kementerian Keuangan", "DPR dan DPRD", "BUMN dan perusahaan swasta"],
        explanation: "Sistem pertahanan dan keamanan rakyat semesta diatur dalam Pasal 30 ayat (2) UUD 1945."
      },
      {
        question: "Hak dan kewajiban warga negara ikut serta dalam usaha pertahanan dan keamanan negara tercantum pada ...",
        correct: "Pasal 30 ayat (1) UUD 1945",
        wrong: ["Pasal 27 ayat (2) UUD 1945", "Pasal 33 ayat (1) UUD 1945", "Pasal 31 ayat (1) UUD 1945"],
        explanation: "Pasal 30 ayat (1): tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara."
      },
      {
        question: "Ketika negara cenderung stabil, bentuk bela negara yang paling diperlukan dari rakyat adalah ...",
        correct: "bela negara nonfisik, antara lain taat membayar pajak",
        wrong: ["bela negara dengan mengangkat senjata", "pelatihan kemiliteran massal", "menutup perbatasan negara"],
        explanation: "Dalam kondisi stabil, rakyat tidak terlalu diperlukan untuk bela negara secara fisik."
      },
      {
        question: "Konsep ketahanan nasional pertama kali diperkenalkan oleh Presiden ... pada tahun 1960-an.",
        correct: "Soekarno",
        wrong: ["Soeharto", "B.J. Habibie", "Abdurrahman Wahid"],
        explanation: "Ketahanan nasional merupakan perwujudan geostrategi Indonesia."
      },
      {
        question: "Asta Gatra terdiri atas ...",
        correct: "Tri Gatra (aspek alamiah) dan Panca Gatra (aspek kemasyarakatan)",
        wrong: ["Catur Gatra dan Panca Gatra", "Tri Gatra dan Sapta Gatra", "Dwi Gatra dan Hexa Gatra"],
        explanation: "Asta Gatra = delapan aspek kehidupan bangsa (3 + 5)."
      },
      {
        question: "Panca Gatra mencakup aspek ...",
        correct: "ideologi, politik, ekonomi, sosial budaya, dan pertahanan keamanan",
        wrong: ["geografi, kekayaan alam, dan penduduk", "eksekutif, legislatif, yudikatif, auditif, dan militer", "pangan, energi, air, udara, dan tanah"],
        explanation: "Tri Gatra mencakup letak geografis, kekayaan negara, serta keadaan dan kemampuan penduduk."
      },
      {
        question: "AGHT dalam konsep ketahanan nasional adalah singkatan dari ...",
        correct: "Ancaman, Gangguan, Hambatan, dan Tantangan",
        wrong: ["Aturan, Gerakan, Hukum, dan Tindakan", "Anggaran, Gaji, Hibah, dan Transfer", "Alokasi, Garis, Hierarki, dan Tugas"],
        explanation: "AGHT dapat datang dari dalam maupun luar negeri."
      },
      {
        question: "Contoh AGHT yang disebut dalam materi adalah ...",
        correct: "lepasnya Timor Timur serta Pulau Sipadan dan Ligitan",
        wrong: ["bergabungnya Papua ke Indonesia", "pembentukan UU Perpajakan", "penerapan Coretax"],
        explanation: "Kendalanya antara lain kurangnya perhatian pemerintah, baik dari sisi kesejahteraan maupun penjagaan pertahanan keamanan."
      },
      {
        question: "Agenda pembangunan yang menjadi dasar penyusunan RAPBN 2026 disebut ...",
        correct: "Asta Cita (8 agenda pembangunan)",
        wrong: ["Panca Gatra (5 agenda)", "Tri Dharma (3 agenda)", "Sapta Marga (7 agenda)"],
        explanation: "Asta Cita antara lain: penguatan ideologi dan demokrasi, swasembada pangan dan energi, SDM unggul, hilirisasi, pembangunan dari desa."
      },
      {
        question: "Salah satu dari delapan strategi jangka menengah APBN 2026 adalah ...",
        correct: "ketahanan pangan, ketahanan energi, dan makan bergizi gratis",
        wrong: ["penghapusan seluruh pajak", "penghentian pembangunan desa", "pengurangan anggaran pendidikan"],
        explanation: "Strategi lainnya: pendidikan bermutu, kesehatan berkualitas, desa/koperasi/UMKM, pertahanan semesta, serta investasi dan perdagangan global."
      },
      {
        question: "Alokasi Belanja K/L dan TKD 2026 secara nasional diperkirakan sebesar ... per kapita.",
        correct: "Rp7,6 juta, meningkat 6,5% dibandingkan outlook 2025",
        wrong: ["Rp7,6 juta, menurun 6,5%", "Rp76 juta, meningkat 6,5%", "Rp3,6 juta, meningkat 16,5%"],
        explanation: "Alokasi diarahkan pada program yang manfaatnya langsung dirasakan, seperti MBG, PBI JKN, cek kesehatan gratis, Sekolah Rakyat, PKH."
      },
      {
        question: "Menurut RPJMN 2025–2029, wilayah Sumatera diarahkan menjadi ...",
        correct: "mata rantai utama bioindustri dengan kemaritiman yang berdaya saing dan berkelanjutan",
        wrong: ["pusat pemerintahan nasional", "lumbung pangan utama nasional semata", "kawasan industri semikonduktor"],
        explanation: "Dukungan kebijakan fiskal di Sumatera 2026 diharapkan mendorong pertumbuhan ekonomi 5,0–5,4 persen."
      },
      {
        question: "Target tingkat kemiskinan wilayah Sumatera pada 2026 dalam materi adalah ...",
        correct: "6,3–7,2 persen",
        wrong: ["2,0–3,0 persen", "10,5–12,0 persen", "0,5–1,0 persen"],
        explanation: "Target SPM pendidikan tinggi 75,0–84,0 persen."
      },
      {
        question: "Contoh dalam materi bahwa membayar pajak mendukung bela negara melalui profesi orang lain adalah ...",
        correct: "pajak membiayai pembinaan dan pengiriman atlet Indonesia ke ajang internasional melalui APBN",
        wrong: ["pajak membiayai gaji pengusaha swasta", "pajak langsung dibayarkan kepada atlet", "pajak hanya membiayai upacara bendera"],
        explanation: "Atlet bela negara melalui profesinya; masyarakat mendukungnya secara tidak langsung melalui pajak."
      },
      {
        question: "Salah satu kewajiban dasar WNI menurut materi adalah ...",
        correct: "setia membayar pajak untuk negara",
        wrong: ["memilih salah satu partai politik", "menyumbangkan seluruh penghasilan", "memiliki lebih dari satu kewarganegaraan"],
        explanation: "Kewajiban dasar lainnya: menjunjung hukum, ikut membela negara, dan ikut serta dalam pendidikan dasar."
      },
      {
        question: "Dalam urgensi bela negara dengan membayar pajak, pajak yang membiayai sektor pertahanan dan keamanan berkaitan dengan ...",
        correct: "menjaga ketahanan dan kedaulatan negara",
        wrong: ["menghapus kewajiban membayar pajak daerah", "menggantikan peran TNI", "menurunkan seluruh tarif pajak"],
        explanation: "Lima urgensi: membiayai pembangunan, mendukung pelayanan publik, menjaga ketahanan dan kedaulatan, mewujudkan kesejahteraan, dan menunjukkan tanggung jawab warga negara."
      },
      {
        question: "Rangkuman materi: salah satu faktor yang menentukan ketahanan suatu negara adalah faktor ...",
        correct: "finansial",
        wrong: ["geologi", "kuliner", "iklim semata"],
        explanation: "Pendapatan negara salah satunya berasal dari pajak, sehingga membayar pajak penting sebagai upaya bela negara."
      }
    ]
  });
})();
