import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Digital Nomad",
    content: "The Speaker Cleaner app saved my phone after it got submerged. The frequency ranges they use are incredibly effective. Highly recommend Kalatrix Apps for their utility tools!",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "Minimalist, fast, and does exactly what it says. Their file manager is my daily driver for organizing work documents on the go. Clean UI is a huge plus.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Wilson",
    role: "Mobile Enthusiast",
    content: "Reliability is hard to find in utility apps. Kalatrix Apps delivers on and beyond expectations. Every app feels premium and well-engineered.",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-1000">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</div>
          <h2 className="text-4xl font-display font-bold mb-6 italic">What Our Users Say</h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 relative flex flex-col items-center text-center"
          >
            <div className="absolute top-6 left-6 opacity-10">
              <Quote size={48} className="text-brand-400" />
            </div>
            
            <div className="w-20 h-20 rounded-full border-2 border-brand-500/30 p-1 mb-6 relative z-10">
               <img 
                 src={item.avatar} 
                 alt={item.name} 
                 className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 referrerPolicy="no-referrer"
               />
            </div>

            <div className="flex gap-1 mb-4">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} size={14} className="fill-brand-400 text-brand-400" />
               ))}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
              "{item.content}"
            </p>

            <div className="mt-auto">
               <h4 className="text-white font-bold">{item.name}</h4>
               <p className="text-brand-400 text-[10px] uppercase tracking-widest font-bold mt-1">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
