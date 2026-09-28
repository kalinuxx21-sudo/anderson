# Anderson — Site de Venda de Serviços

Base de uma landing page preparada para desenvolvimento com **React + TypeScript + Vite + Tailwind CSS**, em uma estrutura adequada para evolução no Lovable/GitHub.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- shadcn/ui-compatible configuration

## Estrutura

```text
anderson/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   │   └── utils.ts
│   ├── sections/
│   ├── styles/
│   │   └── main.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── components.json
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Objetivo

Criar uma página profissional, responsiva e orientada à conversão, com destaque para serviços, benefícios, prova social, perguntas frequentes e contato via WhatsApp.

## Integração com Lovable

O repositório está organizado para trabalhar com um fluxo GitHub + Lovable, mantendo o código-fonte na branch `main` e uma base React/Vite editável.

## Próximos passos

- Definir identidade visual e marca.
- Construir as seções da landing page.
- Substituir o número de WhatsApp de exemplo.
- Adicionar prova social, FAQ e chamadas para ação.
- Configurar SEO, analytics e domínio.
