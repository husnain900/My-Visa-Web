import React, { useState } from "react";
import "./VisaNav.css";
import { NavLink as RouterNavLink } from "react-router-dom";

const VisaNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/lookup", label: "Lookup" },
    { to: "/", label: "Cart" },
    { to: "/more", label: "More" },
  ];

  return (
    <>
      <div className={`Visa-container ${isOpen ? "open" : ""}`}>
        <div className="Visa-content">
          <div className="menu-icon-div" onClick={toggleNavbar}>
            <img src="img/vistype/nav/Menu.svg" alt="" className="menu-image" />
          </div>
          <div className="three-icons-div">
            <img src="img/vistype/nav/search.svg" alt="" />
            <h5>ع</h5>
          </div>
        </div>
        <div className="toggle-nv">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <RouterNavLink
                  to={link.to}
                  activeClassName="active"
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisaNav;
