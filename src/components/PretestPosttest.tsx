/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, QrCode, ExternalLink, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import { PRETEST_DETAILS, POSTTEST_DETAILS } from '../data';

interface PretestPosttestProps {
  type: 'pretest' | 'posttest';
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export default function PretestPosttest({ type, onNavigateNext, onNavigatePrev }: PretestPosttestProps) {
  const isPretest = type === 'pretest';
  const data = isPretest ? PRETEST_DETAILS : POSTTEST_DETAILS;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(data.url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Render a responsive QR code image derived from exact URL as shown in user's screenshots
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(data.url)}&color=0d9488&bgcolor=ffffff&margin=1`;

  return (
    <div className="space-y-8 animate-fade-in" id={`${type}-eval-section`}>
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
            {isPretest ? "Tahap Prasayarat" : "Tahap Kelulusan"}
          </span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold text-teks-utama">
            {data.title}
          </h2>
        </div>
        <div className="text-[10px] uppercase font-bold text-teks-sekunder flex items-center space-x-1">
          <span>Metode:</span>
          <span className="text-brand-green font-extrabold">Online Google Forms</span>
        </div>
      </div>

      {/* Main Two-Column Card Grid (Desktop-first optimized and fully responsive) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Instructions and Direct Link */}
        <div className="lg:col-span-7 bg-white border border-cream-soft rounded-3xl p-6 md:p-8 shadow-xs space-y-6 text-left">
          
          <div className="space-y-2">
            <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider flex items-center space-x-2.5">
              {isPretest ? (
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
              )}
              <span>Petunjuk Pengerjaan</span>
            </h3>
            <p className="text-xs text-teks-sekunder">Mohon membaca tata tertib evaluasi sebelum menekan tombol rujukan:</p>
          </div>

          <div className="space-y-4">
            {data.instructions.map((inst, idx) => (
              <div key={idx} className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-md bg-cream-principal text-brand-green text-[10px] font-bold shrink-0 flex items-center justify-center shadow-3xs mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs font-sans text-teks-utama leading-relaxed pt-0.5">
                  {inst}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-cream-soft/40 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 px-6 py-4 rounded-xl bg-brand-green hover:bg-brand-green/95 text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-brand-green/10 flex items-center justify-center space-x-2 transition-all cursor-pointer transform hover:translate-y-[-2px]"
            >
              <span>{isPretest ? "Kerjakan Pretest" : "Kerjakan Posttest"}</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
            
            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-4 rounded-xl border border-cream-soft hover:bg-cream-principal text-teks-sekunder hover:text-teks-utama text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {isCopied ? "Tautan Tersalin!" : "Salin Tautan Form"}
            </button>
          </div>

        </div>

        {/* Right Column: QR Code scanning block (mimics the uploaded screenshots flawlessly) */}
        <div className="lg:col-span-5 bg-white border border-cream-soft rounded-3xl p-6 shadow-xs flex flex-col items-center justify-center text-center space-y-4">
          
          <div className="text-left w-full border-b border-cream-soft/60 pb-3">
            <span className="text-[9px] uppercase font-bold text-teks-sekunder tracking-wider block">Scan QR Code</span>
            <h4 className="text-xs font-heading font-extrabold text-teks-utama">Pindai dengan Gawai Kamera</h4>
          </div>

          {/* Large, Beautiful QR code layout frame with geometric abstract dots similar to user's assets */}
          <div className="relative p-6 border-2 border-dashed border-cream-soft rounded-2xl bg-cream-principal/10 w-full max-w-[280px] aspect-square flex items-center justify-center group overflow-hidden">
            
            {/* Minimal circles mimicking layout */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-brand-green/45" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-green" />

            <img
              src={qrCodeUrl}
              alt="Scan Me QR Code"
              className="w-full h-full object-contain rounded-lg transition-transform group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1 text-center w-full">
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-green flex items-center justify-center space-x-1.5">
              <QrCode className="w-3.5 h-3.5 text-brand-green" />
              <span>Forms Google Link QR</span>
            </span>
            <p className="text-[10px] text-teks-sekunder text-center truncate max-w-xs block mx-auto font-mono">
              {data.url}
            </p>
          </div>

        </div>

      </div>

      {/* Footer nextprev navigation row */}
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
          Lanjut Belajar &rarr;
        </button>
      </div>

    </div>
  );
}
