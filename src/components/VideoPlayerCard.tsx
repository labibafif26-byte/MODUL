/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, ExternalLink, Sparkles, Youtube, CheckCircle } from 'lucide-react';
import { VIDEO_LEARNING } from '../data';

interface VideoPlayerCardProps {
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export default function VideoPlayerCard({ onNavigateNext, onNavigatePrev }: VideoPlayerCardProps) {
  // Safe embed url with local options
  const iframeEmbedUrl = `https://www.youtube.com/embed/${VIDEO_LEARNING.youtubeId}?rel=0&modestbranding=1`;

  return (
    <div className="space-y-8 animate-fade-in" id="video-pembelajaran-section">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
            Media Pembelajaran
          </span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold text-teks-utama">
            {VIDEO_LEARNING.title}
          </h2>
        </div>
        <div className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full flex items-center space-x-1 shrink-0">
          <Youtube className="w-4 h-4 text-rose-600" />
          <span>YouTube HD Embed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Premium Video Player (Embedded directly) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-cream-soft bg-black shadow-md">
            <iframe
              src={iframeEmbedUrl}
              title={VIDEO_LEARNING.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-teks-sekunder px-1 font-mono">
            <span>Sumber: {VIDEO_LEARNING.youtubeUrl}</span>
            <span className="font-sans font-medium text-brand-green flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full Player Ready</span>
            </span>
          </div>
        </div>

        {/* Right Column: Descriptions & External Links Cards */}
        <div className="lg:col-span-4 bg-white border border-cream-soft rounded-3xl p-6 shadow-xs space-y-5 text-left">
          
          <div className="space-y-1.5">
            <span className="text-[9px] uppercase tracking-wider font-bold text-brand-green">Deskripsi Video</span>
            <h4 className="text-xs font-heading font-extrabold text-teks-utama flex items-center space-x-1.5">
              <span>Rangkuman Materi Video</span>
            </h4>
          </div>

          <p className="text-xs leading-relaxed text-teks-sekunder font-sans text-justify">
            {VIDEO_LEARNING.description}
          </p>

          <div className="pt-4 border-t border-cream-soft/50 space-y-3">
            <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Opsi Pemutaran Luar:</span>
            
            <a
              href={VIDEO_LEARNING.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer border border-rose-200/45 shadow-3xs"
            >
              <Youtube className="w-4 h-4 text-rose-600" />
              <span>Tonton di YouTube</span>
            </a>
          </div>

          {/* Quick learning checklist from OCR */}
          <div className="p-4 rounded-xl bg-cream-principal/40 border border-cream-soft/50 space-y-2">
            <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Poin-poin Pembahasan:</span>
            <ul className="space-y-1.5 text-[11px] font-sans text-teks-sekunder leading-normal">
              <li>📌 Urgensi Transformasi Guru</li>
              <li>📌 Kompetensi Guru Abad 21</li>
              <li>📌 Penerapan Ketrampilan 4C</li>
              <li>📌 Literasi Digital Mandiri</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Navigation Footer */}
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
          Mulai Modul Bab 1 &rarr;
        </button>
      </div>

    </div>
  );
}
