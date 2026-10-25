# Testes

SEO local: TypeScript, 16 regressões e build aprovados; tests/seo-built.test.mjs passou em 2 testes contra HTML estático real, cobrindo título, descrição, canônico, OG e JSON-LD válido com contatos/endereço e oito serviços. A primeira expectativa de barra final foi ajustada à normalização equivalente do Next. Não equivale a aprovação do Rich Results Test nem comprova indexação/ranking do Google.

Busca e dados comerciais: TypeScript, 16 testes existentes e build de 35 páginas aprovados. tests/catalog.browser.cjs via Playwright do runtime/Edge, TEST_BASE_URL=http://localhost:9029, passou em 390 e 1440 px: 28 resultados iniciais, MOPP, busca sem acento, vazio, limpeza, Atualização, aria-pressed, alvo de 44 px, ausência de overflow, detalhe e retorno ao catálogo. Tentativas iniciais revelaram ausência da sigla MOPP no nome completo (incluído ID na busca) e seletor de retorno incorreto no próprio teste (é botão); ambos corrigidos antes da aprovação.

Navegação por seção: antes da correção, scroll até Sobre mantinha Início ativo em produção. Após correção, Playwright/Edge local validou Serviços/Sobre/Contato/Início em 390 e 1440 px com espera pelo aria-current esperado; detalhe mopp-atualizacao marcou Cursos. TypeScript, 16 testes de regressão e build com 35 páginas aprovados.

Revisão amarelo/dourado: TypeScript, 16 testes e build de 35 páginas aprovados. Edge headless confirmou cabeçalho rgb(255,193,5), alvos dos serviços de 44 px e ausência de overflow em 360/390/768/1440 px. Em 667×375, menu limitado a 375 px com rolagem e CTA alcançável. Execução final confirmou dois CTAs do hero com 48 px. Screenshot ux-gold-mobile.png capturado com movimento reduzido.

Revisão mobile-first: TypeScript, 16 testes e build de 35 páginas passaram. Playwright/Edge: 360/390/768 px sem overflow e com todas as imagens visíveis carregadas; 1440 px com hero renderizado e sem overflow. Captura ux-home-390.png inspecionada. Captura completa de desktop com decodificação de todas as imagens não terminou; a checagem de desktop foi feita em execução separada e captura do topo.

2026-10-25 — Edge headless/Playwright em produção local (porta 9022): painel móvel 390×844 visível com cor computada rgb(26,26,26); Escape fechou o painel e retornou foco ao botão. Sem overflow horizontal em 390 e 1440 px; catálogo abriu com título correto. Build de 35 páginas aprovado. Evidências visuais locais: mobile-ux-review.png e desktop-ux-review.png.

2026-10-25 — correção local do menu: TypeScript e 16 testes existentes aprovados. Esses testes não verificam a interação de teclado nem o contraste renderizado; validação no navegador pendente.

| Data | Verificação | Resultado |
| --- | --- | --- |
| 2026-10-24 | Baseline | Dependências ainda não instaladas; testes não executados. |
| 2026-10-24 | `node --test tests/routing.test.mjs` | 5 testes aprovados. |
| 2026-10-24 | `npm run typecheck` | Aprovado após adequação do calendário à API do react-day-picker 9. |
| 2026-10-24 | `npm run build` | Aprovado após adequação do script para Windows. |
| 2026-10-24 | Navegador local (`/` e `/cursos`) | Rotas renderizadas; menu institucional, CTA, catálogo, links de detalhe e WhatsApp presentes. |
| 2026-10-24 | Navegador local (`/cursos/mopp-formacao`) | Página de detalhe, preço, checkout Bludata e link de dúvidas renderizados. |
| 2026-10-24 | Viewport móvel 390 × 844 | Menu recolhível exibiu Início, Serviços, Sobre nós, Cursos, Contato e WhatsApp; acesso a `/cursos` e catálogo confirmado. |
| 2026-10-24 | SEO técnico | `sitemap.xml` e `robots.txt` estáticos retornaram HTTP 200 na versão de produção local; canônico e Open Graph configurados para o domínio principal. |
| 2026-10-24 | Regressão final | 7 testes de rotas, SEO e segurança de links aprovados; `npm run typecheck` e `npm run build` aprovados. |
| 2026-10-24 | Regressão de rotas e SEO | 8 testes aprovados, `npm run typecheck` e `npm run build` aprovados após separar canônicos de `/` e `/cursos`. |
| 2026-10-24 | Navegador — produção local | `/`, `/cursos` e `/cursos/mopp-formacao` retornaram HTTP 200; o botão “Voltar ao catálogo” levou de `/cursos/mopp-formacao` para `/cursos#cursos`. |
| 2026-10-24 | Sitemap de cursos | 9 testes aprovados; o sitemap inclui `/`, `/cursos` e as 28 rotas de detalhes presentes no catálogo. Build e tipos aprovados. |
| 2026-10-24 | Estado da navegação | 9 testes, TypeScript e build aprovados após incluir `aria-current` e destaque da rota ativa no cabeçalho. |
| 2026-10-24 | Detalhe e 404 de cursos | 10 testes, TypeScript e build aprovados. Em produção local, curso válido retornou HTTP 200, rota inexistente HTTP 404 e o canônico individual foi confirmado. |
| 2026-10-24 | Atendimento institucional | 11 testes, TypeScript e build aprovados após separar a mensagem de WhatsApp institucional da mensagem preservada dos cursos. |
| 2026-10-24 | Homologação visual final local | Home institucional e catálogo renderizados em produção local; CTAs de serviços apontam para o WhatsApp correto e o menu móvel exibiu Início, Serviços, Sobre nós, Cursos, Contato e atendimento. |
| 2026-10-24 | Conteúdo verificável nos cursos | 12 testes e TypeScript aprovados após remover imagens externas de demonstração e métrica não confirmada da abertura dos cursos. Prévia local aberta em `http://localhost:9015/`. |
| 2026-10-24 | Navegação por teclado | 13 testes e TypeScript aprovados após incluir o atalho “Pular para o conteúdo principal” nas rotas institucionais e de cursos. |
| 2026-10-24 | Build de produção final | `npm run build` concluiu com 35 páginas estáticas/SSG; `node --test tests/routing.test.mjs` aprovou 13 de 13 testes. |
| 2026-10-24 | Contatos institucionais | Endereço, telefone/WhatsApp e e-mail foram conferidos na página oficial atual; 14 de 14 testes, `npm run typecheck` e build com 35 páginas aprovados após inseri-los na home e no rodapé. |
| 2026-10-24 | Navegador — produção local atualizada | A home em `http://localhost:9016/` exibiu navegação, serviços, CTA de cursos, WhatsApp, telefone, e-mail, endereço com mapa e rodapé; a prévia foi aberta no painel para revisão. |
| 2026-10-24 | Preservação de cursos | 15 de 15 testes aprovados; os 28 cursos foram validados com imagem local, checkout Bludata e WhatsApp preservados. |
| 2026-10-24 | Navegador — celular 390 × 844 | Na produção local, o botão “Abrir menu” apresentou estado expandido, os seis destinos foram exibidos e o link Cursos abriu `/cursos`; viewport restaurado após o teste. |
| 2026-10-24 | Estados de rota | Teste TDD falhou antes da implementação e passou depois; 16 de 16 testes e TypeScript aprovados. Build com 35 páginas passou; em produção local, `/` retornou 200 e rota inexistente retornou 404. |
| 2026-10-24 | Checkout Bludata | As 28 URLs de inscrição foram consultadas em leitura com redirecionamentos permitidos; todas responderam HTTP 200, sem iniciar compra ou pagamento. |
| 2026-10-24 | Catálogo e detalhe no navegador | Em produção local, o filtro Atualização exibiu apenas cursos dessa categoria; o detalhe de `mopp-atualizacao` apresentou preço, links Bludata e WhatsApp; “Voltar ao catálogo” abriu `/cursos#cursos`. |
| 2026-10-24 | Lint existente | `npm run lint` não é não interativo: abriu o assistente de configuração do Next.js porque não há ESLint nem arquivo de regras no repositório. Não foi tratado como teste aprovado. |
| 2026-10-25 | Refresh visual | `npm run typecheck`, `npm run build` e `node --test tests/routing.test.mjs`: 16 de 16 testes aprovados; 35 páginas estáticas geradas. |
| 2026-10-25 | Produção após refresh | Vercel `dpl_6Ni9r6VJ5mFYoDTyr6ze5jwfD2tP` READY; domínio principal retornou HTTP 200 para `/`, `/cursos` e `/cursos/mopp-atualizacao`; home contém a nova chamada visual e o Instagram oficial. |
| 2026-10-25 | Imagens reais | Typecheck, build e 16 de 16 testes de regressão aprovados após substituir o hero e preencher as seções Sobre/Cursos com imagens específicas. |
| 2026-10-25 | Produção das imagens | Vercel `dpl_A4yTpreo3q8wrfytADANjo839viC` READY; `/` retornou HTTP 200 e contém `hero-car-guaruja.png`, `documentacao-carro.png` e `cursos-transito.png`. |
| 2026-10-25 | Proposta visual detalhada | Typecheck, build e 16 de 16 testes aprovados após incluir a faixa “Como funciona” e a imagem de atendimento da seção Sobre. |
