import { describe, it, expect } from 'vitest';
import { lessons } from '../src/content/lessons';
import { getLocalized, validateLesson } from '../src/lib/learning';
describe('NATOGOMAN lesson contract', () => {
 it('includes exactly five reference modules with unique IDs', () => {expect(lessons).toHaveLength(5);expect(new Set(lessons.map(l=>l.id)).size).toBe(5);});
 it('has complete French and English core content', () => {for (const lesson of lessons) expect(validateLesson(lesson)).toEqual([]);});
 it('never claims unreviewed African-language audio is available', () => {for(const lesson of lessons) for(const status of Object.values(lesson.africanLanguageStatus)) expect(status).toBe('not-reviewed');});
 it('switches localized copy correctly', () => {expect(getLocalized(lessons[0].title,'fr')).toBe('Comment poussent les graines ?');expect(getLocalized(lessons[0].title,'en')).toBe('How Seeds Grow');});
});
