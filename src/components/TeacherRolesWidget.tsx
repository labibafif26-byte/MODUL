/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Layers, Flame, Eye, Handshake, MessageSquare, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { TEACHER_ROLES } from '../data';

export default function TeacherRolesWidget() {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'peran' | 'dampak'>('peran');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-teal-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-purple-600" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-cyan-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-rose-600" />;
      default: return <Compass className="w-5 h-5 text-brand-green" />;
    }
  };

  const studentOutcomes = [
    { title: "Mengamati & Mengeksplorasi", text: "Siswa secara aktif mengumpulkan bukti empiris, melakukan penelitian mandiri, serta mencari informasi pendukung konsep dari perpustakan digital." },
    { title: "Berpikir Kritis & Kreatif", text: "Siswa membiasakan memverifikasi kredibilitas fakta, menelaah motif bias artikel, dan merancang sintesis orisinal berupa produk karya digital." },
    { title: "Berkolaborasi & Berkomunikasi", text: "Siswa belajar menyampaikan pemikiran secara santun melalui media digital, melatih empati mendengar aktif, serta bernegosiasi secara asertif." },
    { title: "Membangun Pengetahuan", text: "Pengetahuan tidak diposisikan sebagai hafalan hapus-uji, melainkan struktur pemahaman kognitif kokoh yang dikonstruksi mandiri." },
    { title: "Pembelajaran Bermakna", text: "Kompetensi dasar dikaitkan langsung dengan pemecahan problem non-rutin kontekstual di dunia nyata sekitar lingkungan siswa." }
  ];

  return (
    <div className="space-y-6 my-8" id="teacher-roles-widget-block">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
        <div>
          <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
            Diagram 2.2 Peran Guru Sebagai Fasilitator & Dampak Siswa
          </h3>
          <p className="text-xs text-teks-sekunder">Mempelajari sub-aspek intervensi pendidik modern dan implikasi dampaknya kepada siswa</p>
        </div>

        {/* View toggler tabs */}
        <div className="flex rounded-lg bg-cream-soft/50 p-1 border border-cream-soft">
          <button
            onClick={() => setActiveTab('peran')}
            className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all ${
              activeTab === 'peran'
                ? 'bg-white text-teks-utama shadow-3xs'
                : 'text-teks-sekunder hover:text-teks-utama'
            }`}
          >
            6 Peran Kunci
          </button>
          <button
            onClick={() => setActiveTab('dampak')}
            className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all ${
              activeTab === 'dampak'
                ? 'bg-white text-teks-utama shadow-3xs'
                : 'text-teks-sekunder hover:text-teks-utama'
            }`}
          >
            Dampak Siswa
          </button>
        </div>
      </div>

      {activeTab === 'peran' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHER_ROLES.map((role) => (
            <div
              key={role.role}
              onMouseEnter={() => setHoveredRole(role.role)}
              onMouseLeave={() => setHoveredRole(null)}
              className="bg-white border border-cream-soft rounded-2xl p-5 hover:border-brand-green/30 transition-all flex flex-col justify-between h-48 group shadow-3xs hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-cream-principal group-hover:bg-brand-green-light transition-colors shadow-3xs">
                  {getIcon(role.icon)}
                </div>
                <span className="text-[10px] font-bold text-teks-sekunder uppercase tracking-widest">
                  Fasilitator Abad 21
                </span>
              </div>

              <div className="space-y-1.5 mt-4">
                <h4 className="text-xs font-heading font-extrabold text-teks-utama text-left group-hover:text-brand-green transition-colors">
                  {role.role}
                </h4>
                <p className="text-[11px] text-teks-sekunder leading-normal text-left">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-cream-soft rounded-2xl p-6 shadow-xs space-y-6">
          <div className="text-left">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-teks-utama">
              Siklus Hasil Belajar Mandiri Siswa
            </h4>
            <p className="text-[11px] text-teks-sekunder">Mekanisme perubahan perilaku kognitif murid akibat bimbingan fasilitatif terapan</p>
          </div>

          <div className="space-y-4">
            {studentOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl hover:bg-cream-principal/40 transition-colors border border-transparent hover:border-cream-soft">
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-3xs font-heading font-bold text-xs">
                  {idx + 1}
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-heading font-bold text-teks-utama">
                    {outcome.title}
                  </h5>
                  <p className="text-[11px] leading-relaxed text-teks-sekunder mt-0.5">
                    {outcome.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
