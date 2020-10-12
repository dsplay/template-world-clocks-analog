import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import {
  useMedia,
  useTemplateVal,
  useInterval,
} from '@dsplay/react-template-utils';
import City from '../city/city';
import useLanguage from '../../hooks/use-language';
import './main.sass';

function Main() {
  const { t, i18n } = useTranslation();
  const language = useLanguage();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const {
    result: {
      data: {
        worldCities,
      },
    },
  } = useMedia();

  const brandImage = useTemplateVal('brand_image');
  const bgClockColor = useTemplateVal('bg_clock_color', '#000000');

  const [date, setDate] = useState(moment());

  useInterval(() => setDate(moment()), 1000);

  return (
    <div className={`main ${useTemplateVal('theme')}`}>
      <div className="ds-container">

        {
          brandImage
          && (
          <div className="ds-grid-item brand-box ds-center hidden-square">
            <div className="brand " style={{ backgroundImage: `url(${brandImage})` }} />
          </div>
          )
        }

        <City
          date={date}
          name={t('Local Time')}
          clockClassName="local-timezone"
        />

        {
          worldCities.map((city) => (
            <City
              key={city.name}
              date={date}
              {...city}
            />
          ))
        }

      </div>
    </div>
  );
}

export default Main;