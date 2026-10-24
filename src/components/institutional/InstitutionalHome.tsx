import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, CircleDollarSign, ClipboardList, FileText, GraduationCap, MapPin, MessageCircle } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { BRAND, LINKS } from "@/lib/constants";

const services = [
  { title: "Licenciamento", description: "Orientação para manter a documentação do veículo regularizada.", icon: ClipboardList },
  { title: "Transferência de veículo", description: "Atendimento para as etapas de transferência do seu veículo.", icon: CarFront },
  { title: "IPVA e débitos", description: "Consulte e organize pendências relacionadas ao seu veículo.", icon: CircleDollarSign },
  { title: "Documentação veicular", description: "Apoio para entender a documentação necessária ao seu processo.", icon: FileText },
];

const contactFor = (service: string) =>
  `https://wa.me/5513991932590?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de informações sobre ${service}.`)}`;

export function InstitutionalHome() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-white">
      <Navbar />

      <section id="inicio" className="relative isolate flex min-h-[690px] items-center overflow-hidden pt-20 text-white">
        <Image src="/image/hero-bg.jpg" alt="Rodovia em paisagem litorânea" fill priority className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,20,13,.96)_0%,rgba(26,20,13,.78)_45%,rgba(26,20,13,.25)_100%)]" />
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-2xl motion-safe:animate-fade-in-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/75">DS Despachante · Guarujá</p>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">Seu veículo em dia.<br /><span className="text-secondary">Sua vida mais simples.</span></h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">Conte com a DS para simplificar a documentação do seu veículo, com atendimento direto quando você precisar.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="h-13 bg-secondary px-7 text-base font-bold text-secondary-foreground hover:bg-secondary/90">
                <Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 size-5" />Falar com a DS</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-13 border-white/80 bg-transparent px-7 text-base font-bold text-white hover:bg-white hover:text-primary">
                <Link href="#servicos">Conhecer serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Atendimento DS</p>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">Como podemos ajudar?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
                <Icon className="size-9 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <Link href={contactFor(title)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center text-sm font-bold text-primary underline-offset-4 hover:text-secondary-foreground hover:underline">Falar sobre este serviço <ArrowRight className="ml-1 size-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 bg-stone-50 py-20 lg:py-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-72 overflow-hidden rounded-3xl bg-primary">
            <Image src="/image/logo.png" alt="Logo da DS Despachante Guarujá" fill className="object-contain p-16" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Sobre a DS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Atendimento claro para a documentação do seu veículo.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">A DS Despachante Guarujá reúne atendimento para quem precisa organizar processos e documentos veiculares. Para confirmar o caminho mais adequado, fale diretamente com a equipe.</p>
            <Button variant="outline" asChild className="mt-7 border-primary text-primary hover:bg-primary hover:text-white"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer">Conversar com a equipe</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,193,7,.35),transparent_30%)]" />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-white/70">Cursos de trânsito</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Seu próximo passo começa aqui.</h2><p className="mt-3 text-white/80">Acesse a área de cursos da DS, com catálogo, detalhes e os links de inscrição atuais.</p></div>
            <Button size="lg" asChild className="shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/90"><Link href="/cursos">Acessar cursos <GraduationCap className="ml-2 size-5" /></Link></Button>
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-20 bg-stone-950 py-20 text-white">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[.16em] text-secondary">Contato</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Precisa de atendimento?</h2><p className="mt-4 max-w-xl text-white/75">Fale com a DS pelo WhatsApp, telefone ou e-mail para esclarecer dúvidas e confirmar as informações do seu atendimento.</p></div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6"><MessageCircle className="size-8 text-secondary" /><p className="mt-4 font-bold">WhatsApp e telefone</p><a className="mt-1 block text-lg text-white underline underline-offset-4" href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer">{BRAND.PHONE}</a><a className="mt-4 block text-sm text-white/80 underline underline-offset-4 hover:text-secondary" href={`mailto:${BRAND.EMAIL}`}>{BRAND.EMAIL}</a><a className="mt-5 inline-flex items-center font-bold text-secondary hover:text-white" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.ADDRESS)}`} target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 size-4" />{BRAND.ADDRESS}</a></div>
        </div>
      </section>
      <Footer />
      <Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Falar com a DS no WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"><MessageCircle className="size-7" /></Link>
    </main>
  );
}
