import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import english from './assets/en.json';
import polish from './assets/pl.json';

const resources = {
  en: english,
  pl: polish,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: RNLocalize.findBestAvailableLanguage(Object.keys(resources))
    ?.languageTag,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
