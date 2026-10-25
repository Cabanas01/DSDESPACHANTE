# Estado do trabalho

Atualização do ciclo de menu: validação funcional em navegador concluída via Playwright com Edge headless; build aprovado. Correção pronta para publicação. A falha anterior da ferramenta CUA foi contornada com navegador automatizado local.

## Ciclo UX/UI — 2026-10-25

Correção local do contraste do menu móvel; Escape fecha o painel e retorna o foco ao botão. Typecheck e 16 testes existentes passaram. Validação visual, build e publicação desta correção pendentes.

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

### Task de melhoria visual — 2026-10-25

Concluída. A home institucional recebeu uma composição visual com imagem no hero, imagem institucional na seção Sobre, cards de serviços mais destacados e CTA para o Instagram oficial `@dsdespachante_`. O catálogo e os detalhes de cursos permanecem sem alterações. Typecheck, build e 16 testes de regressão passaram. O deployment de produção da Vercel foi marcado como READY no commit `2292b92179cd0235481c1aaef9dd75bd7db59c34`; `/`, `/cursos` e `/cursos/mopp-atualizacao` responderam HTTP 200 no domínio principal.

### Task de imagens reais — 2026-10-25

Concluída. A imagem de caminhão foi substituída por uma imagem de carro de passeio na orla de Guarujá. Também foram adicionadas imagens específicas de documentação veicular e estudo de trânsito, aplicadas nas seções Sobre e Cursos, e o cabeçalho foi ajustado para o padrão escuro da referência enviada. Typecheck, build e 16 testes passaram. O deployment de produção `dpl_A4yTpreo3q8wrfytADANjo839viC` está READY e a home confirma os três novos assets.

### Proposta visual detalhada — 2026-10-25

Em andamento. A home foi aproximada da proposta enviada com ordem de serviços, faixa “Como funciona” em quatro etapas e imagem de atendimento humano na seção Sobre. Typecheck, build e 16 testes passaram; falta publicar esta atualização.

Prévia hospedada e publicação permanecem pendentes: não há configuração de hospedagem no repositório. O domínio atual respondeu `Server: Vercel`, confirmando que ele já é servido pela plataforma. A conexão Vercel disponível retornou a conta incorreta (`dinheirodegraca013@gmail.com`) e não possui projeto identificado como DS Despachante (apenas `nexusteste`), que não será reutilizado. A tela de login foi aberta para a conta informada pelo usuário (`GuiTabanas3@gmail.com`); a próxima ação é autenticar essa conta e localizar o projeto correto. A versão local passou em testes, tipos, build e fluxo de retorno ao catálogo em servidor de produção local.

Checagem final: a tela da Vercel permanece no login, sem sessão autenticada. Nenhuma prévia hospedada, publicação, alteração de DNS ou produção foi realizada.

Foi solicitado código de verificação para `Guicabanas13@gmail.com`; a Vercel continua aguardando seu preenchimento. Sem essa etapa não é possível identificar nem acessar o projeto hospedado.

Após o login, a Vercel exibiu o modal obrigatório de decisão sobre 2FA. A criação da prévia está aguardando o usuário escolher configurar 2FA ou dispensar essa recomendação; essa decisão não foi tomada pelo agente.

O commit local `78a67cd` foi criado com a identidade fornecida pelo usuário e permanece isolado na branch `feat/ds-institutional-site`. O push direto foi recusado porque o terminal está autenticado em outra conta GitHub; a conexão GitHub integrada também não tem permissão de escrita neste repositório.

Prévia local disponível nesta sessão em `http://localhost:9015/`; ela não é pública e depende do processo local em execução.

A navegação por teclado inclui atalho para pular o cabeçalho e chegar diretamente ao conteúdo principal.

A validação mais recente em 390 × 844 confirmou o menu móvel acessível, seus destinos institucionais e a rota `/cursos` na versão de produção local.

Foram incluídos estados globais de carregamento, erro recuperável e página 404; no servidor de produção local, `/` retornou HTTP 200 e uma rota inexistente retornou HTTP 404.

Os 28 links de checkout Bludata do catálogo foram consultados somente em leitura e responderam HTTP 200.

No navegador de produção local, o filtro “Atualização”, o detalhe `mopp-atualizacao`, os links de inscrição e o retorno para `/cursos#cursos` foram validados.

O script de lint legada do Next.js requer configuração interativa e não foi considerado aprovado; a migração para ESLint CLI permanece fora desta alteração por exigir dependência e regras novas.

A Vercel foi autenticada na conta `cabanas01`, o aviso de 2FA foi dispensado a pedido do usuário e o projeto `dsdespachante` foi confirmado. A produção continua inalterada; a prévia depende apenas de autorização de escrita no GitHub para publicar a branch remota.

Alternativa verificada: a Vercel CLI local não possui sessão (`loggedIn: false`) nem projeto vinculado. Ela não será usada para enviar uma prévia sem autenticação explícita; produção, domínio e DNS seguem inalterados.

A credencial Git local da conta incorreta `dinheirodegraca013-spec` foi removida de forma direcionada. O Git Credential Manager agora não lista contas GitHub; a próxima ação é concluir o login interativo de `Cabanas01` e então publicar a branch de prévia. O conector GitHub do Codex permanece indisponível nesta sessão (erro `Unknown tool`).

Tentativas de login/push iniciadas pelo Git Credential Manager ficaram presas sem abrir interface de autenticação; os processos pendentes foram encerrados, sem alterar arquivos, commits, domínio, DNS ou produção. O login deve ser concluído em um terminal visível pelo usuário com `git credential-manager github login --username Cabanas01 --browser`.
