import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    slug: 'police-network-overhaul',
    title: 'Police Station Network Overhaul',
    description: 'Upgrade and secure internal communications at a regional police station. Designed and deployed new LAN/WAN infrastructure, installed Cisco routers/switches/firewalls, and implemented secure VPN access.',
    result: 'Improved communication efficiency and ensured data confidentiality for sensitive police operations.',
    emoji: '🛡️',
  },
  {
    slug: 'cybercrime-toolkit',
    title: 'Cybercrime Awareness and Investigation Toolkit',
    description: 'Created guides and workflows for Wireshark, developed Python scripts for log analysis, and trained officers in phishing/fraud/evidence handling.',
    result: 'Enhanced digital investigation capacity across departments.',
    emoji: '💻',
  },
  {
    slug: 'wifi-optimization',
    title: 'Wi-Fi Network Optimization for Government Office',
    description: 'Installed and configured Ubiquiti UniFi, analyzed usage, optimized AP placement, and secured the network.',
    result: 'Reduced downtime and improved user satisfaction.',
    emoji: '📶',
  },
  {
    slug: 'incident-tracker',
    title: 'Community Policing Mobile App (Prototype)',
    description: 'Designed mobile interface in Android Studio, built backend with Firebase, planned SOS/incident/location features.',
    result: 'Concept phase, seeking partners for launch.',
    emoji: '📱',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-transparent to-indigo-950/30 px-4">
      <motion.div
        className="w-full max-w-5xl bg-[#0A1E3A]/90 rounded-xl shadow-2xl p-10 border-l-8 border-[#FFD700]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-[#FFD700] to-pink-500 drop-shadow-lg text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              className="bg-[#0A1E3A]/80 border-l-4 border-[#FFD700] rounded-lg shadow-lg p-6 flex flex-col gap-2 text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="text-3xl mb-2">{project.emoji}</div>
              <h3 className="text-xl font-semibold text-[#FFD700]">{project.title}</h3>
              <p className="text-white text-base mb-1">{project.description}</p>
              <p className="text-sm italic text-[#FFD700]">{project.result}</p>
            </motion.div>
          ))}
        </div>
        </motion.div>
    </section>
  );
}
