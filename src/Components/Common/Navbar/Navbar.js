// import React from 'react';
// import * as S from "./Navbar.style";

// function Navbar() {
//     const menuItems = [
//         { iconSrc: "/img/icon/money.svg", altText: "Money" },
//         { iconSrc: "/img/icon/Card.svg", altText: "Card" }
//     ];

//     const circleBoxItems = [
//         { iconSrc: "/img/icon/Menu.svg", altText: "Menu" },
//         { iconSrc: "/img/icon/Cart.svg", altText: "Cart" },
//         { iconSrc: "/img/icon/Search.svg", altText: "Search" },
//         { text: "P" }
//     ];

//     return (
//         <S.NavbarWrapper>
//             <S.Title>
//                 <h6>Business Name</h6>
//                 {menuItems.map((item, index) => (
//                     <a href="/">
//                         <img key={index} src={item.iconSrc} alt={item.altText} />
//                     </a>
//                 ))}
//             </S.Title>
//             <S.CircleBox>
//                 {circleBoxItems.map((item, index) => (
//                     <div key={index}>
//                         <a href="/">
//                             {item.iconSrc ? (
//                                 <img src={item.iconSrc} alt={item.altText} />
//                             ) : (
//                                 <h6>{item.text}</h6>
//                             )}
//                         </a>
//                     </div>
//                 ))}
//             </S.CircleBox>
//         </S.NavbarWrapper>
//     );
// }

// export default Navbar;

import React from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";

function Navbar() {
  //   const menuItems = [
  //     { iconSrc: "/img/icon/money.svg", altText: "Money" },
  //     { iconSrc: "/img/icon/Card.svg", altText: "Card" },
  //   ];

  const circleBoxItems = [
    { iconSrc: "/img/icon/Menu.svg", altText: "Menu" },
    { iconSrc: "/img/icon/Cart.svg", altText: "Cart" },
    { iconSrc: "/img/icon/Search.svg", altText: "Search" },
    { text: "P" },
  ];

  return (
    <S.NavbarWrapper>
      <S.Title>
        <Link to="/">
          <img src="img/logo/Screenshot_2.png" alt="" srcSet="" />
        </Link>
        {/* <S.Carts>
        {menuItems.map((item, index) => (
            <a href="/">
            <img key={index} src={item.iconSrc} alt={item.altText} />
          </a>
        ))}
        </S.Carts> */}
      </S.Title>
      <S.CircleBox>
        {circleBoxItems.map((item, index) => (
          <div key={index}>
            <a href="/">
              {item.iconSrc ? (
                <img src={item.iconSrc} alt={item.altText} />
              ) : (
                <h6>{item.text}</h6>
              )}
            </a>
          </div>
        ))}
      </S.CircleBox>
    </S.NavbarWrapper>
  );
}

export default Navbar;
