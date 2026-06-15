/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter, CompareAspect, TeacherRole, StudentChar, ToolItem, EducationLevel, ReferenceItem, TeamMember } from './types';

export const APP_THEME_TITLE = "Transformasi Guru di Era Digital";
export const APP_THEME_SUBTITLE = "Menghadapi Tantangan Masyarakat Abad 21";
export const COURSE_NAME = "Metodologi dan Transformasi Pembelajaran Modern";
export const MODULE_DESC = "Modul interaktif ini dirancang untuk membekali para pendidik dan mahasiswa kependidikan dengan pemahaman kritis, strategi inovatif, dan keterampilan teknologi yang diperlukan untuk menyelenggarakan pembelajaran bermakna dan berpusat pada siswa di era digital.";

export const INSTRUCTIONAL_GOALS = [
  "Memahami pergeseran paradigma dari guru tradisional menjadi fasilitator inspiratif abad ke-21.",
  "Menganalisis karakteristik unik generasi digital native dan merancang strategi pembelajaran yang relevan.",
  "Mengintegrasikan tiga pilar literasi abad ke-21 (Digital, Informasi, Media) ke dalam instruksional kelas.",
  "Menguasai implementasi praktis Keterampilan 4C (Critical Thinking, Creativity, Communication, Collaboration) di berbagai jenjang.",
  "Memilih dan memanfatkan platform digital modern (Canva, Workspace, LMS, AI) secara etis dan aman.",
  "Mengembangkan kompetensi profesional berkelanjutan melalui refleksi kritis dan keterlibatan komunitas belajar."
];

export const MODULE_STATS = [
  { label: "Total Bab", value: "6 Bab" },
  { label: "Estimasi Waktu", value: "120 Menit" },
  { label: "Studi Kasus", value: "4 Jenjang" },
  { label: "Sistem Modul", value: "Self-Paced" }
];

export const PRETEST_DETAILS = {
  title: "Pretest Kompetensi Guru Era Digital",
  url: "https://forms.gle/CDHc8BWycSxNpxsY7",
  instructions: [
    "Pretest ini bertujuan untuk mengukur pemahaman awal Anda mengenai konsep transformasi guru, literasi digital, dan keterampilan abad ke-21.",
    "Pengerjaan pretest bersifat mandiri dan jujur untuk mendapatkan diagnosis kompetensi yang akurat.",
    "Formulir terdiri atas beberapa pertanyaan pilihan ganda terkait studi kasus pembelajaran di kelas.",
    "Waktu pengerjaan disarankan maksimal 15-20 menit.",
    "Anda dapat mengakses pretest langsung dengan menekan tombol di bawah atau memindai QR Code yang disediakan."
  ]
};

export const POSTTEST_DETAILS = {
  title: "Posttest & Refleksi Akhir Belajar",
  url: "https://forms.gle/CDHc8BWycSxNpxsY7",
  instructions: [
    "Posttest ini ditujukan untuk mengevaluasi peningkatan kompetensi Anda setelah mempelajari seluruh materi di dalam modul.",
    "Mohon mengisi formulir evaluasi pasca-pembelajaran secara lengkap.",
    "Hasil posttest akan menjadi landasan penilaian pemahaman komprehensif terhadap prinsip transformasi guru abad ke-21.",
    "Waktu pengerjaan disarankan sekitar 20 menit.",
    "Pastikan sinyal internet stabil sebelum memulai menjawab soal.",
    "Gunakan tautan pengerjaan atau pindai QR Code di bawah untuk beralih ke form pengerjaan."
  ]
};

export const VIDEO_LEARNING = {
  title: "Video Pembelajaran Transformasi Guru di Era Digital",
  youtubeId: "BFlXQEqY0jE",
  youtubeUrl: "https://youtu.be/BFlXQEqY0jE?si=tLy90ftHbe0jrJza",
  description: "Video pembelajaran komprehensif ini mengulas urgensi mutlak transformasi pendidik dalam menjawab perkembangan teknologi digital secara asertif. Pembahasan mencakup kompetensi esensial guru abad ke-21, pentingnya literasi digital, cara menumbuhkan keterampilan 4C pada siswa, serta integrasi teknologi edukatif dalam ruang kelas modern secara efektif."
};

// Tabel 2.1 Perbandingan Guru Tradisional vs Guru Abad 21
export const COMPARISON_DATA: CompareAspect[] = [
  {
    aspect: "Peran Utama",
    traditional: "Penyampai materi dan sumber utama pengetahuan tunggal.",
    modern: "Fasilitator, pembimbing, mediator, motivator, dan mitra belajar.",
    icon: "UserCircle"
  },
  {
    aspect: "Pendekatan Pembelajaran",
    traditional: "Berpusat pada guru (Teacher-Centered Learning / TCL).",
    modern: "Berpusat pada peserta didik (Student-Centered Learning / SCL).",
    icon: "Users"
  },
  {
    aspect: "Metode Pembelajaran",
    traditional: "Ceramah satu arah, instruksi langsung, dan hafalan teori.",
    modern: "Diskusi kelompok, kolaborasi proyek, pemecahan masalah (PBL, PjBL).",
    icon: "GraduationCap"
  },
  {
    aspect: "Sumber Belajar",
    traditional: "Terbatas pada buku teks cetak dan penjelasan guru saja.",
    modern: "Sumber digital luas, internet, video interaktif, AI, dan fenomena nyata.",
    icon: "BookOpen"
  },
  {
    aspect: "Keterlibatan Peserta Didik",
    traditional: "Cenderung pasif menerima informasi dari instruktur.",
    modern: "Aktif mencari, menyaring, mengolah, dan memproduksi pengetahuan.",
    icon: "Activity"
  },
  {
    aspect: "Fokus Pembelajaran",
    traditional: "Penguasaan materi kognitif teoritis dan kemampuan menghafal.",
    modern: "Pengembangan kompetensi, pembentukan karakter, dan kecakapan hidup.",
    icon: "Crosshair"
  },
  {
    aspect: "Pemanfaatan Teknologi",
    traditional: "Terbatas, manual, atau hanya dijadikan alat bantu pelengkap.",
    modern: "Terintegrasi secara mulus sebagai infrastruktur inti proses belajar.",
    icon: "Cpu"
  },
  {
    aspect: "Evaluasi Pembelajaran",
    traditional: "Menekankan pada hasil akhir akademis (sumatif / ujian tertulis).",
    modern: "Menilai proses dan hasil (formatif berkelanjutan, portfolio, otentik).",
    icon: "ClipboardCheck"
  },
  {
    aspect: "Keterampilan yang Dikembangkan",
    traditional: "Pengetahuan akademik murni dan kepatuhan mekanis.",
    modern: "Pengetahuan mendalam, Keterampilan 4C, dan Literasi Digital.",
    icon: "Compass"
  },
  {
    aspect: "Hubungan Guru-Siswa",
    traditional: "Hierarkis formal; guru sebagai pusat otoritas mutlak.",
    modern: "Kolaboratif, demokratis; guru sebagai mitra pendamping belajar.",
    icon: "Heart"
  }
];

// Diagram 2.2 Peran Guru sebagai Fasilitator Pembelajaran
export const TEACHER_ROLES: TeacherRole[] = [
  {
    role: "Membimbing",
    desc: "Guru membantu siswa mendefinisikan tujuan pembelajaran mereka, merencanakan langkah-langkah eksplanasi, serta mengarahkan mereka untuk menemukan jawaban secara kooperatif.",
    icon: "Compass",
    color: "from-teal-500 to-emerald-500"
  },
  {
    role: "Memfasilitasi",
    desc: "Guru menyediakan akses terhadap sumber belajar berkualitas, menyiapkan lingkungan belajar digital yang kondusif, dan menyajikan scaffolding terstruktur sesuai kesiapan siswa.",
    icon: "Layers",
    color: "from-blue-500 to-indigo-500"
  },
  {
    role: "Memotivasi",
    desc: "Guru membangun iklim kelas yang asyik, menghargai orisinalitas ide siswa, menumbuhkan rasa percaya diri, serta memantik growth mindset dalam memandang kegagalan.",
    icon: "Flame",
    color: "from-orange-500 to-amber-500"
  },
  {
    role: "Mengarahkan",
    desc: "Guru berperan memberikan kisi-kisi atau pertanyaan pemantik yang merangsang penalaran tingkat tinggi (HOTS) serta mengarahkan siswa menyaring konten hoax.",
    icon: "Eye",
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "Menjadi Mitra",
    desc: "Guru memposisikan diri sejajar sebagai pembelajar sepanjang hayat, bersedia mendengar masukan siswa, serta berkolaborasi dalam merumuskan kesimpulan pembelajaran.",
    icon: "Handshake",
    color: "from-cyan-500 to-blue-500"
  },
  {
    role: "Menilai & Umpan Balik",
    desc: "Guru memberikan feedback formatif berbasis proses secara langsung (just-in-time feedback) yang konstruktif untuk perbaikan berkelanjutan siswa.",
    icon: "MessageSquare",
    color: "from-rose-500 to-red-500"
  }
];

// Tabel 2.3 Karakteristik Siswa & Implikasi Guru
export const STUDENT_CHARACTERISTICS: StudentChar[] = [
  {
    id: 1,
    characteristic: "Digital Native",
    desc: "Terbiasa menggunakan teknologi digital sejak usia dini dan sangat akrab dengan berbagai gawai.",
    implication: "Mengintegrasikan teknologi dan media digital yang relevan sebagai jembatan penyampaian konsep instruksional.",
    icon: "Smartphone"
  },
  {
    id: 2,
    characteristic: "Cepat Mengakses Informasi",
    desc: "Mudah memperoleh informasi melalui mesin pencari dan media sosial kapan saja dan di mana saja secara instan.",
    implication: "Mengembangkan kemampuan literasi informasi dan membimbing siswa menyaring sumber rujukan secara kritis.",
    icon: "Zap"
  },
  {
    id: 3,
    characteristic: "Menyukai Pembelajaran Visual",
    desc: "Lebih mudah mencerna informasi dalam bentuk infografis, video, diagram, dan konten multimedia visual edukatif.",
    implication: "Menggunakan media visual, video pembelajaran interaktif, dan simulasi grafis untuk mempermudah pemahaman materi.",
    icon: "Image"
  },
  {
    id: 4,
    characteristic: "Aktif dan Interaktif",
    desc: "Menyukai keterlibatan aktif secara langsung dan interaksi dinamis daripada mendengarkan secara pasif.",
    implication: "Menerapkan pembelajaran aktif seperti diskusi terarah, kuis langsung (quizizz/kahoot), simulasi, dan praktik.",
    icon: "Sparkles"
  },
  {
    id: 5,
    characteristic: "Menyukai Kolaborasi",
    desc: "Senang berinteraksi, bertukar sudut pandang, dan bekerja sama dalam kelompok menyelesaikan masalah bersama.",
    implication: "Merancang tugas kelompok, pembelajaran berbasis proyek (PjBL), dan kolaborasi daring memanfaatkan alat awan.",
    icon: "Users2"
  },
  {
    id: 6,
    characteristic: "Butuh Umpan Balik Cepat",
    desc: "Terbiasa mendapatkan respon instan di dunia digital, sehingga mengharapkan evaluasi pembelajaran yang lekas.",
    implication: "Memberikan umpan balik yang konstruktif, konkret, dan berkala guna mempertahankan motivasi belajar siswa.",
    icon: "MessageCircle"
  },
  {
    id: 7,
    characteristic: "Kreatif dan Inovatif",
    desc: "Memiliki kecenderungan alamiah untuk mengeksplorasi ide orisinal, mencoba hal baru, dan merancang kreasi unik.",
    implication: "Memberikan ruang kebebasan berkreativitas melalui metode pembelajaran berbasis tantangan dan proyek eksploratif.",
    icon: "Lightbulb"
  },
  {
    id: 8,
    characteristic: "Rentan Distraksi Digital",
    desc: "Mudah teralihkan konsentrasinya oleh notifikasi media sosial, permainan video, dan konten hiburan di gawai mereka.",
    implication: "Menerapkan manajemen kelas digital yang bijak, menyepakati etika penggunaan gawai, dan merancang konsep belajar interaktif.",
    icon: "BellOff"
  },
  {
    id: 9,
    characteristic: "Berorientasi pada Pengalaman",
    desc: "Lebih mudah memahami konsep abstrak bila dikaitkan langsung dengan aktivitas nyata atau pengalaman kontekstual sehari-hari.",
    implication: "Mengaitkan materi pelajaran dengan konteks kehidupan nyata, menggunakan pendekatan studi kasus nyata, dan proyek.",
    icon: "MapPin"
  },
  {
    id: 10,
    characteristic: "gaya Belajar Beragam",
    desc: "Setiap individu memiliki kecenderungan tersendiri, ada yang visual, auditori, kinestetik, maupun membaca-menulis.",
    implication: "Menerapkan rancangan pembelajaran berdiferensiasi (Differentiated Instruction) yang fleksibel guna menampung keunikan siswa.",
    icon: "Dribbble"
  }
];

// Tools data for Bab 4
export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Canva for Education",
    category: "Platform Desain Grafis",
    description: "Platform visual berbasis cloud yang sangat intuitif untuk merancang materi ajar yang memukau tanpa memerlukan keterampilan desain profesional beralih.",
    features: [
      "Pembuatan infografis materi yang interaktif",
      "Perancangan lembar kerja siswa (LKPD) yang artistik",
      "Template presentasi akademik gratis untuk instansi sekolah",
      "Kolaborasi desain langsung antara guru dan siswa"
    ],
    icon: "Palette"
  },
  {
    name: "Google Workspace for Education",
    category: "Kolaborasi dan Manajemen",
    description: "Ekosistem alat kolaborasi real-time untuk menyelenggarakan aktivitas belajar tanpa dibatasi jarak fisik secara aman.",
    features: [
      "Google Docs & Slides: Kolaborasi menyunting dokumen kelompok secara simultan",
      "Google Drive: Penyimpanan portofolio digital berbasis awan yang terlindungi",
      "Google Forms: Kuis formatif instan dengan analisis skor otomatis"
    ],
    icon: "Cloud"
  },
  {
    name: "LMS (Google Classroom, Moodle)",
    category: "Learning Management System",
    description: "Hub digital kelas tempat mengorganisasikan modul materi, pengumpulan tugas, pencatatan presensi, dan pengelolaan forum diskusi.",
    features: [
      "Struktur administrasi digital yang rapi dan terukur",
      "Penyampaian pengumuman dan materi secara terpusat",
      "Forum diskusi interaktif asinkron di luar jam sekolah",
      "Meningkatkan kemandirian belajar (self-regulated learning)"
    ],
    icon: "Server"
  },
  {
    name: "Kecerdasan Buatan (Artificial Intelligence)",
    category: "AI & Personalisasi",
    description: "Integrasi sistem cerdas untuk mempercepat administrasi pengajaran serta membantu diagnosis adaptasi kebutuhan siswa secara individual.",
    features: [
      "Smart Tutoring Systems yang memberi feedback langsung kepada siswa",
      "Pembuat butir soal otomatis berdasarkan kompetensi dasar",
      "Alat bantu pencarian ide visual bahan ajar",
      "Partner diskusi berpikir kritis bagi guru dan siswa"
    ],
    icon: "Brain"
  }
];

// Bab 5: 4C's by Education Level
export const EDUCATION_LEVELS: EducationLevel[] = [
  {
    id: "paud",
    level: "PAUD / TK",
    title: "Membangun Karakter Bermain Sambil Belajar",
    characteristics: "Anak usia dini berada pada fase perkembangan otak keemasan (golden age) yang sangat cepat. Pertumbuhan motorik, emosi, dan bahasa tumbuh pesat. Memahami sesuatu paling baik melalui kegiatan konkret, panca indra, bermain peran, dan pengalaman motorik langsung.",
    challenges: "Guru PAUD dituntut mampu menyaring teknologi digital agar sesuai dengan tahapan perkembangan anak, menghindari kecanduan layar (screen time berlebihan), serta menjaga agar aktivitas fisik dan sosial motorik anak tetap dominan berjalan seimbang.",
    fourC: {
      critical: "Diajak mengamati benda fisik di sekelilingnya, membandingkan ukuran, mengelompokkan warna, dan menjawab pertanyaan pemantik sederhana (Contoh: 'Mengapa es mencair?').",
      creative: "Mengekspresikan imajinasi bebas melalui menggambar, mewarnai, melipat kertas, mencampur warna, dan merangkai balok konstruksi secara elastis.",
      comm: "Melatih kemampuan berbicara melalui mendengarkan dongeng, bercerita kembali di depan kelas, bernyanyi bersama, dan mengekspresikan emosi dengan kata-kata.",
      collab: "Belajar berbagi mainan, bermain peran (roleplay) berkelompok seperti bermain pasar-pasaran, serta menyelesaikan proyek menempel bersama teman."
    },
    suitableTech: "Video animasi edukatif pendek berisi lagu anak, aplikasi stimulasi ketangkasan kognitif sederhana (bentuk/warna) yang dirancang interaktif dengan bimbingan ketat pendidik."
  },
  {
    id: "sd",
    level: "Sekolah Dasar (SD)",
    title: "Mengaktifkan Logika Konkret dan Pemecahan Masalah",
    characteristics: "Siswa sekolah dasar mulai menunjukkan pola berpikir logis meski masih berorientasi pada hal-hal bersifat konkret. Rasa ingin tahu mereka sangat tinggi, senang mengeksplorasi ilmu pengetahuan baru, dan mulai memiliki motif kompetisi kelompok.",
    challenges: "Guru harus pintar mengalihkan fokus perhatian siswa yang cenderung mudah bosan, membimbing pemanfaatan gawai secara terstruktur untuk tujuan belajar edukatif, serta menanamkan etika berinternet secara sopan sejak dini.",
    fourC: {
      critical: "Diberikan simulasi studi kasus peristiwa sehari-hari yang membutuhkan solusi pemecahan masalah sederhana (Contoh: 'Bagaimana mengurangi sampah plastik di sekolah?').",
      creative: "Diajak membuat karya kreatif manual dikombinasikan dengan media digital dasar seperti menyusun poster kampanye kebersihan kelas menggunakan tools Canva ramah anak.",
      comm: "Melatih diskusi kelompok kecil, menyajikan hasil pekerjaan di depan kelas secara santun, serta mendengarkan penjelasan teman tanpa memotong pembicaraan.",
      collab: "Menyelesaikan tugas proyek berkala dalam kelompok yang membagi peran secara adil (ada yang bertugas menulis, mempresentasikan, atau menyiap alat peraga)."
    },
    suitableTech: "Platform interaktif gamifikasi kuis sepeti Quizizz atau Wordwall, Google Slides dasar untuk kolaborasi kelompok, dan video visual edukatif pendukung materi Sains/Sosial."
  },
  {
    id: "smp",
    level: "Sekolah Menengah Pertama (SMP)",
    title: "Memantik Penalaran Abstrak dan Eksplorasi Media",
    characteristics: "Berada pada masa remaja awal atau transisi perkembangan diri. Mulai sanggup memahami penalaran abstrak dan beranalogi. Memiliki tingkat ketergantungan yang tinggi terhadap konfirmasi sosial dari lingkaran persahabatan sebaya mereka.",
    challenges: "Guru perlu memediasi pemanfaatan media sosial agar bebas dari cyberbullying, menindak kecenderungan konsumerisme konten hiburan, serta melatih kemampuan menyaring informasi hoax di tengah banjir digital.",
    fourC: {
      critical: "Melakukan analisis perbandingan data dari berbagai artikel di internet, menguji kebenaran argumen, dan merumuskan kesimpulan logis berdasarkan fakta ilmiah.",
      creative: "Memproduksi konten digital positif seperti membuat video penjelasan singkat, mendesain infografis sains, atau merancang blog materi sekolah.",
      comm: "Menyelenggarakan debat terstruktur terkait isu-isu lingkungan hangat, berdiskusi di forum LMS sekolah secara akademis, dan menulis gagasan secara padat.",
      collab: "Menyelesaikan Pembelajaran Berbasis Proyek (Project-Based Learning) jangka menengah, bekerja sama secara online menggunakan awan dokumen."
    },
    suitableTech: "Google Classroom / Canvas, Padlet sebagai papan tulis kolaborasi digital, Google Docs kelompok, dan Canva untuk publikasi laporan kreatif multimedia."
  },
  {
    id: "sma",
    level: "Sekolah Menengah Atas (SMA)",
    title: "Menyiapkan Kemandirian Kritis dan Karya Inovatif Global",
    characteristics: "Siswa memiliki penalaran berpikir kritis yang matang, sanggup berargumen secara mendalam dari beragam sudut pandang, serta mulai mengarahkan kemandirian hidup untuk orientasi masa depan perguruan tinggi / karir kerja.",
    challenges: "Guru berperan mendorong penggunaan kecerdasan buatan (AI) secara beretika tanpa melanggar integritas akademik (plagiarisme), serta memotivasi penciptaan karya orisinal berskala luas.",
    fourC: {
      critical: "Melakukan penelitian ilmiah mini, memecahkan kasus-kasus sains kompleks, mengevaluasi validitas sumber referensi jurnal, dan melakukan analisis data sosiologis.",
      creative: "Merancang proposal wirausaha digital, membuat prototipe perangkat lunak/aplikasi sederhana, serta menciptakan karya ilmiah inovatif tepat guna.",
      comm: "Melakukan presentasi akademis, debat bahasa resmi, menulis makalah ilmiah terstruktur, serta memimpin rapat organisasi siswa dengan asertif.",
      collab: "Bekerja sama lintas disiplin dalam tim secara profesional, merancang aplikasi proyek, dan melatih kepemimpinan kolektif dalam pembagian tugas rumit."
    },
    suitableTech: "Google Workspace for Education secara menyeluruh, Microsoft 365, Moodle/Schoology, platform konferensi video, serta tools analisis data dan AI pendukung penelitian akademis."
  }
];

export const REFLEKSI_AKHIR_TEXT = "Transformasi guru di era digital bukanlah sebuah pilhan opsional, melainkan tuntutan mutlak demi kelangsungan masa depan generasi bangsa. Teknologi digital hadir bukan untuk menggantikan sentuhan kemanusiaan dan spiritualitas pendidik, melainkan menjadi katalisator tangguh yang memperluas kebermanfaatan guru di dalam menuntun kodrat anak zaman abad 21.";

// Daftar Pustaka lengkap dari OCR
export const BIBLIOGRAPHY: ReferenceItem[] = [
  {
    citation: "OECD. (2022). Teaching and Learning International Survey (TALIS): Teachers and School Leaders as Lifelong Learners. OECD Publishing.",
    year: "2022",
    author: "OECD",
    title: "Teaching and Learning International Survey (TALIS): Teachers and School Leaders as Lifelong Learners",
    publisher: "OECD Publishing"
  },
  {
    citation: "Partnership for 21st Century Learning. (2019). Framework for 21st Century Learning. Washington, DC: P21.",
    year: "2019",
    author: "Partnership for 21st Century Learning",
    title: "Framework for 21st Century Learning",
    publisher: "P21"
  },
  {
    citation: "UNESCO. (2023). Global Education Monitoring Report 2023: Technology in Education: A Tool on Whose Terms? UNESCO Publishing.",
    year: "2023",
    author: "UNESCO",
    title: "Global Education Monitoring Report 2023: Technology in Education: A Tool on Whose Terms?",
    publisher: "UNESCO Publishing"
  },
  {
    citation: "World Economic Forum. (2020). The Future of Jobs Report 2020. World Economic Forum.",
    year: "2020",
    author: "World Economic Forum",
    title: "The Future of Jobs Report 2020",
    publisher: "World Economic Forum"
  },
  {
    citation: "Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
    year: "1978",
    author: "Vygotsky, L. S.",
    title: "Mind in Society: The Development of Higher Psychological Processes",
    publisher: "Harvard University Press"
  },
  {
    citation: "Mardhiyah, R. H., Aldriani, S. N. F., Chitta, F., & Ziyan, M. R. (2021). Pentingnya Keterampilan Belajar di Abad 21 sebagai Tuntutan dalam Pengembangan Sumber Daya Manusia. Lectura: Jurnal Pendidikan, 12(1), 29-40.",
    year: "2021",
    author: "Mardhiyah, R. H., Aldriani, S. N. F., Chitta, F., & Ziyan, M. R.",
    title: "Pentingnya Keterampilan Belajar di Abad 21 sebagai Tuntutan dalam Pengembangan Sumber Daya Manusia",
    publisher: "Lectura: Jurnal Pendidikan, 12(1), 29-40"
  },
  {
    citation: "Muttaqin, M. F., & Rizkiyah, H. (2022). Efektifitas Budaya Literasi dalam Meningkatkan Keterampilan 4C Siswa Sekolah Dasar. Dawuh Guru: Jurnal Pendidikan MI/SD, 2(1), 43-54.",
    year: "2022",
    author: "Muttaqin, M. F., & Rizkiyah, H.",
    title: "Efektifitas Budaya Literasi dalam Meningkatkan Keterampilan 4C Siswa Sekolah Dasar",
    publisher: "Dawuh Guru: Jurnal Pendidikan MI/SD, 2(1), 43-54"
  },
  {
    citation: "Suryani, N. (2020). Pemanfaatan Media Pembelajaran Digital dalam Meningkatkan Mutu Pendidikan. Jurnal Teknologi Pendidikan Indonesia.",
    year: "2020",
    author: "Suryani, N.",
    title: "Pemanfaatan Media Pembelajaran Digital dalam Meningkatkan Mutu Pendidikan",
    publisher: "Jurnal Teknologi Pendidikan Indonesia"
  },
  {
    citation: "Rusman. (2018). Model-Model Pembelajaran: Mengembangkan Profesionalisme Guru. Jakarta: Rajawali Pers.",
    year: "2018",
    author: "Rusman",
    title: "Model-Model Pembelajaran: Mengembangkan Profesionalisme Guru",
    publisher: "Rajawali Pers"
  },
  {
    citation: "E. Mulyasa. (2021). Menjadi Guru Penggerak Merdeka Belajar. Jakarta: Bumi Aksara.",
    year: "2021",
    author: "E. Mulyasa",
    title: "Menjadi Guru Penggerak Merdeka Belajar",
    publisher: "Bumi Aksara"
  },
  {
    citation: "Suyanto., & Asep Jihad. (2019). Menjadi Guru Profesional: Strategi Meningkatkan Kualifikasi dan Kualitas Guru di Era Global. Jakarta: Erlangga.",
    year: "2019",
    author: "Suyanto., & Asep Jihad",
    title: "Menjadi Guru Profesional: Strategi Meningkatkan Kualifikasi dan Kualitas Guru di Era Global",
    publisher: "Erlangga"
  },
  {
    citation: "Kementerian Pendidikan Dasar dan Menengah Republik Indonesia. (2024). Transformasi Pendidikan Menuju Pembelajaran Abad 21. Jakarta: Kemendikdasmen.",
    year: "2024",
    author: "Kementerian Pendidikan Dasar dan Menengah",
    title: "Transformasi Pendidikan Menuju Pembelajaran Abad 21",
    publisher: "Kemendikdasmen"
  },
  {
    citation: "Yuberti. (2020). Teori Pembelajaran dan Pengembangan Bahan Ajar dalam Pendidikan. Bandar Lampung: Anugrah Utama Raharja.",
    year: "2020",
    author: "Yuberti",
    title: "Teori Pembelajaran dan Pengembangan Bahan Ajar dalam Pendidikan",
    publisher: "Anugrah Utama Raharja"
  },
  {
    citation: "Teaching in a Digital Age. (2022). Teaching in a Digital Age: Guidelines for Designing Teaching and Learning (3rd ed.).",
    year: "2022",
    author: "Teaching in a Digital Age",
    title: "Teaching in a Digital Age: Guidelines for Designing Teaching and Learning (3rd ed.)",
    publisher: "Self-Published / Open Text"
  }
];

export const DEVELOPMENT_TEAM: TeamMember[] = [
  {
    name: "Nayla Muna",
    nim: "2510130220016",
    role: "Penanggung Jawab Desain Instruksional & Kurikulum",
    avatarSeed: "Nayla",
    gradient: "from-amber-400 to-rose-400"
  },
  {
    name: "Gusti Dianti Hilya Ananda",
    nim: "2510130220022",
    role: "Spesialis Review Konten Akademik & Penyelaras Bab",
    avatarSeed: "Hilya",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    name: "Muhammad Thoriq Arkan",
    nim: "2510130210014",
    role: "Spesialis Integrasi Media Digital & Asesmen Kreatif",
    avatarSeed: "Thoriq",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    name: "Labib Fidianur Afif",
    nim: "2510130210020",
    role: "Arsitek Sistem Informasi & Pengembang LMS Interaktif",
    avatarSeed: "Labib",
    gradient: "from-emerald-400 to-teal-500"
  }
];

// Complete 6 chapters content compiled from OCR
export const CHAPTERS_DATA: Chapter[] = [
  {
    id: "bab1",
    title: "Bab 1: Pendahuluan",
    badge: "Orientasi Modul",
    readTime: "15 Menit",
    subsections: [
      {
        id: "b1s1",
        title: "A. Latar Belakang",
        paragraphs: [
          "Perkembangan teknologi digital telah membawa perubahan yang signifikan dalam berbagai aspek kehidupan, termasuk bidang pendidikan. Transformasi digital mendorong terjadinya perubahan dalam proses pembelajaran, cara memperoleh informasi, serta interaksi antara pendidik dan peserta didik.",
          "UNESCO (2023) menjelaskan bahwa teknologi pendidikan memiliki peran penting dalam meningkatkan akses, kualitas, dan fleksibilitas pembelajaran apabila digunakan secara tepat dan berorientasi pada kebutuhan peserta didik. Kehadiran berbagai platform digital, seperti Learning Management System (LMS), aplikasi konferensi video, media pembelajaran interaktif, dan kecerdasan buatan (Artificial Intelligence/AI), telah memberikan peluang baru dalam penyelenggaraan pendidikan yang lebih efektif dan adaptif terhadap perkembangan zaman.",
          "Perkembangan teknologi tersebut menuntut adanya perubahan dalam sistem pendidikan untuk mempersiapkan peserta didik menghadapi tantangan abad ke-21. Pada era ini, keberhasilan seseorang tidak hanya ditentukan oleh penguasaan pengetahuan, tetapi juga oleh kemampuan berpikir kritis, kreativitas, komunikasi, dan kolaborasi yang dikenal sebagai keterampilan 4C (Partnership for 21st Century Learning, 2019). Selain itu, peserta didik juga dituntut memiliki literasi digital, literasi informasi, dan kemampuan memecahkan masalah agar mampu beradaptasi dengan perubahan yang terjadi secara cepat. Oleh karena itu, proses pembelajaran perlu dirancang untuk mengembangkan keterampilan abad ke-21 secara terintegrasi.",
          "Karakteristik peserta didik abad ke-21 juga mengalami perubahan dibandingkan generasi sebelumnya. Mereka merupakan generasi yang tumbuh di lingkungan digital dan terbiasa berinteraksi dengan teknologi sejak usia dini. Kemudahan akses terhadap berbagai sumber informasi membuat peserta didik lebih mandiri dalam mencari pengetahuan, namun di sisi lain juga menghadirkan tantangan berupa melimpahnya informasi yang belum tentu valid dan dapat dipercaya.",
          "World Economic Forum (2020) menegaskan bahwa kemampuan berpikir kritis, pemecahan masalah, serta literasi digital menjadi kompetensi penting yang harus dimiliki individu untuk menghadapi perkembangan teknologi dan dunia kerja masa depan. Dengan demikian, pendidikan perlu membekali peserta didik dengan kemampuan untuk menyaring, mengevaluasi, dan memanfaatkan informasi secara bijaksana.",
          "Perubahan kebutuhan peserta didik tersebut berdampak pada transformasi peran guru dalam proses pembelajaran. Guru tidak lagi berperan sebagai satu-satunya sumber pengetahuan, melainkan sebagai fasilitator, mediator, motivator, dan pendamping belajar yang membantu peserta didik membangun pengetahuannya secara mandiri. Pandangan ini sejalan dengan teori konstruktivisme sosial yang dikemukakan oleh Vygotsky, yang menekankan pentingnya interaksi sosial dan bimbingan dalam proses pembelajaran. Oleh karena itu, guru dituntut mampu merancang pengalaman belajar yang aktif, kolaboratif, dan bermakna dengan memanfaatkan teknologi secara efektif.",
          "Di era digital, guru juga dituntut untuk terus mengembangkan kompetensi profesional, pedagogik, sosial, dan teknologi agar mampu menjawab tantangan pendidikan modern. OECD (2022) menegaskan bahwa kompetensi digital guru menjadi salah satu faktor penting dalam menciptakan pembelajaran yang berkualitas dan relevan dengan kebutuhan masa depan.",
          "Penguasaan teknologi tidak hanya diperlukan untuk mendukung proses pembelajaran, tetapi juga untuk meningkatkan kreativitas, inovasi, dan efektivitas dalam mengelola kegiatan belajar mengajar. Dengan demikian, transformasi guru di era digital menjadi kebutuhan yang tidak dapat dihindari guna mewujudkan pendidikan yang mampu menghasilkan generasi yang kompeten, adaptif, dan siap menghadapi tantangan masyarakat abad ke-21.",
          "Berdasarkan uraian tersebut, modul ini disusun untuk memberikan pemahaman mengenai transformasi guru di era digital, keterampilan abad ke-21 yang perlu dikembangkan, serta pemanfaatan teknologi pendidikan dalam mendukung proses pembelajaran yang efektif dan inovatif. Materi yang disajikan dalam modul ini diharapkan dapat membantu guru memahami perubahan peran yang terjadi seiring perkembangan teknologi dan kebutuhan peserta didik masa kini. Selain itu, modul ini juga memberikan gambaran mengenai pentingnya literasi digital dan keterampilan 4C dalam pembelajaran abad ke-21. Melalui pembahasan yang sistematis, guru diharapkan mampu menerapkan berbagai strategi pembelajaran yang relevan dengan perkembangan zaman."
        ]
      },
      {
        id: "b1s2",
        title: "B. Tujuan Modul",
        paragraphs: [
          "Modul ini disusun dengan tujuan konkret untuk mencapai beberapa kompetensi utama:",
          "1. Memberikan pemahaman komprehensif mengenai transformasi peran guru di era digital dalam menghadapi tantangan masyarakat abad ke-21.",
          "2. Menjelaskan secara rinci karakteristik peserta didik abad ke-21 serta kebutuhan pembelajaran yang sesuai dengan perkembangan teknologi dan informasi.",
          "3. Meningkatkan pemahaman mengenai literasi abad ke-21, khususnya literasi digital, literasi informasi, dan literasi media sebagai kompetensi yang sangat penting dalam dunia pendidikan saat ini.",
          "4. Mengkaji sub-aspek keterampilan 4C (Critical Thinking, Creativity, Communication, dan Collaboration) sebagai kompetensi inti yang perlu dikembangkan secara sinergis oleh guru dan peserta didik.",
          "5. Memberikan wawasan praktis mengenai pemanfaatan teknologi pendidikan dan berbagai platform digital populer yang dapat mendukung proses pembelajaran yang efektif, inovatif, dan ramah peserta didik.",
          "6. Menjelaskan skema penerapan keterampilan abad ke-21 dan teknologi pembelajaran secara kontekstual pada berbagai jenjang pendidikan, mulai dari jenjang PAUD/TK hingga tingkat SMA.",
          "7. Mendorong guru untuk memupuk motivasi internal dalam mengembangkan kompetensi profesional, pedagogik, dan digital secara berkelanjutan demi pembelajaran yang inklusif.",
          "8. Membantu guru dalam merancang dan mempraktikkan desain instruksional kurikulum yang adaptif, kreatif, serta berdaya saing global."
        ]
      },
      {
        id: "b1s3",
        title: "C. Manfaat Modul",
        paragraphs: [
          "Modul ini dirancang dengan harapan dapat memberikan masukan dan faedah yang signifikan bagi tiga pilar utama pendidikan:",
          "1. **Bagi Guru**:\na. Menambah cakrawala wawasan teoritis dan praktis tentang dinamika transformasi digital.\nb. Membantu guru menyadari implikasi penting dari literasi digital dalam instruksi kelas.\nc. Menjadi salah satu referensi mandiri tepercaya untuk meningkatkan kecakapan pedagogik.\nd. Menyediakan contoh platform digital terapan yang siap dipakai di lingkungan sekolah.",
          "2. **Bagi Peserta Didik**:\na. Mengalami iklim pembelajaran interaktif yang fleksibel dan berpusat pada diri mereka.\nb. Menerima porsi pembinaan Keterampilan 4C secara berimbang dalam instruksional harian.\nc. Terlatih menggunakan perangkat digital secara bijaksana, beretika, dan aman.\nd. Siap secara mental dan kecakapan menghadapi tantangan transisi global.",
          "3. **Bagi Institusi Pendidikan**:\na. Menjadi literatur rujukan dalam menyusun kurikulum sekolah yang responsif abad ke-21.\nb. Membantu merumuskan kebijakan sekolah terkait pengadaan sarana teknologi secara fungsional.\nc. Mendorong standardisasi peningkatan kompetensi pendidik secara berkelanjutan.\nd. Menjadi acuan materi pelatihan internal guru (In-House Training/IHT)."
        ]
      }
    ]
  },
  {
    id: "bab2",
    title: "Bab 2: Transformasi Guru di Era Digital",
    badge: "Paradigma Baru",
    readTime: "25 Menit",
    subsections: [
      {
        id: "b2s1",
        title: "A. Guru Tradisional dan Guru Abad 21",
        paragraphs: [
          "Perkembangan teknologi digital dan perubahan kebutuhan masyarakat telah membawa perubahan yang luar biasa dalam lanskap pendidikan dunia. Perubahan tersebut tidak semata-mata mengubah platform fisik pengajaran, melainkan meredefinisi hakikat relasi guru dan siswa seutuhnya.",
          "Pada model tradisional, guru memegang kendali absolut di ruang kelas (Teacher-Centered Learning). Pola ini mengasumsikan siswa sebagai wadah kosong yang siap diisi dengan materi mentah melalui ceramah lisan berkelanjutan. Guru dipandang sebagai satu-satunya validator dan pemegang eksklusif otoritas pengetahuan. Namun, seiring pesatnya demokratisasi informasi di internet, paradigma guru sebagai 'singgasana pengetahuan tunggal' telah runtuh.",
          "Di era digital, internet menyediakan akses bebas ke perpustakaan virtual dunia, simulasi digital, kursus terbuka, hingga asisten cerdas AI. Siswa sering kali dapat menemukan perkembangan teoretis terbaru lebih cepat dari buku cetak sekolah. Keadaan ini memaksa terjadinya transformasi peran guru: dari penyampai materi searah beralih menjadi navigator, konselor, dan pengarah yang membimbing siswa menyintesis ribuan arus informasi agar bermakna bagi kehidupan mereka.",
          "Mari kita telaah bagan perbandingan komprehensif di bawah ini untuk melihat detail pergeseran paradigma tersebut secara holistik."
        ]
      },
      {
        id: "b2s2",
        title: "B. Guru sebagai Fasilitator Pembelajaran",
        paragraphs: [
          "Sebagai fasilitator, fokus mengajar beralih dari 'mengisi pengetahuan' menjadi 'menciptakan ruang dan ekosistem' agar siswa dapat merekonstruksi pemahaman secara mandiri. Ini selaras dengan pandangan Konstruktivisme Sosial Vygotsky, yang menegaskan bahwa pengetahuan dikonstruksi secara bermakna melalui interaksi sosial, dialog, dan kolaborasi aktif dengan pendamping yang lebih kompeten.",
          "Sebagai fasilitator ahli, guru tidak langsung memberikan jawaban instan saat siswa menghadapi kesulitan. Sebaliknya, guru menyajikan scaffolding (bantuan belajar bertahap): menyodorkan pertanyaan pemantik, mengajak beranalogi, merangsang perdebatan ilmiah, serta mendampingi siswa merumuskan pembuktian mandiri.",
          "Guru juga harus piawai merancang skenario pembelajaran kolaboratif. Mereka menyusun format diskusi kelompok, mengatur dinamika pertukaran pendapat, serta mendorong siswa menghargai keterbatasan di satu sisi serta mengoptimalkan potensi keunikan di sisi lain. Integrasi teknologi digital terintegrasi membantu fasilitator memantau keterlibatan siswa secara real-time, menyajikan konten interaktif yang adaptif, dan merekam jejak evaluasi personal secara akurat."
        ]
      },
      {
        id: "b2s3",
        title: "C. Tantangan Guru di Era Digital",
        paragraphs: [
          "Meskipun era digital menawarkan limpahan kemudahan, tantangan yang dipikul guru juga kian berat dan berlapis:",
          "1. **Perkembangan Teknologi yang Dinamis**: Alat instruksional digital terus diperbarui dalam hitungan bulan. Guru dituntut memiliki growth mindset untuk terus belajar sepanjang hayat (lifelong learning) agar tidak terasing oleh laju adopsi teknologi dunia.",
          "2. **Arus Informasi yang Sangat Cepat**: Melimpahnya konten di internet melahirkan problem banjir informasi (information overload). Siswa rentan mengonsumsi hoaks, bias rujukan, atau plagiarisme tak disadari. Guru wajib melatih pemikiran kritis siswa agar mampu melakukan verifikasi kesahihan data secara ketat.",
          "3. **Karakteristik Unik Generasi Masa Kini**: Siswa abad ke-21 adalah 'digital natives'. Mereka terbiasa dengan rangsangan visual tinggi, respon cepat, dan interaksi yang menghibur. Metode ceramah monoton akan dengan mudah membuat mereka kehilangan konsentrasi atau mengalami kejenuhan mental.",
          "Tantangan ini menuntut pendidik mempelajari implikasi komprehensif dari kebiasaan belajar siswa digital native agar instruksi yang dikemas tetap memikat dan relevan."
        ]
      },
      {
        id: "b2s4",
        title: "D. Peluang Transformasi Guru",
        paragraphs: [
          "Di balik jajaran tantangan, era digital mengantarkan gerbang peluang yang sangat luas untuk melipatgandakan dampak positif guru:",
          "a. **Inovasi Pembelajaran yang Tanpa Batas**: Metode pengajaran kini menyentuh ranah interaktif dengan model blended learning, gamifikasi, kelas terbalik (flipped classroom), dan pembelajaran berbasis proyek daring. Guru dapat menyusun konten multimedia yang asyik, kreatif, dan berdampak visual.",
          "b. **Pemanfaatan Teknologi Edukasi Modern**: Guru dapat memanfaatkan platform awan kolaboratif untuk mempercepat perancangan bahan ajar bersama komunitas guru lintas daerah. Penggunaan AI dapat menghemat porsi waktu administratif pembuatan soal, sehingga guru memiliki lebih banyak waktu berkualitas untuk mendampingi aspek emosional dan pembinaan karakter personal siswa.",
          "Transformasi ini menciptakan ekosistem pembelajaran yang fleksibel, adil, transparan, dan sangat berdaya pikat tinggi."
        ]
      }
    ]
  },
  {
    id: "bab3",
    title: "Bab 3: Literasi dan Keterampilan Abad 21",
    badge: "Kompetensi Utama",
    readTime: "20 Menit",
    subsections: [
      {
        id: "b3s1",
        title: "A. Literasi Abad 21",
        paragraphs: [
          "Konsep literasi di abad ke-21 telah melompat jauh melampaui kemampuan tradisional baca, tulis, dan hitung (calistung). Era disrupsi menempatkan kemampuan memproses, memilah, mengevaluasi, berkomunikasi, dan memproduksi konten digital sebagai pilar literasi baru yang mutlak dipunyai individu agar selamat dari kecanduan distorsi informasi.",
          "Ekosistem pendidikan modern berpijak pada **Tiga Pilar Utama Literasi Abad 21**:",
          "1. **Literasi Digital**: Bukan sekadar mahir menekan keyboard atau menggeser layar gawai, melainkan memiliki kesadaran kritis akan etika digital, pengelolaan keamanan privasi siber, pencegahan plagiarisme, serta pemanfaatan teknologi untuk produktivitas orisinal.",
          "2. **Literasi Informasi**: Kecakapan mendiagnosis kebutuhan informasi, melacak sumber data autentik, memisahkan fakta ilmiah dari opini subyektif/sensasional, serta menggunakan referensi secara jujur dan dipertanggungjawabkan.",
          "3. **Literasi Media**: Kemampuan menganalisis pesan di media massa dan sosial secara kritis. Paham mengenai motif di balik pembentukan konten (iklan, propaganda, nilai komparatif), sekaligus produktif memproduksi pesan sehat yang berdampak positif bagi kerukunan masyarakat.",
          "Sinergi ketiga pilar di atas membentuk landasan kokoh bagi lahirnya **Pendidikan Adaptif** yang sanggup melahirkan generasi dengan literasi kokoh tangguh."
        ]
      },
      {
        id: "b3s2",
        title: "B. Keterampilan 4C",
        paragraphs: [
          "Keterampilan 4C disepakati secara global sebagai pilar utama pembentukan daya saing sumber daya manusia di tengah otomatisasi pekerjaan mekanis oleh teknologi AI. 4C menetapkan empat rumpun kecakapan hidup:",
          "1. **Critical Thinking (Berpikir Kritis & Pemecahan Masalah)**:\nKemampuan menalar secara sistematis, menganalisis hubungan sebab-akibat yang kabur, memilah argumen bias, mengumpulkan bukti sahih, serta merancang alternatif solusi orisinal untuk memecahkan problem non-rutin dalam kehidupan sehari-hari.",
          "2. **Creativity (Kreativitas & Inovasi)**:\nKeluwesan kognitif untuk berpikir di luar kebiasaan (thinking outside the box), menyatukan konsep-konsep yang awalnya tampak tidak berhubungan, berani mencoba metode kebaruan, serta mengemas gagasan menjadi karya konkret yang bermanfaat secara nyata.",
          "3. **Communication (Komunikasi)**:\nKecakapan menyampaikan ide, argumen, emosi, atau data secara runut, persuasif, dan santun baik melalui lisan, tulisan, maupun ragam teknologi visual. Komunikasi abad ke-21 juga sangat mengedepankan kemampuan mendengar aktif (active listening) untuk memahami sudut pandang orang lain seutuhnya.",
          "4. **Collaboration (Kolaborasi)**:\nKemampuan bekerja sama secara harmonis di dalam tim yang majemuk dengan kepribadian dan latar belakang beragam. Kolaborasi melatih kecerdasan emosional, fleksibilitas empati untuk berkompromi demi tujuan kelompok, serta kesediaan berbagi tanggung jawab dan mengapresiasi pencapaian kawan setim."
        ]
      },
      {
        id: "b3s3",
        title: "C. Pentingnya 4C bagi Guru dan Peserta Didik",
        paragraphs: [
          "Sinergi penguasaan 4C melahirkan hubungan kelas yang dinamis, tidak lagi dipasung oleh sekat-sekat hafalan kaku. Bagi guru, 4C membekali mereka keterampilan instruksional untuk menyusun skema proyek kelas yang menantang dan memotivasi.",
          "Bagi siswa, keterampilan ini memberikan proteksi ketangguhan hidup (life resilience) agar siap bersaing di kancah global yang cair. Melalui integrasi 4C yang konsisten di sekolah, lahir iklim kolaborasi murni yang melahirkan harmoni pemecahan masalah krusial di era revolusi industri."
        ]
      }
    ]
  },
  {
    id: "bab4",
    title: "Bab 4: Pemanfaatan Teknologi dalam Pembelajaran",
    badge: "Praktik Integrasi",
    readTime: "20 Menit",
    subsections: [
      {
        id: "b4s1",
        title: "A. Teknologi Pendukung Pembelajaran",
        paragraphs: [
          "Teknologi dalam pendidikan modern harus dimaknai sebagai bagian integral dari infrastruktur instruksional utama, bukan sekadar pelengkap visual kelas agar tampak modis. Kehadirannya sanggup meruntuhkan limit ruang dan waktu pengajaran tradisional.",
          "Dengan infrastruktur awan, materi ajar dapat diakses kapan saja secara asinkron. Ini memberikan kesempatan lahirnya pembelajaran personal (personalized learning) yang menghormati ritme kecepatan belajar setiap individu siswa tanpa ada yang dipaksa tertinggal. Pemanfaatan simulasi digital dan visualisasi interaktif membuat penjelasan konsep sains abstrak (seperti struktur atom atau pergerakan lempeng tektonik) tergambar nyata di depan siswa, memicu sensasi kagum berujung pemahaman mendalam yang produktif."
        ]
      },
      {
        id: "b4s2",
        title: "B. Contoh Platform dan Media Digital",
        paragraphs: [
          "Di lapangan, guru masa kini dapat merakit ekosistem media digital yang kaya rasa dengan memadukan beberapa super-apps populer secara sinergis:",
          "a. **Canva for Education**: Sangat andal mempercantik visualisasi modul ajar, infografis konsep, lembar kerja kolaborasi, serta materi presentasi kelas yang sangat interaktif dan memikat mata siswa.",
          "b. **Google Workspace for Education**: Menyediakan platform kerja awan kolaboratif. Docs dan Slides memudahkan kerja tim antarsiswa secara real-time. Drive mengarsipkan berkas portfolio karya, dan Forms menyelenggarakan asesmen formatif cepat beranalitik otomatis.",
          "c. **LMS (Learning Management System)**: Google Classroom atau Moodle bertugas mirip ruang kelas maya, merapikan linimasa pelajaran, administrasi nilai, diskusi asinkron, dan tempat penyerahan tugas digital.",
          "d. **Kecerdasan Buatan (Artificial Intelligence)**: Membantu personalisasi pengajaran dan mempercepat perancangan instrumen soal pendidik."
        ]
      },
      {
        id: "b4s3",
        title: "C. Prinsip Penggunaan Teknologi yang Efektif",
        paragraphs: [
          "Agar adopsi teknologi tidak sekadar menjadi ornamen visual tanpa dampak kualitatif, guru harus patuh pada asas utama yang kokoh:",
          "1. **Pedagogy Before Technology (Pedagogi Sebelum Teknologi)**:\nTeknologi hanyalah alat (tool). Posisikan tujuan instruksional dan kompetensi apa yang ingin dicapai siswa di atas kecanggihan alat itu sendiri. Gunakan alat hanya bila itu terbukti memperjelas pemahaman materi.",
          "2. **Inklusivitas dan Aksesibilitas**:\nPenggunaan teknologi wajib menjamin keadilan akses. Pendidik harus peka terhadap siswa yang memiliki keterbatasan perangkat keras atau kestabilan sinyal internet, serta menyediakan jalur alternatif yang setara tanpa diskriminasi.",
          "3. **Interaktivitas dan Kolaborasi**:\nHindari mematikan keaktifan murid dengan hanya menampilkan tayangan teks PDF satu arah yang membosankan di layar infokus. Kemas teknologi untuk merangsang siswa berinteraksi, berdialog, mengklik simulasi, dan berkolaborasi membuat karya baru.",
          "4. **Keamanan dan Etika Digital**:\nSelalu tanamkan pentingnya privasi data pribadi siswa, etika berkomunikasi santun di ruang maya, pencegahan cyberbullying, serta kepatuhan mutlak menjauhi plagiarisme."
        ]
      }
    ]
  },
  {
    id: "bab5",
    title: "Bab 5: Implementasi 4C Berdasarkan Jenjang Pendidikan",
    badge: "Metodologi Terapan",
    readTime: "20 Menit",
    subsections: [
      {
        id: "b5s1",
        title: "A. Pendidikan Anak Usia Dini (PAUD/TK)",
        paragraphs: [
          "Pada tahap perkembangan usia emas (golden age), fokus utama pendidikan diletakkan pada stimulasi motorik halus-kasar, kepekaan emosional, kecakapan bahasa lisan dasar, dan pengenalan karakter melalui sensasi bermain gembira.",
          "**Karakteristik Siswa**: Berpikir konkret egosentris, memiliki energi eksplorasi fisik tinggi, rasa ingin tahu meluap-luap, dan mudah memahami konsep lewat panca indra (visual-motorik).",
          "**Tantangan Guru**: Guru dituntut menyusun porsi teknologi seminimal mungkin demi mencegah radiasi layar berlebih (screen time overload) dan ketergantungan pasif gawai, sekaligus memastikan interaksi fisik interpersonal antaranak tetap mendominasi ruang belajar.",
          "**Teknologi yang Sesuai**: Aplikasi gamifikasi stimulasi kognitif sederhana (pasang balok virtual), video lagu anak interaktif, poster interaktif pengenal suara hewan/alat musik."
        ]
      },
      {
        id: "b5s2",
        title: "B. Sekolah Dasar (SD)",
        paragraphs: [
          "Siswa tingkat dasar mulai menguasai penalaran logika konkret terstruktur. Di masa inilah transisi literasi dasar calistung dikembangkan menuju kecakapan hidup sosial bermasyarakat.",
          "**Karakteristik Siswa**: Mulai menyukai aktivitas kompetitif kelompok kecil, beralih dari imajinasi murni ke fakta konkret di dunia nyata, serta memilik porsi konsentrasi yang labil mudah teralihkan.",
          "**Tantangan Guru**: Guru wajib menghadirkan suasana kelas digital interaktif yang mampu mempertahankan fokus, mengarahkan nafsu bermain gawai ke aktivitas belajar terstruktur, serta membekali pondasi kesantunan berselancar di internet.",
          "**Teknologi yang Sesuai**: Platform gamifikasi edukatif (Quizizz, Wordwall), presentasi visual digital awan, aplikasi simulasi grafis sains dasar, papan kolaborasi digital interaktif."
        ]
      },
      {
        id: "b5s3",
        title: "C. Sekolah Menengah Pertama (SMP)",
        paragraphs: [
          "SMP menandai gerbang awal remaja. Siswa sanggup merumuskan logika abstrak teoretis, mulai berekspresi mencari jati diri, dan menaruh perhatian sangat besar pada kepatuhan penerimaan di kelompok pertemanan sebaya.",
          "**Karakteristik Siswa**: Keinginan bersosialisasi di dunia maya sangat kentang (aktif bersosmed), mampu berpikir reflektif hipotetis, rentan terpapar pengaruh buruk tren maya negatif.",
          "**Tantangan Guru**: Guru harus bertindak menyaring hoaks digital secara asertif, memediasi pemakaian media sosial untuk kreasi materi sekolah, serta mengikis kecenderungan cyberbullying antarsiswa.",
          "**Teknologi yang Sesuai**: Sistem LMS (Google Classroom), Google Spreadsheet kolaboratif, Canva editor infografis materi, padlet curah pendapat kelas terbuka."
        ]
      },
      {
        id: "b5s4",
        title: "D. Sekolah Menengah Atas (SMA)",
        paragraphs: [
          "Siswa SMA memiliki kompleksitas penalaran kognitif tingkat tinggi (HOTS) yang setara dengan dewasa awal. Mereka sanggup mengevaluasi konsep kontradiktif dan merumuskan hipotesis mandiri berbasis bukti ilmiah.",
          "**Karakteristik Siswa**: Mandiri dalam menelusuri literatur digital dunia, sanggup merancang karya nyata tingkat tinggi, berorientasi fokus pada beasiswa kuliah atau persiapan karir kerja produktif.",
          "**Tantangan Guru**: Membimbing integrasi AI cerdas dalam riset kelas secara bertanggung jawab tanpa melanggar kode etik kejujuran akademik (anti-plagiarsme), serta menyalakan motivasi kreasi inovasi bernilai guna sosial.",
          "**Teknologi yang Sesuai**: Google Workspace professional suite, platform riset jurnal online ilmiah, program basis data analitis kualitatif, video konferensi profesional, aplikasi kolaborasi tim terapan."
        ]
      }
    ]
  },
  {
    id: "bab6",
    title: "Bab 6: Menjadi Guru Inovatif di Era Digital",
    badge: "Refleksi Profesional",
    readTime: "20 Menit",
    subsections: [
      {
        id: "b6s1",
        title: "A. Karakteristik Guru Inovatif",
        paragraphs: [
          "Guru inovatif bukanlah sekadar guru yang mahir mengoperasikan perangkat teknologi mutakhir atau rajin menampilkan salindia mewah di depan kelas. Esensi utama guru inovatif terletak pada kesiapan batiniah untuk mengadopsi cara pandang adaptif sepanjang hayat (lifelong learning). Merinci beberapa karakteristik esensial pendidik inovatif era digital:",
          "1. **Growth Mindset**: Memandang tantangan perubahan zaman bukan sebagai ancaman yang menakutkan, melainkan sebagai ladang subur untuk bereksperimen, belajar hal baru, dan meningkatkan kualitas pedagogi pribadi.",
          "2. **Peka Kebutuhan Siswa**: Menolak menyamaratakan metode ajar secara kaku. Tanggap mengamati minat unik, bakat bawaan, serta gaya serapan belajar masing-masing anak, lalu merancang variasi instruksional yang relevan.",
          "3. **Berani Mengambil Risiko Terbimbing**: Tidak ragu meninggalkan zona nyaman ceramah lama untuk mencoba pendekatan interaktif baru (seperti flipped classroom atau gamifikasi proyek), serta berjiwa besar mengevaluasi kegagalan metode ajar di kelas."
        ]
      },
      {
        id: "b6s2",
        title: "B. Strategi Mengembangkan Kompetensi Guru",
        paragraphs: [
          "Kompetensi inovatif tidak terlahir secara instan melalui bakat alamiah semata, melainkan buah dari upaya pembiasaan pengembangan diri yang disiplin berkelanjutan:",
          "a. **Pelibatan Komunitas Belajar**: Aktif berdiskusi dan berbagi praktik baik (best practices) di kelompok komunitas pendidik (seperti KKG, MGMP, komunitas guru penggerak) untuk memperkaya alternatif solusi mengajar kelas.",
          "b. **Mengikuti Kegiatan Profesional Mandiri**: Memanfaatkan kelimpahan akses kursus daring terpercaya, seminar akademik, lokakarya teknologi, dan webinar kependidikan guna memperbarui pemahaman pedagogik.",
          "c. **Mengakses Literatur Mutakhir**: Meluangkan waktu membaca artikel jurnal keguruan, buku metodologi modern, serta buletin resmi kementerian kependidikan agar pijakan pengajaran didasari oleh bukti ilmiah yang sahih."
        ]
      },
      {
        id: "b6s3",
        title: "C. Pembelajaran Modern Berpusat pada Peserta Didik",
        paragraphs: [
          "Guru inovatif mengarahkan kemudi pengontrolan kelas ke tangan siswa sejalan dengan prinsip pembelajaran Student-Centered Learning (SCL). Mereka meyakini bahwa siswa bukan penerima pasif melainkan arsitek aktif rekonstruksi pengetahuan.",
          "Penerapan kongkrit ini diwujudkan melalui model pembelajaran berbasis proyek (PjBL) di mana siswa secara berkelompok tertantang memecahkan persoalan riil sosial, mengumpulkan pembuktian ilmiah, memanfaatkan platform kolaborasi awan, serta menyajikan hasil karya inovasinya secara bangga terbuka di depan komunitas umum."
        ]
      },
      {
        id: "b6s4",
        title: "D. Refleksi dan Pengembangan Diri Guru",
        paragraphs: [
          "Pilar penutup dari siklus kompetensi guru inovatif adalah kebiasaan melakukan refleksi kritis pasca-pengajaran. Setiap akhir pekan, guru inovatif menyempatkan diri melamun secara bermakna: menelaah bagian instruksional mana yang berhasil menghidupkan binar mata siswa, subbab mana yang memicu kerumitan pemahaman, serta mencari solusi perbaikan konkret.",
          "Ketulusan refleksi spiritual ini memastikan pendidik tidak terjebak dalam robotisasi rutinitas mengajar kering, melainkan terus tumbuh mendewasa sebagai teladan hidup (living role model) yang menginspirasi gairah mencintai ilmu di dada para generasi abad ke-21."
        ]
      }
    ]
  }
];
