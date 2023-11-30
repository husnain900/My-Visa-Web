import React from "react";
import {
  VisaCards,
  CardBox2,
  CardBoxCircle,
  CircleContent,
  CardButton,
  CardTitle,
  ButtonWrapper,
  ActionButton
} from "../../Home/CardsSection/Cards.style";
import { Link } from "react-router-dom";
import "./VisaCard.css";
const cards = [
  { title: "عمره", icon: "/img/button-icon/Mecca.svg" },
  { title: "عمره", icon: "/img/button-icon/Mecca.svg" }
];

const CardList = () => {
  return (
    <VisaCards>
      {cards.map((card, index) => (
        <CardBox2 key={index}>
          <div className="visacard">
            <CardBoxCircle className="CardBoxCircle">
              <CircleContent className="circlecontent">
                <img src={card.icon} alt={card.title} />
              </CircleContent>
            </CardBoxCircle>
            <CardButton className="CardButton">
              <CardTitle className="CardTitle">{card.title}</CardTitle>
              <ButtonWrapper className="h-100">
                <ActionButton className="ActionButton">
                  <Link to="/MultiStepForm">Book</Link>
                </ActionButton>
              </ButtonWrapper>
            </CardButton>
          </div>
        </CardBox2>
      ))}
    </VisaCards>
  );
};

export default CardList;
