(function () {
  window.LCTP_LEVELS = window.LCTP_LEVELS || [];

  window.LCTP_LEVELS.push({
    number: 3,
    title: "Jenis, Sistem, dan Tarif Pajak",
    description: "Pengelompokan pajak, pajak pusat vs daerah, sistem pemungutan, dan jenis tarif (Materi I, Bab II E–G).",
    questions: [
      {
        question: "Jenis-jenis pajak secara umum dikelompokkan menurut ...",
        correct: "pihak yang menanggung, sifat, dan wewenang pemungutnya",
        wrong: ["besar tarif, waktu bayar, dan tempat bayar", "jumlah penduduk, luas wilayah, dan jenis usaha", "fungsi, asas, dan sistem pemungutan"],
        explanation: "Tiga pengelompokan: menurut pihak yang menanggung (langsung/tidak langsung), sifat (subjektif/objektif), dan pemungut (pusat/daerah)."
      },
      {
        question: "Pajak yang pengenaannya langsung kepada Wajib Pajak yang bersangkutan, misalnya PPh, disebut pajak ...",
        correct: "langsung",
        wrong: ["tidak langsung", "objektif", "daerah"],
        explanation: "PPh dikenakan langsung kepada pihak yang menerima penghasilan."
      },
      {
        question: "Pajak yang pengenaannya dapat dilimpahkan kepada pihak lain, misalnya PPN, disebut pajak ...",
        correct: "tidak langsung",
        wrong: ["langsung", "subjektif", "pusat"],
        explanation: "Beban PPN dialihkan kepada konsumen akhir."
      },
      {
        question: "Pajak yang dikenakan berdasarkan keadaan subjeknya, misalnya PPh yang memperhitungkan PTKP, adalah pajak ...",
        correct: "subjektif",
        wrong: ["objektif", "tidak langsung", "daerah"],
        explanation: "Pajak subjektif memperhatikan keadaan subjek pajak, seperti PTKP dan batas tinggal 183 hari bagi orang asing."
      },
      {
        question: "Pajak yang dikenakan berdasarkan ada tidaknya objek pajak tanpa memperhatikan keadaan Wajib Pajak adalah pajak ...",
        correct: "objektif, seperti PPN dan PBB",
        wrong: ["subjektif, seperti PPh", "langsung, seperti PPh", "final, seperti PPh Pasal 4 ayat (2)"],
        explanation: "PPN dikenakan atas konsumsi barang/jasa; PBB atas pemanfaatan dan/atau kepemilikan tanah dan/atau bangunan."
      },
      {
        question: "Orang asing menjadi subjek pajak PPh dengan ketentuan batas waktu tinggal ...",
        correct: "183 hari dalam kurun waktu satu tahun",
        wrong: ["90 hari dalam satu tahun", "365 hari berturut-turut", "6 tahun berturut-turut"],
        explanation: "Ketentuan 183 hari merupakan contoh syarat subjektif pada PPh."
      },
      {
        question: "Manakah yang termasuk pajak pusat?",
        correct: "PPh, PPN, PPnBM, Bea Meterai, dan PBB sektor P5L",
        wrong: ["PKB, BBNKB, dan Pajak Rokok", "PBB-P2, BPHTB, dan PBJT", "Pajak Reklame, Pajak Air Tanah, dan Pajak Sarang Burung Walet"],
        explanation: "Pajak pusat dipungut oleh pemerintah pusat, sedangkan pilihan lain adalah pajak daerah."
      },
      {
        question: "PBB sektor perkebunan, perhutanan, dan pertambangan (PBB-P5L) merupakan pajak ...",
        correct: "pusat, sedangkan PBB-P2 merupakan pajak daerah",
        wrong: ["daerah, sedangkan PBB-P2 pajak pusat", "daerah, sama seperti PBB-P2", "pusat, sama seperti PBB-P2"],
        explanation: "Catatan penting dalam materi: PBB-P2 pajak daerah, PBB-P5L pajak pusat."
      },
      {
        question: "Pajak daerah saat ini diatur terutama dalam ...",
        correct: "UU Nomor 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD)",
        wrong: ["UU Nomor 7 Tahun 1983 tentang PPh", "UU Nomor 8 Tahun 1983 tentang PPN", "UU Nomor 10 Tahun 2020 tentang Bea Meterai"],
        explanation: "UU HKPD merestrukturisasi jenis pajak daerah dan memperkenalkan mekanisme opsen."
      },
      {
        question: "Opsen adalah ...",
        correct: "pungutan tambahan pajak berdasarkan persentase tertentu",
        wrong: ["pajak yang dipungut berdasarkan penetapan gubernur", "pajak atas penggunaan bahan bakar", "retribusi atas izin usaha"],
        explanation: "Opsen memperkuat sinergi pemungutan pajak antara pemerintah provinsi dan kabupaten/kota."
      },
      {
        question: "Manakah yang termasuk pajak provinsi?",
        correct: "Pajak Kendaraan Bermotor (PKB)",
        wrong: ["Pajak Reklame", "Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB)", "Pajak Sarang Burung Walet"],
        explanation: "Pajak provinsi: PKB, BBNKB, PAB, PBBKB, PAP, Pajak Rokok, dan Opsen MBLB."
      },
      {
        question: "Manakah yang termasuk pajak kabupaten/kota?",
        correct: "Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB)",
        wrong: ["Pajak Alat Berat", "Pajak Air Permukaan", "Pajak Bahan Bakar Kendaraan Bermotor"],
        explanation: "Pajak kabupaten/kota antara lain PBB-P2, BPHTB, PBJT, Pajak Reklame, PAT, MBLB, Sarang Burung Walet, dan opsen PKB/BBNKB."
      },
      {
        question: "Manakah yang BUKAN objek Pajak Barang dan Jasa Tertentu (PBJT)?",
        correct: "Kepemilikan kendaraan bermotor",
        wrong: ["Makanan dan/atau minuman", "Tenaga listrik", "Jasa parkir"],
        explanation: "Objek PBJT: makanan/minuman, tenaga listrik, jasa perhotelan, jasa parkir, serta jasa kesenian dan hiburan."
      },
      {
        question: "Pada ilustrasi makan di restoran, tarif PBJT berdasarkan UU HKPD adalah ...",
        correct: "maksimal 10%, dan bukan PPN",
        wrong: ["tetap 11% sebagai PPN", "tetap 12% sebagai PPN", "0% karena dibebaskan"],
        explanation: "Makan di restoran merupakan objek PBJT dengan tarif maksimal 10%; bukan objek PPN."
      },
      {
        question: "Sistem pemungutan yang memberi kewenangan kepada aparat pajak menetapkan pajak terutang melalui surat ketetapan pajak adalah ...",
        correct: "official assessment system",
        wrong: ["self assessment system", "withholding system", "final assessment system"],
        explanation: "Official assessment: pajak terutang ditetapkan fiskus, Wajib Pajak bersifat pasif."
      },
      {
        question: "Sistem pemungutan yang memberi kepercayaan kepada Wajib Pajak untuk menghitung, memperhitungkan, membayar, dan melaporkan sendiri pajaknya adalah ...",
        correct: "self assessment system",
        wrong: ["official assessment system", "withholding system", "presumptive system"],
        explanation: "Perpajakan Indonesia umumnya menganut self assessment."
      },
      {
        question: "Pemotongan PPh karyawan oleh pemberi kerja merupakan contoh sistem ...",
        correct: "withholding system",
        wrong: ["official assessment system", "self assessment system", "voluntary system"],
        explanation: "Withholding: pihak ketiga diberi wewenang memotong/memungut pajak atas objek tertentu."
      },
      {
        question: "Tarif pajak yang tetap berapa pun dasar pengenaannya, misalnya PPN, disebut tarif ...",
        correct: "proporsional",
        wrong: ["progresif", "degresif", "tetap"],
        explanation: "Tarif proporsional (sebanding) tidak berubah ketika dasar pengenaan berubah."
      },
      {
        question: "Bea meterai merupakan contoh tarif pajak ...",
        correct: "tetap (jumlah nominal yang tetap)",
        wrong: ["proporsional", "progresif", "degresif"],
        explanation: "Tarif pajak tetap adalah jumlah nominal pajak yang tetap sesuai persyaratan tertentu."
      },
      {
        question: "Tarif pajak yang bertambah seiring peningkatan dasar pengenaan pajak, seperti PPh Orang Pribadi, disebut tarif ...",
        correct: "progresif",
        wrong: ["degresif", "proporsional", "tetap"],
        explanation: "Sebaliknya, tarif degresif menurun seiring peningkatan dasar pengenaan dan sudah jarang diterapkan."
      }
    ]
  });
})();
