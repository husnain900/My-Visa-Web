import React from "react";
import CountryFlag from "./CountryFlags/CountryFlag";
import CardList from "./CardsSection/Cards";
import VisaType from "../VisaType/VisaType";
const index = () => {
  return (
    <>
      <div className=" desktop-hidden">
        <div className="banner-image">
          <img src="img/banner1.png" alt="" srcset="" />
        </div>
        <CountryFlag />

        <CardList />
        <div className="banner2">
          <img src="img/banner2.png" alt="" srcset="" />
        </div>
      </div>
      <div className="mobile-hidden">
        <VisaType />
      </div>
    </>
  );
};

export default index;
