/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smile, BookOpen, Layers, GraduationCap, CheckCircle2, ShieldAlert, Sparkles, Smartphone } from 'lucide-react';
import { EDUCATION_LEVELS } from '../data';

export default function LevelSwitcher() {
  const [activeLevelId, setActiveLevelId] = useState<string>('paud');

  const getLevelIcon = (id: string, sizeClass = "w-4 h-4") => {
    switch (id) {
      case 'paud': return <Smile className={`${sizeClass} text-teal-600`} />;
      case 'sd': return <BookOpen className={`${sizeClass} text-indigo-600`} />;
      case 'smp': return <Layers className={`${sizeClass} text-purple-600`} />;
      case 'sma': return <GraduationCap className={`${sizeClass} text-rose-600`} />;
      default: return <GraduationCap className={`${sizeClass} text-brand-green`} />;
    }
  };

  const selectedLevel = EDUCATION_LEVELS.find((level) => level.id === activeLevelId) || EDUCATION_LEVELS[0];

  return (
    <div className="space-y-6 my-8" id="level-switcher-block">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
        <div>
          <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
            Implementasi Keterampilan 4C Berdasarkan Jenjang
          </h3>
          <p className="text-xs text-teks-sekunder">Mempelajari modul taksonomi instruksional terapan dari PAUD, SD, SMP, hingga SMA</p>
        </div>
      </div>

      {/* Level Selection Switcher Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {EDUCATION_LEVELS.map((col) => (
          <button
            key={col.id}
            onClick={() => setActiveLevelId(col.id)}
            className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeLevelId === col.id
                ? 'bg-white border-brand-green/35 ring-1 ring-brand-green/10 shadow-xs'
                : 'bg-cream-principal/20 border-cream-soft text-teks-sekunder hover:text-teks-utama'
            }`}
          >
            {getLevelIcon(col.id, "w-5 h-5")}
            <span className="text-xs font-heading font-bold uppercase tracking-wider block">
              {col.level}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Level Dashboard panel */}
      <div className="bg-white border border-cream-soft rounded-2xl p-6 shadow-xs animate-fade-in text-left space-y-6">
        
        {/* Header Title Grid */}
        <div className="flex items-center space-x-3.5 border-b border-cream-soft/50 pb-4">
          <div className="p-3 rounded-xl bg-cream-principal shadow-3xs">
            {getLevelIcon(selectedLevel.id, "w-6 h-6")}
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider font-bold text-brand-green">Jenjang Sasaran</span>
            <h4 className="text-sm md:text-base font-heading font-extrabold text-teks-utama leading-tight mt-0.5">
              {selectedLevel.level} - {selectedLevel.title}
            </h4>
          </div>
        </div>

        {/* Char & Challenge column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Character box */}
          <div className="p-4 rounded-xl bg-cream-principal/30 border border-cream-soft/40 space-y-2">
            <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Karakteristik Murid</span>
            </span>
            <p className="text-xs text-teks-sekunder leading-relaxed text-justify">
              {selectedLevel.characteristics}
            </p>
          </div>

          {/* Challenge box */}
          <div className="p-4 rounded-xl bg-amber-50/20 border border-amber-100/50 space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider flex items-center space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              <span>Tantangan Utama Guru</span>
            </span>
            <p className="text-xs text-teks-sekunder leading-relaxed text-justify">
              {selectedLevel.challenges}
            </p>
          </div>

        </div>

        {/* 4C detailed list breakdown */}
        <div className="space-y-4">
          <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Formulasi Implementasi 4C:</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Critical */}
            <div className="p-4 rounded-xl border border-teal-100 bg-teal-50/5 text-left space-y-1">
              <span className="text-[9px] uppercase font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">Critical Thinking</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium pt-1.5 text-justify">
                {selectedLevel.fourC.critical}
              </p>
            </div>

            {/* Creative */}
            <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/5 text-left space-y-1">
              <span className="text-[9px] uppercase font-bold text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded">Creativity & Innovation</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium pt-1.5 text-justify">
                {selectedLevel.fourC.creative}
              </p>
            </div>

            {/* Communication */}
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/5 text-left space-y-1">
              <span className="text-[9px] uppercase font-bold text-indigo-700 bg-indigo-100/60 px-2 py-0.5 rounded">Communication</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium pt-1.5 text-justify">
                {selectedLevel.fourC.comm}
              </p>
            </div>

            {/* Collaboration */}
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/5 text-left space-y-1">
              <span className="text-[9px] uppercase font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded">Collaboration</span>
              <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium pt-1.5 text-justify">
                {selectedLevel.fourC.collab}
              </p>
            </div>

          </div>
        </div>

        {/* Suitable Tech for level */}
        <div className="p-4 bg-brand-green-light/30 border border-brand-green/10 rounded-xl flex items-start space-x-3">
          <Smartphone className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider block">Teknologi Rekomendasi di Kelas:</span>
            <p className="text-xs leading-relaxed text-teks-utama font-sans font-medium mt-1">
              {selectedLevel.suitableTech}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
