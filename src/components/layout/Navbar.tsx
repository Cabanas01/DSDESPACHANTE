"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("inicio");
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => href === "/cursos"
    ? pathname.startsWith("/cursos")
    : pathname === "/" && (href === "/" ? activeSection === "inicio" : href === `/#${activeSection}`);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["inicio", "servicos", "sobre", "contato"];
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      let current = "inicio";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-secondary text-secondary-foreground shadow-sm" aria-label="Navegação principal" onKeyDown={(event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
        menuButton.current?.focus();
      }
    }}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/image/logo.png" alt="DS Despachante Guarujá" width={48} height={48} className="size-11 object-contain" priority />
          <span className="flex flex-col leading-none"><span className="text-sm font-black uppercase tracking-tight">Despachante</span><span className="mt-1 text-[10px] font-bold uppercase tracking-[.18em]">Guarujá</span></span>
        </Link>
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {items.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`py-3 text-sm font-semibold underline-offset-8 hover:underline ${isActive(item.href) ? "underline decoration-2" : ""}`}>{item.label}</Link>)}
        </div>
        <Button size="sm" asChild className="hidden min-h-11 bg-primary font-bold text-white hover:bg-primary/90 md:inline-flex"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 size-4" />Fale no WhatsApp</Link></Button>
        <button ref={menuButton} type="button" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-md p-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>{isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}</button>
      </div>
      {isMenuOpen && <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-border bg-white px-4 py-5 text-foreground shadow-xl md:hidden"><div className="container mx-auto flex flex-col gap-1">{items.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={closeMenu} className={`rounded-md px-3 py-3 text-base font-bold hover:bg-muted focus-visible:bg-muted focus-visible:outline-none ${isActive(item.href) ? "bg-muted text-primary" : ""}`}>{item.label}</Link>)}<Button asChild className="mt-3 min-h-11 shrink-0 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><MessageCircle className="mr-2 size-5" />Falar com a DS</Link></Button></div></div>}
    </nav>
  );
}
