import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 px-4 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Página não encontrada</p>
        <h1 className="mt-3 text-4xl font-extrabold text-foreground">Não encontramos este endereço.</h1>
        <p className="mt-4 text-muted-foreground">Você pode voltar à página institucional ou acessar os cursos da DS.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground hover:bg-primary/90">Voltar para o início</Link>
          <Link href="/cursos" className="rounded-md border border-primary px-5 py-3 font-bold text-primary hover:bg-primary hover:text-primary-foreground">Ver cursos</Link>
        </div>
      </div>
    </main>
  );
}
