# DS Despachante Guarujá — desenho técnico

## Objetivo

Transformar a raiz do domínio em uma página institucional responsiva e manter a plataforma de cursos existente em `/cursos`, com detalhes em `/cursos/[id]` e checkouts externos preservados.

## Decisões

- A rota `/` será institucional; `/cursos` receberá a composição atual de cursos.
- As 28 entradas de `src/lib/courses.ts`, links Bludata e links de WhatsApp não serão modificados.
- A identidade reutiliza a logo e os tokens já presentes: marrom `#6B5B3E`, dourado `#FFC107`, branco e preto.
- Dados não confirmados (endereço, horário, telefone alternativo e fotos reais) não serão inventados; o contato confirmado é o WhatsApp `+55 13 99193-2590`.
- Não haverá publicação, mudança de DNS nem alteração do domínio `.com`.

## Arquitetura

Componentes institucionais separados formarão a página raiz: cabeçalho, destaque, serviços, apresentação, chamada de cursos, contato e rodapé. O catálogo existente será reutilizado em uma página própria de cursos e os componentes de navegação passarão a apontar para rotas e âncoras estáveis.

## Critérios de aceite locais

- `/` apresenta navegação, serviços, chamada a cursos e contato confirmado.
- `/cursos` preserva o catálogo; `/cursos/[id]` continua acessível.
- O menu funciona em tela pequena e grande, com foco e rótulos acessíveis.
- Animações respeitam `prefers-reduced-motion`.
- Metadados básicos, build e checagem de tipos são executados.
