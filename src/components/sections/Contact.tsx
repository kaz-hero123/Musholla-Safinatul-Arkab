import React from "react";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Mari <span className="text-emerald-primary">Bersilaturahmi</span>
          </h2>
          <p className="text-text-secondary mb-10 text-lg">
            Pintu Musholla selalu terbuka. Jika ada pertanyaan mengenai program, infaq, atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-light">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Lokasi</h3>
                <p className="text-text-secondary">Jl. Contoh Jalan No.123, Kelurahan, Kecamatan, Kota Jakarta, 12345</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-light">
                <Instagram size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Instagram</h3>
                <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-emerald-light transition-colors">
                  @remussafinatularkab
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-light">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">WhatsApp (Pengurus)</h3>
                <a href="#" className="text-text-secondary hover:text-emerald-light transition-colors">
                  +62 812 3456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px] relative glass-card flex items-center justify-center bg-bg-secondary">
          <div className="text-center p-6 relative z-10">
            <MapPin size={48} className="mx-auto text-emerald-primary mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">Peta Lokasi</h3>
            <p className="text-text-secondary text-sm">Integrasi Google Maps dapat ditambahkan di sini dengan embed code yang sesuai dengan koordinat pasti musholla.</p>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-emerald-900/5 mix-blend-color" />
        </div>
      </div>
    </section>
  );
}
