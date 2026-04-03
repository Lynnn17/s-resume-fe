import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import DecorativeDiamond from "../common/DecorativeDiamond";
import { getProjects, getImageUrl } from "../../services/api";

export default function PortfolioSection() {
  const [active, setActive] = useState("Semua");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects:", err);
        setProjects([]);
        setLoading(false);
      });
  }, []);

  const categories = [
    "Semua",
    ...new Set(
      (Array.isArray(projects) ? projects : [])
        .map((p) => p.category)
        .filter(Boolean),
    ),
  ];
  const filtered =
    active === "Semua"
      ? Array.isArray(projects)
        ? projects
        : []
      : (Array.isArray(projects) ? projects : []).filter(
          (p) => p.category === active,
        );

  return (
    <section
      id="portfolio"
      className="py-28 bg-gradient-to-bl from-[#FCF7F6] via-[#F8EAE8] to-[#F1DADB] relative overflow-hidden"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <filter id="noiseFilter3">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter3)" />
        </svg>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#EFC8C2]/30 to-transparent rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#EAD0CC]/40 to-transparent rounded-full blur-[120px] pointer-events-none opacity-80 mix-blend-multiply" />

      {/* Unique SVG Path: Geometric Grid Wavy */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] pointer-events-none opacity-20 transform -rotate-12">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#bd9585]">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 4"
          >
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M -50,${20 * i} C 50,${40 * i} 150,-${10 * i} 250,${30 * i}`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Background Mandala/Geometric */}
      <div className="absolute top-[10%] left-[80%] w-[400px] h-[400px] pointer-events-none opacity-30 transform rotate-45">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#bd9585]">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            {[...Array(6)].map((_, i) => (
              <circle key={i} cx="100" cy="100" r={30 + i * 12} />
            ))}
            <circle
              cx="100"
              cy="100"
              r="105"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </g>
        </svg>
      </div>

      {/* Dynamic Flowing Lines Bottom Left */}
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] pointer-events-none opacity-25 transform rotate-[-15deg]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#bd9585]">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {[...Array(7)].map((_, i) => (
              <path
                key={i}
                d={`M -20,${180 - i * 15} C 60,${200 - i * 25} 120,${120 - i * 10} 220,${160 - i * 20}`}
                strokeDasharray={i % 2 === 0 ? "none" : "4 6"}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Scattered Decorative Diamonds */}
      <DecorativeDiamond
        type={1}
        className="top-[15%] left-[10%] w-16 h-16"
        yRange={12}
        rotateRange={15}
      />
      <DecorativeDiamond
        type={3}
        className="top-[30%] right-[5%] w-24 h-24"
        yRange={20}
        rotateRange={-10}
        delay={1.5}
      />
      <DecorativeDiamond
        type={2}
        className="bottom-[10%] left-[20%] w-20 h-20"
        yRange={-15}
        rotateRange={10}
        delay={0.5}
      />
      <DecorativeDiamond
        type={1}
        className="bottom-[20%] right-[15%] w-12 h-12"
        yRange={10}
        rotateRange={-20}
        delay={2}
      />

      {/* Extra Small Diamonds (Rame) */}
      <DecorativeDiamond
        type={2}
        className="top-[45%] left-[5%] w-8 h-8"
        yRange={8}
        rotateRange={30}
        delay={1}
      />
      <DecorativeDiamond
        type={1}
        className="top-[70%] left-[40%] w-6 h-6"
        yRange={12}
        rotateRange={-25}
        delay={0.3}
      />
      <DecorativeDiamond
        type={3}
        className="top-[20%] right-[25%] w-10 h-10"
        yRange={15}
        rotateRange={20}
        delay={0.8}
      />
      <DecorativeDiamond
        type={2}
        className="bottom-[35%] right-[2%] w-7 h-7"
        yRange={6}
        rotateRange={-15}
        delay={1.2}
      />
      <DecorativeDiamond
        type={1}
        className="bottom-[5%] left-[45%] w-9 h-9"
        yRange={18}
        rotateRange={10}
        delay={0.1}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8F746F] mb-4 font-medium drop-shadow-sm">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-[#4A3D3B] drop-shadow-sm">
            Karya{" "}
            <span className="font-semibold italic bg-gradient-to-r from-[#B97A70] to-[#D1A6A0] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(209,166,160,0.3)]">
              Terpilih
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {loading
            ? [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-24 bg-[#D1A6A0]/20 rounded-full animate-pulse"
                ></div>
              ))
            : categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-6 py-2.5 text-sm sm:text-base rounded-full transition-all duration-500 backdrop-blur-md border ${
                    active === cat
                      ? "bg-gradient-to-r from-[#2B2322] to-[#4A3D3B] text-[#F8F3F1] border-[#4A3D3B] shadow-[0_10px_20px_rgba(185,122,112,0.3)] scale-105"
                      : "bg-white/40 text-[#6B5A57] border-[#D1A6A0]/40 hover:bg-white/70 hover:shadow-[0_5px_15px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="h-[400px] bg-white/20 rounded-[2rem] animate-pulse"
                ></div>
              ))
            ) : filtered.length > 0 ? (
              filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="group cursor-pointer"
                  onClick={() =>
                    project.demo_url && window.open(project.demo_url, "_blank")
                  }
                >
                  <div className="relative rounded-[2rem] overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(150,90,90,0.15),_inset_0_0_20px_rgba(255,255,255,0.7)] hover:shadow-[0_30px_60px_-15px_rgba(185,122,112,0.3),_inset_0_0_20px_rgba(255,255,255,0.8)] hover:-translate-y-2 transition-all duration-500 p-3 sm:p-4">
                    {/* Image Frame */}
                    <div className="aspect-[4/3] rounded-[1.5rem]  overflow-hidden bg-gradient-to-br from-[#FDF9F8] to-[#EAD0CC] shadow-[inset_0_4px_20px_rgba(100,60,60,0.1)] relative">
                      <img
                        src={getImageUrl(project.image_url)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#B97A70]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-[#4A3D3B] group-hover:text-[#B97A70] transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.demo_url && (
                          <div className="p-2.5 rounded-full bg-white/60 group-hover:bg-gradient-to-r group-hover:from-[#2B2322] group-hover:to-[#4A3D3B] group-hover:text-[#F8F3F1] text-[#A88B87] shadow-sm transition-all duration-500 border border-white/40">
                            <ExternalLink
                              size={16}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </div>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-[#6B5A57] mb-6 leading-relaxed font-light">
                        {project.description || project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {(project.tools || []).map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full bg-white/50 text-[#8F746F] border border-[#D1A6A0]/30 shadow-[0_2px_5px_rgba(0,0,0,0.02)] backdrop-blur-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-20 text-[#6B5A57]">
                Belum ada project di kategori ini.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
