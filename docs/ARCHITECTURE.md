# Architecture

- `src/App.tsx`: bilingual learner UI and assessment interaction.
- `src/content/lessons.ts`: typed content records with stable IDs and language-review status.
- `src/lib/learning.ts`: localization and curriculum validation.
- `src/styles.css`: responsive design tokens and styles.
- `tests/`: unit tests for content completeness and localization.
- `.github/workflows/ci.yml`: PR and push verification.
- `.cursor/rules/`: Cursor agent guardrails.
- `AGENTS.md`: cross-agent operating instructions.

## Next architectural evolution
Move content to one JSON or Markdown record per lesson; add a validated content schema, printable generation, offline-safe assets, interactive activity variants, and controlled audio manifests. Add backend only when real needs justify it. No secrets should be committed.
