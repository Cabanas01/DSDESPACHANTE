import Link from "next/link";
import { BRAND, LINKS } from "@/lib/constants";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight leading-none text-secondary">
                {BRAND.NAME}
              </span>
              <span className="text-[10px] font-medium text-white/60 uppercase tracking-widest mt-0.5">
                PLATAFORMA DS DESPACHANTE
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Sua melhor opção para cursos de trânsito online. Qualidade, rapidez e total conformidade legal para motoristas profissionais, com o selo de confiança da DS Despachante Guarujá.
            </p>
            <div className="flex gap-4">
              <Link href={LINKS.FACEBOOK} target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href={LINKS.INSTAGRAM} target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Cursos Rápidos</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="#cursos" className="hover:text-secondary transition-colors">Formação MOPP</Link></li>
              <li><Link href="#cursos" className="hover:text-secondary transition-colors">Transporte Escolar</Link></li>
              <li><Link href="#cursos" className="hover:text-secondary transition-colors">Veículos de Emergência</Link></li>
              <li><Link href="#cursos" className="hover:text-secondary transition-colors">Direção Defensiva</Link></li>
              <li><Link href="#cursos" className="hover:text-secondary transition-colors">Treinamentos NR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Institucional</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href={LINKS.MAIN_SITE} target="_blank" className="hover:text-secondary transition-colors">Site Oficial DS Despachante</Link></li>
              <li><Link href="#como-funciona" className="hover:text-secondary transition-colors">Como Funciona</Link></li>
              <li><Link href="#faq" className="hover:text-secondary transition-colors">Perguntas Frequentes</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>{BRAND.ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>{BRAND.PHONE}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>{BRAND.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col gap-4">
          <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
            Unidade Educacional DS Despachante Guarujá
          </p>
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {BRAND.NAME}. Todos os direitos reservados. 
            Cursos regulamentados e certificados conforme as normas vigentes do CONTRAN e DETRAN.
          </p>
        </div>
      </div>
    </footer>
  );
}
