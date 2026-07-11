import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaCertificate, FaExternalLinkAlt, FaAward, FaCode, FaCheckCircle, FaLaptopCode, FaRocket } from 'react-icons/fa';

/* ─── DATA DEFINITIONS ─────────────────────────────────────── */
const certifications = [
  {
    title: "Qualified Smart India Hackathon (SIH)",
    issuer: "Ministry of Education & AICTE",
    date: "2024",
    id: "SIH-2024-QUAL",
    description: "Qualified for the internal round of Smart India Hackathon, designing scalable digital solutions for real-world government problem statements.",
    glow: "#06b6d4"
  },
  {
    title: "100 Days of Code: Complete Python Pro Bootcamp",
    issuer: "Udemy",
    date: "2024",
    id: "UC-PYTHON-PRO",
    description: "Completed intensive Python development bootcamp covering Object-Oriented Programming, scripting, API integrations, and automation pipelines.",
    glow: "#a855f7"
  },
  {
    title: "100 Days of Code: Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    id: "UC-WEB-DEV",
    description: "Full-stack web engineering certification covering HTML5, CSS3, JavaScript, Node.js, Express.js, SQL, and database normalization paradigms.",
    glow: "#06b6d4"
  }
];

const achievements = [
  {
    title: "Internship Completion at NHPC Limited",
    category: "Professional Experience",
    metric: "100% Delivery",
    description: "Designed, developed, and tested the enterprise Ticket Resolution System (TRS) from scratch, delivering robust authentication and role-based workflows.",
    icon: FaAward,
    glow: "#a855f7"
  },
  {
    title: "Production Deployment of New Maa Enterprises",
    category: "Full-Stack Project",
    metric: "Live B2B Site",
    description: "Successfully shipped the official business platform (newmaaenterprises.in) using React and Supabase, securing local retailer registrations.",
    icon: FaRocket,
    glow: "#06b6d4"
  },
  {
    title: "Active Developer & Open Source Contributor",
    category: "Community Contribution",
    metric: "400+ Git Commits",
    description: "Maintained active development logs and shipped clean, documented modular code across multiple team repositories and internship frameworks.",
    icon: FaLaptopCode,
    glow: "#a855f7"
  },
  {
    title: "Academic Problem Solving",
    category: "Algorithms",
    metric: "50+ Challenges",
    description: "Solved array, string, and dynamic programming challenges on platforms like LeetCode and GeeksforGeeks during academic studies.",
    icon: FaCode,
    glow: "#06b6d4"
  }
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */
export default function CertificationsAndAchievements() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  });

  const slideInLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -35 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  });

  const slideInRight = (delay = 0) => ({
    initial: { opacity: 0, x: 35 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[320px] h-[320px] bg-cyanCustom/[0.06] rounded-full blur-[110px] -z-10 animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-[20%] left-[10%] w-[280px] h-[280px] bg-purpleCustom/[0.06] rounded-full blur-[90px] -z-10" />

      {/* Grid Layout split between Certifications & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ════ LEFT COLUMN: CERTIFICATIONS ════ */}
        <div id="certifications" className="space-y-12">
          {/* Header */}
          <motion.div {...slideInLeft(0)} className="space-y-4">
            <div className="flex items-center space-x-2 text-cyanCustom">
              <FaCertificate className="animate-spin duration-[10000ms]" size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Verified Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Professional{' '}
              <span className="bg-gradient-to-r from-cyanCustom to-cyanCustom-light bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-cyanCustom to-cyanCustom-light rounded-full" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Continuous upskilling in computer science and industry-focused engineering domains.
            </p>
          </motion.div>

          {/* List of Certs */}
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                {...slideInLeft(0.1 + idx * 0.1)}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow shadow inside */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 5% 5%, ${cert.glow}08, transparent 75%)` }} />
                
                <div className="flex items-start gap-4">
                  {/* Icon badge */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyanCustom group-hover:border-cyanCustom/40 transition-colors">
                    <FaCertificate size={16} style={{ filter: `drop-shadow(0 0 6px ${cert.glow}80)` }} />
                  </div>

                  <div className="space-y-2 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-white group-hover:text-cyanCustom transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{cert.date}</span>
                    </div>

                    <p className="text-xs font-semibold text-slate-300">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                    
                    <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-cyanCustom-light">
                      <FaCheckCircle size={10} />
                      <span>Verification ID: {cert.id}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ════ RIGHT COLUMN: ACHIEVEMENTS ════ */}
        <div id="achievements" className="space-y-12">
          {/* Header */}
          <motion.div {...slideInRight(0)} className="space-y-4">
            <div className="flex items-center space-x-2 text-purpleCustom">
              <FaTrophy className="animate-bounce" size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Key Milestones</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Honors &amp;{' '}
              <span className="bg-gradient-to-r from-purpleCustom to-purpleCustom-light bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-purpleCustom to-purpleCustom-light rounded-full" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Track record of problem-solving, project completions, and team collaboration.
            </p>
          </motion.div>

          {/* Grid of Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.title}
                  {...slideInRight(0.1 + idx * 0.15)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-purpleCustom/35 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 10% 10%, ${ach.glow}06, transparent 70%)` }} />
                  
                  <div>
                    {/* Top Row: Icon and category badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-purpleCustom group-hover:border-purpleCustom/40 transition-colors">
                        <Icon size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-950/40 px-2.5 py-1 rounded-full border border-slate-850">
                        {ach.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-purpleCustom transition-colors duration-300 mb-2">
                      {ach.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                      {ach.description}
                    </p>
                  </div>

                  {/* Value / Metric badge */}
                  <div className="mt-auto pt-2 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-bold">
                    <span className="text-slate-500 uppercase tracking-widest text-[9px]">Performance Indicator</span>
                    <span className="text-purpleCustom-light" style={{ textShadow: `0 0 10px ${ach.glow}50` }}>{ach.metric}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
