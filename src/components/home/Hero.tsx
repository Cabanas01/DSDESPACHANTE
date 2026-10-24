
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/hero-bg.jpg" 
          alt="Rodovia DS Cursos" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <span className="text-[10px] md:text-sm font-bold tracking-wide uppercase">Cursos 100% Online e Homologados</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] md:leading-[1.1]">
            Sua <span className="text-secondary">Habilitação Especial</span> de Forma Simples e Digital
          </h1>
          
          <p className="text-base md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium">
            A plataforma oficial da DS Despachante Guarujá. Oferecemos cursos de MOPP, Reciclagem, Escolar e Emergência com certificado válido em todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-10 text-lg font-black shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="#cursos">VER CURSOS AGORA <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
