import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-bg-secondary border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
              Mari <span className="text-emerald-primary">Bersilaturahmi</span>
            </h2>
            <p className="text-text-secondary mb-10 text-lg">
              Pintu Musholla selalu terbuka. Jika ada pertanyaan mengenai program, infaq, atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-emerald-light group-hover:bg-emerald-primary/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Lokasi</h3>
                  <p className="text-text-secondary">Jl. Contoh Jalan No.123, Kelurahan, Kecamatan, Kota Jakarta, 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-emerald-light group-hover:bg-emerald-primary/20 transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Instagram</h3>
                  <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-emerald-light transition-colors">
                    @remussafinatularkab
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-emerald-light group-hover:bg-emerald-primary/20 transition-colors">
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
          
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[400px] md:h-auto min-h-[400px] relative bg-bg-secondary p-2">
            {/* // TODO: replace with real coordinates of the mosque */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24075736637!2d106.758749!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1rem', filter: 'invert(90%) hue-rotate(180deg) grayscale(50%) contrast(110%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to ensure dark mode feel and prevent accidental scrolls until clicked */}
            <div className="absolute inset-2 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat di WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75 duration-1000"></span>
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </>
  );
}
