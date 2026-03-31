import { BRAND } from "@/lib/constants";
import { Award, Briefcase, FileCheck, MapPin, Target } from "lucide-react";

export function Authority() {
  const stats = [
    { icon: Award, label: "Certificado Válido", sub: "Conforme legislação" },
    { icon: Briefcase, label: "DS Despachante", sub: "Referência no Guarujá" },
    { icon: FileCheck, label: "100% Homologado", sub: "Cursos oficiais" },
    { icon: MapPin, label: "Baixada Santista", sub: "Atendimento nacional" },
  ];

  return (
    <section className="bg-muted/50 py-24 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-secondary rounded-full" /> SOBRE NÓS
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Localizada em Guarujá, SP, a <span className="font-bold text-primary">{BRAND.PARENT}</span> é referência em despachante veicular e serviços de trânsito, oferecendo soluções ágeis, confiáveis e personalizadas em documentação veicular. Nossa equipe especializada simplifica processos burocráticos, garantindo que seus documentos estejam sempre em dia de forma rápida e eficiente.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-border shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-secondary" /> NOSSA MISSÃO
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg italic">
              "Facilitar a sua documentação veicular de forma rápida e eficiente, garantindo confiança e tranquilidade. Nosso objetivo é descomplicar processos burocráticos, assegurando a regularização do seu veículo com excelência e profissionalismo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
