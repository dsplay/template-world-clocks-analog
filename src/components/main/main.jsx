import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import {
  useTemplateVal,
  useInterval,
  useScreenInfo,
} from '@dsplay/react-template-utils';
import City from '../city/city';
import useLanguage from '../../hooks/use-language';
import './main.sass';
import { LOCAL_CITY } from '../../utils/contants';

function Main({
  tasksResults: [
    cities,
  ],
}) {
  const { t, i18n } = useTranslation();
  const language = useLanguage();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const { screenFormat } = useScreenInfo();

  const brandImage = useTemplateVal('brand');
  const background = useTemplateVal('background');

  const [date, setDate] = useState(moment());

  useInterval(() => setDate(moment()), 1000);

  return (
    <div className={`app fade-in ${screenFormat}`}>
      <div
        className={`main ${useTemplateVal('theme')}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="ds-container">

          {
            brandImage
            && (
              <div className="ds-grid-item brand-box ds-center hidden-square">
                <div className="brand " style={{ backgroundImage: `url(${brandImage})` }} />
              </div>
            )
          }

          {
            cities.map((city, i) => (
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
    </div>
  );
}

export default Main;
