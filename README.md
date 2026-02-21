# Core Tool Directory (Neo-Brutalist)

A static, deploy-ready Next.js App Router directory for tool specs:
- Browse + filter tools
- Tool detail pages
- Landing page draft generator (copy/paste)
- Iframe embed route per tool
- Lightweight client-side “runner” for formula-based calculators

## 1) Setup
```bash
npm install
npm run dev
```

## 2) Add / edit tools
Edit:
- `data/tools.json`

Rebuild:
```bash
npm run build
```

## 3) Deploy on Vercel
1. Push this repo to GitHub
2. Import into Vercel
3. Build command: `next build`
4. Output is static (`output: "export"`)

## 4) Embed a tool
Each tool has an embed view:
- `/tools/<slug>/embed`

Use the iframe snippet found on the tool page.

## Notes
- No database. No auth. No server actions.
- Runner supports basic math expressions over numeric inputs: `+ - * / ( )`.
- Replace `https://YOUR_PRIMARY_CTA_LINK` and `https://YOUR_DOMAIN` after deploy.
