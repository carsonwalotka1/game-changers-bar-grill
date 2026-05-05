import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-primary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition">
              <img 
                src="/manus-storage/game_changers_logo_32047ec0.webp" 
                alt="Game Changers Bar & Grill Logo" 
                className="h-12 w-auto"
              />
              <span className="heading-sm text-primary hidden sm:inline">
                GAME CHANGERS
              </span>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-foreground font-semibold hover:text-primary transition cursor-pointer">
                HOME
              </span>
            </Link>
            <Link href="/menu">
              <span className="text-foreground font-semibold hover:text-primary transition cursor-pointer">
                MENU
              </span>
            </Link>
            <Link href="/about">
              <span className="text-foreground font-semibold hover:text-primary transition cursor-pointer">
                ABOUT
              </span>
            </Link>
            <Link href="/events">
              <span className="text-foreground font-semibold hover:text-primary transition cursor-pointer">
                EVENTS
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-foreground font-semibold hover:text-primary transition cursor-pointer">
                CONTACT
              </span>
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com/p/Game-Changers-Bar-Grill-61576250450218/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="TikTok"
            >
              <SiTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-4 mt-4 flex-wrap justify-center">
          <Link href="/">
            <span className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/menu">
            <span className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer">
              MENU
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer">
              ABOUT
            </span>
          </Link>
          <Link href="/events">
            <span className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer">
              EVENTS
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer">
              CONTACT
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
