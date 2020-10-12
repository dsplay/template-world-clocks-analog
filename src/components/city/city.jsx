import React, { useMemo } from 'react';
import moment from 'moment';
import { FitText } from '@dsplay/react-template-utils';
import useLanguage from '../../hooks/use-language';
import Clock from '../clock/clock';

function City({
  clockClassName = '',
  utcOffset,
  name,
  date,
}) {
  const language = useLanguage();

  const finalDate = useMemo(() => (utcOffset ? moment(date).utcOffset(utcOffset) : date),
    [date, utcOffset]);
  const dateText = useMemo(() => new Date(finalDate.format('YYYY-MM-DDTHH:mm:ss')).toLocaleString(language, {
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }), [finalDate, language]);

  return (
    <div className="ds-grid-item">
      <div className={`clock-box ${clockClassName}`}>
        <Clock className="the-clock" date={finalDate} />
      </div>
      <div className="city">
        <FitText>{name}</FitText>
      </div>
      <div className="date">
        <FitText className="time">
          {dateText}
        </FitText>
      </div>
    </div>
  );
}

export default City;
