/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, Star, Sparkles, AlertCircle, RefreshCw, Bookmark, ArrowRight } from 'lucide-react';
import { REFLEKSI_AKHIR_TEXT } from '../data';

interface KesimpulanRekomendasiProps {
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export default function KesimpulanRekomendasi({ onNavigateNext, onNavigatePrev }: KesimpulanRekomendasiProps) {
  const recommendations = [
    { num: "01", title: "Pembaruan Kompetensi Profesional Berkelanjutan", desc: "Guru wajib secara proaktif meningkatkan kecakapan digital dan pemahaman kompetensi global melalui kursus, webinar kependidikan, serta pembiasaan membaca literatur tepercaya." },
    { num: "02", title: "Dukungan Struktural Institusi & Birokrasi", desc: "Sekolah dan lembaga kependidikan perlu menyalurkan sarana prasarana digital yang kokoh, serta mendampingi penyusunan Standard Operating Procedure (SOP) pengerjaan digital." },
    { num: "03", title: "Orientasi Penggunaan Berpusat Siswa", desc: "Pemanfaatan teknologi tidak dititikberatkan sebagai gaya visualisasi semata, melainkan selalu berjalur lurus memantapkan kognitif asertif dan kebutuhan bakat murid." },
    { num: "04", title: "Konsistensi Integrasi Keterampilan Abad 21", desc: "Formulasi keterampilan 4C dan pembiasaan 3 pilar literasi diintegrasikan ke dalam silabus dan rancangan pengajaran harian secara terpadu tanpa dipisahkan." }
  ];

  return (
    <div className="space-y-8 animate-fade-in" id="kesimpulan-rekomendasi-block">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
            Bab 7 Penutup
          </span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold text-teks-utama">
            Kesimpulan & Rekomendasi
          </h2>
        </div>
        <span className="text-[10px] uppercase font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full shadow-3xs shrink-0 self-start md:self-auto">
          Penutup Modul
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Kesimpulan & Quotes */}
        <div className="lg:col-span-7 bg-white border border-cream-soft rounded-3xl p-6 md:p-8 shadow-xs space-y-6 text-left">
          
          <div className="space-y-3">
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-teks-utama flex items-center space-x-2">
              <Bookmark className="w-5 h-5 text-brand-green shrink-0" />
              <span>Kesimpulan Modul</span>
            </h3>
            <p className="text-xs leading-relaxed text-teks-sekunder text-justify">
              Transformasi guru di era digital bukanlah sebatas pelengkap melainkan prasyarat mutlak demi mendampingi murid yang tumbuh sebagai digital natives. Guru abad ke-21 tidak lagi bertindak sebagai satu-satunya pusat ilmu melainkan beralih luhur sebagai fasilitator yang asertif memupuk kecakapan kolaboratif dan kemandirian berpikir tinggi (HOTS) siswa.
            </p>
            <p className="text-xs leading-relaxed text-teks-sekunder text-justify">
              Pengembangan 3 pilar literasi (digital, informasi, media) serta pembiasaan formula 4C harus ditaruh sebagai agenda inti pembelajaran demi mencetak insan unggul yang tangguh, mumpuni moralitas, serta siap memikul tantangan disrupsi zaman abad ke-21.
            </p>
          </div>

          {/* Styled quote box */}
          <div className="p-5 rounded-2xl bg-cream-principal/50 border border-brand-green/10 relative overflow-hidden text-center md:text-left space-y-2">
            <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-brand-green/5 blur-lg pointer-events-none" />
            <span className="text-3xl font-serif text-brand-green font-bold absolute top-2 left-3 opacity-30">“</span>
            <p className="text-xs font-heading font-medium text-teks-utama leading-relaxed italic relative z-10 pl-4 py-1 text-justify">
              {REFLEKSI_AKHIR_TEXT}
            </p>
            <p className="text-[10px] font-bold text-brand-green tracking-wider uppercase text-right">
              — Refleksi Akhir Pembelajaran
            </p>
          </div>

        </div>

        {/* Right Column: Rekomendasi Grid column */}
        <div className="lg:col-span-5 bg-white border border-cream-soft rounded-3xl p-6 shadow-xs space-y-4 text-left">
          
          <div className="border-b border-cream-soft/60 pb-3">
            <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider block">Rekomendasi Akademis</span>
            <h4 className="text-xs font-heading font-extrabold text-teks-utama mt-0.5">Langkah Kerja Pendidik Abad 21</h4>
          </div>

          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
            {recommendations.map((rec) => (
              <div key={rec.num} className="p-3.5 rounded-xl bg-cream-principal/20 border border-cream-soft/50 space-y-1 hover:bg-cream-principal/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded">
                    Rekomendasi {rec.num}
                  </span>
                </div>
                <h5 className="text-[11px] font-heading font-bold text-teks-utama pt-1">
                  {rec.title}
                </h5>
                <p className="text-[11px] leading-relaxed text-teks-sekunder text-justify font-sans">
                  {rec.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Footer next/prev row */}
      <div className="pt-8 border-t border-cream-soft/70 flex items-center justify-between">
        <button
          onClick={onNavigatePrev}
          className="px-5 py-2.5 rounded-lg border border-cream-soft hover:bg-cream-soft/30 text-teks-sekunder hover:text-teks-utama text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
        >
          &larr; Kembali
        </button>

        <button
          onClick={onNavigateNext}
          className="px-6 py-2.5 rounded-lg bg-brand-green hover:bg-brand-green/95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-3xs cursor-pointer hover:translate-y-[-1px]"
        >
          Lihat Daftar Pustaka &rarr;
        </button>
      </div>

    </div>
  );
}
