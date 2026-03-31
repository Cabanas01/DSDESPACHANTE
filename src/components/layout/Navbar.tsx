
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { MessageCircle, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Layout: Img Left + Text Right (Stacked) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden shrink-0">
            <Image 
              src="/image/logo.png" 
              alt="Logo DS" 
              width={48} 
              height={48} 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-black tracking-tighter text-primary leading-none uppercase">
              CURSOS DE TRÂNSITO
            </span>
            <span className="text-[7px] md:text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
              PLATAFORMA OFICIAL DS DESPACHANTE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#cursos" className="text-sm font-semibold hover:text-primary transition-colors">Cursos</Link>
          <Link href="#como-funciona" className="text-sm font-semibold hover:text-primary transition-colors">Como Funciona</Link>
          <Link href="#faq" className="text-sm font-semibold hover:text-primary transition-colors">FAQ</Link>
          <Link href={LINKS.MAIN_SITE} target="_blank" className="text-sm font-semibold flex items-center gap-1 hover:text-primary transition-colors">
            Site Oficial <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md font-bold">
            <Link href="#cursos">Ver Catálogo</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-primary focus:outline-none"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-6 absolute top-20 left-0 right-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-5">
            <Link onClick={() => setIsMenuOpen(false)} href="#cursos" className="text-lg font-bold border-b border-border pb-2">Cursos</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="#como-funciona" className="text-lg font-bold border-b border-border pb-2">Como Funciona</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="#faq" className="text-lg font-bold border-b border-border pb-2">FAQ</Link>
            <Link onClick={() => setIsMenuOpen(false)} href={LINKS.MAIN_SITE} target="_blank" className="text-lg font-bold flex items-center justify-between border-b border-border pb-2">
              Site Oficial DS <ExternalLink className="w-5 h-5" />
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Button asChild className="bg-secondary text-secondary-foreground w-full h-12 text-lg font-bold">
                <Link href="#cursos" onClick={() => setIsMenuOpen(false)}>Ver Catálogo</Link>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary w-full h-12 text-lg font-bold">
                <Link href={LINKS.WHATSAPP} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> Suporte WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
