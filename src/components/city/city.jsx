import React, { useMemo } from 'react';
import { FitText } from "@dsplay/react-template-utils";
import Clock from "../clock/clock";

function City({
  clockClassName = '',
  utcOffset,
  name,
  date,
}) {
  const finalDate = useMemo(() => utcOffset ? date.utcOffset(utcOffset) : date, [date, utcOffset]);
  const text = useMemo(() => finalDate.format("YYYY-MM-DD hh:mm:ss a"), [finalDate]);

  return (
    <div className="ds-grid-item">
      <div className={`clock-box ${clockClassName}`}>
        <Clock className="the-clock" date={date} />
      </div>
      <div className="city">
        <FitText>{name}</FitText>
      </div>
      <div className="date">
        <FitText className="time">
          {text}
        </FitText>
      </div>
    </div>
  );
}

export default City;