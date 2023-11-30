// import React from 'react';
// import { CardSection, CardBox, CardBoxCircle, CircleContent, CardButton, CardTitle, ButtonWrapper, ActionButton } from './Cards.style';
// import { Link } from 'react-router-dom'; 
// const cards = [
//   { title: 'عمره', icon: '/img/button-icon/Mecca.svg' },
//   { title: 'عمل مؤقت', icon: '/img/button-icon/job.svg' },
//   { title: 'عائلية', icon: '/img/button-icon/Family.svg' },
//   { title: 'سياحية', icon: '/img/button-icon/Travel.svg' },
// ];

// const CardList = () => {
//   return (
//     <CardSection>
//       {cards.map((card, index) => (
//         <CardBox key={index}>
//           <CardBoxCircle>
//             <CircleContent>
//               <img src={card.icon} alt={card.title} />
//             </CircleContent>
//           </CardBoxCircle>
//           <CardButton>
//             <CardTitle>{card.title}</CardTitle>
//             <ButtonWrapper>
//               <ActionButton>
//                 <Link to="/MultiStepForm">Book now</Link>
//               </ActionButton>
//             </ButtonWrapper>
//           </CardButton>
//         </CardBox>
//       ))}
//     </CardSection>
//   );
// };

// export default CardList;




import React, { Component } from 'react';
import { CardSection, CardBox, CardBoxCircle, CircleContent, CardButton, CardTitle, ButtonWrapper, ActionButton } from './Cards.style';
import { Link } from 'react-router-dom';

const cards = [
  { title: 'عمره', icon: '/img/button-icon/Mecca.svg' },
  { title: 'عمل مؤقت', icon: '/img/button-icon/job.svg' },
  { title: 'عائلية', icon: '/img/button-icon/Family.svg' },
  { title: 'سياحية', icon: '/img/button-icon/Travel.svg' },
];

class CardList extends Component {
  render() {
    return (
      <CardSection>
        {cards.map((card, index) => (
          <CardBox key={index}>
            <CardBoxCircle>
              <CircleContent>
                <img src={card.icon} alt={card.title} />
              </CircleContent>
            </CardBoxCircle>
            <CardButton>
              <CardTitle>{card.title}</CardTitle>
              <ButtonWrapper>
                <ActionButton>
                  <Link to="/MultiStepForm">Book now</Link>
                </ActionButton>
              </ButtonWrapper>
            </CardButton>
          </CardBox>
        ))}
      </CardSection>
    );
  }
}

export default CardList;
