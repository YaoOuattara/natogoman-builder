# NATOGOMAN Builder — Agent Operating Contract

## Mission
Build and maintain a safe, accessible, mobile-first learning experience for children aged 5–7. Public product is French/English first, with Baoulé, Dioula, Twi, and Swahili only after native-speaker review. The brand's family origin is PRIVATE: do not introduce family biographies, memorial stories, or etymology into public code, documentation, UI, or marketing.

## Definition of done
A change is done only when: (1) a concrete artifact exists; (2) tests and `npm run build` pass; (3) FR/EN behavior is checked; (4) age-appropriate content and adult supervision notes are preserved; (5) changes are documented in the PR; (6) no unreviewed translations are published.

## Workflow
1. Read README.md, docs/PRODUCT.md, docs/BACKLOG.md and relevant source files.
2. Choose the highest-priority unblocked issue; restate scope and acceptance criteria.
3. Work in a feature branch (`feat/<issue>-<slug>` or `fix/<issue>-<slug>`).
4. Make small, reviewable changes; add or update tests.
5. Run `npm run check`; report exact results, not assumptions.
6. Prepare a PR describing what was built, tested, risks, screenshots if UI changed, and remaining work.
7. Do not merge, deploy publicly, purchase services, collect child data, or contact children without explicit founder approval.

## Architecture rules
- React + TypeScript + Vite; keep dependencies minimal.
- `src/content/lessons.ts` is the initial typed curriculum source; later migrate to content files without breaking IDs.
- All child-facing copy must have French and English equivalents.
- No user accounts, child identifiers, analytics tracking, open chatbots, ads, or payments in the MVP.
- African-language assets require provenance, permission, variety, reviewer, review status, and version before display.
- Prefer accessible semantic HTML, keyboard navigation, large touch targets, reduced-motion awareness, low-bandwidth assets.
- Keep pedagogy and safety review separate from software test results.

## Priority order
P0: app works, content is accurate, child safety/privacy, bilingual UX.
P1: lesson completion, reusable content pipeline, printable activities, accessibility.
P2: reviewed language audio, teacher tools, offline enhancements.

## Reporting format
Built | Verified (commands and results) | Blocked | Next highest-value task | Founder decision needed.
