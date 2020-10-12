import { useConfig } from '@dsplay/react-template-utils';

export default function useLanguage() {
  const { locale = 'en_US' } = useConfig();
  const [language] = locale.split('_');

  return language;
}
