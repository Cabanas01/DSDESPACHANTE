
"use client";

import { useParams, useRouter } from "next/navigation";
import { COURSES } from "@/lib/courses";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, ShieldCheck, GraduationCap, ArrowLeft, MessageCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/constants";

export default function CoursePage() {
  const { id } = useParams();
  const router = useRouter();
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Curso não encontrado</h1>
        <Button onClick={() => router.push("/")}>Voltar para o início</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20 pb-24">
        {/* Course Hero */}
        <section className="bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mb-6 -ml-2 text-muted-foreground hover:text-primary"
                  onClick={() => router.push("/#cursos")}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao catálogo
                </Button>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-white">{course.category}</Badge>
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  {course.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Formato</p>
                      <p className="text-sm font-bold">100% Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Validação</p>
                      <p className="text-sm font-bold">DETRAN/CONTRAN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Certificado</p>
                      <p className="text-sm font-bold">Válido Nacional</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 text-lg font-bold shadow-xl" asChild>
                    <Link href={course.purchaseUrl}>
                      <ShoppingCart className="w-5 h-5 mr-2" /> SE INSCREVER AGORA
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary h-14 px-8 text-lg font-bold" asChild>
                    <Link href={course.whatsappUrl || LINKS.WHATSAPP} target="_blank">
                      <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> Tirar Dúvidas
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={course.image} 
                  alt={course.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="w-full flex justify-start border-b rounded-none bg-transparent h-12 mb-10 overflow-x-auto no-scrollbar">
                  <TabsTrigger value="info" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-8 h-12 font-bold bg-transparent">
                    Informações
                  </TabsTrigger>
                  <TabsTrigger value="curriculo" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-8 h-12 font-bold bg-transparent">
                    Currículo
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-8 h-12 font-bold bg-transparent">
                    Dúvidas
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Sobre o Curso</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Este curso é destinado a profissionais que buscam {course.name.toLowerCase()}. 
                          Nossa plataforma oferece um ambiente de aprendizado moderno, com videoaulas dinâmicas e material de apoio completo, 
                          garantindo que você obtenha sua certificação de forma rápida e segura, respeitando todos os requisitos legais do CONTRAN e DETRAN.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-4">O que você vai aprender</h3>
                        <ul className="space-y-3">
                          {[
                            "Legislação específica atualizada",
                            "Direção Defensiva avançada",
                            "Primeiros socorros e emergências",
                            "Ética e cidadania no trânsito",
                            "Noções básicas de mecânica e segurança"
                          ].map((item, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <Card className="border-primary/10 bg-muted/20">
                        <CardContent className="p-8">
                          <h3 className="text-xl font-bold mb-6">Investimento</h3>
                          <div className="mb-6">
                            <span className="text-4xl font-black text-primary">R$ {course.price.toFixed(2).replace('.', ',')}</span>
                            <p className="text-sm text-muted-foreground mt-2 italic">Preço promocional à vista no PIX ou parcelado no cartão.</p>
                          </div>
                          <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500" /> Acesso imediato após confirmação
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500" /> Suporte técnico via WhatsApp
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500" /> Certificado incluso sem taxas extras
                            </li>
                          </ul>
                          <Button className="w-full bg-primary text-white font-bold h-12" asChild>
                            <Link href={course.purchaseUrl}>INICIAR INSCRIÇÃO</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="curriculo" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="space-y-6">
                    <div className="p-6 border rounded-xl bg-muted/10">
                      <h4 className="font-bold text-lg mb-2">Módulo 01: Introdução e Legislação</h4>
                      <p className="text-sm text-muted-foreground">Base legal, direitos e deveres do condutor especializado conforme as novas resoluções.</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-muted/10">
                      <h4 className="font-bold text-lg mb-2">Módulo 02: Segurança e Prevenção</h4>
                      <p className="text-sm text-muted-foreground">Técnicas de direção preventiva aplicadas especificamente para {course.name.toLowerCase()}.</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-muted/10">
                      <h4 className="font-bold text-lg mb-2">Módulo 03: Primeiros Socorros</h4>
                      <p className="text-sm text-muted-foreground">Protocolos de atendimento inicial em situações de acidente ou emergência.</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-muted/10">
                      <h4 className="font-bold text-lg mb-2">Módulo 04: Avaliação Final</h4>
                      <p className="text-sm text-muted-foreground">Teste de conhecimentos para emissão da certificação homologada.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Como o certificado é validado no sistema?</h4>
                      <p className="text-muted-foreground">Nossa plataforma é integrada e homologada. Após a conclusão, seus dados são processados e a informação de curso concluído é transmitida para a base nacional.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Qual o prazo para concluir as aulas?</h4>
                      <p className="text-muted-foreground">Você tem total liberdade. O curso fica disponível por tempo suficiente para que você conclua no seu ritmo, respeitando a carga horária mínima exigida pela lei.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
