import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Code, Lightbulb, Heart, MapPin } from "lucide-react";

const interests = [
  {
    icon: Code,
    label: "Development",
    color:
      "bg-[#F8EAE8]/80 text-[#6B5A57] border border-[#D1A6A0]/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.8)]",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    color:
      "bg-gradient-to-r from-[#211B1A] to-[#3B302F] text-[#F8F3F1] border border-[#524442] shadow-[0_10px_20px_rgba(43,35,34,0.3)]",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    color:
      "bg-[#F8EAE8]/80 text-[#6B5A57] border border-[#D1A6A0]/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.8)]",
  },
  {
    icon: Heart,
    label: "Open Source",
    color:
      "bg-[#F8EAE8]/80 text-[#6B5A57] border border-[#D1A6A0]/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.8)]",
  },
];

import DecorativeDiamond from "../common/DecorativeDiamond";
import { getProfile } from "../../services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function AboutSection() {
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

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-[#FCF7F6] to-[#F1DADB] relative overflow-hidden"
    >
      {/* Texture Overlay: Brushed Metal */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          <filter id="noiseFilterAbout">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAbout)" />
        </svg>
      </div>

      {/* Subtle shape & glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-[#EAD0CC]/60 to-transparent rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#EFC8C2]/40 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      {/* Large Decorative Diamonds in Background */}
      <DecorativeDiamond
        type={1}
        className="top-[10%] left-[5%] w-32 h-32 lg:w-48 lg:h-48"
        yRange={25}
        rotateRange={15}
      />
      <DecorativeDiamond
        type={3}
        className="bottom-[5%] right-[5%] w-24 h-24 lg:w-32 lg:h-32"
        yRange={-20}
        rotateRange={-10}
        delay={1}
      />

      {/* Extra Small Diamonds (Rame) */}
      <DecorativeDiamond
        type={2}
        className="top-[25%] left-[25%] w-8 h-8"
        yRange={10}
        rotateRange={25}
        delay={0.5}
      />
      <DecorativeDiamond
        type={1}
        className="top-[15%] right-[20%] w-12 h-12"
        yRange={15}
        rotateRange={-15}
        delay={1.5}
      />
      <DecorativeDiamond
        type={3}
        className="bottom-[15%] left-[15%] w-10 h-10"
        yRange={12}
        rotateRange={20}
        delay={2}
      />
      <DecorativeDiamond
        type={2}
        className="bottom-[25%] right-[25%] w-6 h-6"
        yRange={8}
        rotateRange={-30}
        delay={0.8}
      />

      {/* Complex Spirograph Behind Stats Card */}
      <div
        className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] opacity-25 mix-blend-multiply pointer-events-none animate-spin-slow"
        style={{ animationDuration: "240s" }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-[#bd9585]">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            {[...Array(24)].map((_, i) => (
              <ellipse
                key={`ea-${i}`}
                cx="500"
                cy="500"
                rx="400"
                ry="120"
                transform={`rotate(${i * 15} 500 500)`}
              />
            ))}
            <circle cx="500" cy="500" r="350" strokeWidth="1.8" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-5 gap-12 md:gap-16 items-start"
        >
          {/* Left column */}
          <div className="md:col-span-3">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8F746F] mb-5 font-medium drop-shadow-sm flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#D1A6A0]"></span>
              Tentang Saya
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl font-light text-[#4A3D3B] mb-8 leading-[1.1] drop-shadow-md"
            >
              Membangun hal-hal{" "}
              <span className="font-bold bg-gradient-to-tr from-[#8E4D44] via-[#FCE9E6] to-[#A26057] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(218,168,161,0.6)] relative inline-block">
                indah
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 mix-blend-overlay animate-shimmer pointer-events-none"
                  style={{ backgroundSize: "200% 100%" }}
                />
              </span>{" "}
              di dunia digital
            </motion.h2>
            <motion.div variants={fadeUp} custom={2}>
              {loading ? (
                <div className="space-y-4 mb-10">
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-[#6B5A57]/20 rounded w-4/6 animate-pulse"></div>
                </div>
              ) : (
                <div className="text-[#6B5A57] text-base sm:text-lg leading-relaxed mb-6 font-light space-y-6">
                  {profile?.about_text ? (
                    profile.about_text
                      .split("\n")
                      .filter(Boolean)
                      .map((para, i) => <p key={i}>{para}</p>)
                  ) : (
                    <>
                      <p>
                        Saya adalah seorang creative developer dengan passion di
                        bidang desain dan teknologi. Selama lebih dari 5 tahun,
                        saya telah membantu berbagai brand dan startup untuk
                        mewujudkan visi digital mereka melalui website,
                        aplikasi, dan pengalaman interaktif yang berkesan.
                      </p>
                      <p>
                        Saya percaya bahwa{" "}
                        <span className="font-medium text-[#B97A70]">
                          desain yang baik adalah perpaduan antara estetika dan
                          fungsionalitas
                        </span>
                        . Setiap pixel memiliki tujuan, dan setiap interaksi
                        harus terasa natural dan menyenangkan.
                      </p>
                    </>
                  )}
                </div>
              )}
            </motion.div>

            {/* Interest badges */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-4"
            >
              {interests.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full ${item.color} text-sm font-medium transition-transform duration-500 hover:scale-105 backdrop-blur-md`}
                >
                  <item.icon size={16} />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Quick stats */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="md:col-span-2 relative group mt-8 md:mt-0"
          >
            {/* Soft backdrop glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8E4D44]/30 to-[#DCA8A1]/40 rounded-[3.2rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* 3D Metallic Rose Gold Frame Wrapper */}
            <div className="relative bg-gradient-to-br from-[#DCA8A1] via-[#B97A70] to-[#E8BDB4] p-[7px] rounded-[3.2rem] shadow-[0_30px_60px_-15px_rgba(142,77,68,0.4)] group-hover:-translate-y-2 transition-transform duration-700">
              {/* Inner Frosted Glass Card */}
              <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-[inset_0_0_40px_rgba(255,255,255,1)] bg-gradient-to-b from-[#FFF5F3]/90 to-[#FDF3F1]/80 backdrop-blur-2xl p-10 relative">
                {/* Central Soft Glow Burst */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/90 blur-[40px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  {/* Grid Lines (Cross) */}
                  <div className="absolute top-[48%] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#Cba29c]/50 to-transparent" />
                  <div className="absolute left-1/2 top-4 bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-[#Cba29c]/50 to-transparent" />

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-12 pb-10">
                    {[
                      {
                        number: import.meta.env.VITE_STATS_EXP || "2+",
                        label: "Tahun Pengalaman",
                      },
                      {
                        number: import.meta.env.VITE_STATS_PROJECTS || "15+",
                        label: "Project Selesai",
                      },
                      {
                        number: import.meta.env.VITE_STATS_CLIENTS || "10+",
                        label: "Klien Senang",
                      },
                    ].map((stat, i) => (
                      <div
                        key={stat.label}
                        className="text-center relative pt-2"
                      >
                        <p className="text-[2rem] sm:text-[2.5rem] font-normal text-[#5a4845] mb-1">
                          {stat.number}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-[#866a65] uppercase tracking-[0.1em] font-semibold">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 relative z-10">
                  <p className="text-[10px] text-[#A88B87] uppercase tracking-[0.2em] font-medium mb-3">
                    Lokasi
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-[#8E4D44]"
                      fill="#E5C9C4"
                    />
                    <p className="text-[15px] sm:text-base text-[#3D312F] font-semibold tracking-wide">
                      {import.meta.env.VITE_LOCATION || "Pasuruan, Indonesia"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Surrounding Decorative Diamonds around Stats */}
            <DecorativeDiamond
              type={2}
              className="-bottom-8 -left-10 w-20 h-20"
              yRange={15}
              rotateRange={12}
              delay={0.5}
            />
            <DecorativeDiamond
              type={1}
              className="-top-12 -right-6 w-16 h-16"
              yRange={-12}
              rotateRange={-8}
              delay={1.5}
            />
            <DecorativeDiamond
              type={3}
              className="top-1/3 -left-14 w-10 h-10"
              yRange={8}
              rotateRange={20}
              delay={0.2}
            />
            <DecorativeDiamond
              type={2}
              className="-bottom-2 -right-8 w-14 h-14"
              yRange={-10}
              rotateRange={-15}
              delay={1}
            />
            <DecorativeDiamond
              type={3}
              className="-top-4 left-6 w-12 h-12"
              yRange={10}
              rotateRange={15}
              delay={2}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
