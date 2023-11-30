// import React from 'react';
// import { Link } from 'react-router-dom';
// import './more.css';
// import "../../Responsive/Responsive.css";


// const menuData = [
//   { icon: '/img/MorePage/Privacy.svg', title: 'Privacy Policy' },
//   { icon: '/img/MorePage/data storage.svg', title: 'Data Deletion' },
//   { icon: '/img/MorePage/Terms And Conditions.svg', title: 'Terms of Use' },
//   { icon: '/img/MorePage/About.svg', title: 'About' },
// ];

// const Menu = () => {
//   return (
//     <div className="d-flex">
//       <div className='more'>
//         <div className='more-header'>
//           <Link to="/">
//             <img src="/img/left arrow.svg" alt="" srcSet="" />
//           </Link>
//           <h5>More</h5>
//         </div>
//         {menuData.map((item, index) => (
//           <div className='more-content' key={index}>
//             <div className='more-box'>
//               <a href="/">
//                 <img src={item.icon} alt="" srcSet="" />
//               </a>
//             </div>
//             <div className='content'>
//               <h3>{item.title}</h3>
//               <a href="/">
//                 <img src="/img/MorePage/arrow-right-s-line.svg" alt="" srcSet="" />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="image-section">
//         <img className='image-section-img' src="./img/Rectangle 3.png" alt="" />
//         <div className="circle-box">
//           <div>
//             <a href="/">
//               <img src="/img/icon/Menu.svg" alt="" />
//             </a>
//           </div>
//           <div>
//             <a href="/">
//               <img src="/img/icon/Cart.svg" alt="" />
//             </a>
//           </div>
//           <div>
//             <a href="/">
//               <img src="/img/icon/Search.svg" alt="" />
//             </a>
//           </div>
//           <div>
//             <h6>P</h6>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Menu;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './more.css';
import '../../Responsive/Responsive.css';

const menuData = [
  { icon: '/img/MorePage/Privacy.svg', title: 'Privacy Policy' },
  { icon: '/img/MorePage/data storage.svg', title: 'Data Deletion' },
  { icon: '/img/MorePage/Terms And Conditions.svg', title: 'Terms of Use' },
  { icon: '/img/MorePage/About.svg', title: 'About' },
];

class Menu extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className='more'>
          <div className='more-header'>
            <Link to="/">
              <img src="/img/left arrow.svg" alt="" srcSet="" />
            </Link>
            <h5>More</h5>
          </div>
          {menuData.map((item, index) => (
            <div className='more-content' key={index}>
              <div className='more-box'>
                <a href="/">
                  <img src={item.icon} alt="" srcSet="" />
                </a>
              </div>
              <div className='content'>
                <h3>{item.title}</h3>
                <a href="/">
                  <img src="/img/MorePage/arrow-right-s-line.svg" alt="" srcSet="" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="image-section">
          <img className='image-section-img' src="./img/Rectangle 3.png" alt="" />
          <div className="circle-box">
            <div>
              <a href="/">
                <img src="/img/icon/Menu.svg" alt="" />
              </a>
            </div>
            <div>
              <a href="/">
                <img src="/img/icon/Cart.svg" alt="" />
              </a>
            </div>
            <div>
              <a href="/">
                <img src="/img/icon/Search.svg" alt="" />
              </a>
            </div>
            <div>
              <h6>P</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
