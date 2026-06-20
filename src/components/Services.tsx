import { motion } from 'motion/react';
import { Smartphone, Apple, Layout, RefreshCw, Cloud, UploadCloud } from 'lucide-react';

const services = [
  {
    title: "Android App Development",
    description: "Robust and scalable applications tailored for the Android ecosystem using modern frameworks like Kotlin and Compose.",
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "iOS App Development",
    description: "Premium, high-performance iPhone and iPad applications built with Swift for a seamless user experience.",
    icon: Apple,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive interfaces that prioritize usability and brand aesthetics.",
    icon: Layout,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "App Maintenance",
    description: "Continuous monitoring, bug fixing, and updates to keep your applications running peak performance.",
    icon: RefreshCw,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Cloud Integration",
    description: "Seamless backend services, database management, and real-time data synchronization.",
    icon: Cloud,
    color: "from-cyan-500/20 to-sky-500/20"
  },
  {
    title: "App Publishing Support",
    description: "End-to-end guidance for App Store and Play Store submissions, including optimization and compliance.",
    icon: UploadCloud,
    color: "from-brand-500/20 to-cyan-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-1000">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4 italic">What We Excel At</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">World Class Digital Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide end-to-end mobile development services that help businesses and individuals achieve their digital goals with precision.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute -top-10 -right-10 w-24 h-24 bg-linear-to-br ${service.color} blur-2xl group-hover:scale-150 transition-transform`}></div>
            
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 relative z-10">
              <service.icon className="text-brand-400 w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 relative z-10 text-white group-hover:text-brand-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed relative z-10 leading-relaxed">
              {service.description}
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-300 transition-colors">
               Explore Details 
               <div className="w-4 h-px bg-slate-700 group-hover:w-8 group-hover:bg-brand-400 transition-all"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
