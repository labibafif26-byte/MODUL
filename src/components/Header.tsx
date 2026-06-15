/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Award, Layers, Bell, Star, Terminal, HelpCircle, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { NotificationState } from '../types';

interface HeaderProps {
  progressPercent: number;
  notifications: NotificationState[];
  onMarkNotificationRead: (id: string) => void;
  onClearNotifications: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  pushNotification: (title: string, message: string, type: 'info' | 'success' | 'alert') => void;
}

export default function Header({
  progressPercent,
  notifications,
  onMarkNotificationRead,
  onClearNotifications,
  activeTab,
  setActiveTab,
  pushNotification
}: HeaderProps) {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Simulate a live task update push standard educational hint
  const triggerHelperTask = () => {
    const tasks = [
      { title: "Refleksi Baru Tersedia", desc: "Silakan periksa kembali Bab 6 D untuk jurnal interaktif.", type: 'info' as const },
      { title: "Tugas Terkirim", desc: "Skor Pretest berhasil disinkronkan dengan dashboard belajar Anda.", type: 'success' as const },
      { title: "Latihan Formatif Aktif", desc: "Cobalah mengerjakan Kuis Reflektif Interaktif pada Bab yang sedang aktif.", type: 'info' as const }
    ];
    const chosen = tasks[Math.floor(Math.random() * tasks.length)];
    pushNotification(chosen.title, chosen.desc, chosen.type);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-principal/95 backdrop-blur-md border-b border-cream-soft shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Platform Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('beranda')}>
            <div className="p-2.5 rounded-xl bg-cream-soft text-brand-green shadow-xs flex items-center justify-center transition-transform hover:scale-105">
              <BookOpen className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h1 className="text-lg font-heading font-semibold text-teks-utama tracking-tight leading-tight">
                Modul Guru Abad 21
              </h1>
              <p className="text-[10px] font-sans font-medium tracking-wide uppercase text-brand-green lg:block hidden">
                Transformasi Profesional & Akademis
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {[
              { id: 'beranda', label: 'Beranda' },
              { id: 'pretest', label: 'Pretest' },
              { id: 'video', label: 'Video' },
              { id: 'materi', label: 'Materi Belajar' },
              { id: 'posttest', label: 'Posttest' },
              { id: 'kesimpulan', label: 'Kesimpulan' },
              { id: 'pustaka', label: 'Pustaka' },
              { id: 'profil', label: 'Pengembang' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 uppercase ${
                  activeTab === tab.id
                    ? 'bg-cream-soft text-teks-utama shadow-xs border border-cream-soft/60'
                    : 'text-teks-sekunder hover:text-teks-utama hover:bg-cream-soft/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Action Widgets (LMS Dashboard Perks) */}
          <div className="flex items-center space-x-3">
            
            {/* Quick Live simulation trigger for standard updates */}
            <button
              onClick={triggerHelperTask}
              title="Kirim Penugasan Baru (Simulasi Push)"
              className="p-2 rounded-xl bg-cream-soft/40 hover:bg-cream-soft text-teks-sekunder hover:text-teks-utama transition-colors relative"
            >
              <Sparkles className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-green animate-ping" />
            </button>

            {/* Notification Dropdown toggler */}
            <div className="relative">
              <button
                onClick={() => setIsOpenNotification(!isOpenNotification)}
                className="p-2 rounded-xl bg-cream-soft hover:bg-cream-soft/80 text-teks-utama transition-all relative shadow-xs"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white shadow-xs">
                    {unreadCount}
                  </span>
                )}
              </button>

              {isOpenNotification && (
                <div className="absolute right-0 mt-3 w-80 md:w-96 rounded-2xl bg-white border border-cream-soft shadow-xl overflow-hidden z-50 animate-fade-in">
                  <div className="bg-cream-principal px-4 py-3.5 border-b border-cream-soft flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs tracking-wide uppercase text-teks-utama flex items-center space-x-2">
                      <Bell className="w-4 h-4 text-brand-green" />
                      <span>Notifikasi Penugasan</span>
                    </span>
                    {unreadCount > 0 && (
                      <button
                        onClick={onClearNotifications}
                        className="text-[10px] uppercase tracking-wider font-bold text-brand-green hover:underline cursor-pointer"
                      >
                        Tandai semua dibaca
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-cream-soft">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-teks-sekunder">
                        <CheckCircle2 className="w-10 h-10 stroke-1 block mx-auto text-brand-green opacity-40 mb-2" />
                        <p className="text-xs font-sans">Semua tugas terselesaikan. Tidak ada update baru!</p>
                      </div>
                    ) : (
                      notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 transition-all duration-200 hover:bg-cream-principal/40 relative ${notif.isRead ? 'opacity-65' : 'bg-brand-green-light/30 border-l-4 border-brand-green'}`}
                        >
                          <div className="flex items-start">
                            <div className="mr-3 mt-0.5">
                              {notif.type === 'success' ? (
                                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                              ) : notif.type === 'alert' ? (
                                <AlertCircle className="w-4 h-4 text-amber-500" />
                              ) : (
                                <Bell className="w-4 h-4 text-indigo-500" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-heading font-semibold text-teks-utama leading-tight truncate">
                                {notif.title}
                              </h4>
                              <p className="text-xs text-teks-sekunder mt-0.5 leading-relaxed">
                                {notif.message}
                              </p>
                              <span className="text-[9px] font-medium text-teks-sekunder/85 block mt-2 tracking-wide uppercase">
                                {notif.timestamp}
                              </span>
                            </div>
                            {!notif.isRead && (
                              <button
                                onClick={() => onMarkNotificationRead(notif.id)}
                                className="ml-2 text-[10px] font-bold text-brand-green hover:underline cursor-pointer"
                              >
                                Baca
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="bg-cream-soft/20 px-4 py-2 border-t border-cream-soft text-center text-[10px] font-medium text-teks-sekunder">
                    LMS Real-time Push Simulation
                  </div>
                </div>
              )}
            </div>

            {/* Simple Circular Progress Badge */}
            <div className="hidden sm:flex items-center space-x-2 pl-2">
              <div className="relative flex items-center justify-center">
                {/* SVG Ring Progress */}
                <svg className="w-9 h-9 transform -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke="#EDE6DA"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke="#0D9488"
                    strokeWidth="3.5"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 15}
                    strokeDashoffset={2 * Math.PI * 15 * (1 - progressPercent / 100)}
                    className="transition-all duration-300"
                  />
                </svg>
                <span className="absolute text-[9px] font-bold text-brand-green">{progressPercent}%</span>
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-[9px] font-bold text-teks-sekunder uppercase tracking-wider">Progress Anda</p>
                <p className="text-xs font-semibold text-teks-utama leading-tight">Module Pembelajaran</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      
      {/* Scroll Top Horizontal Loading Indicator bar */}
      <div className="w-full bg-cream-soft h-1 overflow-hidden">
        <div
          style={{ width: `${progressPercent}%` }}
          className="bg-brand-green h-full transition-all duration-300"
        />
      </div>
    </header>
  );
}
