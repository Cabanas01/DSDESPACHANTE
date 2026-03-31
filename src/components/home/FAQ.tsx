"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "O curso é totalmente online?",
    a: "Sim! Todos os nossos cursos são 100% online. Você pode estudar de onde quiser, utilizando seu computador, tablet ou celular."
  },
  {
    q: "O certificado é válido no Brasil todo?",
    a: "Com certeza. Nossos cursos são homologados e seguem todas as normas vigentes da legislação de trânsito brasileira, sendo aceitos em todo o território nacional."
  },
  {
    q: "Como recebo meu certificado?",
    a: "Após a conclusão das aulas e aprovação nas avaliações, o certificado é emitido digitalmente pela plataforma e, em muitos casos, a informação é transmitida automaticamente para o sistema do DETRAN."
  },
  {
    q: "Quanto tempo tenho para terminar o curso?",
    a: "Isso depende de cada curso, mas geralmente você tem flexibilidade total. O acesso fica disponível para que você complete as horas exigidas no seu ritmo."
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos cartões de crédito (com parcelamento), boleto bancário e PIX através de nossa plataforma de checkout segura."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Dúvidas Frequentes</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber sobre a nossa plataforma e cursos.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-xl border border-border shadow-sm">
                <AccordionTrigger className="text-left font-bold hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
