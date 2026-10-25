# Auditoria

Revisão de identidade: foto da fachada fornecida pelo usuário estabelece amarelo/dourado, preto e branco como direção atual; valores adotados são de implementação e não declarados códigos oficiais. Variáveis primárias antes marrons agora neutras escuras para manter texto branco legível; blocos dourados usam texto preto. Herança compartilhada altera apresentação dos cursos, sem mudar seu catálogo. Corrigida classe h-13 inexistente, que resultava em CTAs estreitos; menu antes terminava em y=433 numa viewport de 375, agora tem limite dinâmico e rolagem interna.

Revisão mobile-first: o hero anterior cortava o carro atrás do texto no celular; a camada de fundo no banner de cursos ocultava sua fotografia. Alteração restrita à apresentação da home: imagem própria abaixo do texto no celular e painel de fotografia ao lado/acima do CTA de cursos. Catálogo, preços e integrações não alterados. Prioridade de celular registrada por pedido explícito do usuário.

2026-10-25 — verificação adicional via Edge headless confirmou cor escura do menu, fechamento por Escape, foco restaurado, ausência de overflow horizontal em celular/desktop e acesso ao catálogo. Build passou; screenshots locais gerados. Isso substitui a pendência funcional de navegador registrada abaixo, sem apagar a falha histórica da CUA.

2026-10-25 — revisão do menu móvel encontrou texto herdado branco sobre painel branco após a mudança do cabeçalho. Aplicado `text-foreground` no painel e Escape com retorno de foco. A ferramenta de navegador falhou na inicialização com erro de assets; inspeção visual não executada nesta rodada. Correção ainda local, não publicada.

## Preservação

- `src/lib/courses.ts` é a fonte de catálogo, preços, imagens e links externos.
- `src/app/cursos/[id]/page.tsx` é a página existente de detalhe.
- A verificação de diff confirmou que `src/lib/courses.ts` permanece sem alterações e contém 28 cursos.
- Não foram encontradas configurações de produção, credenciais ou DNS no repositório.

## Riscos conhecidos

### Revisão visual de 2026-10-25

- Foram usadas imagens locais do repositório; não foram adicionadas imagens de terceiros como se fossem instalações ou equipe reais.
- O Instagram foi usado como fonte pública de posicionamento e link oficial; o feed não foi copiado por não estar disponível de forma estável no HTML público.
- Os dados conflitantes encontrados em diretórios externos não foram incorporados ao site.

- `next.config.ts` ignora erros de TypeScript e ESLint no build; a validação deve executar `npm run typecheck` explicitamente.
- O repositório declara Firebase, mas a auditoria de imports não encontrou integração ativa na aplicação.
- A instalação inicial de `node_modules` estava incompleta. Ela foi isolada de forma recuperável em `.node_modules-corrupt-20261024` e reinstalada pelo `package-lock.json`.
- O build original falhava no Windows por usar `NODE_ENV=production` como sintaxe de shell POSIX; o script agora executa `next build`.
- SEO local implementado: metadados canônicos, Open Graph, sitemap e robots estáticos; a indexação real depende da publicação no domínio.
- Links externos que abrem nova guia usam `rel="noopener noreferrer"`; a regra é coberta por teste automatizado.
- A área de cursos preserva conteúdos promocionais e regulatórios já existentes no repositório. Esses dados não foram reescritos, pois precisam de confirmação da empresa antes de qualquer alteração editorial.
- O sitemap estático inclui a página institucional, o catálogo e todas as 28 rotas de detalhes existentes no catálogo atual.
- Rotas de detalhes são geradas para os 28 IDs do catálogo; IDs fora dessa lista retornam HTTP 404 e não são indexáveis.
- O commit local `78a67cd` foi criado na branch `feat/ds-institutional-site` com a identidade fornecida pelo usuário. O envio direto pelo terminal foi recusado porque as credenciais salvas pertencem à conta GitHub `dinheirodegraca013-spec`.
- A conexão GitHub integrada identifica `Cabanas01`, mas retornou 403 ao tentar criar a branch remota: ela não possui permissão de escrita para este repositório.
- Avatares remotos de demonstração e a métrica promocional não confirmada foram removidos da abertura dos cursos; catálogo, preços, IDs e links de inscrição não foram alterados.
- A página oficial publicada foi consultada em 2026-10-24 como evidência de contato: Alameda das Tulipas, 214 - Jardim Primavera, Guarujá - SP; `(13) 99193-2590`; `contato@dscursos.online`. Esses dados são reutilizados somente nas áreas institucionais.
- Teste automatizado confirma que os 28 cursos preservam imagens locais, checkout Bludata e links de WhatsApp do catálogo de origem.
- Em viewport 390 × 844, a home institucional exibiu menu móvel com estado acessível expandido e todos os destinos; a navegação até `/cursos` foi verificada em navegador real.
- Estados globais de carregamento, erro recuperável e página não encontrada foram adicionados. A rota inexistente foi confirmada como HTTP 404 em servidor de produção local.
- Consulta externa somente de leitura confirmou HTTP 200 nos 28 destinos Bludata preservados no catálogo; nenhum checkout ou pagamento foi iniciado.
- Cabeçalhos HTTP do domínio principal atual retornaram `Server: Vercel`, confirmando hospedagem ativa na Vercel. A publicação permanece bloqueada apenas pela autenticação na conta que detém o projeto.
- Fluxo real de cursos validado em produção local: filtro de Atualização, detalhe `mopp-atualizacao`, CTAs Bludata/WhatsApp e retorno ao catálogo.
- `npm run lint` ainda abre a configuração interativa legada do Next.js; o repositório não possui ESLint nem arquivo de regras. O comando não foi considerado aprovação de lint e sua migração exigirá uma dependência/configuração nova, fora do escopo da mudança institucional.
