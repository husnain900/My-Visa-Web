import React, { useState } from "react";
import { Footer, ListItem, Link, Image, Title } from "./Footer.style";
import { Link as RouterLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

const footerData = [
  { icon: "/img/footer/Home.svg", title: "Home" },
  { icon: "/img/footer/News Paper.svg", title: "Lookup" },
  { icon: "/img/footer/cart.svg", title: "Cart" },
  { icon: "/img/footer/Menu.svg", title: "More" },
];

const FooterComponent = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [cartClicked, setCartClicked] = useState(false);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if (index === 2) {
      setCartClicked(!cartClicked);
    }
  };

  return (
    
    <Footer>
      {footerData.map((item, index) => (
        <ListItem key={index}>
          {item.title === "More" ? (
            <Link
              to="/More"
              as={RouterLink}
              onClick={() => handleItemClick(index)}
            >
              <Image
                src={
                  index === selectedItem
                    ? "/img/footer/active/Menu.svg"
                    : item.icon
                }
                alt={item.title}
              />
              <Title style={index === selectedItem ? { color: "#FE0000" } : {}}>
                {item.title}
              </Title>
            </Link>
          ) : item.title === "Lookup" ? (
            <RouterLink to="/Lookup" onClick={() => handleItemClick(index)}>
              <Image
                src={
                  index === selectedItem
                    ? "/img/footer/active/News Paper.svg"
                    : item.icon
                }
                alt={item.title}
              />
              <Title style={index === selectedItem ? { color: "#FE0000" } : {}}>
                {item.title}
              </Title>
            </RouterLink>
          ) : item.title === "Cart" ? (
            <Link to="/" as={RouterLink} onClick={() => handleItemClick(index)}>
              {index === selectedItem ? (
                <>
                  <BsCart2
                    className="footer-icon"
                    style={{ color: "#FE0000" }}
                  />
                  <Title style={{ color: "#FE0000" }}>{item.title}</Title>
                </>
              ) : (
                <>
                  <img
                    className="footer-img"
                    src={item.icon}
                    alt=""
                    srcset=""
                  />
                  <Title>{item.title}</Title>
                </>
              )}
            </Link>
          ) : (
            <Link to="/" as={RouterLink} onClick={() => handleItemClick(index)}>
              {index === selectedItem ? (
                <>
                  <img
                    className="footer-img"
                    src={item.icon}
                    alt=""
                    srcset=""
                  />
                  <Title style={{ color: "#FE0000" }}>{item.title}</Title>
                </>
              ) : (
                <>
                  <BiHomeAlt
                    className="footer-icon"
                    style={{ color: "black" }}
                  />
                  <Title>{item.title}</Title>
                </>
              )}
            </Link>
          )}
        </ListItem>
      ))}
    </Footer>
  );
};

export default FooterComponent;
