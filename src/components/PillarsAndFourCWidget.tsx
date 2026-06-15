/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, BookOpen, Film, Flame, Heart, Layers, Eye, Compass, Sparkles, HelpCircle } from 'lucide-react';

export default function PillarsAndFourCWidget() {
  const [activePillar, setActivePillar] = useState<'digital' | 'informasi' | 'media'>('digital');
  const [activeC, setActiveC] = useState<'critical' | 'creative' | 'comm' | 'collab'>('critical');

  const pillarsData = {
    digital: {
      title: "1. Literasi Digital",
      desc: "Bukan semata-mata kemahiran teknis menyalakan laptop atau menavigasi menu gawai. Literasi digital mencakup pembentukan kesadaran etis dalam berselancar (Netiket), kewaspadaan ketat menjaga rahasia data pribadi dari serangan phising, menolak menyebarkan kebencian bermotif provokatif, serta memanfaatkan platform digital untuk luapan kreativitas positif yang menghasilkan produk nyata.",
      icon: <Smartphone className="w-6 h-6 text-brand-green" />,
      badge: "Kecakapan Etis Gawai",
      examples: ["Memahami pengaturan keamanan privasi dua faktor (2FA)", "Menerapkan prinsip verifikasi ganda sebelum mengunduh berkas", "Menghargai orisinalitas hak cipta kepemilikan digital orang lain"]
    },
    informasi: {
      title: "2. Literasi Informasi",
      desc: "Kemampuan krusial mendeteksi kapan ia membutuhkan informasi tambahan, tahu bagaimana menelusuri data rujukan secara ilmiah di internet, sanggup mengevaluasi keabsahan data rujukan, serta terbiasa menstruktur data rujukan secara runut. Ini bertindak sebagai benteng kokoh dalam memisahkan fakta objektif dari lautan hoax dan manipulasi data di media.",
      icon: <BookOpen className="w-6 h-6 text-brand-green" />,
      badge: "Kemandirian Filter Data",
      examples: ["Membandingkan kebenaran berita dari 3 portal media terpercaya", "Memisahkan kutipan opini subyektif dari fakta empiris angka", "Melacak latar belakang kredibilitas rekam penulis artikel"]
    },
    media: {
      title: "3. Literasi Media",
      desc: "Kecerdasan kritis mencerna pesan yang sengaja dikonstruksi oleh media massa maupun media sosial. Paham akan adanya agenda komerisal (profit), bias politik, atau manipulasi sudut pandang kamera di balik layar. Literasi media juga memberdayakan siswa agar tidak sekadar membebek menyerap konten, melainkan lihai merancang pesan edukatif yang menyejukkan hati.",
      icon: <Film className="w-6 h-6 text-brand-green" />,
      badge: "Pemikiran Kritis Media",
      examples: ["Menyadari teknik pembingkaian judul artikel sensasional (clickbait)", "Memahami implikasi algoritma rekomendasi feeds dalam memicu polarisasi", "Merancang konten poster/video edukatif yang inspiratif untuk dipublikasikan"]
    }
  };

  const fourCData = {
    critical: {
      title: "Critical Thinking",
      idLabel: "1. Critical Thinking & Problem Solving",
      desc: "Kemampuan mendalam menelaah argumen secara objektif, menyusun pola hubungan logis terpercaya, meruntuhkan asumsi bias stereotip, serta merumuskan alternatif solusi inovatif cerdas guna mengatasi persoalan riil yang kompleks dalam keseharian kelompok.",
      tag: "Berpikir Kritis & Solutif",
      application: "Siswa diajak membedah masalah banjir perkotaan, menguji kesahihan narasi sebab-akibat, memilah argumen yang tidak ilmiah, lalu mendesain usulan tata kelola sampah kelas secara struktural.",
      color: "border-teal-200 bg-teal-50/20 text-teal-800"
    },
    creative: {
      title: "Creativity",
      idLabel: "2. Creativity & Innovation",
      desc: "Keluwesan imajinatif untuk memikirkan ide-ide segar (thinking outside the box), berjiwa besar mencoba metode tidak biasa, serta tekun mengubah gagasan abstrak menjadi purwarupa produk kebaikan nyata yang dirasakan faedahnya oleh sekeliling kelas.",
      tag: "Kreatifitas & Inovasi Bebas",
      application: "Siswa merancang komik digital edukasi pencegahan perundungan menggunakan Canva, mengolah barang bekas rumah menjadi hiasan hidroponik, atau menyusun lirik jingle persahabatan.",
      color: "border-orange-200 bg-orange-50/20 text-orange-850"
    },
    comm: {
      title: "Communication",
      idLabel: "3. Communication Skills",
      desc: "Keterampilan mengekspresikan pemikiran, konsep ide, atau emosi secara runtut, asertif, dan santun baik lewat tuturan verbal, tulisan formal, maupun media visual grafis, seraya memiliki toleransi menyimak masukan lawan bicara seutuhnya.",
      tag: "Komunikasi Lisan & Visual Santun",
      application: "Siswa berlatih menyelenggarakan gelar wicara (talkshow) mandiri, menulis resensi buku edukasi dengan visual padat, serta belajar menyajikan sanggahan argumen prapresentasi secara logis bermartabat.",
      color: "border-indigo-200 bg-indigo-50/20 text-indigo-800"
    },
    collab: {
      title: "Collaboration",
      idLabel: "4. Collaboration Skills",
      desc: "Kecakapan bermitra kelompok dalam tim secara koperatif tangguh. Sanggup berkompromi menyampingkan ego pribadi demi gol tim, menghargai keterbatasan kecakapan kawan setim, menempatkan kepemimpinan kolektif, serta bangga berbagi peran tugas.",
      tag: "Kolaborasi Tim & Sinergi Koperatif",
      application: "Siswa membagi kepanitiaan pameran karya mini kelas, menyusun pembagian tugas kelompok riset (penc ari rujukan, penulis slide, juru bicara), serta melakukan evaluasi reflektif kinerja tim.",
      color: "border-rose-200 bg-rose-50/20 text-rose-800"
    }
  };

  return (
    <div className="space-y-10 my-8" id="pillars-four-c-widget-block">
      
      {/* 3 Pillars layout */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
          <div>
            <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
              Tiga Pilar Utama Literasi Baru Abad 21
            </h3>
            <p className="text-xs text-teks-sekunder">Mempelajari sub-aspek kecakapan literasi digital komprehensif pendidik modern</p>
          </div>
        </div>

        {/* Dynamic Selector Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(pillarsData) as Array<keyof typeof pillarsData>).map((key) => (
            <button
              key={key}
              onClick={() => setActivePillar(key)}
              className={`p-3 rounded-xl text-center flex flex-col md:flex-row items-center justify-center gap-2 border transition-all cursor-pointer ${
                activePillar === key
                  ? 'bg-white border-brand-green/30 shadow-xs'
                  : 'bg-cream-principal/20 border-cream-soft text-teks-sekunder hover:text-teks-utama hover:bg-cream-principal/40'
              }`}
            >
              {key === 'digital' ? <Smartphone className={`w-4 h-4 ${activePillar === key ? 'text-brand-green' : 'text-teks-sekunder'}`} /> : 
               key === 'informasi' ? <BookOpen className={`w-4 h-4 ${activePillar === key ? 'text-brand-green' : 'text-teks-sekunder'}`} /> : 
               <Film className={`w-4 h-4 ${activePillar === key ? 'text-brand-green' : 'text-teks-sekunder'}`} />}
              <span className="text-xs font-heading font-bold uppercase tracking-wider block">
                {key === 'digital' ? 'Digital' : key === 'informasi' ? 'Informasi' : 'Media'}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Pillar Card Content Panel */}
        <div className="bg-white border border-cream-soft rounded-2xl p-6 shadow-xs animate-fade-in text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-cream-soft/50 pb-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cream-principal text-brand-green shadow-3xl">
                {pillarsData[activePillar].icon}
              </div>
              <h4 className="text-sm font-heading font-extrabold text-teks-utama">
                {pillarsData[activePillar].title}
              </h4>
            </div>
            <span className="px-3 py-1 rounded bg-brand-green-light text-brand-green border border-brand-green/10 text-[10px] font-bold uppercase tracking-wider self-start md:self-auto">
              {pillarsData[activePillar].badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-teks-sekunder leading-relaxed mb-6">
            {pillarsData[activePillar].desc}
          </p>

          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Contoh Tindakan Konkret:</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pillarsData[activePillar].examples.map((ex, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-cream-principal/40 border border-cream-soft/60 text-[11px] leading-relaxed text-teks-utama font-sans font-medium text-left">
                  🌟 {ex}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4C Skills Layout */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
          <div>
            <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
              Keterampilan 4C (Pilar Kompetensi Inti)
            </h3>
            <p className="text-xs text-teks-sekunder">Mempelajari sub-aspek pilar utama keterampilan asertif abad ke-21</p>
          </div>
        </div>

        {/* 4C Accordion switch tab grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(Object.keys(fourCData) as Array<keyof typeof fourCData>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveC(key)}
              className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                activeC === key
                  ? 'bg-white border-brand-green/45 shadow-xs font-bold text-brand-green'
                  : 'bg-cream-principal/20 border-cream-soft text-teks-sekunder hover:text-teks-utama'
              }`}
            >
              <span className="text-xs font-heading uppercase tracking-wider block">
                {fourCData[key].title}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed 4C content card */}
        <div className={`p-6 border rounded-2xl shadow-xs text-left animate-fade-in ${fourCData[activeC].color}`}>
          <div className="border-b border-cream-soft/60 pb-3 mb-4">
            <span className="text-[9px] uppercase font-bold tracking-widest text-teks-sekunder">Sub-kompetensi Inti</span>
            <h4 className="text-sm font-heading font-extrabold text-teks-utama leading-tight mt-0.5">
              {fourCData[activeC].idLabel}
            </h4>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Deskripsi:</span>
              <p className="text-xs leading-relaxed text-teks-sekunder text-justify">
                {fourCData[activeC].desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-cream-soft shadow-3xs space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider block">Implementasi Kasus Kelas:</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium text-justify">
                {fourCData[activeC].application}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
