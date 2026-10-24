"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 px-4 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-secondary-foreground">Ops</p>
        <h1 className="mt-3 text-4xl font-extrabold text-foreground">Não foi possível carregar esta página.</h1>
        <p className="mt-4 text-muted-foreground">Tente novamente. Se o problema continuar, fale com a DS pelo WhatsApp.</p>
        <button type="button" onClick={reset} className="mt-8 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground hover:bg-primary/90">Tentar novamente</button>
      </div>
    </main>
  );
}
