import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaGraduationCap, FaProjectDiagram, FaTools, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HealthcareShowcase from './components/HealthcareShowcase';
import EduMindShowcase from './components/EduMindShowcase';
import VyomanShowcase from './components/VyomanShowcase';
import EntertainmentShowcase from './components/EntertainmentShowcase';

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(false);
  const [selectedEduMind, setSelectedEduMind] = useState(false);
  const [selectedVyoman, setSelectedVyoman] = useState(false);
  const [selectedEntertainment, setSelectedEntertainment] = useState(false);

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Figma"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "MySQL", "VSCode"]
    },
    {
      category: "WordPress Development",
      skills: ["WordPress Theme Customization", "Plugin Integration", "Hosting Management"]
    },
    {
      category: "AI & Design Tools",
      skills: ["ChatGPT", "Gemini", "AI-assisted Generation", "UI/UX Prototyping"]
    },
    {
      category: "Fundamentals & Soft Skills",
      skills: ["DBMS", "OS", "Computer Networks", "Team Collaboration"]
    }
  ];

  const projectsData = [
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
      title: "Vyoman Lifescience — Medicine Marketing Website (Ongoing)",
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
      period: "2021 - 2022",
      grade: "Percentage: 70%"
    },
    {
      school: "Central Public School",
      location: "Samastipur, Bihar",
      degree: "Secondary (Class 10th), CBSE Board",
      period: "2020",
      grade: "Percentage: 77%"
    }
  ];

  return (
    <div className="bg-transparent text-slate-100 min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute top-0 right-[20%] w-[250px] h-[250px] bg-purpleCustom/10 rounded-full blur-[80px] -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              About <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mb-6"></div>
          </div>
          <div className="md:col-span-8">
            <div className="glassmorphism p-8 rounded-2xl border border-slate-800 shadow-glass">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                I am an aspiring Software Development Engineer with a strong foundation in computer science principles. 
                I enjoy translating complex problems into clean, efficient, and user-friendly software solutions. 
                My experience spans programming in C++, Python, and JavaScript, building responsive React applications, 
                and experimenting with modern AI and Natural Language Processing frameworks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-400">
                <div className="flex items-center space-x-2.5">
                  <FaMapMarkerAlt className="text-cyanCustom" />
                  <span>Tajpur Road, Dharampur, Samastipur, Bihar - 848101</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <FaEnvelope className="text-purpleCustom" />
                  <span>anupamroy11a@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <FaPhoneAlt className="text-cyanCustom" />
                  <span>+91-9709463351</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <FaGraduationCap className="text-purpleCustom" />
                  <span>B.Tech CSE Student (2023 - 2027)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-cyanCustom/10 rounded-full blur-[90px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-cyanCustom mb-2">
            <FaTools />
            <span className="text-xs font-bold tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryObj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/40 hover:shadow-[0_4px_25px_rgba(6,182,212,0.08)] transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyanCustom transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purpleCustom"></span>
                <span>{categoryObj.category}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryObj.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900/60 text-slate-300 border border-slate-800 group-hover:border-slate-700/80 transition-all duration-300 hover:text-cyanCustom-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
              className="glassmorphism p-8 rounded-2xl border border-slate-800 hover:border-purpleCustom/40 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-cyanCustom/10 text-cyanCustom-light border border-cyanCustom/20"
                      >
                        {tech}
                      </span>
                    ))}
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
                </div>
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
    </div>
  );
}

export default App;
