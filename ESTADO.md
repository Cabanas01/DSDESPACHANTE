# Estado do trabalho

## Implementado localmente

- A raiz `/` agora apresenta a página institucional.
- A antiga composição de cursos foi transferida para `/cursos`.
- Detalhes de curso em `/cursos/[id]`, catálogo, valores e URLs Bludata permanecem inalterados.
- Cabeçalho, rodapé, contato por WhatsApp, serviços, chamada de cursos e movimento reduzido foram implementados.
- Links externos de atendimento e redes sociais foram protegidos para abertura em nova guia.
- O retorno de detalhe de curso foi corrigido para `/cursos#cursos`; os canônicos de `/` e `/cursos` foram separados.
- O sitemap passou a relacionar as 28 páginas de detalhes de cursos, além de `/` e `/cursos`.
- O cabeçalho destaca Início ou Cursos de acordo com a rota e informa o estado atual por `aria-current`.
- As 28 rotas de detalhes são pré-geradas; IDs inválidos retornam HTTP 404 e detalhes válidos têm metadados canônicos próprios.
- CTAs institucionais usam mensagem genérica de atendimento; CTAs de cursos preservam a mensagem de origem dos cursos.
- Endereço, telefone/WhatsApp e e-mail da DS foram confirmados na página oficial atual e incluídos no contato e no rodapé institucional.

## Evidência inicial

- Commit de origem: `ba59398`.
- Stack: Next.js 15, React 19, Tailwind e TypeScript.
- Cursos: 28 itens em `src/lib/courses.ts`, com links Bludata e WhatsApp.
- Rotas existentes: `/`, `/cursos/[id]` e `/admin/marketing-copy`.
- Branch de trabalho: `feat/ds-institutional-site` (derivada de `ba59398`).

## Próxima ação

Prévia hospedada e publicação permanecem pendentes: não há configuração de hospedagem no repositório. O domínio atual respondeu `Server: Vercel`, confirmando que ele já é servido pela plataforma. A conexão Vercel disponível retornou a conta incorreta (`dinheirodegraca013@gmail.com`) e não possui projeto identificado como DS Despachante (apenas `nexusteste`), que não será reutilizado. A tela de login foi aberta para a conta informada pelo usuário (`GuiTabanas3@gmail.com`); a próxima ação é autenticar essa conta e localizar o projeto correto. A versão local passou em testes, tipos, build e fluxo de retorno ao catálogo em servidor de produção local.

Checagem final: a tela da Vercel permanece no login, sem sessão autenticada. Nenhuma prévia hospedada, publicação, alteração de DNS ou produção foi realizada.

Foi solicitado código de verificação para `Guicabanas13@gmail.com`; a Vercel continua aguardando seu preenchimento. Sem essa etapa não é possível identificar nem acessar o projeto hospedado.

Após o login, a Vercel exibiu o modal obrigatório de decisão sobre 2FA. A criação da prévia está aguardando o usuário escolher configurar 2FA ou dispensar essa recomendação; essa decisão não foi tomada pelo agente.

O commit local também permanece pendente porque o Git não possui identidade (`user.name` e `user.email`) configurada. As alterações estão isoladas e preparadas na branch `feat/ds-institutional-site`; nenhuma alteração foi enviada ao remoto.

Prévia local disponível nesta sessão em `http://localhost:9015/`; ela não é pública e depende do processo local em execução.

A navegação por teclado inclui atalho para pular o cabeçalho e chegar diretamente ao conteúdo principal.

A validação mais recente em 390 × 844 confirmou o menu móvel acessível, seus destinos institucionais e a rota `/cursos` na versão de produção local.

Foram incluídos estados globais de carregamento, erro recuperável e página 404; no servidor de produção local, `/` retornou HTTP 200 e uma rota inexistente retornou HTTP 404.

Os 28 links de checkout Bludata do catálogo foram consultados somente em leitura e responderam HTTP 200.

No navegador de produção local, o filtro “Atualização”, o detalhe `mopp-atualizacao`, os links de inscrição e o retorno para `/cursos#cursos` foram validados.

O script de lint legada do Next.js requer configuração interativa e não foi considerado aprovado; a migração para ESLint CLI permanece fora desta alteração por exigir dependência e regras novas.
