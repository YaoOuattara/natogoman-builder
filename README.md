# NATOGOMAN Builder

A mobile-first, bilingual (French/English) educational prototype for children aged 5–7, with a staged path toward reviewed Baoulé, Dioula, Twi and Swahili content.

> **Status:** Functional application scaffold, not a production-ready educational platform. Videos, printable PDFs, expert content review, native-speaker audio, and child pilot approval are not yet complete.

## Quick start

Prerequisites: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173). To verify:

```bash
npm run test
npm run build
```

## Cursor
1. Extract this repository into a local folder and open the folder in Cursor.
2. Cursor automatically loads `.cursor/rules/natogoman.mdc` in supported versions. Ask the agent to read `AGENTS.md` and `docs/BACKLOG.md`.
3. Start with Issue 1, then Issue 2. Work in feature branches and run `npm run check` before proposing PRs.
4. Do not grant auto-merge or public deployment permissions initially.

## GitHub
1. Create a **private** GitHub repository named `natogoman-builder`.
2. From this folder:
```bash
git init
git add .
git commit -m "feat: initial NATOGOMAN learning scaffold"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/natogoman-builder.git
git push -u origin main
```
3. Enable branch protection / rulesets for `main` and require `test-and-build` CI checks before merging.
4. Create issues from `docs/BACKLOG.md`, or use the issue template.

## Founder boundaries
No public deployment, no child accounts or analytics, no unreviewed educational translations, no unlicensed assets, and no family-origin story in public-facing content. See `AGENTS.md`.

## Repository map
See `docs/ARCHITECTURE.md` and `docs/PRODUCT.md`.
