
import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { OPERATING_HOURS } from '../constants';
// Import the Button component used in the footer
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF6900] rounded-full flex items-center justify-center">
                <span className="text-white font-black italic">P</span>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tighter text-[#181818]">Pizzatuba</h2>
            </div>
            <p className="text-[#5C6370] text-sm leading-relaxed">
              Pizzatuba on Tartu autentne pitsakogemus, kus traditsiooniline käsitöö kohtub modernse maitsega. Kasutame vaid parimat toorainet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#F3F3F7] rounded-full flex items-center justify-center text-[#181818] hover:bg-[#FF6900] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F3F3F7] rounded-full flex items-center justify-center text-[#181818] hover:bg-[#FF6900] hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="font-black text-lg text-[#181818] flex items-center gap-2">
              <Clock size={18} className="text-[#FF6900]" /> Lahtiolekuajad
            </h3>
            <ul className="space-y-2 text-sm text-[#5C6370]">
              {OPERATING_HOURS.map((oh) => (
                <li key={oh.day} className="flex justify-between">
                  <span className="font-bold">{oh.day}</span>
                  <span>{oh.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="font-black text-lg text-[#181818]">Kasulikku</h3>
            <ul className="space-y-3 text-sm font-bold text-[#5C6370]">
              <li><a href="#" className="hover:text-[#FF6900] transition-colors">Menüü</a></li>
              <li><a href="#" className="hover:text-[#FF6900] transition-colors">Telli ette</a></li>
              <li><a href="#" className="hover:text-[#FF6900] transition-colors">Tingimused</a></li>
              <li><a href="#" className="hover:text-[#FF6900] transition-colors">Privaatsuspoliitika</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-black text-lg text-[#181818]">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-[#FF6900] flex-shrink-0" />
                <a href="tel:+37258260698" className="font-black text-[#181818] hover:underline">+372 58260698</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#FF6900] flex-shrink-0" />
                <span className="text-[#5C6370]">Turu 2, Tartu, 51013 Eesti</span>
              </li>
            </ul>
            <div className="pt-2">
               {/* Button component is used here */}
               <Button variant="outline" className="w-full">Broneeri laud</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            © 2026 Pizzatuba OÜ • Kõik õigused kaitstud
          </p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
