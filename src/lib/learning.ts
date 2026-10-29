import type { CoreLanguage, Lesson } from '../content/lessons';
export function getLocalized(value: { en: string; fr: string }, language: CoreLanguage): string { return value[language]; }
export function validateLesson(lesson: Lesson): string[] {
 const errors: string[] = [];
 if (!/^M\d{2}$/.test(lesson.id)) errors.push('Invalid module ID');
 for (const key of ['title','objective','explanation','activity','materials','adultNote'] as const) {
  if (!lesson[key].en.trim() || !lesson[key].fr.trim()) errors.push(`Missing bilingual ${key}`);
 }
 if (lesson.questions.length === 0) errors.push('Missing assessment');
 lesson.questions.forEach((q, i) => { if (q.correctIndex < 0 || q.correctIndex >= q.options.length) errors.push(`Invalid answer ${i}`); if (!q.prompt.en || !q.prompt.fr) errors.push(`Missing bilingual question ${i}`); });
 return errors;
}
