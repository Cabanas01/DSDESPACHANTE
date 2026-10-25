# Testes

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
