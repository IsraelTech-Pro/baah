import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0A1E3A] overflow-hidden py-10 px-4">
      {/* Subtle Digital Overlay (SVG circuits) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Circuit lines */}
          <g stroke="#FFD700" strokeWidth="1.5" opacity="0.10">
            <path d="M 200 100 Q 400 300 600 200 T 1200 600" />
            <path d="M 300 700 Q 700 500 1100 750" />
            <path d="M 100 400 Q 720 400 1340 400" />
          </g>
          {/* Data waves */}
          <g stroke="#FFFFFF" strokeWidth="1.5" opacity="0.08">
            <path d="M 0 600 Q 360 500 720 600 T 1440 600" />
          </g>
        </svg>
      </div>
      {/* Left: Shield/Emblem & Text */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center max-w-xl w-full md:pl-12">
        {/* Ghana Police Badge Image - Large, Glowing, Visible */}
        <div className="mb-10 flex justify-center">
          <img
            src="/ghana-police-badge.png"
            alt="Ghana Police Service badge"
            className="w-48 h-auto md:w-64 object-contain drop-shadow-[0_0_32px_#FFD700cc]"
            style={{ filter: 'drop-shadow(0 0 32px #FFD700cc)' }}
            draggable={false}
          />
        </div>
        {/* Name, Title, Motto, Contact */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Baah Gyan Richmond</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#FFD700] mb-4">Police Officer – Defence Criminal Attack Force & Network Engineer</h2>
        <p className="italic text-white mb-6 text-lg">Service With Integrity</p>
        <div className="text-white text-sm mb-8 space-y-1">
          <div><span>Accra, Ghana</span></div>
          <div><span>0247171480</span></div>
          <div><span>chrisbaah25@gmail.com</span></div>
        </div>
      </div>
      {/* Right: Figure and Network Overlay */}
      <div className="relative flex-1 flex items-center justify-center w-full max-w-xl z-10">
        {/* Figure Image */}
        <img
          src="/profile.PNg"
          alt="Baah Gyan Richmond portrait"
          className="w-full max-w-xs md:max-w-md h-auto object-contain relative z-10"
          style={{ background: 'none', border: 'none', boxShadow: 'none' }}
          draggable={false}
        />
        {/* Glowing Network Infrastructure (SVG) */}
        <svg width="340" height="160" viewBox="0 0 340 160" fill="none" className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 z-0 pointer-events-none" style={{filter:'drop-shadow(0 0 18px #FFD70088)'}}>
          {/* Server racks */}
          <rect x="30" y="90" width="30" height="50" rx="4" fill="#222E44" stroke="#FFD700" strokeWidth="2"/>
          <rect x="70" y="100" width="30" height="40" rx="4" fill="#222E44" stroke="#FFD700" strokeWidth="2"/>
          <rect x="110" y="110" width="30" height="30" rx="4" fill="#222E44" stroke="#FFD700" strokeWidth="2"/>
          {/* Fiber optic lines */}
          <path d="M60 90 Q80 70 130 120 Q180 170 300 120" stroke="#FFD700" strokeWidth="3" fill="none"/>
          <path d="M90 100 Q140 80 200 130 Q250 170 320 100" stroke="#00CFFF" strokeWidth="2" fill="none" opacity="0.7"/>
          {/* Glowing nodes */}
          <circle cx="130" cy="120" r="7" fill="#FFD700"/>
          <circle cx="200" cy="130" r="6" fill="#00CFFF"/>
        </svg>
      </div>
    </section>
    </>
  );
}
