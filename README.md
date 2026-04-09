# DS Cursos de Trânsito

Este é o projeto da plataforma oficial de cursos da **DS Despachante Guarujá**.

## Repositório
Este projeto está vinculado ao repositório: [https://github.com/Cabanas01/DSDESPACHANTE.git](https://github.com/Cabanas01/DSDESPACHANTE.git)

## Comandos para Sincronização e Resolução de Erros

### Se o Push for Rejeitado (Rejected / non-fast-forward)
Se você tentou dar um push e recebeu o erro `[rejected]`, execute o comando abaixo no terminal para forçar a sincronização do Studio para o GitHub (isso substituirá o código do GitHub pelo código atual do Studio):

```bash
git push -f origin main
```

### Se o Pull Falhar (Divergent Branches)
Se o erro for `fatal: Need to specify how to reconcile divergent branches`, você deve escolher uma estratégia. Como queremos que o código do Studio seja o oficial, o comando de **Force Push** acima ainda é a melhor opção. Mas se precisar reconciliar manualmente no terminal local:

```bash
git config pull.rebase false  # para usar merge
git pull origin main --allow-unrelated-histories
```

### Comandos de Rotina
Para enviar novas alterações normalmente após a primeira sincronização forçada:

```bash
git add .
git commit -m "atualização de cursos e links oficiais"
git push origin main
```

## Tecnologias e Funcionalidades
- **Next.js 15**: Performance e SEO de última geração.
- **Tailwind CSS & ShadCN UI**: Interface moderna e responsiva.
- **Catálogo de 28 Cursos**: Listagem completa com checkout Bludata e suporte WhatsApp.

---
© 2025 DS Cursos de Trânsito - Unidade Educacional DS Despachante Guarujá.