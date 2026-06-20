import { motion } from 'motion/react';
import { Smartphone, Zap, Lock, Star } from 'lucide-react';

const apps = [
  {
    title: "ClearWave",
    tagline: "Remove water & dust from your speakers",
    icon: Zap,
    image: "/clearwave-icon.webp",
    rating: 4.9,
    color: "bg-blue-600",
    url: "https://play.google.com/store/apps/details?id=com.clearwave.speakercleaner"
  },
  {
    title: "HideYou – Calculator",
    tagline: "Private photo & video vault in disguise",
    icon: Lock,
    image: "/hideyou-icon.webp",
    rating: 4.8,
    color: "bg-purple-600",
    url: "https://play.google.com/store/apps/details?id=com.hideyou.calculator"
  }
];

export default function Apps() {
  return (
    <section id="apps" className="section-padding relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-brand-500/20 to-transparent"></div>

      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Featured Applications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our collection of utility and productivity apps designed to enhance your mobile experience.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {apps.map((app, index) => (
          <motion.a
            key={app.title}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
             <div className="glass-panel p-6 flex flex-col items-center text-center group flex-grow hover:border-brand-500/30 transition-colors">
                <div className={`w-20 h-20 rounded-[2rem] ${app.image ? '' : app.color} overflow-hidden flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                   {app.image ? (
                     <img
                       src={app.image}
                       alt={`${app.title} icon`}
                       className="w-full h-full object-cover"
                       onError={(e) => { (e.currentTarget.style.display = 'none'); }}
                     />
                   ) : (
                     <app.icon className="text-white w-10 h-10" />
                   )}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-400 transition-colors">{app.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{app.tagline}</p>

                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < 4 ? "fill-brand-400 text-brand-400" : "fill-slate-700 text-slate-700"} />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2">{app.rating}</span>
                </div>

                <div className="mt-auto w-full pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
                   <span>Android</span>
                   <div className="flex items-center gap-1 text-brand-400">
                      LIVE NOW
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></div>
                   </div>
                </div>
             </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-16 text-center">
         <a
            href="https://play.google.com/store/apps/developer?id=Kalatrix+Apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest hover:text-brand-300 transition-colors"
         >
            View All Apps On Google Play
            <Smartphone size={18} />
         </a>
      </div>
    </section>
  );
}
