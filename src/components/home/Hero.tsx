
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920"} 
          alt="Rodovia DS Cursos" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="highway trucks"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold tracking-wide uppercase">Cursos 100% Homologados e Online</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Sua <span className="text-secondary">Habilitação Especial</span> de Forma Simples e Digital
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium">
            A plataforma oficial da DS Despachante Guarujá. Oferecemos cursos de MOPP, Reciclagem, Escolar e Emergência com certificado válido conforme a legislação vigente.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="#cursos">Ver Cursos Agora <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <div className="flex items-center gap-3 py-2 bg-black/20 backdrop-blur-sm rounded-full px-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 100}/40/40`} alt="Aluno DS" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">+12.000 Alunos Formados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
