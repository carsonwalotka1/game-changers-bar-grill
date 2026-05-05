import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Location */}
          <div className="flex flex-col gap-3">
            <h3 className="heading-sm text-primary-foreground">LOCATION</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <p className="body-base">414 S Main St, Palmyra, MO 63461</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="heading-sm text-primary-foreground">CONTACT</h3>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <a href="tel:(573) 869-0022" className="hover:underline">(573) 869-0022</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a href="mailto:gamechangersgrill@gmail.com" className="hover:underline">gamechangersgrill@gmail.com</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="heading-sm text-primary-foreground">FOLLOW US</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/p/Game-Changers-Bar-Grill-61576250450218/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="TikTok"
              >
                <SiTiktok size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center body-sm">
            &copy; 2026 Game Changers Bar & Grill. All rights reserved. Where Every Play is a Game Changer.
          </p>
        </div>
      </div>
    </footer>
  );
}
