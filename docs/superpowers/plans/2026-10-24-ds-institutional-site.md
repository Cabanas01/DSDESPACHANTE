# DS Institutional Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar localmente a nova raiz institucional e preservar a experiência de cursos em `/cursos`.

**Architecture:** A home institucional será composta por componentes próprios. O conteúdo atual da raiz será extraído para uma rota de cursos e continuará reutilizando o catálogo e os detalhes existentes.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide.

**Spec:** `docs/superpowers/specs/2026-10-24-ds-institutional-design.md`

## Global Constraints

- Não alterar cursos, valores ou URLs de checkout existentes.
- Não inventar dados empresariais nem publicar em produção.
- Suportar navegação por teclado, foco visível e movimento reduzido.

## Review Focus

- A rota `/cursos/[id]` deve conservar os links de compra e atendimento.
- Nenhum menu deve apontar para âncora inexistente.
- A navegação móvel deve permanecer utilizável por teclado.
- As novas imagens devem ter texto alternativo útil.
- Dados de contato não confirmados não devem ser exibidos.

---

### Task 1: Preparar rotas e registros

**Files:**
- Create: `ESTADO.md`, `BACKLOG.md`, `TESTES.md`, `AUDITORIA.md`
- Create: `src/app/cursos/page.tsx`
- Modify: `src/app/page.tsx`

- [ ] Registrar o inventário e os bloqueios conhecidos.
- [ ] Mover a composição atual de cursos para `/cursos` sem alterar `courses.ts`.
- [ ] Criar uma raiz institucional sem afetar `/cursos/[id]`.

### Task 2: Construir interface institucional

**Files:**
- Create: `src/components/institutional/*`
- Modify: `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/app/globals.css`

- [ ] Criar cabeçalho, destaque, serviços, apresentação, chamada a cursos e contato.
- [ ] Incluir estados responsivos, foco e movimento reduzido.

### Task 3: Metadados e verificação

**Files:**
- Modify: `src/app/layout.tsx`, registros em `TESTES.md` e `ESTADO.md`

- [ ] Atualizar metadados da raiz institucional.
- [ ] Instalar dependências, executar typecheck/build e validar as rotas localmente.
