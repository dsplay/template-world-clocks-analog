import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import {
  LoaderContext,
  useTemplateVal,
  useInterval,
  useScreenInfo,
  screen,
} from '@dsplay/react-template-utils';
import City from '../city/city';
import useLanguage from '../../hooks/use-language';
import './main.sass';
import { LOCAL_CITY } from '../../utils/contants';

function Main() {
  const context = useContext(LoaderContext);
  const {
    tasksResults: [
      cities,
    ],
  } = context;
  const { t, i18n } = useTranslation();
  const language = useLanguage();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const brandImage = useTemplateVal('brand');
  const background = useTemplateVal('background');
  const { screenFormat } = useScreenInfo();

  let maxCities = brandImage ? 7 : 8;
  if (screenFormat === screen.SQUARE) {
    maxCities -= 4;
  } else if (screenFormat === screen.V_BANNER || screenFormat === screen.H_BANNER) {
    maxCities += 1;
  }

  const [date, setDate] = useState(moment());

  useInterval(() => setDate(moment()), 1000);

  return (

    <div
      className={`main ${useTemplateVal('theme')}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="ds-container">
        {
          brandImage
          && (
            <div className="ds-grid-item brand-box ds-center hsidden-square">
              <div className="brand " style={{ backgroundImage: `url(${brandImage})` }} />
            </div>
          )
        }

        {
          /* eslint-disable react/no-array-index-key */

          cities.slice(0, maxCities).map((city, i) => (

            <City
              key={`${city.name}:${i}`}
              {...city}
              date={date}
              clockClassName={city.name === LOCAL_CITY ? 'local-timezone' : ''}
              name={city.name === LOCAL_CITY ? t('Local Time') : city.name}
            />
          ))

        }

      </div>
    </div>
  );
}

export default Main;
