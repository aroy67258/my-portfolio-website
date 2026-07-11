import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaGraduationCap, FaProjectDiagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaGithub, FaGlobe, FaClipboardList, FaCogs, FaCheckCircle, FaTerminal } from 'react-icons/fa';
import Navbar from './components/Navbar';
import TechnicalExpertise from './components/TechnicalExpertise';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import HealthcareShowcase from './components/HealthcareShowcase';
import EduMindShowcase from './components/EduMindShowcase';
import VyomanShowcase from './components/VyomanShowcase';
import EntertainmentShowcase from './components/EntertainmentShowcase';
import NewMaaShowcase from './components/NewMaaShowcase';
import TRSShowcase from './components/TRSShowcase';
import CertificationsAndAchievements from './components/CertificationsAndAchievements';
import FeedbackSection from './components/FeedbackSection';

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(false);
  const [selectedEduMind, setSelectedEduMind] = useState(false);
  const [selectedVyoman, setSelectedVyoman] = useState(false);
  const [selectedEntertainment, setSelectedEntertainment] = useState(false);
  const [selectedNewMaa, setSelectedNewMaa] = useState(false);
  const [selectedTRS, setSelectedTRS] = useState(false);

  const projectsData = [
    {
      title: "New Maa Enterprises – Digital Business Platform",
      techs: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "GitHub", "Vercel"],
      bullets: [
        "Developed a production-ready full-stack business website and retailer management platform for New Maa Enterprises.",
        "Built secure retailer registration and approval workflows, admin dashboard, content management, and database integration.",
        "Enforced Row Level Security (RLS) policies and session persistence using Supabase authentication.",
        "Optimized digital presence and business visibility, creating a scalable foundation for future expansion."
      ],
      isNewMaaCaseStudy: true,
      liveUrl: "https://www.newmaaenterprises.in",
      githubUrl: "",
      isFlagship: true
    },
    {
      title: "Ticket Resolution System (TRS)",
      techs: ["Node.js", "Express.js", "MySQL", "EJS", "Bootstrap", "JavaScript", "HTML", "CSS", "Git"],
      bullets: [
        "Designed and developed an enterprise-level Ticket Resolution System (TRS) to streamline issue reporting, ticket assignment, and resolution tracking.",
        "Contributed to frontend development, backend integration, database design, authentication, dashboard development, and testing in a real-world organizational environment.",
        "Implemented secure role-based authentication (Admin, Vendor, User) and normalized MySQL database schemas.",
        "Designed real-time ticket status workflows (Open → In Progress → Resolved → Closed) alongside automated email notification systems."
      ],
      isTRS: true,
      isFlagship: true
    },
    {
      title: "Personal Portfolio Website",
      techs: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "GitHub", "Vercel"],
      bullets: [
        "Designed and developed a modern responsive developer portfolio website featuring projects, skills, experience, certifications, and contact information.",
        "Implemented futuristic UI, glassmorphism effects, smooth animations, and mobile-first responsive design.",
        "Integrated interactive project case study showcases and responsive overlays built using Framer Motion.",
        "Optimized layout load speeds, SEO meta elements, and direct contact path workflows for recruiters."
      ],
      isPortfolio: true,
      liveUrl: window.location.origin,
      githubUrl: "https://github.com/aroy67258/my-portfolio-website",
      isFlagship: true
    },
    {
      title: "AI-Powered Healthcare Queue & Appointment Platform (Ongoing)",
      techs: ["Next.js", "React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Prisma"],
      bullets: [
        "Developing a full-stack multi-tenant SaaS platform modeled after service-based systems like Zomato & OYO.",
        "Engineered real-time queue tracking & estimated waiting times via WebSockets (Socket.io) and smart ML models.",
        "Integrated AI Health Assistant symptom checker chatbot and secure Payment Gateways (Razorpay).",
        "Includes specialized, responsive dashboards for Patients, Doctors, Lab Partners, and Admins."
      ],
      isCaseStudy: true
    },
    {
      title: "EduMind — AI-Powered Personalized Learning Platform (Ongoing)",
      techs: ["Python", "FastAPI", "FAISS", "NLP", "Scikit-learn", "Sentence Transformers", "Groq API"],
      bullets: [
        "Developing a syllabus-aware academic learning platform leveraging Retrieval-Augmented Generation (RAG).",
        "Engineered a dynamic doubtnut chatbot with L2-distance FAISS index semantic database searching.",
        "Created an NLP classification model (SVM) categorizing past paper questions by topic taxonomy and difficulty level.",
        "Features enrollment-aligned credentials and personalized, performance-adaptive learning calendars."
      ],
      isEduMindCaseStudy: true
    },
    {
      title: "Vyoman Lifescience — Medicine Marketing Website",
      techs: ["WordPress", "Elementor", "WooCommerce", "HTML", "CSS", "JavaScript", "UI/UX Design"],
      bullets: [
        "Developing a premium, high-converting medicine marketing portal for a pharmaceutical brand.",
        "Integrated WooCommerce catalogs customized with Advanced Custom Fields (ACF) B2B credentials.",
        "Optimized layout load times (1.4s) and meta properties for search engine visibility (SEO).",
        "Includes custom medical division filters (Cardio, Neuro, General) and bulk quote inquiry paths."
      ],
      isVyomanCaseStudy: true
    },
    {
      title: "Entertainment Web Applications — Netflix & Spotify Clone",
      techs: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      bullets: [
        "Developed responsive entertainment web templates inspired by Netflix & Spotify.",
        "Built interactive audio playing states with duration trackers, volume controls, and track indices.",
        "Engineered smooth content carousels, responsive video slide headers, and card zoom effects.",
        "Employed reusable React components and modular CSS layouts for fast component render speeds."
      ],
      isEntertainmentCaseStudy: true
    }
  ];

  const educationData = [
    {
      school: "Madan Mohan Malaviya University of Technology",
      location: "Gorakhpur, Uttar Pradesh",
      degree: "Bachelor of Technology in Computer Science and Engineering (6th semester)",
      period: "2023 - 2027",
      grade: "CGPA: 6.8"
    },
    {
      school: "Holi Mission High School",
      location: "Samastipur, Bihar",
      degree: "Senior Secondary (Class 12th), CBSE Board",
      period: "2021 - 2022"
    },
    {
      school: "Central Public School",
      location: "Samastipur, Bihar",
      degree: "Secondary (Class 10th), CBSE Board",
      period: "2020"
    }
  ];

  return (
    <div className="bg-transparent text-slate-100 min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />

      <AboutMe />

      <TechnicalExpertise />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute top-[20%] right-0 w-[280px] h-[280px] bg-purpleCustom/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-purpleCustom mb-2">
            <FaProjectDiagram />
            <span className="text-xs font-bold tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Recent <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glassmorphism p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${project.isFlagship ? 'border-cyanCustom/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyanCustom/80 lg:col-span-2' : 'border-slate-800 hover:border-purpleCustom/40'}`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, tIdx) => (
                        <motion.span 
                          key={tIdx} 
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-cyanCustom/10 text-cyanCustom-light border border-cyanCustom/20 cursor-default hover:bg-cyanCustom/20 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    {project.isTRS ? (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-cyanCustom/10 text-cyanCustom-light border border-cyanCustom/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                          💼 Enterprise Project
                        </span>
                        <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/30 shadow-[0_0_10px_rgba(168,85,247,0.2)] animate-pulse">
                          ⚡ NHPC Internship Project
                        </span>
                      </div>
                    ) : project.isFlagship ? (
                      <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r from-cyanCustom to-purpleCustom text-white border border-white/10 shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse">
                        ★ Flagship Production Project
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <ul className="space-y-2.5 text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-cyanCustom mt-1.5 flex-shrink-0">
                          <FaChevronRight size={10} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {project.isTRS && (
                    <div className="mt-4 mb-6 p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 block">TRS Lifecycle Workflow</span>
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 font-medium gap-1">
                        <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <div className="w-8 h-8 rounded-lg bg-cyanCustom/10 border border-cyanCustom/20 flex items-center justify-center text-cyanCustom-light">
                            <FaClipboardList size={12} />
                          </div>
                          <span>1. Create Ticket</span>
                        </div>
                        
                        <div className="h-px bg-slate-800 flex-1 relative min-w-[15px] mx-1">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyanCustom/40 animate-ping" />
                        </div>

                        <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <div className="w-8 h-8 rounded-lg bg-purpleCustom/10 border border-purpleCustom/20 flex items-center justify-center text-purpleCustom-light">
                            <FaCogs size={12} />
                          </div>
                          <span>2. Assign Vendor</span>
                        </div>

                        <div className="h-px bg-slate-800 flex-1 relative min-w-[15px] mx-1">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purpleCustom/40" />
                        </div>

                        <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                            <FaCheckCircle size={12} />
                          </div>
                          <span>3. Resolve & Close</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {project.isNewMaaCaseStudy && (
                  <div className={`grid grid-cols-1 ${project.githubUrl ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4 mt-6`}>
                    <button 
                      onClick={() => setSelectedNewMaa(true)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                    >
                      <span>View Case Study</span>
                      <FaChevronRight size={12} />
                    </button>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyanCustom/40 hover:bg-slate-850 text-white font-bold transition-all flex items-center justify-center space-x-2"
                    >
                      <FaGlobe size={14} />
                      <span>Live Website</span>
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purpleCustom/40 hover:bg-slate-850 text-white font-bold transition-all flex items-center justify-center space-x-2"
                      >
                        <FaGithub size={14} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                )}
                {project.isTRS && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <button 
                      onClick={() => setSelectedTRS(true)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                    >
                      <span>View Case Study</span>
                      <FaChevronRight size={12} />
                    </button>
                    <button 
                      onClick={() => setSelectedTRS(true)}
                      className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyanCustom/40 hover:bg-slate-850 text-white font-bold transition-all flex items-center justify-center space-x-2"
                    >
                      <FaTerminal size={14} />
                      <span>Project Details</span>
                    </button>
                  </div>
                )}
                {project.isPortfolio && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                    >
                      <FaGlobe size={14} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyanCustom/40 hover:bg-slate-850 text-white font-bold transition-all flex items-center justify-center space-x-2"
                    >
                      <FaGithub size={14} />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                )}
                {project.isCaseStudy && (
                  <button 
                    onClick={() => setSelectedCaseStudy(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Investor Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isEduMindCaseStudy && (
                  <button 
                    onClick={() => setSelectedEduMind(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-purpleCustom to-cyanCustom text-white font-bold hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View AI Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isVyomanCaseStudy && (
                  <button 
                    onClick={() => setSelectedVyoman(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Pharma Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isEntertainmentCaseStudy && (
                  <button 
                    onClick={() => setSelectedEntertainment(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-purpleCustom to-cyanCustom text-white font-bold hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Entertainment Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Experience />

      <CertificationsAndAchievements />

      {/* Education Section */}
      <section id="education" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute bottom-0 right-[15%] w-[320px] h-[320px] bg-cyanCustom/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-cyanCustom mb-2">
            <FaGraduationCap />
            <span className="text-xs font-bold tracking-widest uppercase">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 relative flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-white pt-2">{edu.school}</h3>
                <p className="text-sm text-slate-400 font-medium">{edu.location}</p>
                <p className="text-slate-300 text-sm md:text-base pt-1">{edu.degree}</p>
              </div>
              <div className="md:text-right flex-shrink-0">
                <span className="text-lg font-bold text-cyanCustom">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <FeedbackSection />
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 glassmorphism border-t border-slate-800/80 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">ANUPAM KUMAR</h3>
            <p className="text-sm text-slate-400">Aspiring Software Development Engineer | Open for opportunities</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2.5 text-sm text-slate-400">
            <a href="mailto:anupamroy11a@gmail.com" className="hover:text-cyanCustom transition-colors duration-300 flex items-center space-x-2">
              <FaEnvelope /> <span>anupamroy11a@gmail.com</span>
            </a>
            <a href="tel:+919709463351" className="hover:text-purpleCustom transition-colors duration-300 flex items-center space-x-2">
              <FaPhoneAlt /> <span>+91-9709463351</span>
            </a>
            <a href="https://www.linkedin.com/in/anupam-kumar-41655b296/" target="_blank" rel="noopener noreferrer" className="hover:text-cyanCustom transition-colors duration-300 flex items-center space-x-2">
              <FaLinkedinIn /> <span>LinkedIn Profile</span>
            </a>
            <a href="https://www.instagram.com/aroy67258?igsh=NXNlaGV6ZXhoeDdw" target="_blank" rel="noopener noreferrer" className="hover:text-purpleCustom transition-colors duration-300 flex items-center space-x-2">
              <FaInstagram /> <span>@aroy67258</span>
            </a>
            <p>© {new Date().getFullYear()} Anupam Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Full-Screen Case Study Modals */}
      <AnimatePresence>
        {selectedNewMaa && (
          <NewMaaShowcase onClose={() => setSelectedNewMaa(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCaseStudy && (
          <HealthcareShowcase onClose={() => setSelectedCaseStudy(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedEduMind && (
          <EduMindShowcase onClose={() => setSelectedEduMind(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedVyoman && (
          <VyomanShowcase onClose={() => setSelectedVyoman(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedEntertainment && (
          <EntertainmentShowcase onClose={() => setSelectedEntertainment(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedTRS && (
          <TRSShowcase onClose={() => setSelectedTRS(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
