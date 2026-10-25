import type {Metadata} from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://dsdespachanteguaruja.com.br'),
  title: 'DS Despachante Guarujá | Documentação veicular e cursos',
  description: 'DS Despachante Guarujá: atendimento para documentação veicular e acesso à área de cursos de trânsito.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'DS Despachante Guarujá',
    title: 'DS Despachante Guarujá | Documentação veicular e cursos',
    description: 'Atendimento para documentação veicular e acesso à área de cursos de trânsito.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased selection:bg-secondary selection:text-secondary-foreground"
        suppressHydrationWarning
      >
        <a href="#conteudo-principal" className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-secondary px-4 py-3 font-bold text-secondary-foreground focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-primary">Pular para o conteúdo principal</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
