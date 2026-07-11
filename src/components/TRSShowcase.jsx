import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTicketAlt, FaUserShield, FaUserPlus, FaUserCheck, FaCogs, FaCheckCircle, 
  FaClock, FaTimes, FaGithub, FaTerminal, FaDatabase, FaShieldAlt, FaLayerGroup, 
  FaArrowRight, FaPlusCircle, FaRegBell, FaLaptopCode
} from 'react-icons/fa';

const TRSShowcase = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeRole, setActiveRole] = useState('user'); // 'user', 'admin', 'vendor'
  const [simulatedLogs, setSimulatedLogs] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Initial Ticket List
  const [tickets, setTickets] = useState([
    { id: 'TKT-101', title: 'MySQL Connection Pool Leak in Production', category: 'Database', status: 'Open', priority: 'High', assignedTo: 'Unassigned', reportedBy: 'System Monitor' },
    { id: 'TKT-102', title: 'Admin Dashboard fails to filter by date range', category: 'Frontend', status: 'In Progress', priority: 'Medium', assignedTo: 'Vendor TechCorp', reportedBy: 'Anupam (Admin)' },
    { id: 'TKT-103', title: 'Session timeout occurs too frequently in vendor panel', category: 'Security', status: 'Resolved', priority: 'High', assignedTo: 'Vendor SecureNet', reportedBy: 'Rohan (Vendor)' }
  ]);

  // Form State for Ticket Creation
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Frontend');
  const [newPriority, setNewPriority] = useState('Low');

  // Logs helper
  const addLog = (msg) => {
    setSimulatedLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  // 1. User: Create Ticket
  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSimulating(true);
    addLog(`User submitted ticket: "${newTitle}"`);
    addLog(`Validating session authentication claims... JWT verified.`);
    
    setTimeout(() => {
      const ticketId = `TKT-${Math.floor(100 + Math.random() * 900)}`;
      const newTicket = {
        id: ticketId,
        title: newTitle,
        category: newCategory,
        status: 'Open',
        priority: newPriority,
        assignedTo: 'Unassigned',
        reportedBy: 'DemoUser (Employee)'
      };
      setTickets(prev => [newTicket, ...prev]);
      addLog(`MySQL DB INSERT SUCCESS: Created ${ticketId} in "tickets" table.`);
      addLog(`Triggering admin notification alert: New Ticket Created.`);
      
      setNewTitle('');
      setIsSimulating(false);
    }, 1000);
  };

  // 2. Admin: Assign Ticket to Vendor
  const handleAssignTicket = (ticketId, vendorName) => {
    setIsSimulating(true);
    addLog(`Admin assigning ${ticketId} to vendor: "${vendorName}"...`);
    
    setTimeout(() => {
      setTickets(prev => prev.map(t => {
        if (t.id === ticketId) {
          return { ...t, status: 'In Progress', assignedTo: vendorName };
        }
        return t;
      }));
      addLog(`MySQL DB UPDATE SUCCESS: Assigned ${ticketId} to ${vendorName}. Status changed to "In Progress".`);
      addLog(`Dispatched email remainder to ${vendorName}@nhpc.gov.in`);
      setIsSimulating(false);
    }, 1000);
  };

  // 3. Vendor: Resolve Ticket
  const handleResolveTicket = (ticketId) => {
    setIsSimulating(true);
    addLog(`Vendor submitting resolution report for ${ticketId}...`);
    
    setTimeout(() => {
      setTickets(prev => prev.map(t => {
        if (t.id === ticketId) {
          return { ...t, status: 'Resolved' };
        }
        return t;
      }));
      addLog(`MySQL DB UPDATE SUCCESS: ${ticketId} set to "Resolved".`);
      addLog(`Workflow Notification: Resolution report ready for Admin review.`);
      setIsSimulating(false);
    }, 1000);
  };

  // 4. Admin/User: Close Ticket
  const handleCloseTicket = (ticketId) => {
    setIsSimulating(true);
    addLog(`Closing resolved ticket ${ticketId}. Archiving workflow logs...`);
    
    setTimeout(() => {
      setTickets(prev => prev.map(t => {
        if (t.id === ticketId) {
          return { ...t, status: 'Closed' };
        }
        return t;
      }));
      addLog(`MySQL DB UPDATE SUCCESS: ${ticketId} marked as "Closed".`);
      addLog(`Ticket lifecycle complete for ${ticketId}.`);
      setIsSimulating(false);
    }, 1000);
  };

  const stats = [
    { label: 'Database Engine', value: 'MySQL (Relational)' },
    { label: 'Server Runtime', value: 'Node.js + Express' },
    { label: 'Interface Library', value: 'Bootstrap + CSS' },
    { label: 'Rendering Engine', value: 'EJS Templates' }
  ];

  const features = [
    { icon: <FaUserShield />, title: 'Role-Based Authentication', desc: 'Secure session control separating Admin commands, Vendor resolutions, and User complaints.' },
    { icon: <FaTicketAlt />, title: 'Lifecycle Status Engine', desc: 'Strict state transition loop: Open → In Progress → Resolved → Closed preventing orphan claims.' },
    { icon: <FaDatabase />, title: 'Normalized MySQL Schema', desc: 'Optimized table relations mapping Users, Vendors, Projects, Tickets, and Audit Trails.' },
    { icon: <FaRegBell />, title: 'Automated Reminders', desc: 'Background cron reminders alerting vendors of pending tasks and past-due SLA resolution timelines.' },
    { icon: <FaCogs />, title: 'Analytics Dashboard', desc: 'Central dashboard showcasing ticket throughput, pending loads, and vendor efficiency metrics.' },
    { icon: <FaLaptopCode />, title: 'EJS Template Views', desc: 'Server-side rendered dynamic HTML templates optimized for rapid browser rendering speeds.' }
  ];

  const steps = [
    { number: "01", title: "Ticket Initiation", desc: "User drafts an issue request. The system parses critical fields, records reporter metadata, and saves state as 'Open'." },
    { number: "02", title: "Admin Assignment", desc: "Admin reviews incoming backlog tickets, determines priority level, and routes the ticket to the designated Vendor." },
    { number: "03", title: "Vendor Resolution", desc: "Vendor accesses their specialized console, views tasks, implements the resolution, and flags state as 'Resolved'." },
    { number: "04", title: "Audit & Close", desc: "Admin inspects the vendor's fix notes, verifies resolution validity, and commits state transition to 'Closed'." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Background Neon Elements */}
      <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-purpleCustom/10 rounded-full blur-[120px] -z-10 animate-pulse duration-[7000ms]"></div>
      <div className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] bg-cyanCustom/10 rounded-full blur-[130px] -z-10 animate-pulse duration-[9000ms]"></div>
      
      {/* Cyberpunk Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30"></div>

      {/* Header Sticky */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-cyanCustom/10 border border-cyanCustom/30 text-cyanCustom">ENTERPRISE PROJECT</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">NHPC LIMITED (TRS)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-slate-500 text-xs italic hidden md:inline">Private Enterprise Codebase (GitHub Hidden)</span>
          <button 
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all font-semibold text-sm"
          >
            <FaTimes />
            <span>Exit Case Study</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* ================= HERO / HEADER SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">
              Enterprise Operations & Workflow
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white animate-fade-in">
              Ticket Resolution <br/>
              <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                System (TRS)
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              An enterprise-level solution designed during my internship in the IT department of NHPC Limited. Streamlines internal issue reporting, ticket routing, vendor task assignments, and lifecycle tracking to accelerate problem-solving at scale.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/60 p-4 rounded-xl text-center">
                  <div className="text-sm md:text-base font-black text-cyanCustom">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#trs-simulator"
                className="px-6 py-3.5 bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 border border-white/5"
              >
                <FaCogs size={14} />
                <span>Open Lifecycle Simulator</span>
              </a>
              <button 
                onClick={() => setActiveTab('features')}
                className="px-6 py-3.5 glassmorphism border border-slate-800 hover:border-cyanCustom/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaLayerGroup />
                <span>Technical Specifications</span>
              </button>
            </div>
          </div>

          {/* Right Column: Database Schema Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-cyanCustom/10 blur-2xl"></div>
            
            {/* Visual SQL Schema Box */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800/80 w-full max-w-[380px] shadow-2xl relative space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <FaDatabase className="text-cyanCustom" />
                  <span className="text-xs font-bold text-slate-200">MySQL Table Schema</span>
                </div>
                <span className="text-[9px] bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20 px-2 py-0.5 rounded font-mono">RELATIONAL</span>
              </div>
              
              <div className="space-y-3 font-mono text-[10px]">
                <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900 space-y-1">
                  <span className="text-purpleCustom font-bold">TABLE: users</span>
                  <div className="text-slate-500 pl-2">
                    id INT PRIMARY KEY AUTO_INCREMENT<br/>
                    username VARCHAR(50) UNIQUE<br/>
                    password_hash VARCHAR(255)<br/>
                    role ENUM('Admin', 'Vendor', 'User')
                  </div>
                </div>
                
                <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900 space-y-1">
                  <span className="text-cyanCustom font-bold">TABLE: tickets</span>
                  <div className="text-slate-500 pl-2">
                    id VARCHAR(10) PRIMARY KEY<br/>
                    title VARCHAR(150)<br/>
                    status ENUM('Open', 'In Progress', 'Resolved', 'Closed')<br/>
                    assigned_vendor_id INT FOREIGN KEY<br/>
                    created_by_id INT FOREIGN KEY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TABS NAVIGATION ================= */}
        <div className="border-b border-slate-800 pb-px">
          <div className="flex gap-6">
            {['overview', 'simulator', 'features', 'steps'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'simulator') {
                    // Scroll to simulator section automatically
                    setTimeout(() => {
                      document.getElementById('trs-simulator')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className={`pb-4 text-sm font-bold tracking-wider uppercase border-b-2 transition-all relative ${activeTab === tab ? 'border-cyanCustom text-cyanCustom' : 'border-transparent text-slate-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================= TABS BODY ================= */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Project Backstory & Goal</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  During my internship within NHPC's IT Department, I observed the need for a simplified, centralized platform to route equipment, software, and networking issues reported by personnel to our respective technical vendors. 
                </p>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  We engineered **TRS** using a lightweight, highly stable server footprint (Node.js + Express) running against a localized MySQL transaction server to handle thousands of concurrently reported system tickets.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Internship Contribution</h3>
                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex gap-3">
                    <span className="text-cyanCustom font-bold">✓</span>
                    <span>Designed normalized relational tables mapping users, tickets, and assignment workloads.</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex gap-3">
                    <span className="text-cyanCustom font-bold">✓</span>
                    <span>Implemented role-based authorization to protect system configurations and access panels.</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex gap-3">
                    <span className="text-cyanCustom font-bold">✓</span>
                    <span>Created email notification reminders to ensure vendors adhere to internal service SLAs.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {features.map((feat, i) => (
                <div key={i} className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all group">
                  <div className="p-3 rounded-xl bg-cyanCustom/10 text-cyanCustom w-fit mb-4 group-hover:bg-cyanCustom group-hover:text-darkNavy transition-all">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'steps' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
            >
              {steps.map((step, idx) => (
                <div key={idx} className="glassmorphism p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 group">
                  <span className="text-4xl font-extrabold text-slate-800 group-hover:text-cyanCustom/20 transition-all duration-300 font-mono block">{step.number}</span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-cyanCustom transition-colors">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= INTERACTIVE TICKET LIFE-CYCLE SIMULATOR ================= */}
        <div id="trs-simulator" className="space-y-8 pt-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-purpleCustom">Interactive Module Simulator</span>
            <h2 className="text-3xl font-extrabold text-white">TRS Operations Console</h2>
            <p className="text-slate-400 text-sm mt-2">Switch between User, Admin, and Vendor roles to test ticket progression, database logging, and alerts.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Terminal logs (Left) */}
            <div className="lg:col-span-5 bg-black/85 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-left h-[420px] flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center space-x-2 text-slate-500 border-b border-slate-900 pb-3 mb-4 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] pl-2">TRS_TRANSACT_LOGGER</span>
                </div>
                
                <div className="space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin text-[11px] text-slate-300">
                  {simulatedLogs.length === 0 ? (
                    <span className="text-slate-500">// Transaction logs will render here in real-time. Try changing roles or creating a ticket.</span>
                  ) : (
                    simulatedLogs.map((log, idx) => (
                      <div key={idx} className={log.includes('SUCCESS') ? 'text-green-400' : log.includes('JWT') ? 'text-purpleCustom-light' : 'text-slate-350'}>
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-3 flex justify-between">
                <span>MySQL Status: ACTIVE</span>
                <span>Active Role session: {activeRole.toUpperCase()}</span>
              </div>
            </div>

            {/* Interactive Panel (Right) */}
            <div className="lg:col-span-7 glassmorphism rounded-2xl border border-slate-800 flex flex-col justify-between h-[420px] shadow-2xl overflow-hidden text-left">
              
              {/* Header with Switcher Tabs */}
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap justify-between items-center gap-3">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white">System Simulator Workspace</h4>
                  <span className="text-[10px] text-slate-500">Select simulated auth role:</span>
                </div>
                <div className="flex gap-2">
                  {['user', 'admin', 'vendor'].map(role => (
                    <button 
                      key={role}
                      onClick={() => {
                        setActiveRole(role);
                        addLog(`Auth Session: Switched active role to "${role.toUpperCase()}"`);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${activeRole === role ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-white'}`}
                    >
                      {role.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Workspace Area */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs bg-slate-950/40">
                
                {/* 1. USER WORKSPACE */}
                {activeRole === 'user' && (
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-slate-400 block">Report / File a Technical Issue</span>
                    <form onSubmit={handleCreateTicket} className="space-y-3 bg-slate-900/40 p-4 border border-slate-800 rounded-xl">
                      <div className="space-y-1.5">
                        <label className="block text-slate-400 font-semibold">Issue Title / Description</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Printer offline in Room 204 or database timeout..."
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyanCustom text-xs" 
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="block text-slate-400 font-semibold">Category</label>
                          <select 
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-300 focus:outline-none focus:border-cyanCustom text-xs"
                          >
                            <option>Database</option>
                            <option>Frontend</option>
                            <option>Security</option>
                            <option>Hardware</option>
                            <option>Network</option>
                          </select>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="block text-slate-400 font-semibold">Priority</label>
                          <select 
                            value={newPriority}
                            onChange={(e) => setNewPriority(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-300 focus:outline-none focus:border-cyanCustom text-xs"
                          >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSimulating}
                        className="w-full py-2.5 bg-cyanCustom hover:bg-cyanCustom-dark disabled:opacity-50 text-darkNavy font-black rounded-lg transition-colors text-xs flex items-center justify-center space-x-1.5"
                      >
                        <FaPlusCircle />
                        <span>Insert Ticket & Trigger Alert</span>
                      </button>
                    </form>
                  </div>
                )}

                {/* 2. ADMIN WORKSPACE */}
                {activeRole === 'admin' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 block">System Ticket Management Log</span>
                    <div className="space-y-2">
                      {tickets.map(t => (
                        <div key={t.id} className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl flex justify-between items-center gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white font-mono">{t.id}</span>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                                t.status === 'Open' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                                t.status === 'In Progress' ? 'bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20 animate-pulse' :
                                t.status === 'Resolved' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                                'bg-green-500/10 text-green-400 border border-green-500/20'
                              }`}>
                                {t.status}
                              </span>
                              <span className="text-[10px] text-slate-500">{t.category}</span>
                            </div>
                            <p className="text-slate-300 font-semibold text-xs leading-relaxed">{t.title}</p>
                            <p className="text-[10px] text-slate-500">Assigned To: <span className="text-slate-400">{t.assignedTo}</span></p>
                          </div>

                          <div className="flex flex-col gap-2">
                            {t.status === 'Open' && (
                              <button 
                                onClick={() => handleAssignTicket(t.id, 'Vendor HCLTech')}
                                disabled={isSimulating}
                                className="px-2.5 py-1.5 bg-purpleCustom hover:bg-purpleCustom-dark text-white rounded font-bold transition-all text-[10px]"
                              >
                                Route to Vendor
                              </button>
                            )}
                            {t.status === 'Resolved' && (
                              <button 
                                onClick={() => handleCloseTicket(t.id)}
                                disabled={isSimulating}
                                className="px-2.5 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded font-bold transition-all text-[10px]"
                              >
                                Approve & Close
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. VENDOR WORKSPACE */}
                {activeRole === 'vendor' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 block">Vendor Assigned Tasks (NHPC SLA Router)</span>
                    <div className="space-y-2">
                      {tickets.filter(t => t.assignedTo !== 'Unassigned').map(t => (
                        <div key={t.id} className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex justify-between items-center gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-200 font-mono text-[10px]">{t.id}</span>
                              <span className="text-slate-500 text-[10px]">{t.assignedTo}</span>
                            </div>
                            <p className="text-white font-semibold text-xs leading-relaxed">{t.title}</p>
                            <p className="text-[10px] text-slate-500">Lifecycle State: <span className="text-cyanCustom">{t.status}</span></p>
                          </div>
                          
                          {t.status === 'In Progress' && (
                            <button
                              onClick={() => handleResolveTicket(t.id)}
                              disabled={isSimulating}
                              className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded font-bold transition-all text-[10px]"
                            >
                              Flag Resolved
                            </button>
                          )}
                        </div>
                      ))}
                      
                      {tickets.filter(t => t.assignedTo !== 'Unassigned').length === 0 && (
                        <div className="text-center py-6 text-slate-500">No vendor tasks routed yet. Switch to "ADMIN" to assign open tickets.</div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Console Status Footer */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between items-center">
                <span>Realtime MySQL Engine simulation active</span>
                <span>Console active: {activeRole.toUpperCase()}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer info */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} NHPC TRS Case Study. Engineered by Anupam Kumar.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TRSShowcase;
