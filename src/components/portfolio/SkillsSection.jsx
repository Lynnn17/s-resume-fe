import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Wrench, Users, Server, Smartphone, Laptop } from 'lucide-react';
import DecorativeDiamond from '../common/DecorativeDiamond';
import { getSkills } from '../../services/api';

const iconMap = {
  code: Code,
  palette: Palette,
  wrench: Wrench,
  users: Users,
  server: Server,
  smartphone: Smartphone,
  laptop: Laptop,
};

const colorMap = {
  blue: { bg: 'from-sky-50 to-blue-50', accent: 'bg-sky-400' },
  pink: { bg: 'from-rose-50 to-pink-50', accent: 'bg-rose-400' },
  orange: { bg: 'from-amber-50 to-orange-50', accent: 'bg-amber-400' },
  purple: { bg: 'from-purple-50 to-violet-50', accent: 'bg-purple-400' },
  emerald: { bg: 'from-emerald-50 to-green-50', accent: 'bg-emerald-400' },
  slate: { bg: 'from-slate-50 to-gray-50', accent: 'bg-slate-400' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function SkillsSection() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then((data) => {
        setSkillCategories(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load skills:", err);
        setSkillCategories([]);
        setLoading(false);
      });
  }, []);
  return (
    <section id="skills" className="py-28 bg-gradient-to-tr from-[#FCF7F6] to-[#F1DADB] relative overflow-hidden">
      {/* Rose Gold Curves, Blur blobs, and Diamonds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden object-cover opacity-70">
        {/* Bottom Left Curve */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute -bottom-10 -left-10 w-[40%] h-[300px] opacity-30 transform rotate-[15deg]">
          <path d="M0,0 C30,60 70,80 100,100 L0,100 Z" fill="url(#roseGoldMetallicSkills)" className="drop-shadow-2xl blur-[1px]" />
          <path d="M0,0 C30,60 70,80 100,100" fill="none" stroke="#bd9585" strokeWidth="1.5" />
        </svg>

        {/* Unique SVG Flowing Wave */}
        <svg viewBox="0 0 400 200" className="absolute top-[10%] right-[-10%] w-[600px] h-[300px] text-[#bd9585] opacity-20 transform -rotate-6">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            {[...Array(5)].map((_, i) => (
              <path key={i} d={`M 0,${50 + i*15} C 100,${10 + i*5} 200,${90 + i*25} 400,${50 + i*15}`} />
            ))}
          </g>
        </svg>

        <svg className="hidden">
          <defs>
            <linearGradient id="roseGoldMetallicSkills" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E7E9" />
              <stop offset="50%" stopColor="#E0BFB8" />    
              <stop offset="100%" stopColor="#C07C88" />   
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full border-[1.5px] border-[#E0BFB8]/30 opacity-60 transform rotate-12 scale-x-150 blur-[1px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-[#E0BFB8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#C07C88]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Decorative Diamonds */}
        <DecorativeDiamond type={1} className="top-[5%] right-[10%] w-24 h-24" yRange={15} rotateRange={-10} delay={0.2} />
        <DecorativeDiamond type={2} className="top-[45%] left-[2%] w-16 h-16" yRange={-12} rotateRange={15} delay={1} />
        <DecorativeDiamond type={3} className="bottom-[15%] right-[8%] w-14 h-14" yRange={18} rotateRange={20} delay={1.5} />
        <DecorativeDiamond type={2} className="bottom-[8%] left-[45%] w-20 h-20" yRange={-20} rotateRange={-12} delay={0.8} />

        {/* Extra Small Diamonds (Rame) */}
        <DecorativeDiamond type={3} className="top-[15%] left-[15%] w-8 h-8" yRange={14} rotateRange={25} delay={0.4} />
        <DecorativeDiamond type={1} className="bottom-[35%] left-[10%] w-6 h-6" yRange={8} rotateRange={-15} delay={1.1} />
        <DecorativeDiamond type={2} className="top-[35%] right-[12%] w-10 h-10" yRange={12} rotateRange={-30} delay={1.7} />
        <DecorativeDiamond type={3} className="bottom-[45%] right-[25%] w-7 h-7" yRange={10} rotateRange={20} delay={0.9} />
        <DecorativeDiamond type={1} className="top-[8%] left-[40%] w-9 h-9" yRange={16} rotateRange={15} delay={0.3} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 cursor-default relative z-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C07C88] mb-3 font-medium">Keahlian</p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-800">
            Yang Saya <span className="font-semibold italic">Kuasai</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-white/40 border border-white/60 p-7 h-[250px] animate-pulse"></div>
            ))
          ) : skillCategories.length > 0 ? (
            skillCategories.map((cat, catIdx) => {
              const Icon = iconMap[cat.icon_name] || Code;
              const theme = colorMap[cat.color_theme] || colorMap.slate;

              return (
                <motion.div
                  key={cat.id || cat.name}
                  variants={fadeUp}
                  custom={catIdx}
                  className={`rounded-3xl bg-gradient-to-br ${theme.bg} border border-white/60 p-7 hover:shadow-lg hover:shadow-stone-100/40 transition-all duration-500`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/70 shadow-sm">
                      <Icon size={18} className="text-stone-600" />
                    </div>
                    <h3 className="text-base font-semibold text-stone-700">{cat.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {(cat.skills || []).map((skill) => (
                      <div key={skill.id || skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm text-stone-600">{skill.name}</span>
                          <span className="text-xs text-stone-400 font-medium">{skill.proficiency}%</span>
                        </div>
                        <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + catIdx * 0.1 }}
                            className={`h-full rounded-full ${theme.accent}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-10 text-stone-500">Belum ada keahlian yang ditambahkan.</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}