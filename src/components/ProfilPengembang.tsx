/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, GraduationCap, ChevronRight, BookOpen, Award, ArrowLeft } from 'lucide-react';
import { DEVELOPMENT_TEAM } from '../data';

interface ProfilPengembangProps {
  onBackToHome: () => void;
  onNavigatePrev: () => void;
}

export default function ProfilPengembang({ onBackToHome, onNavigatePrev }: ProfilPengembangProps) {
  // Initials generator helper
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-8 animate-fade-in" id="profil-pengembang-section">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
            Tim Penyusun Modul
          </span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold text-teks-utama">
            Profil Pengembang
          </h2>
          <p className="text-xs text-teks-sekunder">Kelompok 10 - Program Transformasi Kependidikan Abad 21</p>
        </div>
        <span className="text-[10px] uppercase font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full shadow-3xs shrink-0 self-start md:self-auto">
          Kelompok 10
        </span>
      </div>

      {/* Main card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEVELOPMENT_TEAM.map((member) => (
          <div
            key={member.nim}
            className="bg-white border border-cream-soft rounded-2xl p-6 shadow-xs flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-md hover:translate-y-[-2px] group"
          >
            <div className="space-y-4 w-full">
              
              {/* Profile Avatar Initials with nice styled background */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-2xl shadow-xs overflow-hidden transform group-hover:scale-105 transition-transform">
                {/* Background gradient from member data */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${member.gradient} opacity-90`} />
                
                {/* Clean visual design accent rings */}
                <div className="absolute inset-1.5 rounded-xl border border-white/40" />
                
                <span className="relative z-10 font-heading font-extrabold text-lg text-white tracking-widest">
                  {getInitials(member.name)}
                </span>
                
                <div className="absolute bottom-1 right-1 bg-white rounded-md p-1 shadow-3xs flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-green" />
                </div>
              </div>

              {/* Text metadata */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-heading font-extrabold text-gray-900 group-hover:text-brand-green transition-colors leading-tight">
                  {member.name}
                </h4>
                <p className="text-[11px] font-mono font-semibold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-md inline-block">
                  NIM: {member.nim}
                </p>
                <div className="h-0.5 w-12 bg-cream-soft mx-auto my-1" />
                <p className="text-[10px] text-teks-sekunder font-medium min-h-[32px] leading-normal flex items-center justify-center px-2">
                  {member.role}
                </p>
              </div>

            </div>

            {/* Simulated contact badge */}
            <div className="mt-5 pt-3 border-t border-cream-soft/40 w-full text-center">
              <span className="text-[9px] uppercase font-bold tracking-wider text-teks-sekunder group-hover:text-brand-green transition-all block">
                Penyusun Aktif • Universitas
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Instansional summary card */}
      <div className="bg-white border border-cream-soft rounded-3xl p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="p-4 rounded-2xl bg-cream-principal text-brand-green shrink-0">
          <Users className="w-10 h-10" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-sm font-heading font-extrabold text-teks-utama">Kolaborasi Akademis Kelompok 10</h4>
          <p className="text-xs text-teks-sekunder leading-relaxed text-justify">
            Website interaktif ini dikonstruksi secara bergotong royong oleh segenap mahasiswa Kelompok 10 demi menyajikan jembatan rujukan ilmiah kependidikan yang estetik, asinkron, dan mudah dipahami. Setiap elemen taksonomi telah divalidasi silang terhadap buku panduan resmi pendidikan abad ke-21.
          </p>
        </div>
      </div>

      {/* Footer navigators */}
      <div className="pt-8 border-t border-cream-soft/70 flex items-center justify-between">
        <button
          onClick={onNavigatePrev}
          className="px-5 py-2.5 rounded-lg border border-cream-soft hover:bg-cream-soft/30 text-teks-sekunder hover:text-teks-utama text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
        >
          &larr; Kembali
        </button>

        <button
          onClick={onBackToHome}
          className="px-6 py-2.5 rounded-lg bg-brand-green hover:bg-brand-green/95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-3xs cursor-pointer hover:translate-y-[-1px]"
        >
          Kembali Ke Beranda
        </button>
      </div>

    </div>
  );
}
