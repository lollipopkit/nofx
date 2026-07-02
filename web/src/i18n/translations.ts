import en from './en'
import zh from './zh'
import id from './id'

export type Language = 'en' | 'zh' | 'id'

// Dictionary now lives in per-locale files (typesafe-i18n structure); this
// module keeps the existing t()/pick() runtime API so call sites are stable.
export const translations = { en, zh, id }

export function t(
  key: string,
  lang: Language,
  params?: Record<string, string | number>
): string {
  // Handle nested keys like 'twoStageKey.title'
  const keys = key.split('.')
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  let text = typeof value === 'string' ? value : key

  // Replace parameters like {count}, {gap}, etc.
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value))
    })
  }

  return text
}

// Inline trilingual picker for component-local strings that aren't worth a
// dictionary key. Prefer t() with a key when the string is reused; use this to
// replace binary `language === 'zh' ? zh : en` ternaries so Indonesian (id)
// users get a real translation instead of always falling back to English.
export function pick(
  lang: string,
  zh: string,
  en: string,
  id?: string
): string {
  if (lang === 'zh') return zh
  if (lang === 'id') return id ?? en
  return en
}
