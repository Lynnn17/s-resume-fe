import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import DecorativeDiamond from "../common/DecorativeDiamond";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getProfile } from "../../services/api";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ContactSection profile load error:", err);
        setLoading(false);
      });
  }, []);

  const socials = [
    { icon: Github, href: profile?.social_github || "#", label: "GitHub" },
    {
      icon: Linkedin,
      href: profile?.social_linkedin || "#",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Mohon lengkapi semua field.");
      return;
    }

    const recipient = profile?.email || "hello@syava.dev";
    const subject = encodeURIComponent(`Pesan Portfolio dari ${form.name}`);
    const body = encodeURIComponent(
      `Halo,\n\n${form.message}\n\n---\nDari: ${form.name}\nEmail: ${form.email}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Membuka Gmail di tab baru
    window.open(gmailUrl, "_blank");

    toast.success("Membuka Gmail untuk mengirim pesan...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-t from-[#FCF7F6] to-[#F1DADB] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#DCA8A1]/30 to-transparent rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-[#F8EAE8]/50 to-transparent rounded-full blur-[40px] pointer-events-none" />

      {/* Unique SVG Concentric Ripples */}
      <div className="absolute bottom-[2%] left-[-5%] w-[400px] h-[400px] pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#bd9585]">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            {[...Array(3)].map((_, i) => (
              <circle
                key={i}
                cx="0"
                cy="200"
                r={40 + i * 50}
                strokeDasharray={i % 2 === 0 ? "5 5" : "none"}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Decorative Diamonds */}
      <DecorativeDiamond
        type={1}
        className="top-[10%] left-[8%]"
        yRange={12}
        rotateRange={15}
      />
      <DecorativeDiamond
        type={2}
        className="bottom-[20%] right-[5%]"
        yRange={-18}
        rotateRange={-20}
        delay={1.5}
      />
      <DecorativeDiamond
        type={3}
        className="top-[40%] right-[12%] w-10 h-10"
        yRange={10}
        rotateRange={10}
        delay={0.5}
      />

      {/* Extra Small Diamonds (Rame) */}
      <DecorativeDiamond
        type={2}
        className="top-[25%] left-[12%] w-6 h-6"
        yRange={8}
        rotateRange={25}
        delay={1.1}
      />
      <DecorativeDiamond
        type={1}
        className="bottom-[15%] left-[25%] w-8 h-8"
        yRange={14}
        rotateRange={-15}
        delay={0.7}
      />
      <DecorativeDiamond
        type={3}
        className="top-[15%] right-[25%] w-7 h-7"
        yRange={10}
        rotateRange={-30}
        delay={0.2}
      />
      <DecorativeDiamond
        type={2}
        className="bottom-[35%] right-[10%] w-9 h-9"
        yRange={12}
        rotateRange={20}
        delay={1.8}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-rose-300 mb-3 font-medium">
            Kontak
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-800">
            Ayo <span className="font-semibold italic">Terhubung</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk
            menghubungi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-stone-400 mb-1.5 block font-medium uppercase tracking-wider">
                  Nama
                </label>
                <Input
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border-stone-200 bg-stone-50/50 focus:bg-white h-12 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-stone-400 mb-1.5 block font-medium uppercase tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border-stone-200 bg-stone-50/50 focus:bg-white h-12 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-stone-400 mb-1.5 block font-medium uppercase tracking-wider">
                Pesan
              </label>
              <Textarea
                placeholder="Ceritakan tentang project Anda..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl border-stone-200 bg-stone-50/50 focus:bg-white min-h-[140px] text-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="rounded-full px-8 h-12 bg-gradient-to-r from-[#8E4D44] to-[#B97A70] hover:from-[#6B3F38] hover:to-[#8E4D44] text-[#FFF5F3] shadow-lg shadow-[#8E4D44]/30 transition-all border-none"
            >
              {sending ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              ) : (
                <Send size={14} className="mr-2" />
              )}
              {sending ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white/95 border border-stone-100 shadow-[0_4px_20px_rgba(150,90,90,0.08)] rounded-3xl p-7">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/70 shadow-sm mt-0.5">
                    <Mail size={15} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 mb-0.5 uppercase tracking-wider font-medium">
                      Email
                    </p>
                    {loading ? (
                      <div className="h-4 w-32 bg-stone-200 animate-pulse rounded"></div>
                    ) : (
                      <p className="text-sm text-stone-700">
                        {profile?.email || "hello@syava.dev"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/70 shadow-sm mt-0.5">
                    <MapPin size={15} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 mb-0.5 uppercase tracking-wider font-medium">
                      Lokasi
                    </p>
                    <p className="text-sm text-stone-700">
                      {import.meta.env.VITE_LOCATION || "Pasuruan, Indonesia"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100/80">
                <p className="text-xs text-stone-400 mb-3 uppercase tracking-wider font-medium">
                  Social Media
                </p>
                <div className="flex gap-2">
                  {loading
                    ? [...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-stone-100 rounded-xl animate-pulse"
                        ></div>
                      ))
                    : socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2.5 rounded-xl bg-white/70 text-stone-400 hover:text-stone-700 hover:bg-white shadow-sm border border-stone-100 transition-all duration-300 hover:scale-105 ${s.href === "#" ? "opacity-30 cursor-not-allowed" : ""}`}
                          title={s.label}
                        >
                          <s.icon size={16} />
                        </a>
                      ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100/80">
                <a
                  href={import.meta.env.VITE_CV_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-stone-200 text-sm text-stone-600 hover:bg-stone-50 hover:text-stone-800 transition-all duration-300 shadow-sm"
                >
                  <Download size={14} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
