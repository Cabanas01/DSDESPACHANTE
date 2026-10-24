import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND, LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3"><Image src="/image/logo.png" alt="DS Despachante Guarujá" width={48} height={48} className="size-12 object-contain" /><span className="text-sm font-black uppercase tracking-tight">DS Despachante<br /><span className="text-xs font-bold text-white/65">Guarujá</span></span></Link>
            <p className="mt-5 text-sm leading-relaxed text-white/75">Atendimento para documentação veicular e acesso à área de cursos da DS.</p>
            <div className="mt-5 flex gap-3"><Link href={LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook da DS" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground"><Facebook className="size-5" /></Link><Link href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram da DS" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground"><Instagram className="size-5" /></Link></div>
          </div>
          <div><h2 className="font-bold">Institucional</h2><ul className="mt-4 space-y-3 text-sm text-white/75"><li><Link href="/" className="hover:text-secondary">Início</Link></li><li><Link href="/#servicos" className="hover:text-secondary">Serviços</Link></li><li><Link href="/#sobre" className="hover:text-secondary">Sobre nós</Link></li><li><Link href="/#contato" className="hover:text-secondary">Contato</Link></li></ul></div>
          <div><h2 className="font-bold">Cursos</h2><ul className="mt-4 space-y-3 text-sm text-white/75"><li><Link href="/cursos" className="hover:text-secondary">Catálogo de cursos</Link></li><li><Link href="/cursos#cursos" className="hover:text-secondary">Ver cursos disponíveis</Link></li><li><Link href="/cursos#faq" className="hover:text-secondary">Dúvidas frequentes</Link></li></ul></div>
          <div><h2 className="font-bold">Atendimento</h2><p className="mt-4 text-sm text-white/75">Para confirmar informações e iniciar seu atendimento, fale diretamente com a equipe.</p><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center font-bold text-secondary hover:text-white"><MessageCircle className="mr-2 size-5" />{BRAND.PHONE}</Link><a href={`mailto:${BRAND.EMAIL}`} className="mt-3 flex items-center text-sm text-white/75 hover:text-secondary"><Mail className="mr-2 size-4" />{BRAND.EMAIL}</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-start text-sm text-white/75 hover:text-secondary"><MapPin className="mr-2 mt-0.5 size-4 shrink-0" />{BRAND.ADDRESS}</a></div>
        </div>
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} DS Despachante Guarujá. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
