# Programadores pela Democracia 2026

Landing page estática (HTML, CSS e JavaScript puro, sem build), servida por Cloudflare Workers + Static Assets. A chamada central é entrar no grupo do WhatsApp.

## Editar

- `site.js`: **links dos dois grupos do WhatsApp** (comunidade e desenvolvimento), GitHub e data da eleição. É o único arquivo que precisa de ajuste para publicar.
- `index.html`: textos. As três frentes em `#frentes` são rascunho.
- `_headers`: cache e cabeçalhos de segurança.

## Rodar

```
npm install
npm run dev        # wrangler dev
# ou, sem instalar nada:
python3 -m http.server 8000
```

## Publicar no GitHub Pages (atual)

O site está na raiz do repositório (`index.html`). No GitHub: **Settings > Pages > Source: Deploy from a branch > `main` / `(root)`**. O repositório precisa ser público (no plano gratuito). Endereço: https://programadorespelademocracia.org/ (CNAME) e https://bonafe.github.io/programadorespelademocracia/

Se o domínio mudar, troque `canonical`, `og:url`, `og:image` em `index.html` e `url` em `site.js`, e edite o arquivo `CNAME`.

## Publicar na Cloudflare (alternativa)

```
npx wrangler login
npm run deploy
```

Domínio: adicione `codigopelademocracia.org.br` como Custom Domain do Worker no painel da Cloudflare.

Sem cookies, sem rastreadores, sem scripts externos.
