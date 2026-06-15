/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Palette, Cloud, Server, Brain, CheckCircle, Info, Sparkles, ExternalLink } from 'lucide-react';
import { TOOLS_DATA } from '../data';

export default function ToolsGrid() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5 text-teal-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-indigo-600" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      default: return <Sparkles className="w-5 h-5 text-brand-green" />;
    }
  };

  return (
    <div className="space-y-6 my-8" id="tools-grid-block">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-l-4 border-brand-green pl-4">
        <div>
          <h3 className="text-sm font-heading font-bold text-teks-utama uppercase tracking-wider">
            Platform & Media Digital Pilihan Guru Modern
          </h3>
          <p className="text-xs text-teks-sekunder">Mengeksplorasi ekosistem media asisten penunjang instruksional yang andal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOLS_DATA.map((tool) => {
          const isExpanded = expandedTool === tool.name;

          return (
            <div
              key={tool.name}
              className={`bg-white border rounded-2xl p-5 transition-all text-left flex flex-col justify-between ${
                isExpanded 
                  ? 'border-brand-green ring-1 ring-brand-green/30 shadow-md' 
                  : 'border-cream-soft hover:border-cream-soft/80 shadow-3xs'
              }`}
            >
              <div className="space-y-4">
                
                {/* Tool Meta Row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-cream-principal text-brand-green shadow-3xs">
                      {getToolIcon(tool.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-heading font-extrabold text-teks-utama leading-tight">
                        {tool.name}
                      </h4>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-teks-sekunder block mt-0.5">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cream-soft text-[9px] font-bold text-teks-utama uppercase tracking-wide">
                    SCL Approved
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-teks-sekunder">
                  {tool.description}
                </p>

                {/* Expanded feature list */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-cream-soft/40 space-y-2.5 animate-fade-in">
                    <span className="text-[10px] uppercase font-bold text-teks-utama tracking-wider block">Fungsi Terapan Utama:</span>
                    <div className="space-y-1.5">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                          <p className="text-[11px] leading-relaxed text-teks-utama font-medium font-sans">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-cream-soft/35 flex items-center justify-between">
                <button
                  onClick={() => setExpandedTool(isExpanded ? null : tool.name)}
                  className="text-xs font-heading font-bold text-brand-green hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{isExpanded ? 'Tutup Detail' : 'Tinjau Rencana Kerja'}</span>
                </button>

                <span className="text-[9px] font-medium text-teks-sekunder italic">
                  Abad 21 Eco
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
