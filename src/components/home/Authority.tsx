import { Award, Briefcase, FileCheck, MapPin } from "lucide-react";

export function Authority() {
  const stats = [
    { icon: Award, label: "Certificado Válido", sub: "Conforme legislação" },
    { icon: Briefcase, label: "DS Despachante", sub: "Referência no Guarujá" },
    { icon: FileCheck, label: "100% Homologado", sub: "Cursos oficiais" },
    { icon: MapPin, label: "Baixada Santista", sub: "Atendimento nacional" },
  ];

  return (
    <section className="bg-muted/50 py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
