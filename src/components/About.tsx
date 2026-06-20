import { motion } from 'motion/react';
import { Shield, Target, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">About the Company</div>
          <h2 className="text-4xl font-display font-bold mb-8">Our Mission & Foundation</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Kalatrix Apps is an independent software company based in Gujarat, India. Our primary focus is developing high-quality utility apps, productivity tools, and innovative digital experiences that simplify daily life for users worldwide.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            We believe in the power of clean code, intuitive design, and robust security. Every application we publish undergoes rigorous testing to ensure it meets our exacting standards of performance and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-white/5">
                <Target className="text-brand-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Quality Focused</h4>
                <p className="text-sm text-slate-500">Committed to excellence in every line of code.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-white/5">
                <Shield className="text-brand-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Secure by Design</h4>
                <p className="text-sm text-slate-500">Protecting user data is our top priority.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-panel overflow-hidden">
             <div className="p-8 bg-linear-to-br from-slate-900 to-slate-950">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-16 h-16 rounded-full bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                      <User size={32} className="text-brand-400" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold">Kalatrix Apps</h3>
                      <p className="text-brand-400 font-medium">Founder & Legal Owner</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/5 pb-2 text-sm italic">
                      <span className="text-slate-500 tracking-wider font-medium">Company Name:</span>
                      <span className="text-slate-300">Kalatrix Apps</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2 text-sm italic">
                      <span className="text-slate-500 tracking-wider font-medium">Business Type:</span>
                      <span className="text-slate-300">Mobile Development</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2 text-sm italic">
                      <span className="text-slate-500 tracking-wider font-medium">Location:</span>
                      <span className="text-slate-300 text-right">Katargam, Surat, India</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2 text-sm italic">
                      <span className="text-slate-500 tracking-wider font-medium">Status:</span>
                      <span className="text-emerald-500 flex items-center gap-1">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                         Verified Registered Business
                      </span>
                   </div>
                </div>
                <div className="mt-8 p-4 rounded-xl bg-brand-500/5 border border-brand-500/10 text-center text-xs text-brand-300 uppercase tracking-widest font-bold">
                   D-U-N-S REGISTERED & APPLE VERIFIED
                </div>
             </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/10 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
