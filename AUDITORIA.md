# Auditoria

## Preservação

- `src/lib/courses.ts` é a fonte de catálogo, preços, imagens e links externos.
- `src/app/cursos/[id]/page.tsx` é a página existente de detalhe.
- A verificação de diff confirmou que `src/lib/courses.ts` permanece sem alterações e contém 28 cursos.
- Não foram encontradas configurações de produção, credenciais ou DNS no repositório.

## Riscos conhecidos

- `next.config.ts` ignora erros de TypeScript e ESLint no build; a validação deve executar `npm run typecheck` explicitamente.
- O repositório declara Firebase, mas a auditoria de imports não encontrou integração ativa na aplicação.
- A instalação inicial de `node_modules` estava incompleta. Ela foi isolada de forma recuperável em `.node_modules-corrupt-20261024` e reinstalada pelo `package-lock.json`.
- O build original falhava no Windows por usar `NODE_ENV=production` como sintaxe de shell POSIX; o script agora executa `next build`.
- SEO local implementado: metadados canônicos, Open Graph, sitemap e robots estáticos; a indexação real depende da publicação no domínio.
- Links externos que abrem nova guia usam `rel="noopener noreferrer"`; a regra é coberta por teste automatizado.
- A área de cursos preserva conteúdos promocionais e regulatórios já existentes no repositório. Esses dados não foram reescritos, pois precisam de confirmação da empresa antes de qualquer alteração editorial.
- O sitemap estático inclui a página institucional, o catálogo e todas as 28 rotas de detalhes existentes no catálogo atual.
- Rotas de detalhes são geradas para os 28 IDs do catálogo; IDs fora dessa lista retornam HTTP 404 e não são indexáveis.
- A tentativa de commit foi interrompida antes de gravar histórico: o ambiente não possui identidade Git configurada. Não foi definida uma identidade arbitrária nem realizado push.
- Avatares remotos de demonstração e a métrica promocional não confirmada foram removidos da abertura dos cursos; catálogo, preços, IDs e links de inscrição não foram alterados.
- A página oficial publicada foi consultada em 2026-10-24 como evidência de contato: Alameda das Tulipas, 214 - Jardim Primavera, Guarujá - SP; `(13) 99193-2590`; `contato@dscursos.online`. Esses dados são reutilizados somente nas áreas institucionais.
- Teste automatizado confirma que os 28 cursos preservam imagens locais, checkout Bludata e links de WhatsApp do catálogo de origem.
- Em viewport 390 × 844, a home institucional exibiu menu móvel com estado acessível expandido e todos os destinos; a navegação até `/cursos` foi verificada em navegador real.
- Estados globais de carregamento, erro recuperável e página não encontrada foram adicionados. A rota inexistente foi confirmada como HTTP 404 em servidor de produção local.
- Consulta externa somente de leitura confirmou HTTP 200 nos 28 destinos Bludata preservados no catálogo; nenhum checkout ou pagamento foi iniciado.
- Cabeçalhos HTTP do domínio principal atual retornaram `Server: Vercel`, confirmando hospedagem ativa na Vercel. A publicação permanece bloqueada apenas pela autenticação na conta que detém o projeto.
- Fluxo real de cursos validado em produção local: filtro de Atualização, detalhe `mopp-atualizacao`, CTAs Bludata/WhatsApp e retorno ao catálogo.
- `npm run lint` ainda abre a configuração interativa legada do Next.js; o repositório não possui ESLint nem arquivo de regras. O comando não foi considerado aprovação de lint e sua migração exigirá uma dependência/configuração nova, fora do escopo da mudança institucional.
