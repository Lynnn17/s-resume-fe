import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { getProfile } from "../../services/api";

export default function Footer() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch((err) => console.error("Footer profile load error:", err));
  }, []);

  return (
    <footer className="py-8 bg-[#faf9f7] border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} {profile?.name || "Syava"}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
