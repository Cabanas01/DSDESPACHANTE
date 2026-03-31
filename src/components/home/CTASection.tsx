import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { MessageCircle, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-olive-gradient" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 rounded-2xl bg-secondary/20 mb-8">
            <Zap className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Comece Sua Carreira Profissional Hoje Mesmo
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Não perca tempo com burocracia. Qualifique-se online com a confiança da DS Despachante e receba seu certificado válido em tempo recorde.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 text-lg font-bold shadow-2xl transition-all hover:scale-105" asChild>
              <Link href="#cursos">Ver Catálogo de Cursos</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary h-14 px-10 text-lg font-bold transition-all" asChild>
              <Link href={LINKS.WHATSAPP} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> 
                <span className="text-white group-hover:text-primary">Falar no WhatsApp</span>
              </Link>
            </Button>
          </div>
          
          <p className="mt-10 text-white/50 text-xs font-medium uppercase tracking-[0.2em]">
            Certificação 100% segura e garantida por lei
          </p>
        </div>
      </div>
    </section>
  );
}
