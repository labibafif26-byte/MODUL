/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Library, Search, BookOpen, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { BIBLIOGRAPHY } from '../data';

interface DaftarPustakaProps {
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export default function DaftarPustaka({ onNavigateNext, onNavigatePrev }: DaftarPustakaProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBibly = BIBLIOGRAPHY.filter((item) => {
    const textStr = `${item.author} ${item.year} ${item.title} ${item.publisher}`.toLowerCase();
    return textStr.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="space-y-8 animate-fade-in" id="daftar-pustaka-section">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
            Referensi Ilmiah
          </span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold text-teks-utama">
            Daftar Pustaka & Referensi
          </h2>
        </div>
        
        {/* Search Input bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-teks-sekunder" />
          </span>
          <input
            type="text"
            placeholder="Cari referensi / penulis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-cream-soft bg-white focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green/40 outline-hidden text-xs text-teks-utama placeholder-teks-sekunder/75 shadow-3xs"
          />
        </div>
      </div>

      {/* Grid containing list of APA references */}
      <div className="bg-white border border-cream-soft rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
        <div className="border-b border-cream-soft/60 pb-3 flex items-center justify-between text-left">
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-teks-utama">Literatur Terverifikasi</h3>
            <p className="text-[11px] text-teks-sekunder">Daftar pustaka resmi kurikulum modul sesuai format standar APA</p>
          </div>
          <span className="text-[10px] font-bold text-brand-green bg-brand-green-light px-2.2 py-0.5 rounded">
            {filteredBibly.length} Publikasi
          </span>
        </div>

        {filteredBibly.length === 0 ? (
          <div className="p-12 text-center text-teks-sekunder">
            <BookOpen className="w-12 h-12 stroke-1 block mx-auto text-brand-green opacity-30 mb-2" />
            <p className="text-xs font-sans font-medium">Referensi untuk pencarian "{searchTerm}" tidak ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBibly.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-cream-soft/55 bg-cream-principal/15 hover:bg-cream-principal/40 transition-colors flex items-start space-x-3.5 text-left"
              >
                <div className="p-2 rounded-lg bg-white text-brand-green shrink-0 shadow-3xs mt-0.5 border border-cream-soft/40">
                  <Quote className="w-4 h-4 text-brand-green" />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <p className="text-xs font-sans font-medium leading-relaxed text-teks-utama text-justify">
                    {item.citation}
                  </p>
                  <div className="flex items-center space-x-2 text-[9px] uppercase font-bold text-teks-sekunder tracking-wider">
                    <span>Tahun: {item.year}</span>
                    <span>•</span>
                    <span className="truncate block max-w-[160px]">Penulis: {item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer next/prev pagination row */}
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
          Profil Pengembang Kelompok &rarr;
        </button>
      </div>

    </div>
  );
}
