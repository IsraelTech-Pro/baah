import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1E3A]/80 backdrop-blur-lg shadow-lg border-b-2 border-[#FFD700]/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo/Shield */}
        <Link href="/" className="flex items-center gap-1 sm:gap-2 min-w-fit">
          <svg width="32" height="38" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4 Q36 12 33 32 Q30 44 20 44 Q10 44 7 32 Q4 12 20 4 Z" fill="#0A1E3A" stroke="#FFD700" strokeWidth="2"/>
            <ellipse cx="20" cy="18" rx="7" ry="3.5" fill="#FFD700"/>
            <polygon points="20,7 21.5,12 26.5,12 22.5,15 24,20 20,17 16,20 17.5,15 13.5,12 18.5,12" fill="#000"/>
          </svg>
          <span className="font-bold text-[#FFD700] text-base sm:text-lg tracking-wider">Richmond</span>
        </Link>
        {/* Nav Links: Always Visible */}
        <div className="flex-1 flex items-center justify-center overflow-x-auto whitespace-nowrap scrollbar-none hide-scrollbar min-w-0">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-semibold px-2 py-1 text-sm sm:text-base md:text-lg transition-colors duration-200 whitespace-nowrap ${router.pathname === link.href ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'}`}
            >
              {link.name}
              {router.pathname === link.href && (
                <motion.span
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFD700] rounded"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ opacity: 0.7 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
