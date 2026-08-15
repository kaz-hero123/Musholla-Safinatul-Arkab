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
      <section className="py-24 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-bg-primary border border-border rounded-3xl p-8 lg:p-12">
            <div className="mb-10 border-b border-border pb-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-2 tracking-tight">
                Hubungi Kami
              </h2>
              <p className="text-text-secondary text-lg">
                Pintu Musholla selalu terbuka untuk kolaborasi & pertanyaan.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-bg-secondary border border-border rounded-2xl text-emerald-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Lokasi</h3>
                  <p className="text-text-secondary">Jl. Jati Sari Besar Gg. Langgar, Legi, Pepelegi, Kec. Waru, Kab. Sidoarjo, Jawa Timur 61256</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-bg-secondary border border-border rounded-2xl text-emerald-primary">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Instagram</h3>
                  <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-emerald-primary transition-colors">
                    @remussafinatularkab
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-bg-secondary border border-border rounded-2xl text-emerald-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">WhatsApp (Pengurus)</h3>
                  <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-emerald-primary transition-colors">
                    +62 821 4350 6574
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-border h-[400px] lg:h-auto min-h-[400px] relative bg-bg-primary p-2 shadow-sm">
            <iframe 
              src="https://maps.google.com/maps?q=Jl.%20Jati%20Sari%20Besar%20Gg.%20Langgar,%20Pepelegi,%20Kec.%20Waru,%20Kabupaten%20Sidoarjo&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.2rem' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <a 
        href="https://wa.me/6282143506574" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-primary text-bg-primary rounded-full shadow-lg hover:scale-105 hover:bg-emerald-deep transition-all duration-300"
        aria-label="Chat di WhatsApp"
      >
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </>
  );
}
