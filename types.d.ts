export type Language = 'af' | 'ga' | 'sq' | 'it' | 'ar' | 'ja' | 'az' | 'kn' | 'eu' | 'ko' | 'bn' | 'la' | 'be' | 'lv' | 'bg' | 'lt' | 'ca' | 'mk' | 'zh-cn' | 'ms' | 'zh-cn' | 'mt' | 'hr' | 'no' | 'cs' | 'fa' | 'da' | 'pl' | 'nl' | 'pt' | 'en' | 'ro' | 'eo' | 'ru' | 'et' | 'sr' | 'tl' | 'sk' | 'fi' | 'sl' | 'fr' | 'es' | 'gl' | 'sw' | 'ka' | 'sv' | 'de' | 'ta' | 'el' | 'te' | 'gu' | 'th' | 'ht' | 'tr' | 'iw' | 'uk' | 'hi' | 'ur' | 'hu' | 'vi' | 'is' | 'cy' | 'id' | 'yi';

export interface Settings {
  to: Language;
  from?: Language | 'auto';
}

export interface Translation {
  input: string;
  output: string;
  translit: string | null;
  
  from: Language;
  to: Language;
}   