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
                  <p className="text-text-secondary">Jl. Contoh Jalan No.123, Kelurahan, Kecamatan, Kota Jakarta, 12345</p>
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
                  <a href="#" className="text-text-secondary hover:text-emerald-primary transition-colors">
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-border h-[400px] lg:h-auto min-h-[400px] relative bg-bg-primary p-2 shadow-sm">
            {/* // TODO: replace with real coordinates of the mosque */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24075736637!2d106.758749!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
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
        href="#" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-primary text-bg-primary rounded-full shadow-lg hover:scale-105 hover:bg-emerald-deep transition-all duration-300"
        aria-label="Chat di WhatsApp"
      >
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </>
  );
}
