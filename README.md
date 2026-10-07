# Programadores pela Democracia 2026

Landing page estática (HTML, CSS e JavaScript puro, sem build), servida por Cloudflare Workers + Static Assets. A chamada central é entrar no grupo do WhatsApp.

## Editar

- `public/site.js`: **links dos dois grupos do WhatsApp** (comunidade e desenvolvimento), GitHub e data da eleição. É o único arquivo que precisa de ajuste para publicar.
- `public/index.html`: textos. As três frentes em `#frentes` são rascunho.
- `public/_headers`: cache e cabeçalhos de segurança.

## Rodar

```
npm install
npm run dev        # wrangler dev
# ou, sem instalar nada:
python3 -m http.server -d public 8000
```

## Publicar no GitHub Pages (atual)

O workflow `.github/workflows/pages.yml` publica `public/` a cada push na `main`. Uma vez só: no GitHub, **Settings > Pages > Source: GitHub Actions**. O repositório precisa ser público (no plano gratuito). Endereço: https://bonafe.github.io/programadorespelademocracia/

Ao ter domínio próprio, troque `canonical`, `og:url`, `og:image` em `index.html` e `url` em `site.js`, e crie `public/CNAME`.

## Publicar na Cloudflare (alternativa)

```
npx wrangler login
npm run deploy
```

Domínio: adicione `codigopelademocracia.org.br` como Custom Domain do Worker no painel da Cloudflare.

Sem cookies, sem rastreadores, sem scripts externos.
