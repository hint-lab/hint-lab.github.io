import zh from '../../i18n/zh.json';
import en from '../../i18n/en.json';
import ja from '../../i18n/ja.json';

export type Dict = typeof zh;

export function getDict(locale: 'zh' | 'en' | 'ja'): Dict {
    if (locale === 'en') return en as Dict;
    if (locale === 'ja') return ja as Dict;
    return zh as Dict;
}


