/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import frLocaleData from 'react-intl/locale-data/fr';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(frLocaleData);

export const appLocales = [
  'en',
  'de',
  'fr',

];

import enTranslationMessages from './translations/en.json';
import deTranslationMessages from './translations/de.json';
import frTranslationMessages from './translations/fr.json';

export const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  de: formatTranslationMessages(deTranslationMessages),
  fr: formatTranslationMessages(frTranslationMessages),
};
