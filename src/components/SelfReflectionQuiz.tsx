/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, HelpCircle, Award, RefreshCw, MessageSquare } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Saya memposisikan diri sebagai fasilitator pendamping belajar ketimbang sebagai satu-satunya pusat ilmu di kelas.",
    category: "Paradigma SCL"
  },
  {
    id: 2,
    text: "Saya rutin merancang aktivitas belajar kelompok di mana siswa bertukar pendapat memanfaatkan media digital.",
    category: "Integrasi Keterampilan 4C"
  },
  {
    id: 3,
    text: "Ketika menggunakan teknologi digital (misal slide/video), prioritas utama saya adalah tujuan kompetensi kognitif (Pedagogy before Technology).",
    category: "Integrasi Teknologi"
  },
  {
    id: 4,
    text: "Saya meluangkan waktu khusus untuk merefleksikan efektivitas pembelajaran serta merencanakan perbaikan teknik mengajar.",
    category: "Refleksi Profesional"
  },
  {
    id: 5,
    text: "Saya aktif berkolaborasi dengan komunitas guru (KKG/MGMP) untuk bertukar gagasan inovatif rancangan program belajar.",
    category: "Pengembangan Diri"
  }
];

export default function SelfReflectionQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectScore = (qId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const isAllAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

  // Calculate scores
  const totalScore: number = (Object.values(answers) as number[]).reduce((acc: number, curr: number): number => acc + curr, 0);
  const maxPossible: number = QUESTIONS.length * 4;
  const percentage: number = Math.round((totalScore / maxPossible) * 100);

  const getEvaluationTitle = (pct: number) => {
    if (pct >= 85) return "Guru Inovatif Abad 21 (Pioneer)";
    if (pct >= 65) return "Guru Adaptif Digital (Practitioner)";
    return "Guru Transisi Digital (Learner)";
  };

  const getEvaluationDesc = (pct: number) => {
    if (pct >= 85) {
      return "Selamat! Anda telah membiasakan metode student-centered, rajin mematangkan Keterampilan 4C di lapangan, mengedepankan pedagogi, serta konsisten berevauasi secara mandiri. Teruskan konsistensi luar biasa ini dan bimbing rekan guru sejawat demi kemajuan pendidikan nasional.";
    }
    if (pct >= 65) {
      return "Sangat Baik! Anda sudah menaruh perhatian penuh pada transisi digital kependidikan. Sebagian besar materi modul sudah Anda terapkan secara positif. Teruslah mengasah kolaborasi daring kelompok serta perluas porsi scaffolding mandiri bagi siswa.";
    }
    return "Langkah awal yang mantap! Anda sudah memiliki kemauan luhur bertransisi. Beberapa aspek penting pengajaran konservatif masih melekat, yang mana sangat wajar di masa awal. Silakan mempraktikkan model instruktural di Bab 5 untuk merancang pembelajaran perdana.";
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="bg-cream-principal/40 border border-cream-soft rounded-2xl p-6 my-8 text-left space-y-6" id="reflection-poll-block">
      
      {/* Intro Header */}
      <div className="flex items-start justify-between border-b border-cream-soft pb-4">
        <div>
          <span className="text-[9px] uppercase tracking-wider font-bold text-brand-green">Interaktif Tools</span>
          <h4 className="text-xs md:text-sm font-heading font-extrabold text-teks-utama leading-tight mt-0.5">
            Latihan Mandiri: Refleksi Kompetensi Guru Modern
          </h4>
          <p className="text-[11px] text-teks-sekunder">Kuesioner asinkron untuk mendeteksi profil kesiapan adaptasi pengajaran abad ke-21</p>
        </div>
        <div className="p-2 bg-white rounded-xl text-brand-green shadow-3xs">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {!showResult ? (
        <div className="space-y-5">
          {QUESTIONS.map((q, idx) => (
            <div key={q.id} className="bg-white border border-cream-soft rounded-xl p-4 shadow-3xs space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] uppercase font-bold text-brand-green tracking-wide bg-brand-green-light px-2 py-0.5 rounded">
                  {q.category}
                </span>
                <span className="text-[10px] text-teks-sekunder">Soal {idx + 1} dari {QUESTIONS.length}</span>
              </div>
              <p className="text-xs font-sans font-semibold text-teks-utama leading-relaxed text-justify">
                {q.text}
              </p>

              {/* Likert Scale Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                {[
                  { score: 1, label: "Belum Pernah" },
                  { score: 2, label: "Kadang-kadang" },
                  { score: 3, label: "Sering Teruji" },
                  { score: 4, label: "Selalu Konsisten" }
                ].map((opt) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={opt.score}
                      onClick={() => handleSelectScore(q.id, opt.score)}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wide border transition-all text-center cursor-pointer ${
                        isSelected
                          ? 'bg-brand-green border-brand-green text-white shadow-xs'
                          : 'bg-cream-principal/20 border-cream-soft text-teks-sekunder hover:text-teks-utama hover:bg-cream-principal/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Action trigger button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => isAllAnswered && setShowResult(true)}
              disabled={!isAllAnswered}
              className={`px-5 py-3 rounded-xl font-heading text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shadow-sm ${
                isAllAnswered
                  ? 'bg-brand-green hover:bg-brand-green/95 text-white hover:translate-y-[-1px] cursor-pointer'
                  : 'bg-cream-soft text-teks-sekunder opacity-60 cursor-not-allowed'
              }`}
            >
              <span>Tinjau Diagnosis Profil</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-brand-green/20 rounded-xl p-6  shadow-xs space-y-6 animate-fade-in">
          
          {/* Result score circle summary */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b border-cream-soft/60 pb-5">
            <div className="w-24 h-24 rounded-full bg-brand-green-light border-4 border-brand-green flex flex-col items-center justify-center shrink-0 shadow-3xs">
              <span className="text-2xl font-heading font-extrabold text-brand-green">{percentage}%</span>
              <span className="text-[9px] font-bold text-teks-sekunder uppercase tracking-wide">Index Skor</span>
            </div>
            <div className="text-center md:text-left space-y-1.5">
              <h5 className="text-xs uppercase font-bold text-brand-green tracking-wide">Kategori Diagnosis</h5>
              <h4 className="text-sm font-heading font-extrabold text-teks-utama">
                {getEvaluationTitle(percentage)}
              </h4>
              <p className="text-xs text-teks-sekunder leading-normal">
                Berdasarkan {QUESTIONS.length} indikator kriteria transformasi digital, penguasaan taksonomi belajar Anda dinilai memuaskan.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Arahan Rekomendasi Pedagogi:</span>
              <p className="text-xs leading-relaxed text-teks-sekunder text-justify font-sans bg-cream-principal/20 p-4 border border-cream-soft/50 rounded-xl">
                {getEvaluationDesc(percentage)}
              </p>
            </div>

            {/* Reflection quote */}
            <div className="p-4 bg-emerald-50/20 border border-emerald-100 rounded-xl flex items-start space-x-3">
              <span className="text-[10px] font-heading font-bold text-emerald-800 bg-emerald-100/60 px-2.2 py-0.5 rounded shrink-0">Tip Sukses</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium text-justify">
                Tuliskan analisis diagnosis ini ke dalam lembar refleksi akhir pasca-modul di halaman Posttest utama untuk pelaporan kelompok mahasiswa Kelompok 10.
              </p>
            </div>
          </div>

          {/* Reset button row */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-lg border border-cream-soft hover:bg-cream-principal text-teks-sekunder hover:text-teks-utama transition-colors text-xs font-bold uppercase tracking-wide flex items-center space-x-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Coba Refleksi Kembali</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
