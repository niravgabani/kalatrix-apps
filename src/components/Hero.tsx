import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Smartphone, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              <span>Next-Gen Mobile Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Innovative <span className="gradient-text">Mobile Apps</span> & Digital Solutions
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Kalatrix Apps builds smart, secure, and user-friendly mobile applications for Android and iOS platforms. Empowering your digital presence with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all group hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
              >
                Contact Us
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#apps" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Our Apps
                <ArrowRight size={20} className="text-slate-500" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="flex items-center gap-2">
                <Smartphone size={24} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-400">iOS Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={24} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-400">Android Leader</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Visual representation of an app layout or abstract tech */}
            <div className="relative z-20 glass-panel p-2 aspect-[4/5] max-w-[400px] mx-auto overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
               <div className="bg-slate-900 h-full w-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-br from-brand-600/20 to-transparent"></div>
                  <div className="p-6 space-y-6">
                    <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                       <Smartphone className="text-brand-400/20 w-16 h-16 animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-full bg-white/10 rounded-full"></div>
                      <div className="h-3 w-4/5 bg-white/10 rounded-full"></div>
                      <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="h-20 bg-brand-500/10 rounded-xl border border-brand-500/10"></div>
                       <div className="h-20 bg-cyan-500/10 rounded-xl border border-cyan-500/10"></div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full border-dashed -z-10 animate-[spin_10s_linear_reverse_infinite]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
