import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

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
      <section className="py-24 md:py-32 px-6 bg-bg-secondary relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Hubungi Kami"
            subtitle="Pintu Musholla selalu terbuka untuk jamaah, kolaborasi, dan pertanyaan. Kami siap melayani."
            badge="Silaturahmi"
            BadgeIcon={MessageCircle}
            alignment="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-16">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="border border-border/50 bg-bg-primary p-8 rounded-[2rem] flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-primary/10 text-emerald-primary flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-primary mb-2">Lokasi</h3>
                    <p className="text-text-secondary leading-relaxed">
                      Jl. Jati Sari Besar Gg. Langgar, Legi, Pepelegi, Kec. Waru, Kab. Sidoarjo, Jawa Timur 61256
                    </p>
                  </div>
              </div>

              <div className="border border-border/50 bg-bg-primary p-8 rounded-[2rem] flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-primary/10 text-emerald-primary flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-primary mb-2">WhatsApp Pengurus</h3>
                    <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer" className="text-emerald-primary hover:text-emerald-deep font-medium transition-colors text-lg inline-block mb-4">
                      +62 821 4350 6574
                    </a>
                    <div>
                      <Button asChild variant="outline" size="sm">
                        <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer">
                          Mulai Chat
                        </a>
                      </Button>
                    </div>
                  </div>
              </div>

              <div className="border border-border/50 bg-bg-primary p-8 rounded-[2rem] flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-primary/10 text-emerald-primary flex items-center justify-center shrink-0">
                  <Instagram size={28} />
                </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-primary mb-2">Instagram</h3>
                    <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="text-emerald-primary hover:text-emerald-deep font-medium transition-colors text-lg inline-block mb-4">
                      @remussafinatularkab
                    </a>
                    <div>
                      <Button asChild variant="outline" size="sm">
                        <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer">
                          Follow Kami
                        </a>
                      </Button>
                    </div>
                  </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="border border-border/50 h-[500px] lg:h-full min-h-[500px] relative bg-bg-secondary p-0 rounded-[2rem] overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Jl.%20Jati%20Sari%20Besar%20Gg.%20Langgar,%20Pepelegi,%20Kec.%20Waru,%20Kabupaten%20Sidoarjo&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Musholla"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <a 
        href="https://wa.me/6282143506574" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-emerald-primary text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-deep transition-all duration-300"
        aria-label="Chat di WhatsApp"
      >
        <MessageCircle size={32} className="relative z-10" />
      </a>
    </>
  );
}
