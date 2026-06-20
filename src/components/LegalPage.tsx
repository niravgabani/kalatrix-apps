import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-8 md:p-12 mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{title}</h1>
            <p className="text-brand-400 font-medium mb-12">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-invert prose-brand max-w-none space-y-8 text-slate-400">
              {content}
            </div>
          </div>
          
          <div className="text-center">
            <a href="/" className="text-brand-400 font-bold hover:underline">Back to Home</a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
