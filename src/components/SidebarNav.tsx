/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PlayCircle, ShieldCheck, Award, GraduationCap, ChevronRight, CheckCircle, ChevronDown, CheckSquare, Square, Library, Info, Users, BookOpen } from 'lucide-react';
import { CHAPTERS_DATA } from '../data';

interface SidebarNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedChapters: string[];
  toggleChapterComplete: (chapterId: string) => void;
  activeSubSection: string;
  setActiveSubSection: (subId: string) => void;
}

export default function SidebarNav({
  activeTab,
  setActiveTab,
  completedChapters,
  toggleChapterComplete,
  activeSubSection,
  setActiveSubSection
}: SidebarNavProps) {
  const isChapterComplete = (id: string) => completedChapters.includes(id);

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'beranda': return <BookOpen className="w-4 h-4" />;
      case 'pretest': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'video': return <PlayCircle className="w-4 h-4 text-rose-600" />;
      case 'posttest': return <Award className="w-4 h-4 text-amber-500" />;
      case 'kesimpulan': return <GraduationCap className="w-4 h-4 text-indigo-500" />;
      case 'pustaka': return <Library className="w-4 h-4 text-teal-600" />;
      case 'profil': return <Users className="w-4 h-4 text-sky-600" />;
      default: return <ChevronRight className="w-3.5 h-3.5" />;
    }
  };

  const menuSections = [
    { id: 'beranda', label: '1. Beranda Modul', category: 'Dasar' },
    { id: 'pretest', label: '2. Pretest Evaluasi', category: 'Dasar' },
    { id: 'video', label: '3. Video Pembelajaran', category: 'Dasar' }
  ];

  const endSections = [
    { id: 'posttest', label: '5. Posttest Akhir', category: 'Evaluasi' },
    { id: 'kesimpulan', label: '6. Kesimpulan & Rekomendasi', category: 'Evaluasi' },
    { id: 'pustaka', label: '7. Daftar Pustaka', category: 'Evaluasi' },
    { id: 'profil', label: '8. Profil Pengembang', category: 'Evaluasi' }
  ];

  return (
    <aside className="w-full md:w-80 bg-white border border-cream-soft rounded-2xl p-5 shadow-xs shrink-0 self-start md:sticky md:top-24">
      
      {/* Sidebar Header Brand block */}
      <div className="mb-6 pb-4 border-b border-cream-soft flex items-center justify-between">
        <div>
          <h2 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">Navigasi Modul</h2>
          <p className="text-[10px] font-medium text-teks-sekunder">Silakan pelajari secara berurutan</p>
        </div>
        <span className="px-2 py-0.5 rounded bg-cream-soft text-[10px] font-bold text-brand-green uppercase tracking-wide">
          SCL Mode
        </span>
      </div>

      {/* Main navigation list */}
      <div className="space-y-6">
        
        {/* Core Introductory Modules list */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-teks-sekunder/80 block mb-2 px-1">
            Tahap Awal
          </span>
          <div className="space-y-1">
            {menuSections.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setActiveSubSection('');
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeTab === item.id
                    ? 'bg-cream-principal border-l-4 border-brand-green text-teks-utama shadow-2xs'
                    : 'text-teks-sekunder hover:text-teks-utama hover:bg-cream-principal/40'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className={`p-1.5 rounded-lg ${activeTab === item.id ? 'bg-white text-brand-green' : 'bg-cream-soft/40 text-teks-sekunder'}`}>
                    {getSectionIcon(item.id)}
                  </div>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-teks-sekunder/60" />
              </button>
            ))}
          </div>
        </div>

        {/* Core Core Course Chapters Accordions */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-teks-sekunder/80 block">
              Materi Pembelajaran
            </span>
            <span className="text-[9px] font-bold text-brand-green bg-brand-green-light px-1.5 py-0.2 rounded">
              {completedChapters.length} / 6 Selesai
            </span>
          </div>

          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
            {CHAPTERS_DATA.map((ch, index) => {
              const isChActive = activeTab === ch.id;
              const completed = isChapterComplete(ch.id);

              return (
                <div
                  key={ch.id}
                  className={`border rounded-xl transition-all ${
                    isChActive 
                      ? 'border-brand-green/30 bg-cream-principal/30 shadow-2xs' 
                      : 'border-cream-soft hover:border-cream-soft/80'
                  }`}
                >
                  {/* Accordion Chapter Header Row */}
                  <div className="p-2.5 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActiveTab(ch.id);
                        if (ch.subsections.length > 0) {
                          setActiveSubSection(ch.subsections[0].id);
                        }
                      }}
                      className="flex-1 text-left flex items-start space-x-2"
                    >
                      <div className="mt-0.5">
                        {completed ? (
                          <CheckCircle className="w-4 h-4 text-brand-green shrink-0 fill-brand-green/10" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-teks-sekunder/50 text-[10px] font-bold text-teks-sekunder flex items-center justify-center shrink-0">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className={`block text-xs font-bold truncate leading-tight ${isChActive ? 'text-brand-green font-extrabold' : 'text-teks-utama'}`}>
                          {ch.title.split(': ')[0]}
                        </span>
                        <span className="text-[10px] text-teks-sekunder truncate block leading-tight">
                          {ch.title.split(': ')[1]}
                        </span>
                      </div>
                    </button>

                    {/* Completion Checker Checkmark Toggle */}
                    <button
                      onClick={() => toggleChapterComplete(ch.id)}
                      className={`ml-2 p-1 rounded-lg hover:bg-cream-soft/50 transition-colors cursor-pointer ${completed ? 'text-brand-green' : 'text-teks-sekunder/40'}`}
                      title={completed ? "Tandai Belum Selesai" : "Tandai Sudah Selesai"}
                    >
                      {completed ? (
                        <CheckSquare className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Subsection Children Menu inside Chapter */}
                  {isChActive && (
                    <div className="px-3 pb-3 pt-1 border-t border-cream-soft/40 space-y-1">
                      {ch.subsections.map((sub) => {
                        const isSubActive = activeSubSection === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubSection(sub.id)}
                            className={`w-full text-left py-1.5 px-3 rounded-lg text-xs leading-relaxed transition-all relative ${
                              isSubActive
                                ? 'bg-white text-teks-utama font-bold border-l-2 border-brand-green shadow-3xs'
                                : 'text-teks-sekunder hover:bg-white/40 hover:text-teks-utama'
                            }`}
                          >
                            <span className="truncate block pr-2">
                              {sub.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Evaluative Stages list */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-teks-sekunder/80 block mb-2 px-1">
            Tahap Akhir & Referensi
          </span>
          <div className="space-y-1">
            {endSections.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setActiveSubSection('');
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeTab === item.id
                    ? 'bg-cream-principal border-l-4 border-brand-green text-teks-utama shadow-2xs'
                    : 'text-teks-sekunder hover:text-teks-utama hover:bg-cream-principal/40'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className={`p-1.5 rounded-lg ${activeTab === item.id ? 'bg-white text-brand-green' : 'bg-cream-soft/40 text-teks-sekunder'}`}>
                    {getSectionIcon(item.id)}
                  </div>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-teks-sekunder/60" />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Developers group citation in outer card footer */}
      <div className="mt-8 pt-4 border-t border-cream-soft/80 bg-cream-principal/20 p-3 rounded-xl">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-brand-green shrink-0" />
          <p className="text-[10px] text-teks-sekunder leading-tight">
            Dikembangkan oleh <span className="font-bold text-teks-utama">Kelompok 10</span> untuk meningkatkan kompetensi edukasi digital.
          </p>
        </div>
      </div>

    </aside>
  );
}
