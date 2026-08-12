import { I18nextProvider } from 'react-i18next';
import {
  Loader, useTemplateVal, useScreenInfo, useConfig,
} from '@dsplay/react-template-utils';
import Intro from '../intro';
import Main from '../main';
import i18n from '../../i18n';
import { loadData } from '../../services/wordtime';
import './style.sass';

const MIN_LOADING_DURATION = 2000;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Condensed',
  'Oswald',
];

function useCities(v, i) {
  return useTemplateVal(`city_${i + 1}`);
}

function App() {
  const brand = useTemplateVal('brand');
  const bg = useTemplateVal('background');
  const { locale } = useConfig();

  // images to preload
  const images = [brand, bg];

  const cities = new Array(8).fill(1).map(useCities).filter((city) => city);

  // other tasks (Promises) to run during template intro
  const tasks = [
    loadData(cities),
  ];

  const { screenFormat } = useScreenInfo();

  const [lng] = (locale || 'en').split('_');
  i18n.changeLanguage(lng);

  return (
    <I18nextProvider i18n={i18n}>
      <Loader
        placeholder={<Intro />}
        fonts={fonts}
        images={images}
        minDuration={MIN_LOADING_DURATION}
        tasks={tasks}
      >
        <div className={`app fade-in ${screenFormat}`}>
          <Main />
        </div>
      </Loader>
    </I18nextProvider>
  );
}

export default App;
