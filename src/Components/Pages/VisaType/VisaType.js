import React, { useState } from "react";
import "./VisaType.css";
import CountryFlags from ".././Home/CountryFlags/CountryFlag";
import CountryFlagsMob from "../Home/CountryFlags/CountryFlagMob";
import VisaCards from "./VisaCard/VisaCard";

const VisaType = () => {
  const [changeclass, setChangeclass] = useState(false);

  const classchangehandle = () => {
    setChangeclass(!changeclass);
  };
  console.log(changeclass);
  return (
    <>
      <div className="MyVisa">
        <div className="MyVisaTitle border-b">
          <div>
            <img src="img/logo/Screenshot_2.png" alt="" srcset="" />
          </div>
          <img src="img/vistype/Information%20Sign.svg" alt="" srcSet="" />
        </div>
        <div className="visaflag">
          <CountryFlagsMob classchangehandle={classchangehandle} />
        </div>
        <div className="banner-image">
          <img src="img/banner1.png" alt="" srcset="" />
        </div>
        <div
          className={`visaflag ${
            changeclass ? "visibility-show" : "visibility-hidden"
          }`}
        >
          <CountryFlags />
        </div>
        <div className="visabox">
          <h4>Visa Types</h4>
        </div>
        <div className="visacard">
          <VisaCards />
        </div>
      </div>
    </>
  );
};

export default VisaType;
