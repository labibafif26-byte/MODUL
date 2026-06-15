/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, GraduationCap, Compass, Sparkles, Award, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { APP_THEME_TITLE, APP_THEME_SUBTITLE, COURSE_NAME, MODULE_DESC, INSTRUCTIONAL_GOALS, MODULE_STATS } from '../data';

interface BerandaHeroProps {
  onStartLearning: () => void;
}

export default function BerandaHero({ onStartLearning }: BerandaHeroProps) {
  return (
    <div className="space-y-12 animate-fade-in" id="beranda-hero-section">
      
      {/* Premium Hero Banner Grid */}
      <div className="relative rounded-3xl bg-white border border-cream-soft overflow-hidden shadow-xs px-6 py-12 md:p-14 lg:p-16 flex flex-col md:flex-row items-center gap-12 bg-radial from-white via-white to-cream-principal/20">
        
        {/* Subtle decorative vector graphic elements */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cream-soft/40 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

        {/* Hero Left Content Text Column */}
        <div className="flex-1 space-y-6 text-center md:text-left z-10">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-cream-soft text-brand-green text-xs font-bold uppercase tracking-wider shadow-3xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Learning Website</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs uppercase font-bold text-teks-sekunder tracking-widest">{COURSE_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-[1.125] tracking-tight">
              {APP_THEME_TITLE} <span className="text-brand-green block mt-1">{APP_THEME_SUBTITLE}</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-teks-sekunder max-w-2xl font-body">
            {MODULE_DESC}
          </p>

          {/* Quick Stats list inside Hero */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {MODULE_STATS.map((stat, idx) => (
              <div key={idx} className="bg-cream-principal/50 border border-cream-soft/60 rounded-xl p-3 text-center md:text-left shadow-3xs transition-all hover:bg-cream-soft/30 hover:translate-y-[-1px]">
                <p className="text-lg font-heading font-bold text-teks-utama">{stat.value}</p>
                <p className="text-[10px] text-teks-sekunder uppercase font-bold tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-green hover:bg-brand-green/95 text-white font-semibold text-sm tracking-wide shadow-md shadow-brand-green/10 flex items-center justify-center space-x-3 transition-all cursor-pointer transform hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
            >
              <span>Mulai Belajar</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <p className="text-xs text-teks-sekunder font-medium">Bebas diakses tanpa perlu login.</p>
          </div>
        </div>

        {/* Hero Right Graphic Column */}
        <div className="w-full md:w-5/12 max-w-sm flex items-center justify-center relative">
          
          {/* Animated stacked graphic layout of academia elements */}
          <div className="relative w-full aspect-square border border-cream-soft rounded-2xl bg-cream-principal/40 p-6 flex flex-col justify-between overflow-hidden shadow-xs">
            
            <div className="flex items-center justify-between">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-indigo-400" />
              <span className="w-3 h-3 rounded-full bg-brand-green" />
            </div>

            {/* Simulated classroom UI window */}
            <div className="space-y-3 bg-white p-4 rounded-xl shadow-md border border-cream-soft z-10 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="h-2 w-1/3 bg-brand-green/20 rounded" />
              <div className="h-4 w-full bg-teks-utama/10 rounded" />
              <div className="h-4 w-5/6 bg-teks-utama/10 rounded" />
              <div className="flex items-center space-x-2 pt-2">
                <div className="w-6 h-6 rounded-full bg-cream-soft flex items-center justify-center text-[10px] font-bold text-brand-green">10</div>
                <div className="h-2 w-1/2 bg-teks-sekunder/15 rounded" />
              </div>
            </div>

            {/* floating badge 1: Guru Abad 21 logo */}
            <div className="absolute top-12 left-2 bg-brand-green-light border border-brand-green/20 p-2.5 rounded-lg shadow-sm flex items-center space-x-2 transform rotate-2 z-20">
              <GraduationCap className="w-5 h-5 text-brand-green" />
              <span className="text-[10px] font-bold text-teks-utama">Guru Inovatif</span>
            </div>

            {/* floating badge 2: 4C skill circle */}
            <div className="absolute bottom-10 right-4 bg-amber-50 border border-amber-200 p-2.5 rounded-lg shadow-sm flex items-center space-x-2 transform -rotate-3 z-0">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] font-bold text-amber-800">4C Skills</span>
            </div>

            <div className="h-24 w-full bg-gradient-to-t from-cream-soft/60 to-transparent absolute bottom-0 left-0" />
          </div>

        </div>

      </div>

      {/* Instructional Goals Section */}
      <div className="bg-white border border-cream-soft rounded-3xl p-8 md:p-10 shadow-xs space-y-6">
        <div className="text-center md:text-left space-y-1.5">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-teks-utama">
            Tujuan Pembelajaran Modul
          </h2>
          <p className="text-xs text-teks-sekunder">
            Dengan menuntaskan seluruh bab, Anda diharapkan mampu menguasai sasaran kompetensi kependidikan berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {INSTRUCTIONAL_GOALS.map((goal, idx) => (
            <div key={idx} className="flex space-x-3.5 p-4 rounded-xl bg-cream-principal/30 border border-cream-soft/40 transition-colors hover:bg-cream-principal/70">
              <div className="w-7 h-7 rounded-lg bg-brand-green-light text-brand-green shrink-0 flex items-center justify-center shadow-3xs">
                <CheckCircle className="w-4 h-4 stroke-[2.2]" />
              </div>
              <p className="text-xs font-sans font-medium text-teks-utama leading-relaxed pt-0.5">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
