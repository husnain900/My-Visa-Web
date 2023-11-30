// import React from 'react';
// import * as F from './CountryFlag.style';
// import { Link } from 'react-router-dom';

// const countries = [
//     {
//         name: "United Kingdom",
//         flagSrc: "/img/country flag/United kingdom.svg",
//     },
//     {
//         name: "United States",
//         flagSrc: "/img/country flag/United states of america.svg",
//     },
//     {
//         name: "Shengin",
//         flagSrc: "/img/country flag/Ellipse 4.svg",
//     },
//     {
//         name: "Japan",
//         flagSrc: "/img/country flag/Ellipse 4 (1).svg",
//     },
//     {
//         name: "Australia",
//         flagSrc: "/img/country flag/Australia.svg",
//     },
//     {
//         name: "South Korea",
//         flagSrc: "/img/country flag/south Korea.svg",
//     },
// ];

// const CountryFlag = () => {
//     return (
//         <F.CountryLogoWrapper>
//             {countries.map((country, index) => (
//                 <div key={index}>
//                     <F.FlagBox>
//                     <Link to="/MultiStepForm">

//                         <img src={country.flagSrc} alt={country.name} />
//                     </Link>
//                     </F.FlagBox>
//                     <F.CountryName>{country.name}</F.CountryName>
//                 </div>
//             ))}
//         </F.CountryLogoWrapper>
//     );
// }

// export default CountryFlag;

import React, { Component } from "react";
import * as F from "./CountryFlag.style";
import { Link } from "react-router-dom";
import GDDataService from "../../../../services/gd.service";
// import GDDataService from "../../../services/gd.service"

// const countries = [
//     {
//         name: "United Kingdom",
//         flagSrc: "/img/country flag/United kingdom.svg",
//     },
//     {
//         name: "United States",
//         flagSrc: "/img/country flag/United states of america.svg",
//     },
//     {
//         name: "Shengin",
//         flagSrc: "/img/country flag/Ellipse 4.svg",
//     },
//     {
//         name: "Japan",
//         flagSrc: "/img/country flag/Ellipse 4 (1).svg",
//     },
//     {
//         name: "Australia",
//         flagSrc: "/img/country flag/Australia.svg",
//     },
//     {
//         name: "South Korea",
//         flagSrc: "/img/country flag/south Korea.svg",
//     },
// ];

class CountryFlag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    GDDataService.getContryFlags()
      .then((response) => {
        this.setState({ countries: response.data }); // Update the countries state with fetched data
        console.log(this.state.countries);
      })

      .catch((error) => {
        console.error("Error fetching countries:", error);
      });

    // ///////////////////////////////////////
  }

  render() {
    const { countries } = this.state;

    return (
      <F.CountryLogoWrapper>
        {countries.map((country, index) => (
          <div key={index}>
            <F.FlagBox>
              <Link to={`/MultiStepForm/${country.ContryFlagsname}`}>
                <img
                  src={country.ContryFlagsSrc}
                  alt={country.ContryFlagsname}
                />
              </Link>
            </F.FlagBox>
            <F.CountryName>{country.ContryFlagsname}</F.CountryName>
          </div>
        ))}
        {/* {countries.map((country, index) => (
                    <div key={index}>
                        <F.FlagBox>
                            <Link to="/MultiStepForm">
                                <img src={country.flagSrc} alt={country.name} />
                            </Link>
                        </F.FlagBox>
                        <F.CountryName>{country.name}</F.CountryName>
                    </div>
                ))} */}
      </F.CountryLogoWrapper>
    );
  }
}

export default CountryFlag;
