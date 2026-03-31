import { BRAND } from "@/lib/constants";
import { Award, Briefcase, FileCheck, MapPin } from "lucide-react";

export function Authority() {
  const stats = [
    { icon: Award, label: "Certificado Válido", sub: "Conforme legislação" },
    { icon: Briefcase, label: "DS Despachante", sub: "Tradição no Guarujá" },
    { icon: FileCheck, label: "100% Homologado", sub: "Cursos oficiais" },
    { icon: MapPin, label: "Baixada Santista", sub: "Atendimento nacional" },
  ];

  return (
    <section className="bg-muted/50 py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-white border border-border shadow-sm max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground italic leading-relaxed">
            "{BRAND.NAME} é o braço educacional da <span className="font-semibold text-primary">{BRAND.PARENT}</span>. 
            Com anos de experiência regularizando veículos e condutores no Guarujá, nossa missão é facilitar o acesso à qualificação profissional de motoristas, unindo a tradição de uma empresa sólida com a tecnologia do ensino digital."
          </p>
        </div>
      </div>
    </section>
  );
}
