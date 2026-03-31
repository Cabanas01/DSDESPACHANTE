"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LINKS, BRAND } from "@/lib/constants";
import { MessageCircle, ExternalLink, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-primary leading-none">
            {BRAND.NAME}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-0.5">
            PLATAFORMA DS DESPACHANTE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#cursos" className="text-sm font-medium hover:text-primary transition-colors">Cursos</Link>
          <Link href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
          <Link href={LINKS.MAIN_SITE} target="_blank" className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
            Site Oficial <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="hidden lg:flex border-primary text-primary hover:bg-primary/5">
            <Link href={LINKS.WHATSAPP} target="_blank">
              <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Suporte WhatsApp
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md">
            <Link href="#cursos">Ver Catálogo</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 absolute top-20 left-0 right-0 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <Link onClick={() => setIsMenuOpen(false)} href="#cursos" className="px-4 py-2 font-medium">Cursos</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="#como-funciona" className="px-4 py-2 font-medium">Como Funciona</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="#faq" className="px-4 py-2 font-medium">FAQ</Link>
            <Link onClick={() => setIsMenuOpen(false)} href={LINKS.MAIN_SITE} target="_blank" className="px-4 py-2 font-medium flex items-center justify-between">
              Site Oficial <ExternalLink className="w-4 h-4" />
            </Link>
            <hr />
            <Button asChild className="bg-secondary text-secondary-foreground w-full">
              <Link href={LINKS.WHATSAPP} target="_blank">Falar no WhatsApp</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
