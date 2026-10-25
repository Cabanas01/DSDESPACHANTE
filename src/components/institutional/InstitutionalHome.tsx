import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CarFront, CircleDollarSign, ClipboardList, FileText, GraduationCap, Instagram, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
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
        <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
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
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {[['10+', 'anos de experiência'], ['Credenciado', 'despachante de trânsito'], ['Online', 'cursos e atendimento']].map(([value, label]) => <div key={label} className="rounded-2xl border border-white/20 bg-black/20 p-4 backdrop-blur-sm"><p className="text-xl font-black text-secondary">{value}</p><p className="mt-1 text-xs leading-snug text-white/75">{label}</p></div>)}
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-5 rounded-[2rem] border border-secondary/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white/15 shadow-2xl">
              <Image src="/image/hero-bg.jpg" alt="Atendimento veicular da DS em Guarujá" fill className="object-cover" sizes="(min-width: 1024px) 38vw, 0px" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/70 p-4 backdrop-blur-md"><p className="text-xs font-bold uppercase tracking-[.16em] text-secondary">Praticidade para você</p><p className="mt-1 text-sm font-semibold text-white">Documentação, orientação e cursos em um só lugar.</p></div>
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
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
                <span className="absolute right-5 top-5 grid size-8 place-items-center rounded-full bg-accent text-secondary-foreground"><ArrowRight className="size-4" /></span>
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
          <div className="relative min-h-[390px] overflow-hidden rounded-3xl bg-primary shadow-xl">
            <Image src="/image/hero-bg.jpg" alt="Paisagem litorânea de Guarujá usada na identidade visual da DS" fill className="object-cover opacity-75" sizes="(min-width: 1024px) 43vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-black/35 p-5 backdrop-blur-sm"><Image src="/image/logo.png" alt="Logo da DS Despachante Guarujá" width={76} height={76} className="size-16 object-contain" /><p className="mt-4 text-lg font-bold text-white">Atendimento próximo, informação clara.</p><p className="mt-1 text-sm text-white/75">Uma identidade local com a praticidade de resolver online.</p></div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Sobre a DS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Atendimento claro para a documentação do seu veículo.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">A DS Despachante Guarujá reúne atendimento para quem precisa organizar processos e documentos veiculares. O perfil público da empresa também destaca atuação como despachante credenciado, Direito & Trânsito e pós-graduação em Direito de Trânsito.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="flex gap-3 rounded-xl border border-border bg-white p-4"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-secondary-foreground" /><div><p className="font-bold">Orientação direta</p><p className="mt-1 text-sm text-muted-foreground">Converse com a equipe antes de iniciar seu processo.</p></div></div><div className="flex gap-3 rounded-xl border border-border bg-white p-4"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-secondary-foreground" /><div><p className="font-bold">Informação confiável</p><p className="mt-1 text-sm text-muted-foreground">Conteúdo organizado para facilitar sua decisão.</p></div></div></div>
            <Button variant="outline" asChild className="mt-7 border-primary text-primary hover:bg-primary hover:text-white"><Link href={LINKS.INSTITUTIONAL_WHATSAPP} target="_blank" rel="noopener noreferrer">Conversar com a equipe</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 lg:pb-24">
        <div className="grid gap-5 rounded-3xl border border-border bg-accent/50 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground"><Sparkles className="size-4" />Acompanhe a DS</div><h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Mais informações e novidades no Instagram.</h2><p className="mt-2 max-w-2xl text-muted-foreground">Veja conteúdos sobre trânsito, documentação e atendimento no perfil oficial da DS Despachante.</p></div>
          <Button asChild className="bg-primary text-white hover:bg-primary/90"><Link href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram className="mr-2 size-5" />@dsdespachante_ <ArrowRight className="ml-2 size-4" /></Link></Button>
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
