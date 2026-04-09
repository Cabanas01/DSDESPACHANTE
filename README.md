# DS Cursos de Trânsito

Este é o projeto da plataforma oficial de cursos da **DS Despachante Guarujá**.

## Repositório
Este projeto está vinculado ao repositório: [https://github.com/Cabanas01/DSDESPACHANTE.git](https://github.com/Cabanas01/DSDESPACHANTE.git)

## Comandos para Sincronização e Resolução de Erros

Se o seu terminal apresentar o erro `fatal: Need to specify how to reconcile divergent branches`, escolha uma das estratégias abaixo:

### 1. Sincronização Segura (Merge) - Recomendado
Este comando junta as mudanças do GitHub com as do Studio criando um commit de "merge".
```bash
git pull origin main --no-rebase
```

### 2. Sobrescrever o GitHub (Force Push)
Se você quer que o código atual do Studio seja a versão definitiva, ignorando o que está no GitHub:
```bash
git push origin main --force
```

### 3. Configuração Padrão (Evitar erro no futuro)
Defina o comportamento de merge como padrão para não precisar especificar toda vez:
```bash
git config pull.rebase false
```

### Comandos de Rotina
Para enviar novas alterações normalmente após a primeira sincronização:
```bash
git add .
git commit -m "atualização de cursos e links oficiais"
git push origin main
```

## Tecnologias e Funcionalidades
- **Next.js 15**: Performance e SEO de última geração.
- **Tailwind CSS & ShadCN UI**: Interface moderna e responsiva.
- **Catálogo de 28 Cursos**: Listagem completa com checkout Bludata e suporte WhatsApp personalizado.
- **Logo Layout**: Imagem à esquerda com textos empilhados à direita (Padrão Oficial).

---
© 2025 DS Cursos de Trânsito - Unidade Educacional DS Despachante Guarujá.
