import React, { useState, useEffect } from "react";
import * as F from "./CountryFlag.style";
import { Link } from "react-router-dom";
import PopupModal from "./PopupModal"; // Import your PopupModal
import GDDataService from "../../../../services/gd.service";

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

const CountryFlag = () => {
  const [isShenginModalOpen, setShenginModalOpen] = useState(false);

  useEffect(() => {
    // Fetch additional flag data from your GDDataService
    GDDataService.getContryFlags()
      .then((response) => {
        // You can merge this data with your existing countries data if needed
        // For now, let's just log it for demonstration purposes
        console.log("Additional flag data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const openShenginModal = () => {
    setShenginModalOpen(true);
  };

  const closeShenginModal = () => {
    setShenginModalOpen(false);
  };

  return (
    <F.CountryLogoWrapper className="visa">
      {countries.map((country, index) => (
        <div key={index}>
          <F.FlagBox>
            {country.name === "Shengin" ? (
              <img
                src={country.flagSrc}
                alt={country.name}
                onClick={openShenginModal}
                className="Shenginflg"
                
              />
            ) : (
              <Link to={`/MultiStepForm`}>
                <img src={country.flagSrc} alt={country.name} />
              </Link>
            )}
          </F.FlagBox>
          <F.CountryName>{country.name}</F.CountryName>
        </div>
      ))}
      <PopupModal isOpen={isShenginModalOpen} closeModal={closeShenginModal} />
    </F.CountryLogoWrapper>
  );
};

export default CountryFlag;
