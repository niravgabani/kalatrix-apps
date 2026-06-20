import { motion } from 'motion/react';
import { Mail, MapPin, Send, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Build Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question or a business proposal? We'd love to hear from you. Get in touch with our team today.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel p-8"
           >
              <h3 className="text-2xl font-bold mb-8 italic">Contact Information</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                       <Mail className="text-brand-400" />
                    </div>
                    <div>
                       <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Email Us</div>
                       <a href="mailto:viralgk23@gmail.com" className="text-lg font-semibold hover:text-brand-400 transition-colors">viralgk23@gmail.com</a>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                       <MapPin className="text-brand-400" />
                    </div>
                    <div>
                       <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Visit Location</div>
                       <p className="text-lg font-semibold italic text-slate-200">
                         Gajera Circle,<br />
                         Katargam, Surat, Gujarat, India
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                       <MessageCircle className="text-brand-400" />
                    </div>
                    <div>
                       <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Social Chat</div>
                       <p className="text-lg font-semibold">Available on WhatsApp & Telegram</p>
                    </div>
                 </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                 <div className="flex flex-col gap-4">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mb-2">Legal Registry</div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-2">
                       <p className="text-sm font-medium text-slate-300">Kalatrix Apps</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        <div className="lg:col-span-7">
           <motion.form 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel p-8 md:p-10 space-y-6"
             onSubmit={(e) => e.preventDefault()}
           >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all font-medium text-white placeholder:text-slate-700"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all font-medium text-white placeholder:text-slate-700"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                 <select className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500/50 transition-all font-medium text-white appearance-none">
                    <option>General Inquiry</option>
                    <option>App Support</option>
                    <option>Business Proposal</option>
                    <option>Job Application</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                 <textarea 
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all font-medium text-white placeholder:text-slate-700 resize-none"
                 />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] mt-4"
              >
                 Send Message
                 <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </motion.form>
        </div>
      </div>
    </section>
  );
}
