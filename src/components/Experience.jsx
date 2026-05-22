import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaGlobe, 
  FaCode, 
  FaBrain, 
  FaLayerGroup, 
  FaRocket, 
  FaTerminal
} from 'react-icons/fa';

/* ─── STATISTICS DATA ──────────────────────────────────────── */
const stats = [
  { icon: FaBrain,      label: 'Core Focus',      value: 'AI & Full-Stack', color: '#06b6d4' },
  { icon: FaGlobe,      label: 'Work Mode',       value: '100% Remote',     color: '#a855f7' },
  { icon: FaLayerGroup, label: 'Tech Stack',      value: '7+ Technologies', color: '#06b6d4' },
  { icon: FaRocket,     label: 'Company Type',    value: 'Tech Startup',    color: '#a855f7' },
];

/* ─── RESPONSIBILITIES DATA ────────────────────────────────── */
const responsibilities = [
  "Developing responsive frontend interfaces",
  "Working with React.js, JavaScript, and Tailwind CSS",
  "Assisting in backend integration and API handling",
  "Collaborating on AI-assisted web applications",
  "Debugging and improving UI/UX performance",
  "Exploring scalable startup product architecture"
];

/* ─── TECH STACK BADGES ────────────────────────────────────── */
const techStack = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "FastAPI",
  "API Integration",
  "GitHub",
  "UI/UX"
];

/* ─── FLOATING PARTICLE GENERATOR ──────────────────────────── */
const particles = Array.from({ length: 12 }, (_, i) => ({
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  color: i % 2 === 0 ? 'rgba(6,182,212,0.35)' : 'rgba(168,85,247,0.35)',
  dur: Math.random() * 6 + 6,
  delay: Math.random() * 4,
}));

export default function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  });

  const slideInLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -40 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  });

  const slideInRight = (delay = 0) => ({
    initial: { opacity: 0, x: 40 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  });

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full">
      {/* ── Floating AI Background Particles ── */}
      {particles.map((p, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none -z-10"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: p.color }}
          animate={{ 
            y: [0, -30, 0], 
            x: [0, Math.sin(i) * 15, 0],
            opacity: [0.2, 0.7, 0.2] 
          }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
      
      {/* Glowing Backdrop Orbs */}
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-purpleCustom/[0.08] rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-0 w-[280px] h-[280px] bg-cyanCustom/[0.08] rounded-full blur-[100px] -z-10" />

      {/* ── Section Title Badge ── */}
      <motion.div {...fadeUp(0)} className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-2 text-cyanCustom mb-3">
          <FaBriefcase className="animate-pulse" size={14} />
          <span className="text-xs font-bold tracking-widest uppercase">Career Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Internship{' '}
          <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-[2px] w-28 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full overflow-hidden relative">
          <motion.span className="block h-full w-1/3 bg-white/40 rounded-full absolute top-0 left-0"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ── Two-Column Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ════ LEFT COLUMN: STATS & SUMMARY (5 Cols) ════ */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <motion.div {...slideInLeft(0.1)} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Contributing to <span className="text-cyanCustom">Real-World Projects</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Gaining hands-on development experience in startup environments. Working under agile flows, building modular components, and shipping optimized software.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glassmorphism p-5 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 10% 10%, ${s.color}08, transparent 80%)` }} />
                  
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                      <Icon size={14} style={{ color: s.color }} />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{s.label}</p>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-cyanCustom transition-colors duration-300">{s.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional details - Tech Quote */}
          <motion.div {...slideInLeft(0.3)} className="glassmorphism p-5 rounded-2xl border border-slate-800 hover:border-purpleCustom/20 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyanCustom to-purpleCustom" />
            <div className="flex items-start gap-3.5">
              <FaTerminal className="text-purpleCustom mt-1 text-sm flex-shrink-0" />
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                "Developing software isn't just about syntax. It's about engineering solutions that bridge client vision with optimal performance."
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════ RIGHT COLUMN: TIMELINE CARD (7 Cols) ════ */}
        <div className="lg:col-span-7 relative pl-4 sm:pl-8">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyanCustom via-purpleCustom/50 to-transparent" />

          {/* Experience Card Wrap */}
          <motion.div {...slideInRight(0.2)} className="relative">
            {/* Pulsing Dot on the Timeline Track */}
            <div className="absolute -left-[21px] sm:-left-[37px] top-6 flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-cyanCustom/30 animate-ping" />
              <span className="absolute w-4 h-4 rounded-full bg-purpleCustom/50 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyanCustom" />
            </div>

            {/* Glowing border/background card */}
            <div className="glassmorphism rounded-2xl border border-slate-800 hover:border-cyanCustom/35 transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.05)] hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] group">
              {/* Glowing gradient header border */}
              <div className="h-1 w-full bg-gradient-to-r from-cyanCustom via-purpleCustom to-cyanCustom" />

              <div className="p-6 md:p-8 flex flex-col gap-6">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Futuristic Company Logo Placeholder SVG */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:border-cyanCustom/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyanCustom/10 to-purpleCustom/10 opacity-50" />
                      <svg className="w-7 h-7 text-cyanCustom group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {/* Sub-glow inside logo */}
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-purpleCustom rounded-full blur-[4px]" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyanCustom transition-colors duration-300">
                        Software Engineer Intern
                      </h4>
                      <p className="text-sm font-semibold text-slate-300">
                        YugaYatra Retail (OPC) Private Limited
                      </p>
                    </div>
                  </div>

                  {/* Pulsing Status Badge */}
                  <div className="flex items-center self-start sm:self-center">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyanCustom/10 text-cyanCustom text-xs font-bold border border-cyanCustom/30 shadow-[0_0_12px_rgba(6,182,212,0.15)] relative">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom animate-pulse" />
                      Currently Working
                    </span>
                  </div>
                </div>

                {/* Duration & Location details */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400 bg-slate-900/40 px-4 py-2.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-purpleCustom-light" />
                    <span>May 2026 – Present</span>
                  </div>
                  <span className="hidden sm:inline text-slate-700">•</span>
                  <div className="flex items-center gap-1.5">
                    <FaGlobe className="text-cyanCustom" />
                    <span>Remote</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                    Working on AI-assisted full-stack web application development and modern UI systems. Contributing to responsive frontend development, API integration, scalable architectures, and startup-based real-world projects using modern technologies.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                {/* Responsibilities list */}
                <div>
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Responsibilities</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {responsibilities.map((resp, rIdx) => (
                      <motion.li 
                        key={rIdx}
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-2.5 text-xs text-slate-400 group/item"
                      >
                        <span className="text-cyanCustom mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-purpleCustom">
                          <FaChevronRight size={10} />
                        </span>
                        <span className="group-hover/item:text-slate-200 transition-colors duration-300 leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                {/* Tech Stack Badges */}
                <div>
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Technologies Stacked</h5>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, tIdx) => (
                      <motion.span 
                        key={tIdx} 
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default"
                        style={{
                          background: tIdx % 2 === 0 ? 'rgba(6,182,212,0.06)' : 'rgba(168,85,247,0.06)',
                          borderColor: tIdx % 2 === 0 ? 'rgba(6,182,212,0.2)' : 'rgba(168,85,247,0.2)',
                          color: tIdx % 2 === 0 ? '#67e8f9' : '#d8b4fe',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
