import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Hubungi Kami."
            subtitle="Pintu Musholla selalu terbuka untuk jamaah, kolaborasi, dan pertanyaan. Kami siap melayani."
            alignment="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mt-16 border-t border-border pt-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <FadeIn className="flex flex-col gap-4 border-b border-border pb-8">
                <div className="flex items-center gap-3 text-text-secondary mb-2">
                  <MapPin size={20} />
                  <h3 className="font-medium tracking-widest uppercase text-xs">Lokasi</h3>
                </div>
                <p className="text-text-primary text-xl leading-relaxed">
                  Jl. Jati Sari Besar Gg. Langgar, Legi, Pepelegi, Kec. Waru, Kab. Sidoarjo, Jawa Timur 61256
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="flex flex-col gap-4 border-b border-border pb-8">
                <div className="flex items-center gap-3 text-text-secondary mb-2">
                  <Phone size={20} />
                  <h3 className="font-medium tracking-widest uppercase text-xs">WhatsApp</h3>
                </div>
                <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-emerald-primary text-2xl font-display font-bold transition-colors">
                  +62 821 4350 6574
                </a>
                <div>
                  <Button asChild variant="outline" size="sm" className="rounded-none border-text-primary text-text-primary hover:bg-text-primary hover:text-white">
                    <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer">
                      Mulai Chat
                    </a>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-text-secondary mb-2">
                  <Instagram size={20} />
                  <h3 className="font-medium tracking-widest uppercase text-xs">Instagram</h3>
                </div>
                <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="text-text-primary hover:text-emerald-primary text-2xl font-display font-bold transition-colors">
                  @remussafinatularkab
                </a>
                <div>
                  <Button asChild variant="outline" size="sm" className="rounded-none border-text-primary text-text-primary hover:bg-text-primary hover:text-white">
                    <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer">
                      Follow Kami
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-full min-h-[350px] sm:min-h-[500px] w-full border border-border bg-bg-secondary overflow-hidden">
              <FadeIn delay={0.3} className="w-full h-full">
                <iframe 
                  src="https://maps.google.com/maps?q=Jl.%20Jati%20Sari%20Besar%20Gg.%20Langgar,%20Pepelegi,%20Kec.%20Waru,%20Kabupaten%20Sidoarjo&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Musholla"
                ></iframe>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <a 
        href="https://wa.me/6282143506574" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-text-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        aria-label="Chat di WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}
