import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

import {
  FitText,
  useMedia,
  useConfig,
  useTemplate,
  useTemplateVal,
  useTemplateBoolVal,
  useTemplateIntVal,
  useTemplateFloatVal,
  useScreenInfo,
} from "@dsplay/react-template-utils";
import "./main.sass";

import Clock from "../clock/clock";

function Main() {
  const config = useConfig();
  const media = useMedia();
  const template = useTemplate();
  const { screenFormat } = useScreenInfo();

  const { locale } = config;
  const { times } = media;

  const wCitieslist = times.world_cities;

  const { t, i18n } = useTranslation();
  const brandImage = useTemplateVal("brand_image", "../../images/logo-01.png");
  const bgClockColor = useTemplateVal("bg_clock_color", "#000000");


  i18n.changeLanguage(locale);

  const {
    times: {
      current: { cName, cUtcOffset },
      world_cities: [{ wName, wUtcOffset }],
    },
  } = media;

  const date = moment();

  const worldCitieslist = wCitieslist.map((wCitieslist) => (
    <div className="ds-grid-item" key={wCitieslist.id}>
      <div className="clock-box">
        <Clock className="the-clock" utcVal={wCitieslist.wUtcOffset} />
      </div>
      <div className="city">
        <FitText>{wCitieslist.wName}</FitText>
        
      </div>
      <div className="date">
        <FitText className="time">
          {date.utcOffset(wCitieslist.wUtcOffset).format("YYYY-MM-DD hh:mm:ss a")}
        </FitText>
      </div>
    </div>
  ));

  return (
    <div className="main" style={{backgroundColor:bgClockColor}}>
      <div className="ds-container">
        <div className="ds-grid-item brand-box ds-center hidden-square">
          <div className="brand " style={{ backgroundImage: `url(${brandImage})`}}></div>
        </div>

        <div className="ds-grid-item">
          <div className="clock-box current-location">
            <Clock className="local-timezone" utcVal={cUtcOffset} />
          </div>
          <div className="city">
            <FitText>{cName}</FitText>
          </div>
          <div className="date">
            <FitText>
              {date.utcOffset(cUtcOffset).format("YYYY-MM-DD hh:mm:ss a")}
            </FitText>
          </div>
        </div>
        {worldCitieslist}
      </div>
    </div>
  );
}

export default Main;
