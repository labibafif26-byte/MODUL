/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Layers, 
  Flame, 
  Eye, 
  Handshake, 
  MessageSquare, 
  BookOpen, 
  ShieldCheck, 
  PlayCircle, 
  Award, 
  GraduationCap, 
  Library, 
  Users, 
  ArrowUp, 
  CheckCircle, 
  Clock, 
  HelpCircle, 
  AlertTriangle,
  Menu,
  X,
  Sparkles,
  Info
} from 'lucide-react';

import Header from './components/Header';
import SidebarNav from './components/SidebarNav';
import BerandaHero from './components/BerandaHero';
import PretestPosttest from './components/PretestPosttest';
import VideoPlayerCard from './components/VideoPlayerCard';
import KesimpulanRekomendasi from './components/KesimpulanRekomendasi';
import DaftarPustaka from './components/DaftarPustaka';
import ProfilPengembang from './components/ProfilPengembang';

// Dynamic Widgets imports
import InteractiveComparisonTable from './components/InteractiveComparisonTable';
import TeacherRolesWidget from './components/TeacherRolesWidget';
import PillarsAndFourCWidget from './components/PillarsAndFourCWidget';
import ToolsGrid from './components/ToolsGrid';
import LevelSwitcher from './components/LevelSwitcher';
import SelfReflectionQuiz from './components/SelfReflectionQuiz';

import { CHAPTERS_DATA, APP_THEME_TITLE, APP_THEME_SUBTITLE } from './data';
import { NotificationState, Chapter } from './types';

// Strict Order list of study flow tabs
const TAB_ORDER = [
  'beranda',
  'pretest',
  'video',
  'bab1',
  'bab2',
  'bab3',
  'bab4',
  'bab5',
  'bab6',
  'posttest',
  'kesimpulan',
  'pustaka',
  'profil'
];

export default function App() {
  const [activeTab, setActiveTab ] = useState<string>('beranda');
  const [activeSubSection, setActiveSubSection] = useState<string>('');
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [readingScrollPercent, setReadingScrollPercent] = useState(0);

  // Notifications pool
  const [notifications, setNotifications] = useState<NotificationState[]>([]);

  // Refs for scroll and animations
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Initialize offline-persistent state & default alerts
  useEffect(() => {
    // Read completed chapters
    const cachedCh = localStorage.getItem('guru_digital_completed_chapters');
    if (cachedCh) {
      try {
        setCompletedChapters(JSON.parse(cachedCh));
      } catch (e) {
        console.error(e);
      }
    }

    // Default academic push notices
    const initialNotifications: NotificationState[] = [
      {
        id: 'notif-1',
        title: 'Selamat Datang di Modul!',
        message: 'Selamat datang di modul transformatif "Guru di Era Digital". Silakan mulai dengan pretest untuk menilik kompetensi dasar.',
        timestamp: 'Baru saja',
        isRead: false,
        type: 'info'
      },
      {
        id: 'notif-2',
        title: 'Tugas Kelompok Terunggah',
        message: 'Konten kurikulum Kelompok 10 berhasil disinkronisasi ke dalam database cloud lokal situs web.',
        timestamp: '5 menit yang lalu',
        isRead: false,
        type: 'success'
      }
    ];
    setNotifications(initialNotifications);

    // Initial check for scroll top
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrollToTopVisible(true);
      } else {
        setIsScrollToTopVisible(false);
      }

      // Calculate scroll progress percent for reading material card container
      if (mainContentRef.current) {
        const rect = mainContentRef.current.getBoundingClientRect();
        const elementHeight = mainContentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        
        // simple element relative scroll calculate
        const scrolled = window.scrollY - mainContentRef.current.offsetTop;
        const maxScroll = elementHeight - viewportHeight;
        if (maxScroll > 0) {
          const percent = Math.min(100, Math.max(0, Math.round((scrolled / maxScroll) * 100)));
          setReadingScrollPercent(percent);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync completed chapters to storage
  const syncCompletedChapters = (updated: string[]) => {
    setCompletedChapters(updated);
    localStorage.setItem('guru_digital_completed_chapters', JSON.stringify(updated));
  };

  // Toggle single bab completed
  const toggleChapterComplete = (chapterId: string) => {
    const exists = completedChapters.includes(chapterId);
    let updated: string[];
    if (exists) {
      updated = completedChapters.filter(id => id !== chapterId);
      pushNotification(
        "Ketetapan Progress",
        `Pernyataan selesai Bab "${chapterId.toUpperCase()}" ditarik kembali.`,
        "info"
      );
    } else {
      updated = [...completedChapters, chapterId];
      pushNotification(
        "Bab Terselesaikan!",
        `Selamat, Anda telah menuntaskan Bab "${chapterId.toUpperCase()}". Terus pertahankan semangat Anda!`,
        "success"
      );
    }
    syncCompletedChapters(updated);
  };

  // Push notification helper (simulated real-time)
  const pushNotification = (title: string, message: string, type: 'info' | 'success' | 'alert') => {
    const formattedTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const newNotif: NotificationState = {
      id: `notif-${Date.now()}`,
      title,
      message,
      timestamp: formattedTime,
      isRead: false,
      type
    };
    setNotifications(prev => [newNotif, ...prev]);

    // Simple audio tone simulation notification (gentle bell beep using web audio if allowed)
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(type === 'success' ? 880 : 587.33, audioCtx.currentTime); // high tone for success
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    } catch (err) {
      // Audio not allowed or blocked by iframe environment
    }
  };

  const handleMarkRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleClearNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  // Calculate global progress percent
  const calculateProgress = () => {
    // Total components: pretest checked (15%), posttest checked (15%), watched video (10%), chapters (10% each * 6 = 60%)
    let pct = 0;
    
    // Check if pretest is parsed / completed
    if (completedChapters.includes('pretest')) pct += 15;
    if (completedChapters.includes('posttest')) pct += 15;
    if (completedChapters.includes('video')) pct += 10;
    
    // Finished chapters
    const chaptersOnly = completedChapters.filter(id => id.startsWith('bab'));
    pct += chaptersOnly.length * 10; // max 60

    return Math.min(100, pct);
  };

  const progressPercent = calculateProgress();

  // Page index navigations
  const currentTabIdx = TAB_ORDER.indexOf(activeTab);

  const navigateNext = () => {
    if (currentTabIdx < TAB_ORDER.length - 1) {
      const nextTab = TAB_ORDER[currentTabIdx + 1];
      setActiveTab(nextTab);
      
      // Auto set first subsection
      if (nextTab.startsWith('bab')) {
        const found = CHAPTERS_DATA.find(c => c.id === nextTab);
        if (found && found.subsections.length > 0) {
          setActiveSubSection(found.subsections[0].id);
        }
      } else {
        setActiveSubSection('');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Simulate complete tracking
      if (activeTab.startsWith('bab') && !completedChapters.includes(activeTab)) {
        // Auto mark chapter completed when hitting next
        syncCompletedChapters([...completedChapters, activeTab]);
        pushNotification(
          "Asesmen Membaca",
          `Bab "${activeTab.toUpperCase()}" ditandai selesai otomatis oleh sistem SCL.`,
          "success"
        );
      }
    }
  };

  const navigatePrev = () => {
    if (currentTabIdx > 0) {
      const prevTab = TAB_ORDER[currentTabIdx - 1];
      setActiveTab(prevTab);
      
      if (prevTab.startsWith('bab')) {
        const found = CHAPTERS_DATA.find(c => c.id === prevTab);
        if (found && found.subsections.length > 0) {
          setActiveSubSection(found.subsections[0].id);
        }
      } else {
        setActiveSubSection('');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startLearning = () => {
    setActiveTab('pretest');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setActiveTab('beranda');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active chapter if reading
  const activeChapter = CHAPTERS_DATA.find(c => c.id === activeTab);
  const activeSubSecObj = activeChapter?.subsections.find(s => s.id === activeSubSection);

  // Auto trigger a gentle educational task alert in the background after 45s
  useEffect(() => {
    const timer = setTimeout(() => {
      pushNotification(
        "Kuis Interaktif",
        "Ingin menguji kecakapan? Coba selesaikan Latihan Refleksi di Bab 6 untuk melihat Index Guru Inovatif Anda.",
        "info"
      );
    }, 45000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-cream-principal font-sans text-teks-utama selection:bg-cream-soft select-none pb-24 transition-all duration-300">
      
      {/* Sticky top progress navigation row */}
      <Header
        progressPercent={progressPercent}
        notifications={notifications}
        onMarkNotificationRead={handleMarkRead}
        onClearNotifications={handleClearNotifications}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab.startsWith('bab')) {
            const found = CHAPTERS_DATA.find(c => c.id === tab);
            if (found && found.subsections.length > 0) {
              setActiveSubSection(found.subsections[0].id);
            }
          } else {
            setActiveSubSection('');
          }
        }}
        pushNotification={pushNotification}
      />

      {/* Floating mobile toggle sidebar button */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-4 rounded-full bg-brand-green text-white shadow-lg flex items-center justify-center transition-transform active:scale-95"
          title="Buka Navigasi Materi"
        >
          {isMobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Container Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative">
        
        {/* Mobile menu block overlay */}
        {isMobileSidebarOpen && (
          <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-30 flex justify-start items-stretch">
            <div className="w-4/5 max-w-xs bg-white p-5 overflow-y-auto shadow-2xl relative animate-slide-right">
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 text-teks-sekunder hover:text-teks-utama"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pt-8">
                <SidebarNav
                  activeTab={activeTab}
                  setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setIsMobileSidebarOpen(false);
                    if (tab.startsWith('bab')) {
                      const found = CHAPTERS_DATA.find(c => c.id === tab);
                      if (found && found.subsections.length > 0) {
                        setActiveSubSection(found.subsections[0].id);
                      }
                    } else {
                      setActiveSubSection('');
                    }
                  }}
                  completedChapters={completedChapters}
                  toggleChapterComplete={toggleChapterComplete}
                  activeSubSection={activeSubSection}
                  setActiveSubSection={(sub) => {
                    setActiveSubSection(sub);
                    setIsMobileSidebarOpen(false);
                  }}
                />
              </div>
            </div>
            <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Navigation bar: hidden on mobile, visible on desktop */}
          <div className="hidden md:block">
            <SidebarNav
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                if (tab.startsWith('bab')) {
                  const found = CHAPTERS_DATA.find(c => c.id === tab);
                  if (found && found.subsections.length > 0) {
                    setActiveSubSection(found.subsections[0].id);
                  }
                } else {
                  setActiveSubSection('');
                }
              }}
              completedChapters={completedChapters}
              toggleChapterComplete={toggleChapterComplete}
              activeSubSection={activeSubSection}
              setActiveSubSection={setActiveSubSection}
            />
          </div>

          {/* Right Content Workspace Section (Renders the current screen active segment) */}
          <div className="flex-1 w-full min-w-0" ref={mainContentRef}>
            
            {/* Screen 1: Beranda */}
            {activeTab === 'beranda' && (
              <BerandaHero onStartLearning={startLearning} />
            )}

            {/* Screen 2: Pretest */}
            {activeTab === 'pretest' && (
              <div className="space-y-6">
                <PretestPosttest
                  type="pretest"
                  onNavigateNext={() => {
                    // Auto mark Pretest completed when hitting Next
                    if (!completedChapters.includes('pretest')) {
                      syncCompletedChapters([...completedChapters, 'pretest']);
                    }
                    navigateNext();
                  }}
                  onNavigatePrev={navigatePrev}
                />
                
                {/* Manual Completion Switch box for Pretest */}
                <div className="p-4 bg-white border border-cream-soft rounded-2xl flex items-center justify-between shadow-3xs">
                  <div className="text-left">
                    <p className="text-xs font-heading font-bold text-teks-utama">Status Pengerjaan Pretest</p>
                    <p className="text-[10px] text-teks-sekunder">Sudahkah Anda memindai QR dan mengerjakannya?</p>
                  </div>
                  <button
                    onClick={() => {
                      const exists = completedChapters.includes('pretest');
                      let updated: string[];
                      if (exists) {
                        updated = completedChapters.filter(id => id !== 'pretest');
                      } else {
                        updated = [...completedChapters, 'pretest'];
                      }
                      syncCompletedChapters(updated);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 transition-colors cursor-pointer ${
                      completedChapters.includes('pretest')
                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                        : 'bg-cream-soft text-teks-sekunder border border-transparent'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{completedChapters.includes('pretest') ? "Sudah Diikuti" : "Tandai Diikuti"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Screen 3: Video Pembelajaran */}
            {activeTab === 'video' && (
              <div className="space-y-6">
                <VideoPlayerCard
                  onNavigateNext={() => {
                    // Auto mark Video completed when hitting Next
                    if (!completedChapters.includes('video')) {
                      syncCompletedChapters([...completedChapters, 'video']);
                    }
                    navigateNext();
                  }}
                  onNavigatePrev={navigatePrev}
                />
                
                {/* Manual Completion Switch box for Video */}
                <div className="p-4 bg-white border border-cream-soft rounded-2xl flex items-center justify-between shadow-3xs">
                  <div className="text-left">
                    <p className="text-xs font-heading font-bold text-teks-utama">Status Menonton Video</p>
                    <p className="text-[10px] text-teks-sekunder">Sudahkah Anda tuntas memutar video materi?</p>
                  </div>
                  <button
                    onClick={() => {
                      const exists = completedChapters.includes('video');
                      let updated: string[];
                      if (exists) {
                        updated = completedChapters.filter(id => id !== 'video');
                      } else {
                        updated = [...completedChapters, 'video'];
                      }
                      syncCompletedChapters(updated);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 transition-colors cursor-pointer ${
                      completedChapters.includes('video')
                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                        : 'bg-cream-soft text-teks-sekunder border border-transparent'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{completedChapters.includes('video') ? "Selesai Menonton" : "Tandai Selesai Menonton"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Screen 4: Core Chapters (Rendered dynamically based on Chapter model datasets) */}
            {activeChapter && (
              <div className="space-y-8 animate-fade-in" id="active-reading-chapter">
                
                {/* Chapter Title Badge */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-brand-green pl-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-green tracking-wider bg-brand-green-light px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {activeChapter.badge}
                    </span>
                    <h2 className="text-xl md:text-2xl font-heading font-extrabold text-gray-900 leading-tight">
                      {activeChapter.title}
                    </h2>
                  </div>
                  
                  {/* Stats metadata */}
                  <div className="flex items-center space-x-3 text-xs text-teks-sekunder font-medium scale-95 shrink-0">
                    <span className="flex items-center space-x-1 uppercase text-[10px] font-bold text-teks-sekunder">
                      <Clock className="w-4 h-4 text-brand-green" />
                      <span>Sisa: {activeChapter.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Main reading sheet */}
                <div className="bg-white border border-cream-soft rounded-3xl p-6 md:p-10 shadow-xs relative">
                  
                  {/* Subtle subsection tabs atop the box */}
                  <div className="flex items-center space-x-2 overflow-x-auto border-b border-cream-soft/40 pb-3 mb-6 scrollbar-none">
                    {activeChapter.subsections.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubSection(sub.id)}
                        className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                          activeSubSection === sub.id
                            ? 'bg-cream-soft text-teks-utama shadow-3xs'
                            : 'text-teks-sekunder hover:text-teks-utama'
                        }`}
                      >
                        {sub.title.split('. ')[0]}. {sub.title.split('. ')[1] || sub.title}
                      </button>
                    ))}
                  </div>

                  {/* Render active subsection paragraphs content */}
                  {activeSubSecObj && (
                    <div className="space-y-5 text-left typography-academic">
                      <h3 className="text-sm font-heading font-extrabold text-teks-utama border-b border-cream-soft/30 pb-2 mb-4">
                        {activeSubSecObj.title}
                      </h3>
                      
                      {activeSubSecObj.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx} className="font-body text-teks-utama leading-[1.8] text-justify text-xs md:text-sm">
                          {pText}
                        </p>
                      ))}

                      {/* --- INJECT INTERACTIVE WIDGETS CONTEXTUALLY BASED ON ACTIVE BAB --- */}
                      
                      {/* Bab 2 widgets */}
                      {activeTab === 'bab2' && activeSubSection === 'b2s1' && (
                        <InteractiveComparisonTable />
                      )}
                      {activeTab === 'bab2' && activeSubSection === 'b2s2' && (
                        <TeacherRolesWidget />
                      )}
                      {activeTab === 'bab2' && activeSubSection === 'b2s3' && (
                        <div className="my-8 p-5 bg-amber-50/25 border border-amber-150/40 rounded-2xl">
                          <span className="text-[9px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Tabel 2.3 Atensi Guru</span>
                          <h4 className="text-xs font-heading font-extrabold text-teks-utama mt-2 mb-1">Implikasi Karakter Siswa Modern</h4>
                          <p className="text-[11px] text-teks-sekunder mb-4 text-justify">Pendidik abad-21 harus jeli merespon hasrat siswa visual, menyusun format debater asuransi gawai, serta mematangkan diferensiasi pengajaran.</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white border border-cream-soft shadow-3xs text-left">
                              <span className="text-[10px] text-brand-green font-bold">1. Rangsangan Interaktivitas Kognitif</span>
                              <p className="text-[11px] text-teks-sekunder mt-1 text-justify">Kurangi ceramah monolog; gantikan dengan lembar kerja analisis kasus, jajak pendapat kilat, dan kuis Kahoot.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-cream-soft shadow-3xs text-left">
                              <span className="text-[10px] text-brand-green font-bold">2. Manajemen Digital Seimbang</span>
                              <p className="text-[11px] text-teks-sekunder mt-1 text-justify">Rancang persetujuan kelas siber: kapan gawai ditutup (eyes-front) dan kapan gawai diaktifkan melakukan eksplorasi.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bab 3 widgets */}
                      {activeTab === 'bab3' && activeSubSection === 'b3s1' && (
                        <PillarsAndFourCWidget />
                      )}

                      {/* Bab 4 widgets */}
                      {activeTab === 'bab4' && activeSubSection === 'b4s2' && (
                        <ToolsGrid />
                      )}

                      {/* Bab 5 widgets */}
                      {activeTab === 'bab5' && activeSubSection === 'b5s1' && (
                        <LevelSwitcher />
                      )}

                      {/* Bab 6 widgets */}
                      {activeTab === 'bab6' && activeSubSection === 'b6s1' && (
                        <div className="my-8 bg-brand-green-light border border-brand-green/10 rounded-2xl p-6 text-left space-y-4">
                          <span className="text-[9px] uppercase tracking-wider font-bold text-brand-green bg-white border border-brand-green/20 px-2.5 py-0.5 rounded">Taksonomi Adaptif</span>
                          <h4 className="text-xs font-heading font-extrabold text-teks-utama">Studi Kasus Guru Penggerak Abad 21</h4>
                          <p className="text-xs text-teks-sekunder leading-normal text-justify">Pendidik inovatif dicirikan dari ketangkasan menggeser format ujian hafalan tradisional menjadi format pameran kreasi proyek digital kolaboratif. Ini memupuk binar kebanggaan berkreasi siswa seutuhnya.</p>
                        </div>
                      )}
                      {activeTab === 'bab6' && activeSubSection === 'b6s4' && (
                        <SelfReflectionQuiz />
                      )}

                    </div>
                  )}

                  {/* Complete Action Button bottom drawer inside Card */}
                  <div className="mt-8 pt-6 border-t border-cream-soft/40 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <button
                        onClick={() => toggleChapterComplete(activeTab)}
                        className={`px-4.5 py-2.2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                          completedChapters.includes(activeTab)
                            ? 'bg-brand-green/10 text-brand-green border border-brand-green/15'
                            : 'bg-white border border-cream-soft hover:bg-cream-principal/40 text-teks-sekunder'
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{completedChapters.includes(activeTab) ? "Selesai Dipelajari" : "Tandai Selesai Bab"}</span>
                      </button>
                    </div>

                    <span className="text-[10px] font-bold text-teks-sekunder uppercase tracking-wide">
                      Progress: {completedChapters.includes(activeTab) ? '100% Dibaca' : 'Sedang Dipelajari'}
                    </span>
                  </div>

                </div>

                {/* Footer chapter navigations */}
                <div className="pt-8 border-t border-cream-soft/70 flex items-center justify-between">
                  <button
                    onClick={navigatePrev}
                    className="px-5 py-2.5 rounded-lg border border-cream-soft hover:bg-cream-soft/30 text-teks-sekunder hover:text-teks-utama text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
                  >
                    &larr; Bab Sebelumnya
                  </button>

                  <button
                    onClick={navigateNext}
                    className="px-6 py-2.5 rounded-lg bg-brand-green hover:bg-brand-green/95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-3xs cursor-pointer hover:translate-y-[-1px]"
                  >
                    Bab Selanjutnya &rarr;
                  </button>
                </div>

              </div>
            )}

            {/* Screen 5: Posttest */}
            {activeTab === 'posttest' && (
              <div className="space-y-6">
                <PretestPosttest
                  type="posttest"
                  onNavigateNext={() => {
                    // Auto mark Posttest completed when hitting Next
                    if (!completedChapters.includes('posttest')) {
                      syncCompletedChapters([...completedChapters, 'posttest']);
                    }
                    navigateNext();
                  }}
                  onNavigatePrev={navigatePrev}
                />
                
                {/* Manual Completion Switch box for Posttest */}
                <div className="p-4 bg-white border border-cream-soft rounded-2xl flex items-center justify-between shadow-3xs">
                  <div className="text-left">
                    <p className="text-xs font-heading font-bold text-teks-utama">Status Pengerjaan Posttest</p>
                    <p className="text-[10px] text-teks-sekunder">Sudahkah Anda tuntas memindai QR dan mengerjakannya?</p>
                  </div>
                  <button
                    onClick={() => {
                      const exists = completedChapters.includes('posttest');
                      let updated: string[];
                      if (exists) {
                        updated = completedChapters.filter(id => id !== 'posttest');
                      } else {
                        updated = [...completedChapters, 'posttest'];
                      }
                      syncCompletedChapters(updated);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 transition-colors cursor-pointer ${
                      completedChapters.includes('posttest')
                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                        : 'bg-cream-soft text-teks-sekunder border border-transparent'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{completedChapters.includes('posttest') ? "Sudah Diikuti" : "Tandai Diikuti"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Screen 6: Kesimpulan & Rekomendasi */}
            {activeTab === 'kesimpulan' && (
              <KesimpulanRekomendasi
                onNavigateNext={navigateNext}
                onNavigatePrev={navigatePrev}
              />
            )}

            {/* Screen 7: Daftar Pustaka */}
            {activeTab === 'pustaka' && (
              <DaftarPustaka
                onNavigateNext={navigateNext}
                onNavigatePrev={navigatePrev}
              />
            )}

            {/* Screen 8: Profil Pengembang */}
            {activeTab === 'profil' && (
              <ProfilPengembang
                onBackToHome={backToHome}
                onNavigatePrev={navigatePrev}
              />
            )}

          </div>

        </div>

      </main>

      {/* Floating Scroll to Top as requested */}
      {isScrollToTopVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-teks-utama hover:bg-brand-green text-white shadow-xl transition-all hover:scale-105 active:scale-95 z-40 cursor-pointer"
          title="Kembali ke Atas"
          id="scroll-to-top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.2]" />
        </button>
      )}

    </div>
  );
}
