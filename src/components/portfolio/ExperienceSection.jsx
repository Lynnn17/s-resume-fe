import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import DecorativeDiamond from '../common/DecorativeDiamond';
import { getExperiences } from '../../services/api';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function ExperienceSection() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperiences()
      .then((data) => {
        // Sort by id or start_date if needed. The API should handle it, but fallback is fine.
        setTimeline(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load experiences:", err);
        setTimeline([]);
        setLoading(false);
      });
  }, []);

  const formatPeriod = (start, end, isCurrent) => {
    const getYear = (dateStr) => {
      if (!dateStr) return '';
      const parts = dateStr.split('-');
      return parts[0];
    };
    const startYear = getYear(start);
    if (isCurrent) return `${startYear} — Sekarang`;
    const endYear = getYear(end);
    return `${startYear} — ${endYear}`;
  };

  return (
    <section id="experience" className="py-28 bg-gradient-to-t from-[#FCF7F6] via-[#FDF3F1] to-[#F1DADB] relative overflow-hidden">
      
      {/* Ambience & SVGs */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilterExp">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterExp)"/>
        </svg>
      </div>
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#EFC8C2]/20 to-transparent rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2" />
      
      {/* Unique SVG Winding Timeline Path */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[600px] pointer-events-none opacity-20 transform -rotate-6">
        <svg viewBox="0 0 400 600" className="w-full h-full text-[#bd9585]">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 100,0 C 200,100 0,200 100,300 C 200,400 0,500 100,600" strokeDasharray="4 6" />
            <path d="M 120,0 C 220,100 20,200 120,300 C 220,400 20,500 120,600" opacity="0.5" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Decorative Diamonds */}
      <DecorativeDiamond type={2} className="top-[20%] left-[10%] w-20 h-20" yRange={15} rotateRange={15} delay={0.5} />
      <DecorativeDiamond type={1} className="top-[60%] right-[10%] w-16 h-16" yRange={20} rotateRange={-10} delay={1.5} />
      <DecorativeDiamond type={3} className="bottom-[10%] left-[15%] w-12 h-12" yRange={10} rotateRange={20} delay={1} />
      
      {/* Extra Small Diamonds (Rame) */}
      <DecorativeDiamond type={1} className="top-[45%] right-[20%] w-8 h-8" yRange={10} rotateRange={30} delay={0.8} />
      <DecorativeDiamond type={2} className="bottom-[25%] left-[5%] w-6 h-6" yRange={8} rotateRange={-20} delay={1.2} />
      <DecorativeDiamond type={3} className="top-[10%] left-[30%] w-7 h-7" yRange={12} rotateRange={-15} delay={0.3} />
      <DecorativeDiamond type={2} className="bottom-[45%] left-[25%] w-9 h-9" yRange={14} rotateRange={25} delay={1.7} />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-rose-300 mb-3 font-medium">Perjalanan</p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-800">
            Pengalaman & <span className="font-semibold italic">Pendidikan</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-stone-200 via-rose-200 to-purple-200" />

          <div className="space-y-8">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="relative pl-14">
                  <div className="absolute left-0 top-1 w-[45px] flex justify-center">
                    <div className="w-10 h-10 rounded-xl bg-stone-200 animate-pulse"></div>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-stone-100 h-28 animate-pulse"></div>
                </div>
              ))
            ) : timeline.length > 0 ? (
              timeline.map((item, i) => (
                <motion.div key={item.id || i} variants={fadeUp} custom={i} className="relative pl-14">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-[45px] flex justify-center">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-white/80 ${
                      item.type === 'work'
                        ? 'bg-gradient-to-br from-[#EFC8C2] to-[#EAD0CC]'
                        : 'bg-gradient-to-br from-[#D1A6A0] to-[#B97A70]'
                    }`}>
                      {item.type === 'work' ? (
                        <Briefcase size={16} className="text-[#6B3F38]" />
                      ) : (
                        <GraduationCap size={16} className="text-[#FFF5F3]" />
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md hover:shadow-stone-100/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-stone-800">{item.title}</h3>
                      <span className="text-[11px] px-3 py-1 rounded-full bg-stone-50 text-stone-400 font-medium">
                        {formatPeriod(item.start_date, item.end_date, item.is_current)}
                      </span>
                    </div>
                    <p className="text-sm text-rose-400 font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center text-stone-500 py-10">Belum ada pengalaman tercatat.</div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}