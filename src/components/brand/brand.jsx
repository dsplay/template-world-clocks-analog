import React, { useEffect, useState } from "react";
import moment from "moment";
import "./brand.sass";

import {
  useTemplateVal,
} from "@dsplay/react-template-utils";

const Brand = (props) => {
  const { className} = props;

  return (
    <div  className={`hidden-square ${className || ''}`} >
        <div className="ds-grid-item brand-box ds-center">
          <div className="brand " 
          style={{backgroundImage: `url(${useTemplateVal('brand_image')})`}}></div>
        </div>
    </div>
  );
};

export default Brand;
