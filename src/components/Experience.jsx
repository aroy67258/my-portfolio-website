import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaGlobe, 
  FaBrain, 
  FaLayerGroup, 
  FaRocket, 
  FaTerminal
} from 'react-icons/fa';

/* ─── STATISTICS DATA ──────────────────────────────────────── */
const stats = [
  { icon: FaBrain,      label: 'Core Focus',      value: 'AI & Full-Stack', color: '#06b6d4' },
  { icon: FaGlobe,      label: 'Work Mode',       value: 'On-Site & Remote', color: '#a855f7' },
  { icon: FaLayerGroup, label: 'Tech Stack',      value: '12+ Technologies', color: '#06b6d4' },
  { icon: FaRocket,     label: 'Company Type',    value: 'Govt & Startup',  color: '#a855f7' },
];

/* ─── NHPC LIMITED DATA ────────────────────────────────────── */
const nhpcResponsibilities = [
  "Developed modules for the Ticket Resolution System (TRS)",
  "Built responsive user interfaces using modern web technologies",
  "Designed and integrated MySQL database",
  "Implemented role-based authentication and authorization",
  "Developed Admin, Vendor, and User dashboards",
  "Worked on ticket lifecycle management and status tracking",
  "Fixed bugs and improved application performance",
  "Collaborated with mentors and team members during development"
];

const nhpcTechStack = [
  "Node.js",
  "Express.js",
  "MySQL",
  "Bootstrap",
  "EJS",
  "JavaScript",
  "HTML",
  "CSS",
  "Git"
];

const nhpcFeatures = [
  "Role-based login (Admin, Vendor, User)",
  "Ticket creation and tracking",
  "Project management",
  "Vendor assignment",
  "Ticket status workflow",
  "Notifications and reminders",
  "Dashboard analytics",
  "Secure authentication",
  "Responsive UI"
];

/* ─── YUGAYATRA RETAIL DATA ────────────────────────────────── */
const yugayatraResponsibilities = [
  "Developing responsive frontend interfaces",
  "Working with React.js, JavaScript, and Tailwind CSS",
  "Assisting in backend integration and API handling",
  "Collaborating on AI-assisted web applications",
  "Debugging and improving UI/UX performance",
  "Exploring scalable startup product architecture"
];

const yugayatraTechStack = [
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
              Gaining hands-on development experience in diverse organizational environments. Working under agile flows, building modular components, designing secure databases, and shipping optimized enterprise software.
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

        {/* ════ RIGHT COLUMN: TIMELINE CARDS (7 Cols) ════ */}
        <div className="lg:col-span-7 relative pl-4 sm:pl-8 flex flex-col gap-12">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyanCustom via-purpleCustom/50 to-transparent" />

          {/* ── CARD 1: NHPC LIMITED ── */}
          <motion.div {...slideInRight(0.15)} className="relative">
            {/* Pulsing Dot on the Timeline Track */}
            <div className="absolute -left-[21px] sm:-left-[37px] top-6 flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-purpleCustom/30 animate-ping" />
              <span className="absolute w-4 h-4 rounded-full bg-cyanCustom/50 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-purpleCustom" />
            </div>

            {/* Glowing border/background card */}
            <div className="glassmorphism rounded-2xl border border-slate-800 hover:border-purpleCustom/35 transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.1)] group">
              {/* Glowing gradient header border */}
              <div className="h-1 w-full bg-gradient-to-r from-purpleCustom via-cyanCustom to-purpleCustom" />

              <div className="p-6 md:p-8 flex flex-col gap-6">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Futuristic Company Logo Placeholder SVG */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:border-purpleCustom/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-purpleCustom/10 to-cyanCustom/10 opacity-50" />
                      <svg className="w-7 h-7 text-purpleCustom group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 15C6 15 7 13 9 13C11 13 12 15 14 15C16 15 17 13 19 13C21 13 22 15 23 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M1 18C3 18 4 16 6 16C8 16 9 18 11 18C13 18 14 16 16 16C18 16 19 18 21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M13 2L6 11H12L10 20L18 9H12L13 2Z" fill="currentColor" opacity="0.8" />
                      </svg>
                      {/* Sub-glow inside logo */}
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyanCustom rounded-full blur-[4px]" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purpleCustom transition-colors duration-300">
                        Software Engineering Intern
                      </h4>
                      <p className="text-sm font-semibold text-slate-300">
                        NHPC Limited – IT Department
                      </p>
                    </div>
                  </div>

                  {/* Completed Badge */}
                  <div className="flex items-center self-start sm:self-center">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purpleCustom/10 text-purpleCustom-light text-xs font-bold border border-purpleCustom/30 shadow-[0_0_12px_rgba(168,85,247,0.15)] relative">
                      <span className="w-1.5 h-1.5 rounded-full bg-purpleCustom" />
                      Internship Completed
                    </span>
                  </div>
                </div>

                {/* Duration & Location details */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400 bg-slate-900/40 px-4 py-2.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-cyanCustom" />
                    <span>Jun 2026 – Jul 2026</span>
                  </div>
                  <span className="hidden sm:inline text-slate-700">•</span>
                  <div className="flex items-center gap-1.5">
                    <FaGlobe className="text-purpleCustom" />
                    <span>On-site Internship</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                    Worked on the design and development of an enterprise-level <strong className="text-cyanCustom">Ticket Resolution System (TRS)</strong> to streamline issue reporting, ticket assignment, and resolution tracking. Contributed to frontend development, backend integration, database design, authentication, dashboard development, and testing in a real-world organizational environment.
                  </p>
                </div>

                {/* Project Highlight Container */}
                <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-purpleCustom/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-cyanCustom/10 border border-cyanCustom/20 text-cyanCustom-light">
                      <FaTerminal size={12} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Project Highlight</span>
                  </div>
                  <h5 className="text-sm font-bold text-white mb-2">Ticket Resolution System (TRS)</h5>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    A comprehensive issue management solution with a robust workflow architecture designed for organization-wide deployment.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {nhpcFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyanCustom flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                {/* Responsibilities list */}
                <div>
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Responsibilities</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nhpcResponsibilities.map((resp, rIdx) => (
                      <motion.li 
                        key={rIdx}
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-2.5 text-xs text-slate-400 group/item"
                      >
                        <span className="text-purpleCustom mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-cyanCustom">
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
                    {nhpcTechStack.map((tech, tIdx) => (
                      <motion.span 
                        key={tIdx} 
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default"
                        style={{
                          background: tIdx % 2 === 0 ? 'rgba(168,85,247,0.06)' : 'rgba(6,182,212,0.06)',
                          borderColor: tIdx % 2 === 0 ? 'rgba(168,85,247,0.2)' : 'rgba(6,182,212,0.2)',
                          color: tIdx % 2 === 0 ? '#d8b4fe' : '#67e8f9',
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

          {/* ── CARD 2: YUGAYATRA RETAIL ── */}
          <motion.div {...slideInRight(0.35)} className="relative">
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
                    {yugayatraResponsibilities.map((resp, rIdx) => (
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
                    {yugayatraTechStack.map((tech, tIdx) => (
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
