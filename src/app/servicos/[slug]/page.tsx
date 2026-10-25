import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SERVICES, serviceWhatsApp } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() { return SERVICES.map(({ slug }) => ({ slug })); }

async function getService(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = await getService(params);
  if (!service) return {};
  return {
    title: `${service.title} em Guarujá | DS Despachante`,
    description: `${service.description} Fale com a DS Despachante Guarujá, em Santo Antônio.`,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: { type: "website", locale: "pt_BR", url: `/servicos/${service.slug}`, title: `${service.title} em Guarujá | DS Despachante`, description: service.description },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = await getService(params);
  if (!service) return null;
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, areaServed: { "@type": "City", name: "Guarujá" }, provider: { "@type": "LocalBusiness", name: "DS Despachante Guarujá", url: "https://dsdespachanteguaruja.com.br" } };
  const Icon = service.icon;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><div className="min-h-screen bg-white"><Navbar /><main id="conteudo-principal" className="pt-20"><section className="bg-stone-950 py-16 text-white sm:py-24"><div className="container mx-auto px-4"><Link href="/#servicos" className="inline-flex min-h-11 items-center gap-2 text-sm text-white/75 underline-offset-4 hover:text-secondary hover:underline"><ArrowLeft className="size-4" />Voltar aos serviços</Link><div className="mt-10 max-w-3xl"><div className="grid size-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground"><Icon className="size-7" /></div><p className="mt-7 text-sm font-bold uppercase tracking-[.16em] text-secondary">Despachante em Guarujá</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">{service.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{service.description} Conte com orientação clara para entender seu caso e os próximos passos.</p><Button size="lg" asChild className="mt-8 h-12 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90"><a href={serviceWhatsApp(service.title)} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 size-5" />Falar sobre este serviço</a></Button></div></div></section><section className="py-16 sm:py-20"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_.8fr] lg:items-start"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Atendimento DS</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Orientação para resolver sua documentação</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">A DS Despachante Guarujá atende em Santo Antônio e começa pela compreensão do seu caso. Fale com a equipe para confirmar documentos, etapas e informações aplicáveis ao seu atendimento.</p></div><div className="rounded-2xl border border-border bg-accent/50 p-6"><p className="font-bold">Precisa de ajuda?</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Envie uma mensagem pelo WhatsApp e explique o que você precisa.</p><a href={serviceWhatsApp(service.title)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center font-bold text-primary underline-offset-4 hover:text-secondary-foreground hover:underline">Falar com a DS <ArrowRight className="ml-2 size-4" /></a></div></div></section></main><Footer /></div></>;
}
