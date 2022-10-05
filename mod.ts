import type { Language, Translation } from './types.d.ts';

/**
 * 
 * @param text - Text to translate
 * @param to - Language to translate to
 * @param from - Language to translate from
 * @example
 * translate('Hello', 'ru')
 * 
 * @returns A promise that resolves to a translation object
 */
export const translate = async (text: string, to: Language, from: Language | 'auto' = 'auto') => {

  const url = 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1';

  const response = await fetch(url, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'AndroidTranslate',
    },

    body: `sl=${ from }&tl=${ to }&q=${ encodeURIComponent(text) }`,
  });

  try {
    const json = await response.json();

    return {
      input: json.sentences[0].orig,
      output: json.sentences[0].trans,

      translit: json.sentences[1] ? json.sentences[1].translit : null,

      from: from == 'auto' ? json.src : from,
      to: to,
    } as Translation;
  } catch {
    return null
  }
}
