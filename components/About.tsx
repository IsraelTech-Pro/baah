import React from "react";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0A1E3A] to-indigo-950/40 px-4">
      <motion.div
        className="max-w-3xl w-full bg-[#0A1E3A]/90 rounded-xl shadow-2xl p-10 border-l-8 border-[#FFD700]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-6 text-center drop-shadow-lg">About Me</h2>
        <p className="text-white text-lg md:text-xl mb-6 text-center">
          My name is <span className="font-semibold text-[#FFD700]">Baah Gyan Richmond</span>, and I proudly serve the people of Ghana in two critical capacities. As a member of the Police Defence Criminal Attack Force, I contribute to tactical operations, public safety, and criminal investigations. At the same time, I am a trained network engineer focused on developing secure and efficient IT systems.
        </p>
        <p className="text-white text-base md:text-lg mb-6 text-center">
          With strong discipline from law enforcement and hands-on technical knowledge, I bring a unique and effective skill set to every challenge—whether it's responding to a threat or optimizing a network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Core Strengths</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Tactical experience in high-risk law enforcement operations</li>
              <li>Expertise in network infrastructure, security, and troubleshooting</li>
              <li>Strong understanding of cybersecurity practices and digital forensics</li>
              <li>Ability to work under pressure, both in the field and in technical environments</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Certifications & Training</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Cisco Certified Network Associate (CCNA)</li>
              <li>Diploma in Network Systems and Security</li>
              <li>Specialized Police Tactical Training and Cybercrime Response</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FFD700]/10 border-l-4 border-[#FFD700] p-4 rounded-md shadow text-white text-center text-lg italic">
          <span className="font-semibold text-[#FFD700]">Mission Statement:</span> My goal is to protect and connect. I aim to serve my community both physically through law enforcement and digitally through secure and reliable network solutions.
        </div>
      </motion.div>
    </section>
  );
}
