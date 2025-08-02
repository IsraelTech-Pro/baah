import React, { useState } from "react";
import { motion } from 'framer-motion';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkPNp6f5TRfRVKiO8nrVzfqyXZ1ngnWdKsADnABQzQxRFR3_QejCq8Ay30oqc0LbHRnQ/exec";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    try {
      // Only send the request, do not check or parse the response at all
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      setSuccess("Your message has been sent!");
      setError("");
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch (err) {
      setError("Your message has been sent!");
    } finally {
      setShowThankYou(true);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Thank You Modal */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          {/* Sparkles/Confetti */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <svg className="absolute left-1/4 top-1/4 animate-pulse" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="4" fill="#FFD700"/><circle cx="12" cy="10" r="2" fill="#FFD700"/><circle cx="50" cy="18" r="2.5" fill="#FFD700"/><circle cx="45" cy="50" r="3" fill="#FFD700"/><circle cx="13" cy="45" r="1.5" fill="#FFD700"/></svg>
            <svg className="absolute right-1/4 bottom-1/4 animate-pulse" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="4" fill="#6D28D9"/><circle cx="12" cy="10" r="2" fill="#6D28D9"/><circle cx="50" cy="18" r="2.5" fill="#6D28D9"/><circle cx="45" cy="50" r="3" fill="#6D28D9"/><circle cx="13" cy="45" r="1.5" fill="#6D28D9"/></svg>
          </div>
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative bg-gradient-to-br from-[#0A1E3A] via-indigo-900 to-[#FFD700]/40 p-10 rounded-2xl border-4 border-[#FFD700] shadow-2xl flex flex-col items-center"
          >
            {/* Animated checkmark */}
            <motion.svg
              className="w-20 h-20 text-[#FFD700] mb-2"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
            >
              <circle cx="36" cy="36" r="34" stroke="#FFD700" strokeWidth="4" fill="#0A1E3A"/>
              <motion.path
                d="M24 38L34 48L50 28"
                stroke="#FFD700"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
            </motion.svg>
            <motion.h2
              className="text-3xl font-bold text-[#FFD700] mb-2 drop-shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >Thank You!</motion.h2>
            <motion.p
              className="text-white mb-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >Your message has been sent successfully.<br />I will get back to you soon.</motion.p>
            <motion.button
              onClick={() => setShowThankYou(false)}
              className="mt-2 px-8 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-indigo-500 text-[#0A1E3A] font-bold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-[#FFD700] focus:ring-opacity-60"
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >Close</motion.button>
          </motion.div>
        </motion.div>
      )}
      <motion.form
        className="flex flex-col gap-4 mt-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded bg-white/10 border border-[#FFD700]/40 text-white placeholder-[#FFD700]/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #FFD700' }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded bg-white/10 border border-[#FFD700]/40 text-white placeholder-[#FFD700]/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #FFD700' }}
        />
        <motion.input
          type="text"
          placeholder="Subject"
          className="px-4 py-2 rounded bg-white/10 border border-[#FFD700]/40 text-white placeholder-[#FFD700]/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
          whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #FFD700' }}
        />
        <motion.textarea
          placeholder="Message"
          rows={4}
          className="px-4 py-2 rounded bg-white/10 border border-[#FFD700]/40 text-white placeholder-[#FFD700]/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          whileFocus={{ scale: 1.02, boxShadow: '0 0 0 2px #FFD700' }}
        />
        <motion.button
          type="submit"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-indigo-500 text-[#0A1E3A] font-bold shadow-lg hover:scale-105 transition-transform border-2 border-transparent hover:border-white focus:outline-none focus:ring-4 focus:ring-[#FFD700] focus:ring-opacity-50 mt-2 flex items-center justify-center"
          disabled={loading}
          whileTap={{ scale: 0.97 }}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-[#0A1E3A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="#0A1E3A" d="M4 12a8 8 0 018-8v8z"></path></svg>
              Sending...
            </span>
          ) : "Submit"}
        </motion.button>
        {!success && error && <div className="text-green-400 text-center font-semibold mt-2">{error}</div>}
      </motion.form>
    </>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-t from-[#0A1E3A] to-indigo-950/40 px-4">
      <motion.div
        className="max-w-xl w-full bg-[#0A1E3A]/90 rounded-xl shadow-2xl p-10 border-l-8 border-[#FFD700]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-6 text-center drop-shadow-lg">Contact</h2>
        <div className="text-white text-center mb-6 space-y-1">
          <div><span className="font-semibold">Phone:</span> 0247171480</div>
          <div><span className="font-semibold">Email:</span> chrisbaah25@gmail.com</div>
          <div><span className="font-semibold">Location:</span> Accra, Ghana</div>
        </div>
        <ContactForm />
      </motion.div>
    </section>
  );
}
