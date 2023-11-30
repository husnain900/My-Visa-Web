import React, { useState } from "react";
import * as F from "./CountryFlag.style";
import { Link } from "react-router-dom";

const countries = [
  {
    name: "United Kingdom",
    flagSrc: "/img/country flag/United kingdom.svg",
  },
  {
    name: "United States",
    flagSrc: "/img/country flag/United states of america.svg",
  },
  {
    name: "Shengin",
    flagSrc: "/img/country flag/Ellipse 4.svg",
  },
  {
    name: "Japan",
    flagSrc: "/img/country flag/Ellipse 4 (1).svg",
  },
  {
    name: "Australia",
    flagSrc: "/img/country flag/Australia.svg",
  },
  {
    name: "South Korea",
    flagSrc: "/img/country flag/south Korea.svg",
  },
];

const CountryFlag = ({ classchangehandle }) => {
  const handleImageClick = () => {
    classchangehandle();
  };

  return (
    <F.CountryLogoWrapper className="visa">
      {countries.map((country, index) => (
        <div key={index}>
          <F.FlagBox>
            <img
              src={country.flagSrc}
              alt={country.name}
              className="Shenginflg"
              onClick={handleImageClick}
            />
          </F.FlagBox>
          <F.CountryName>{country.name}</F.CountryName>
        </div>
      ))}
    </F.CountryLogoWrapper>
  );
};

export default CountryFlag;
