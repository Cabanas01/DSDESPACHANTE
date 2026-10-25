"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const items = [
  { href: "/", label: "Início" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/cursos", label: "Cursos" },
  { href: "/#contato", label: "Contato" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => href === "/cursos" ? pathname.startsWith("/cursos") : href === "/" && pathname === "/";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/90 text-white shadow-sm backdrop-blur-md" aria-label="Navegação principal" onKeyDown={(event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
        menuButton.current?.focus();
      }
    }}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/image/logo.png" alt="DS Despachante Guarujá" width={48} height={48} className="size-11 object-contain" priority />
          <span className="flex flex-col leading-none"><span className="text-sm font-black uppercase tracking-tight text-white">Despachante</span><span className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-white/65">Guarujá</span></span>
        </Link>
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {items.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`text-sm font-semibold transition-colors hover:text-secondary ${isActive(item.href) ? "text-secondary" : "text-white/90"}`}>{item.label}</Link>)}
        </div>
        <Button size="sm" asChild className="hidden bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90 md:inline-flex"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 size-4" />Fale no WhatsApp</Link></Button>
        <button ref={menuButton} type="button" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-md p-2 text-white outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>{isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}</button>
      </div>
      {isMenuOpen && <div id="mobile-navigation" className="border-t border-border bg-white px-4 py-5 text-foreground shadow-xl md:hidden"><div className="container mx-auto flex flex-col gap-1">{items.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={closeMenu} className={`rounded-md px-3 py-3 text-base font-bold hover:bg-muted focus-visible:bg-muted focus-visible:outline-none ${isActive(item.href) ? "bg-muted text-primary" : ""}`}>{item.label}</Link>)}<Button asChild className="mt-3 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><MessageCircle className="mr-2 size-5" />Falar com a DS</Link></Button></div></div>}
    </nav>
  );
}
