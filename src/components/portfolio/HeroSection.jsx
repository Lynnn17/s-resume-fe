import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const PROFILE_IMG =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b3ae109a30067cbfeb7b15/25117c15a_generated_3400bd6f.png";

import DecorativeDiamond from "../common/DecorativeDiamond";
import { getProfile, getImageUrl } from "../../services/api";

export default function HeroSection() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load profile:", err);
        setLoading(false);
      });
  }, []);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const avatarUrl = profile?.avatar_url
    ? getImageUrl(profile.avatar_url)
    : PROFILE_IMG;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FCF7F6] via-[#F8EAE8] to-[#F1DADB]"
    >
      {/* Texture: Grainy Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Background Ambience & Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#EAD0CC]/40 to-transparent rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-[#EAD0CC]/30 to-transparent rounded-full blur-[100px] opacity-40" />

        {/* Abstract 3D Flowing Silk Waves */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none">
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full object-cover transform scale-100"
          >
            <defs>
              <linearGradient id="silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C07C88" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#E0BFB8" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#F3E7E9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D5aba5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FCF7F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-200,800 C400,1000 800,200 1600,600 L1600,-200 L-200,-200 Z"
              fill="url(#silk1)"
              className="blur-[2px]"
            />
            <path
              d="M-200,700 C600,600 900,100 1600,400 L1600,-200 L-200,-200 Z"
              fill="url(#silk2)"
              className="blur-[8px]"
            />
          </svg>
        </div>

        {/* Wavy Dotted Lines Top Left */}
        <div className="absolute top-[-13%] left-[-5%] w-[30%] h-[500px] pointer-events-none opacity-60 z-0">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <g
              fill="none"
              stroke="#bd9585"
              strokeDasharray="3 6"
              strokeLinecap="round"
            >
              {[...Array(6)].map((_, i) => (
                <path
                  key={`wave1-${i}`}
                  d={`M -50,${150 + i * 20} C 200,${-50 + i * 15} 400,${250 + i * 30} 900,${50 + i * 40}`}
                  strokeWidth={2 + i * 0.3}
                  opacity={0.4 + i * 0.1}
                />
              ))}
              {[...Array(4)].map((_, i) => (
                <path
                  key={`wave2-${i}`}
                  d={`M -50,${200 + i * 25} C 250,${50 + i * 20} 450,${300 + i * 35} 900,${100 + i * 45}`}
                  strokeWidth={2.5}
                  opacity={0.3 + i * 0.05}
                  strokeDasharray="2 8"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* 3D Elements: Floating Metallic Spheres */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[8%] w-10 h-10 rounded-full shadow-[0_10px_20px_rgba(180,100,100,0.3)] bg-gradient-to-tr from-[#9c635e] via-[#dfaca5] to-[#fcf5f4] opacity-90 blur-[0.5px] before:absolute before:inset-[2px] before:rounded-full before:bg-gradient-to-b before:from-white/50 before:to-transparent z-0"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[65%] left-[45%] w-6 h-6 rounded-full shadow-[0_5px_15px_rgba(180,100,100,0.4)] bg-gradient-to-tr from-[#69423E] via-[#BA766E] to-[#F2E0DD] opacity-80 z-0"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[15%] w-14 h-14 rounded-full shadow-[0_15px_30px_rgba(180,100,100,0.25)] bg-gradient-to-bl from-[#C18C83] via-[#E2BAB5] to-[#F9EBE9] opacity-90 blur-[1px] z-0"
        />

        {/* Large Ornaments */}
        <DecorativeDiamond
          type={2}
          className="bottom-[5%] left-[5%] w-24 h-24 lg:w-32 lg:h-32"
          yRange={20}
          rotateRange={15}
        />
        <DecorativeDiamond
          type={1}
          className="top-[10%] left-[45%] w-16 h-16 lg:w-24 lg:h-24"
          yRange={15}
          rotateRange={10}
        />

        {/* Tiny Scattered Diamonds */}
        <DecorativeDiamond
          type={3}
          className="bottom-[25%] left-[15%] w-10 h-10"
          yRange={10}
          rotateRange={-15}
        />
        <DecorativeDiamond
          type={2}
          className="top-[25%] left-[55%] w-8 h-8"
          yRange={12}
          rotateRange={20}
        />
        <DecorativeDiamond
          type={3}
          className="bottom-[15%] right-[12%] w-14 h-14"
          yRange={18}
          rotateRange={-25}
        />
        {/* Extra Small Diamonds (Rame request) */}
        <DecorativeDiamond
          type={1}
          className="bottom-[45%] right-[25%] w-8 h-8"
          yRange={15}
          rotateRange={-35}
          delay={1.5}
        />
        <DecorativeDiamond
          type={3}
          className="top-[10%] right-[5%] w-12 h-12"
          yRange={12}
          rotateRange={25}
          delay={1}
        />
        <DecorativeDiamond
          type={2}
          className="bottom-[5%] left-[40%] w-7 h-7"
          yRange={8}
          rotateRange={45}
          delay={2}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 relative z-20"
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] font-medium text-[#8F746F] mb-4 uppercase drop-shadow-sm h-5">
              {loading ? (
                <span className="inline-block w-48 h-4 bg-[#8F746F]/20 animate-pulse rounded"></span>
              ) : (
                profile?.role || "Creative Developer & Designer"
              )}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#4A3D3B] leading-[1.1] mb-6 drop-shadow-md">
              Halo, saya{" "}
              <span className="font-semibold bg-gradient-to-r from-[#B97A70] via-[#D1A6A0] to-[#E5C1BA] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(209,166,160,0.4)]">
                {loading ? "..." : profile?.name || "Syava"}
              </span>
            </h1>
            <div className="text-[#6B5A57] text-base sm:text-lg leading-relaxed max-w-md mb-8 min-h-[80px]">
              {loading ? (
                <div className="space-y-2">
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-4/6 animate-pulse"></div>
                </div>
              ) : (
                <p>
                  {profile?.bio || (
                    <>
                      Saya membuat pengalaman digital yang{" "}
                      <span className="text-[#B97A70] italic">indah</span> dan
                      bermakna. Menggabungkan{" "}
                      <span className="text-[#B97A70] italic">desain kreatif</span>{" "}
                      dengan teknologi modern.
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-[#2B2322] to-[#4A3D3B] text-[#F8F3F1] text-sm sm:text-base rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(185,122,112,0.4)] border border-[#5A4D4B]"
              >
                Lihat Portfolio
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-[#D1A6A0]/60 text-[#6B5A57] text-sm sm:text-base rounded-full hover:bg-white/30 hover:shadow-[0_0_20px_rgba(209,166,160,0.3)] transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
              >
                Tentang Saya
              </button>
            </div>
          </motion.div>

          {/* Epic Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute hidden lg:flex flex-col items-center gap-2 text-[#A88B87] left-[-40px] top-1/2 -translate-y-1/2 z-30"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={14} />
              </motion.div>
            </motion.div>

            <div className="relative w-full max-w-[450px] lg:max-w-[500px] aspect-square flex items-center justify-center">
              {/* Massive Metallic Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9B6258] via-[#DAA8A1] to-[#eed9d6] rounded-[40%_60%_50%_50%/50%_50%_60%_40%] transform rotate-12 scale-[1.2] opacity-50 shadow-[inset_10px_20px_50px_rgba(255,255,255,0.5),_0_30px_60px_-10px_rgba(155,98,88,0.3)] blur-[2px]" />

              {/* Complex Spirograph / Geometric Flower */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full scale-[1.3] text-[#bd9585] opacity-25 pointer-events-none transform -rotate-12"
              >
                <g fill="none" stroke="currentColor" strokeWidth="0.8">
                  {[...Array(8)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx="100"
                      cy="100"
                      rx="30"
                      ry="80"
                      transform={`rotate(${i * 45} 100 100)`}
                    />
                  ))}
                  <circle cx="100" cy="100" r="75" />
                </g>
              </svg>

              {/* Glassmorphism Picture Frame */}
              <div className="relative z-10 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-[2rem] p-3 sm:p-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(150,90,90,0.6),_inset_0_0_30px_rgba(255,255,255,0.7)] group">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-[inset_0_4px_20px_rgba(100,60,60,0.3)] bg-gradient-to-br from-[#FDF9F8] to-[#EAD0CC] relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={avatarUrl}
                      alt="Profile"
                      className={`w-[110%] h-[110%] object-cover object-center mix-blend-multiply transition-all duration-700 group-hover:scale-[1.15] ${loading ? 'opacity-0' : 'opacity-90'}`}
                      onLoad={(e) => e.target.classList.remove('opacity-0')}
                    />
                  {/* Subtle overlay for integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#B97A70]/30 to-transparent mix-blend-overlay" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_15px_30px_rgba(140,90,90,0.3),_inset_0_2px_5px_rgba(255,255,255,0.8)] border border-white/50 whitespace-nowrap"
                >
                  <p className="text-xs sm:text-sm font-semibold text-[#6B5A57] flex items-center gap-2">
                    <span className={`text-lg leading-none filter drop-shadow-[0_0_5px_rgba(185,122,112,0.8)] ${profile?.is_available === false ? "text-stone-400" : "text-[#B97A70]"}`}>
                      ✦
                    </span>{" "}
                    {loading ? "..." : (profile?.is_available !== false ? "Tersedia untuk project" : "Tidak tersedia")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
