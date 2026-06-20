import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "How can I contact support?",
    answer: "You can reach our support team by emailing viralgk23@gmail.com. We typically respond within 24-48 business hours."
  },
  {
    question: "Are your apps available globally?",
    answer: "Yes, our applications are published on both the Apple App Store and Google Play Store, making them available to users in most countries worldwide."
  },
  {
    question: "Do you offer custom app development?",
    answer: "While we primarily focus on our own suite of utility products, we do occasionally take on unique projects. Please contact us with your requirements for a consultation."
  },
  {
    question: "How do you handle user data and privacy?",
    answer: "Privacy is a core value at Kalatrix Apps. We follow strict data protection guidelines and only collect minimal information necessary for app functionality. Please refer to our Privacy Policy for more details."
  },
  {
    question: "Are there any subscription fees?",
    answer: "Most of our basic utility apps are free or follow a one-time purchase model. Some advanced clinical tools may offer premium subscriptions for additional feature sets."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-1000/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
           <div className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Support Center</div>
           <h2 className="text-4xl font-display font-bold mb-8">Frequently Asked <br /> Questions</h2>
           <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
             Everything you need to know about Kalatrix Apps services and products. Can't find what you're looking for? Reach out to us.
           </p>
           
           <div className="glass-panel p-6 border-brand-500/20 bg-brand-500/5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                 </div>
                 <h4 className="text-xl font-bold italic">Need direct help?</h4>
              </div>
              <p className="text-slate-400 mb-6 text-sm">Our technical team is ready to assist you with any app-related issues or business inquiries.</p>
              <a href="#contact" className="text-brand-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Send a message 
                <div className="w-6 h-px bg-brand-400"></div>
              </a>
           </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-panel overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-500/30' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown className={`text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
