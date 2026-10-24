export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 px-4" aria-live="polite" aria-busy="true">
      <div className="w-full max-w-sm space-y-4 rounded-2xl border border-border bg-white p-7 shadow-sm">
        <div className="h-3 w-28 animate-pulse rounded bg-secondary/40" />
        <div className="h-8 w-4/5 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <p className="pt-2 text-sm text-muted-foreground">Carregando conteúdo…</p>
      </div>
    </main>
  );
}
