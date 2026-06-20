import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Mail, MapPin, Twitter, Linkedin, Github, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-brand-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              Kalatrix<span className="text-brand-400">Apps</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Pioneering digital experiences through innovative mobile development. We turn complex ideas into elegant, user-centric applications.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-600/20 hover:text-brand-400 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-600/20 hover:text-brand-400 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-600/20 hover:text-brand-400 transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="hover:text-brand-400 transition-colors">Home</a></li>
            <li><a href="/#about" onClick={(e) => handleNavClick(e, '/#about')} className="hover:text-brand-400 transition-colors">About Us</a></li>
            <li><a href="/#services" onClick={(e) => handleNavClick(e, '/#services')} className="hover:text-brand-400 transition-colors">Our Services</a></li>
            <li><a href="/#apps" onClick={(e) => handleNavClick(e, '/#apps')} className="hover:text-brand-400 transition-colors">Our Apps</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal & Support</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy (HideYou)</Link></li>
            <li><Link to="/clearwave-privacy" className="hover:text-brand-400 transition-colors">Privacy Policy (ClearWave)</Link></li>
            <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="hover:text-brand-400 transition-colors">Support Center</a></li>
            <li><a href="/#faq" onClick={(e) => handleNavClick(e, '/#faq')} className="hover:text-brand-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-400 shrink-0 mt-0.5" />
              <span>Gajera Circle, Katargam, Surat, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-400 shrink-0" />
              <span>viralgk23@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold border border-emerald-500/20">
                <ShieldCheck size={14} />
                SSL SECURED
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest text-center md:text-left">
        <p>© {currentYear} Kalatrix Apps. All rights reserved.</p>
      </div>
    </footer>
  );
}
