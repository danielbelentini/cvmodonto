# CVM Odontologia — Landing Page

Landing page institucional da CVM Odontologia, construída com **Next.js (App Router)**,
**TypeScript** e **Tailwind CSS v4**. O projeto é configurado para **exportação estática**
(`next build` gera a pasta `out/`), pronta para subir em qualquer servidor/CDN que não
rode Node.js (Hostgator, cPanel, Netlify, Vercel estático, S3, etc.).

## Estrutura

```
app/
  layout.tsx        # Metadados de SEO, fontes (Lato + Fraunces via @fontsource)
  page.tsx           # Monta as seções na ordem do wireframe aprovado
  globals.css         # Tokens de design (cores, tipografia, tema escuro)
components/
  Header.tsx          # Navegação + menu mobile
  Hero.tsx
  About.tsx            # Sobre + Big Numbers
  Differentials.tsx
  Services.tsx
  Team.tsx             # Nossa Equipe
  Testimonials.tsx     # Depoimentos
  Partners.tsx         # Convênios
  Location.tsx         # Endereço + mapa
  FinalCta.tsx
  Footer.tsx
  Button.tsx, SectionHeader.tsx, SectionCta.tsx, Reveal.tsx, icons.tsx  # reutilizáveis
lib/
  content.ts           # Todo o conteúdo textual/dados em um único lugar
```

## Rodando localmente

Pré-requisito: Node.js 20+ instalado.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Gerando os arquivos estáticos para subir no servidor

```bash
npm run build
```

Isso vai gerar a pasta **`out/`** com HTML, CSS, JS e fontes — são esses arquivos que
devem ser copiados para o servidor (não é necessário Node.js rodando no servidor final).

## Publicando no servidor

1. Rode `npm run build`.
2. Copie **todo o conteúdo** da pasta `out/` (não a pasta em si, o conteúdo dela) para a
   raiz pública do seu servidor (ex.: `public_html/`, `www/`, ou o diretório configurado
   no seu provedor de hospedagem).
3. Garanta que o servidor sirva `index.html` como página inicial.
4. Pronto — é um site 100% estático (HTML/CSS/JS), sem dependência de Node.js no servidor.

## Notas técnicas

- Fontes **Lato** (corpo) e **Fraunces** (títulos) são auto-hospedadas via pacotes
  `@fontsource`, sem chamadas externas ao Google Fonts em runtime — melhora performance
  e evita bloqueio de terceiros.
- Sem dependências além do necessário: Next.js, React, Tailwind CSS e `@fontsource/*`
  (fontes). Nenhuma biblioteca de ícones ou animação externa — ícones são SVG inline e
  a animação de entrada usa `IntersectionObserver` nativo.
- Mapa incorporado via iframe público do Google Maps (não requer chave de API).
