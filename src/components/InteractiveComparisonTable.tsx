/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { COMPARISON_DATA } from '../data';

export default function InteractiveComparisonTable() {
  const [activeAspect, setActiveAspect] = useState<string>(COMPARISON_DATA[0].aspect);

  // Dynamic Icon retrieval helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-4 h-4 text-brand-green" />;
    }
    return <Icons.HelpCircle className="w-4 h-4 text-brand-green" />;
  };

  const selectedData = COMPARISON_DATA.find((item) => item.aspect === activeAspect) || COMPARISON_DATA[0];

  return (
    <div className="space-y-6 my-8" id="interactive-comparison-block">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
        <div>
          <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
            Tabel 2.1 Perbandingan Karakteristik Kerja Pendidik
          </h3>
          <p className="text-xs text-teks-sekunder">Mengeksplorasi transisi peran mengajar dari pola konservatif ke era digital</p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wide text-brand-green bg-brand-green-light px-2.5 py-1 rounded-full shadow-3xs">
          Interactive Comparison View
        </span>
      </div>

      {/* Desktop side-by-side grid view */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-cream-soft shadow-xs bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-cream-principal/80 text-[11px] font-heading font-bold text-teks-utama uppercase tracking-wider border-b border-cream-soft">
              <th className="p-4 w-3/12">Aspek Komparatif</th>
              <th className="p-4 w-4/12 bg-rose-50/20 text-rose-800">Guru Tradisional (Konservatif)</th>
              <th className="p-4 w-5/12 bg-brand-green-light/20 text-brand-green">Guru Abad 21 (Transformasional)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cream-soft/60 text-xs font-sans">
            {COMPARISON_DATA.map((row) => (
              <tr
                key={row.aspect}
                onClick={() => setActiveAspect(row.aspect)}
                className={`transition-colors cursor-pointer ${
                  activeAspect === row.aspect ? 'bg-cream-principal/40 font-medium' : 'hover:bg-cream-principal/20'
                }`}
              >
                <td className="p-4 flex items-center space-x-3 text-teks-utama font-heading font-semibold">
                  <div className="p-1.5 rounded-lg bg-cream-soft/40 text-brand-green shadow-3xs">
                    {renderIcon(row.icon)}
                  </div>
                  <span>{row.aspect}</span>
                </td>
                <td className="p-4 text-teks-sekunder bg-amber-50/10 italic">
                  {row.traditional}
                </td>
                <td className="p-4 text-teks-utama font-medium bg-brand-green-light/5">
                  {row.modern}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive Mobile / Tablet Tabbed Card switcher */}
      <div className="lg:hidden space-y-4">
        {/* Aspect selector pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
          {COMPARISON_DATA.map((row) => (
            <button
              key={row.aspect}
              onClick={() => setActiveAspect(row.aspect)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeAspect === row.aspect
                  ? 'bg-brand-green text-white shadow-xs'
                  : 'bg-white border border-cream-soft text-teks-sekunder hover:text-teks-utama'
              }`}
            >
              {row.aspect}
            </button>
          ))}
        </div>

        {/* Comparison card details */}
        <div className="bg-white border border-cream-soft rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-cream-soft/60 pb-3">
            <div className="p-2 rounded-xl bg-cream-soft text-brand-green">
              {renderIcon(selectedData.icon)}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-teks-sekunder text-left">Aspek Sorotan</p>
              <h4 className="text-xs font-heading font-bold text-teks-utama text-left">{selectedData.aspect}</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Traditional aspect box */}
            <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 flex flex-col justify-between">
              <span className="text-[9px] uppercase tracking-wider font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded self-start mb-2">
                Guru Tradisional
              </span>
              <p className="text-xs text-teks-sekunder leading-relaxed italic text-left">
                {selectedData.traditional}
              </p>
            </div>

            {/* Abad 21 aspect box */}
            <div className="p-4 rounded-xl bg-brand-green-light/35 border border-brand-green/10 flex flex-col justify-between">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded self-start mb-2">
                Guru Abad 21
              </span>
              <p className="text-xs text-teks-utama font-medium leading-relaxed text-left">
                {selectedData.modern}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
