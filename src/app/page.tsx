import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Authority } from "@/components/home/Authority";
import { CourseCatalog } from "@/components/home/CourseCatalog";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/layout/Footer";
import { Shield, BookOpen, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Authority />
      
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Vantagens de Estudar Conosco</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unimos tecnologia e facilidade para que você nunca pare de dirigir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "100% Seguro", desc: "Pagamento criptografado e plataforma certificada." },
              { icon: BookOpen, title: "Fácil Acesso", desc: "Estude pelo celular ou computador, onde e quando quiser." },
              { icon: Clock, title: "Agilidade", desc: "Conclua seu curso e receba o certificado em tempo recorde." },
              { icon: Award, title: "Válido no DETRAN", desc: "Todos os nossos cursos são homologados oficialmente." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseCatalog />

      {/* How it Works */}
      <section id="como-funciona" className="py-24 bg-olive-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Como Funciona o Processo</h2>
            <p className="text-white/60 text-lg">Em apenas 3 passos você está pronto para o mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Steps connection line (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Escolha seu Curso", desc: "Navegue pelo nosso catálogo e selecione a especialização que você precisa." },
              { step: "02", title: "Estude Online", desc: "Acesse as videoaulas e materiais de apoio de forma totalmente digital." },
              { step: "03", title: "Receba o Certificado", desc: "Conclua as avaliações e tenha seu certificado homologado em mãos." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-3xl font-black mb-6 shadow-2xl border-4 border-white/10">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
