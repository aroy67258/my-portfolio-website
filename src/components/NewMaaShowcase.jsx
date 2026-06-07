import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserCheck, FaUserTimes, FaLock, FaDatabase, FaCheckCircle, FaTimes, 
  FaGithub, FaExternalLinkAlt, FaCogs, FaChevronRight, FaGlobe, FaClipboardList, 
  FaTerminal, FaBoxes, FaPercentage, FaShieldAlt, FaKey, FaClock, FaCheck
} from 'react-icons/fa';

const NewMaaShowcase = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingRetailers, setPendingRetailers] = useState([
    { id: 1, shopName: 'Maa Durga Medico', owner: 'Ramesh Prasad', location: 'Samastipur, Bihar', drugLicense: 'DL-20849/B', phone: '+91 99342 58104', status: 'pending' },
    { id: 2, shopName: 'Kalyan Pharmacy', owner: 'Amit Kumar', location: 'Darbhanga, Bihar', drugLicense: 'DL-18452/B', phone: '+91 97094 33215', status: 'pending' }
  ]);
  const [approvedRetailers, setApprovedRetailers] = useState([]);
  const [activeView, setActiveView] = useState('retailer'); // 'retailer' or 'admin'
  const [mockProducts, setMockProducts] = useState([
    { id: 1, name: 'Pantoprazole 40mg', packing: '10x10 Tablets', mrp: '₹120', rate: '₹45', stock: '250 Boxes', category: 'General' },
    { id: 2, name: 'Amoxycillin & Clavulanate 625mg', packing: '6x10 Tablets', mrp: '₹200', rate: '₹85', stock: '120 Boxes', category: 'Antibiotics' },
    { id: 3, name: 'Rosuvastatin 10mg', packing: '10x15 Tablets', mrp: '₹240', rate: '₹95', stock: '80 Boxes', category: 'Cardio' }
  ]);
  const [mockOffers, setMockOffers] = useState([
    { id: 1, title: 'Monsoon Special Offer', desc: 'Flat 12% extra discount on general division orders above ₹10,000.', active: true },
    { id: 2, title: 'Bulk Bonus Buy', desc: 'Buy 20 boxes of Pantoprazole and get 2 boxes completely free.', active: true }
  ]);
  
  // Form states
  const [newOfferTitle, setNewOfferTitle] = useState('');
  const [newOfferDesc, setNewOfferDesc] = useState('');
  const [showAddOffer, setShowAddOffer] = useState(false);

  const [simulatedLogs, setSimulatedLogs] = useState([]);
  const [isSimulatingDb, setIsSimulatingDb] = useState(false);

  const addLog = (msg) => {
    setSimulatedLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleApprove = (retailer) => {
    setIsSimulatingDb(true);
    addLog(`Initiating approval transaction for "${retailer.shopName}"...`);
    addLog(`Verifying drug license: ${retailer.drugLicense}`);
    
    setTimeout(() => {
      setPendingRetailers(prev => prev.filter(r => r.id !== retailer.id));
      setApprovedRetailers(prev => [...prev, { ...retailer, status: 'approved' }]);
      addLog(`Updated retailer status in database: SUCCESS.`);
      addLog(`Triggering secure email access credentials.`);
      addLog(`Supabase Auth profile synced for ${retailer.owner}.`);
      setIsSimulatingDb(false);
    }, 1200);
  };

  const handleAddOffer = (e) => {
    e.preventDefault();
    if (!newOfferTitle || !newOfferDesc) return;
    
    setIsSimulatingDb(true);
    addLog(`Pushing new marketing campaign to Supabase "offers" table...`);
    
    setTimeout(() => {
      const newOffer = {
        id: Date.now(),
        title: newOfferTitle,
        desc: newOfferDesc,
        active: true
      };
      setMockOffers(prev => [newOffer, ...prev]);
      addLog(`Offer database sync complete. Realtime broadcast triggered.`);
      setNewOfferTitle('');
      setNewOfferDesc('');
      setShowAddOffer(false);
      setIsSimulatingDb(false);
    }, 1000);
  };

  const stats = [
    { label: 'Database & Auth Integration', value: 'Supabase DB' },
    { label: 'Role Security Enforcement', value: 'Row Level (RLS)' },
    { label: 'Deployment Strategy', value: 'Vercel CI/CD' },
    { label: 'Performance Audit Score', value: '98/100 Light' }
  ];

  const features = [
    { icon: <FaUserCheck />, title: 'Retailer Approval Workflow', desc: 'Secure signup pipeline requiring drug license authentication and manual admin verification.' },
    { icon: <FaCogs />, title: 'Interactive Admin Console', desc: 'Dynamic interface to upload wholesale pricing models, product inventories, and marketing offers.' },
    { icon: <FaShieldAlt />, title: 'Supabase RLS Protection', desc: 'Strict database Row Level Security ensuring retail pricing is hidden from unverified visitors.' },
    { icon: <FaBoxes />, title: 'Product & Offers Showcase', desc: 'Sleek categorized catalogs showcasing products, composition, batch sizes, and commercial schemes.' },
    { icon: <FaGlobe />, title: 'Production Edge Deployment', desc: 'Deployed globally on Vercel with automatic builds triggered on GitHub main merges.' },
    { icon: <FaTerminal />, title: 'Session Persistence', desc: 'JWT-based token renewal maintaining credentials across tabs and browser restarts securely.' }
  ];

  const steps = [
    { number: "01", title: "Retailer Registration", desc: "Local pharmacists apply online by uploading their business credentials, phone number, and Drug License." },
    { number: "02", title: "Admin Audit & Approve", desc: "The distributor reviews applicant authenticity in the central dashboard and flags them as approved." },
    { number: "03", title: "Auth Credentials Sync", desc: "Supabase authentication flags are flipped, updating JWT payload claims to grant permission roles." },
    { number: "04", title: "B2B Catalog Access", desc: "Approved buyers sign in, view custom wholesale rate sheets, and draft bulk supply inquiries directly." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Glow Effects */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-cyanCustom/10 rounded-full blur-[120px] -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-purpleCustom/10 rounded-full blur-[150px] -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20"></div>

      {/* Header Sticky */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-cyanCustom/10 border border-cyanCustom/30 text-cyanCustom">FLAGSHIP PRODUCTION APP</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">NEW MAA ENTERPRISES</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/aroy67258" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-cyanCustom p-2 hover:bg-slate-800/50 rounded-xl border border-slate-800 transition-colors"
          >
            <FaGithub size={18} />
          </a>
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
        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center space-x-2 text-cyanCustom font-bold text-xs uppercase tracking-widest bg-cyanCustom/10 w-fit px-3 py-1 rounded-full border border-cyanCustom/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom animate-ping"></span>
              <span>Live Flagship Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white animate-fade-in">
              New Maa Enterprises <br/>
              <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                Digital Business Platform
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              A production-ready full-stack business portal and retail B2B distributor portal. Specially designed for pharmaceutical distributors, enabling secure pharmacist authorization, catalog pricing verification, and centralized database control.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/60 p-4 rounded-xl text-center">
                  <div className="text-sm md:text-base font-black text-cyanCustom">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://www.newmaaenterprises.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-cyanCustom to-cyanCustom-dark text-darkNavy font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <FaGlobe size={14} />
                <span>Launch Live Website</span>
              </a>
              <a 
                href="#interactive-demo"
                className="px-6 py-3.5 glassmorphism border border-slate-800 hover:border-purpleCustom/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaCogs size={14} />
                <span>Explore Interactive Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Platform UI Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-cyanCustom/10 blur-2xl"></div>

            {/* Auth Shield Mockup */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800/80 w-full max-w-[380px] shadow-2xl relative space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <FaLock className="text-purpleCustom" />
                  <span className="text-xs font-bold text-slate-200">Supabase Auth Shield</span>
                </div>
                <span className="text-[9px] bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20 px-2 py-0.5 rounded font-mono">ROLE: ADMIN</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-900 space-y-2 text-xs">
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Database Status</span>
                    <span className="text-green-400">Connected</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Row Level Security (RLS)</span>
                    <span className="text-green-400">Enforced</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>API Policy</span>
                    <span className="text-purpleCustom-light">Read-Only for Guest</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purpleCustom/10 to-cyanCustom/10 p-3.5 rounded-xl border border-purpleCustom/20 text-xs leading-relaxed text-slate-300">
                  <span className="font-semibold text-purpleCustom-light block mb-1">Row Level Security rule:</span>
                  <code className="text-[10px] font-mono text-cyanCustom block">
                    CREATE POLICY "Approved only" ON products FOR SELECT USING ( auth.jwt() -&gt; 'user_metadata' -&gt;&gt; 'approved' = 'true' );
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE WORKFLOW PREVIEW ================= */}
        <div id="interactive-demo" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Platform Operation Simulator</h2>
            <p className="text-slate-400 text-sm mt-2">Simulate real retailer onboarding approvals and real-time content changes in the admin board.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Database Logs Terminal */}
            <div className="lg:col-span-5 bg-black/85 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-left h-[380px] flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center space-x-2 text-slate-500 border-b border-slate-900 pb-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] pl-2">SUPABASE_REALTIME_STREAM</span>
                </div>
                <div className="space-y-2 max-h-[260px] overflow-y-auto scrollbar-thin text-[11px] text-slate-300">
                  {simulatedLogs.length === 0 ? (
                    <span className="text-slate-500">// Action logs will output here. Click "Approve Retailer" or "Add Offer" to simulate.</span>
                  ) : (
                    simulatedLogs.map((log, idx) => (
                      <div key={idx} className={log.includes('SUCCESS') ? 'text-green-400' : log.includes('Initiating') ? 'text-cyanCustom' : 'text-slate-300'}>
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-3 flex justify-between">
                <span>Supabase: live connection</span>
                <span>Auth: JWT-Active</span>
              </div>
            </div>

            {/* Interactive UI Panels */}
            <div className="lg:col-span-7 glassmorphism rounded-2xl border border-slate-800 flex flex-col justify-between h-[380px] shadow-2xl overflow-hidden text-left">
              {/* Header Panel Tabs */}
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">Platform Workspace</h4>
                  <p className="text-[10px] text-slate-500">Testing full-stack authentication roles</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveView('retailer')} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${activeView === 'retailer' ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-white'}`}
                  >
                    B2B Onboarding Approval
                  </button>
                  <button 
                    onClick={() => setActiveView('admin')} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${activeView === 'admin' ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-white'}`}
                  >
                    B2B Offer Catalog
                  </button>
                </div>
              </div>

              {/* Workspace Body Panel */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs bg-slate-950/40">
                {activeView === 'retailer' && (
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-slate-400 block">Pending Registration Verification Requests</span>
                    
                    {pendingRetailers.length === 0 && approvedRetailers.length === 0 && (
                      <div className="text-center py-6 text-slate-500">No applicants in list. Reload to test again.</div>
                    )}
                    
                    <div className="space-y-3">
                      {pendingRetailers.map((ret) => (
                        <div key={ret.id} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex justify-between items-center gap-4">
                          <div className="space-y-1.5">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-white text-sm">{ret.shopName}</span>
                              <span className="px-1.5 py-0.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[9px] rounded font-mono font-bold">Verification Pending</span>
                            </div>
                            <p className="text-slate-400 text-[11px] leading-relaxed">
                              Owner: {ret.owner} | Location: {ret.location} <br/>
                              Drug Lic: <span className="font-mono text-purpleCustom-light">{ret.drugLicense}</span> | Phone: {ret.phone}
                            </p>
                          </div>
                          <button
                            onClick={() => handleApprove(ret)}
                            disabled={isSimulatingDb}
                            className="px-3.5 py-2 bg-cyanCustom hover:bg-cyanCustom-light disabled:opacity-50 text-darkNavy font-extrabold rounded-lg transition-colors text-xs whitespace-nowrap"
                          >
                            Verify & Approve
                          </button>
                        </div>
                      ))}
                      
                      {approvedRetailers.map((ret) => (
                        <div key={ret.id} className="p-4 bg-green-950/10 border border-green-500/20 rounded-xl flex justify-between items-center gap-4">
                          <div className="space-y-1.5">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-slate-300 text-sm">{ret.shopName}</span>
                              <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[9px] rounded font-mono font-bold flex items-center gap-1"><FaCheck size={8} /> Active Wholesale B2B Account</span>
                            </div>
                            <p className="text-slate-500 text-[11px] leading-relaxed">
                              Owner: {ret.owner} | Location: {ret.location} <br/>
                              Drug Lic: <span className="font-mono">{ret.drugLicense}</span> | Phone: {ret.phone}
                            </p>
                          </div>
                          <span className="text-green-400 font-bold text-xs px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">Verified</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeView === 'admin' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400">Current Marketing Offers & B2B Campaigns</span>
                      <button 
                        onClick={() => setShowAddOffer(!showAddOffer)} 
                        className="px-2.5 py-1 bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20 hover:bg-purpleCustom hover:text-white rounded-md font-semibold transition-all text-xs"
                      >
                        {showAddOffer ? 'View Offers' : '+ Create New Offer'}
                      </button>
                    </div>

                    {showAddOffer ? (
                      <form onSubmit={handleAddOffer} className="space-y-3 bg-slate-900/40 p-4 border border-slate-800 rounded-xl">
                        <div className="space-y-1">
                          <label className="block text-slate-500 font-semibold">Offer Title</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Diwali Dhamaka wholesale scheme"
                            value={newOfferTitle}
                            onChange={(e) => setNewOfferTitle(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-cyanCustom text-xs" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-slate-500 font-semibold">Campaign Description / Terms</label>
                          <textarea 
                            required 
                            placeholder="e.g. Buy 50 boxes of Antibiotics and get an extra 5% cash-back."
                            value={newOfferDesc}
                            onChange={(e) => setNewOfferDesc(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-cyanCustom text-xs resize-none h-16" 
                          />
                        </div>
                        <button 
                          type="submit" 
                          disabled={isSimulatingDb}
                          className="w-full py-2 bg-gradient-to-r from-purpleCustom to-cyanCustom text-white font-bold rounded-lg text-xs"
                        >
                          Sync Campaign to Database
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-2.5">
                        {mockOffers.map((off) => (
                          <div key={off.id} className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-white text-xs">{off.title}</span>
                              <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-mono">Active Live</span>
                            </div>
                            <p className="text-slate-400 text-[11px] leading-relaxed">{off.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between items-center">
                <span>Realtime client sync active</span>
                <span>Active view: {activeView === 'retailer' ? 'User Verification' : 'Campaign Dashboard'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DETAILED FEATURE CARDS ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-cyanCustom">Key Technical Modules</span>
            <h2 className="text-3xl font-extrabold text-white">Full-Stack Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 hover:shadow-[0_4px_20px_rgba(6,182,212,0.06)] transition-all group text-left"
              >
                <div className="p-3.5 rounded-xl bg-cyanCustom/10 text-cyanCustom w-fit mb-4 group-hover:bg-cyanCustom group-hover:text-darkNavy transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WORKFLOW TIMELINE ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Retailer Registration & Verification Loop</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="glassmorphism p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 relative group">
                <span className="text-4xl font-extrabold text-slate-800 group-hover:text-cyanCustom/20 transition-all duration-300 font-mono block">{step.number}</span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-purpleCustom transition-colors">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SYSTEM TECH STACK ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Architecture Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-left">
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-cyanCustom mb-3 border-b border-slate-800 pb-2">Frontend Framework</h3>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">React.js 18</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">TypeScript</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Tailwind CSS v3</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Framer Motion</span>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-purpleCustom mb-3 border-b border-slate-800 pb-2">Backend & Database</h3>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Supabase API</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">PostgreSQL DB</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Realtime Engine</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Supabase Storage</span>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-cyanCustom-light mb-3 border-b border-slate-800 pb-2">Security & Policies</h3>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Row Level Security</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">JWT Credentials</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Secure RPC Calls</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Env Protection</span>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-purpleCustom-light mb-3 border-b border-slate-800 pb-2">DevOps & Hosting</h3>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">GitHub Version Control</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Vercel Automation</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Production SSL</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Static Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BUSINESS IMPACT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaPercentage className="text-cyanCustom" />
              <span>Project & Business Impact</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developed as a dedicated digital solution for New Maa Enterprises, optimizing retailer relationship pipelines:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom"></span>
                <span>Established an authentic digital presence for a regional pharmaceutical distributorship company.</span>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom"></span>
                <span>Substantially elevated business visibility, search discoverability, and local brand credibility.</span>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom"></span>
                <span>Crafted a secure, robust, and scalable codebase prepared for e-commerce and retail expansion.</span>
              </div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaCogs className="text-purpleCustom-light" />
              <span>Future Roadmaps</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Targeted future updates for the retailer distribution platform include:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purpleCustom-light"></span>
                <span>Live payment gateway checkouts (UPI & bank transfers) for wholesale bulk bookings.</span>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purpleCustom-light"></span>
                <span>Realtime dispatch tracking synchronizing supply chain logistics status to the retailer panel.</span>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purpleCustom-light"></span>
                <span>Automated PDF invoice generation and billing summaries triggered via database webhooks.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info inside modal */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} New Maa Enterprises Platform. Engineered by Anupam Kumar.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewMaaShowcase;
