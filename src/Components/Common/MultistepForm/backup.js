
// import React, { useState, useEffect } from 'react';
// import './Multistepform.css';
// import '../../Responsive/Responsive.css';
// const timeTable = "Tommorow - 9:00 A < to 10:00 AM ";

// const MultiStepForm = () => {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         nationality: '',
//         departureDate: '',
//         arrivalDate: '',
//         numPassports: '',
//         uploadDocuments: null,
//         visaDuration: '',
//         hotelSelection: '',
//         ticketSelection: '',
//         visaType: '',
//     });
//     const [isKnetChecked, setKnetChecked] = useState(false);
//     const [isCreditCardChecked, setCreditCardChecked] = useState(false);

//     const handleKnetChange = () => {
//         setKnetChecked(!isKnetChecked);
//     };

//     const handleCreditCardChange = () => {
//         setCreditCardChecked(!isCreditCardChecked);
//     };
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [currYear, setCurrYear] = useState(currentDate.getFullYear());
//     const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
//     const [days, setDays] = useState([]);
//     const monthNames = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'June',
//         'July',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//     ];
//     useEffect(() => {
//         setCurrentDate(new Date());

//         renderCalendar();
//     }, [currYear, currMonth]);


//     const renderCalendar = () => {
//         let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
//         let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
//         let daysArray = [];

//         for (let i = 0; i < firstDayofMonth; i++) {
//             daysArray.push(
//                 <li key={`inactive-${i}`} className="inactive">
//                     {lastDateofMonth - firstDayofMonth + i + 1}
//                 </li>
//             );
//         }

//         for (let i = 1; i <= lastDateofMonth; i++) {
//             let isToday =
//                 i === currentDate.getDate() &&
//                 currMonth === currentDate.getMonth() &&
//                 currYear === currentDate.getFullYear();
//             daysArray.push(
//                 <li
//                     key={`active-${i}`}
//                     className={isToday ? 'active' : ''}
//                     onClick={() => handleDateClick(i)}
//                 >
//                     {i}
//                 </li>
//             );
//         }

//         setDays(daysArray);
//     };

//     const handlePrevNextClick = (direction) => {
//         let newMonth = currMonth;
//         let newYear = currYear;

//         if (direction === -1) {
//             newMonth -= 1;

//             if (newMonth < 0) {
//                 newMonth = 11;
//                 newYear -= 1;
//             }
//         } else if (direction === 1) {
//             newMonth += 1;

//             if (newMonth > 11) {
//                 newMonth = 0;
//                 newYear += 1;
//             }
//         }

//         setCurrMonth(newMonth);
//         setCurrYear(newYear);
//     };

//     const handleDateClick = (day) => {
//         const newDate = new Date(currYear, currMonth, day);
//         setFormData({ ...formData, selectedDate: newDate });
//     };
//     const handleInputChange = (e) => {
//         const { name, value, type } = e.target;

//         if (type === 'file') {
//             const file = e.target.files[0];
//             setFormData({ ...formData, [name]: file });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleNextStep = () => {
//         if (step < 5) {
//             setStep(step + 1);
//         }
//     };

//     const handlePrevStep = () => {
//         setStep(step - 1);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Submit the form data, you can add your logic here
//     };
//     const [familyInsurance, setFamilyInsurance] = useState(false);
//     const [individualInsurance, setIndividualInsurance] = useState(false);
//     const [flightTicket, setFlightTicket] = useState(false);
//     const [hotelStay, setHotelStay] = useState(false);

//     // Function to handle checkbox changes
//     const handleCheckboxChange = (event) => {
//         const { name, checked } = event.target;

//         // Update the corresponding state variable based on the checkbox name
//         switch (name) {
//             case 'familyInsurance':
//                 setFamilyInsurance(checked);
//                 break;
//             case 'individualInsurance':
//                 setIndividualInsurance(checked);
//                 break;
//             case 'flightTicket':
//                 setFlightTicket(checked);
//                 break;
//             case 'hotelStay':
//                 setHotelStay(checked);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const renderFormStep = () => {
//         switch (step) {
//             case 1:
//                 return (
//                     <>
//                         <div className='Form-head'>
//                             <h5>Search your visa</h5>
//                         </div>
//                         <div className='form-title'>
//                             <h5>Enter Details</h5>
//                         </div>
//                         <div className="form-content">
//                             <div className="form-group">
//                                 <label htmlFor="nationality">Enter your nationality</label>
//                                 <br />
//                                 <input
//                                     type="text"
//                                     id="nationality"
//                                     name="nationality"
//                                     placeholder="Kuwait"
//                                     value={formData.nationality || ''}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group" style={{ position: 'relative' }}>
//                                 <label htmlFor="departureDate">Select date of departure</label>
//                                 <br />
//                                 <input
//                                     type="date"
//                                     id="departureDate"
//                                     name="departureDate"
//                                     value={formData.departureDate || ''}
//                                     onChange={handleInputChange}
//                                 />
//                                 <img
//                                     className='calender-icon'
//                                     src="/img/Calender.svg"
//                                     alt=""
//                                     srcSet=""
//                                     onClick={() => { /* Open the calendar here */ }}
//                                 />
//                             </div>
//                             <div className="form-group" style={{ position: 'relative' }}>
//                                 <label htmlFor="arrivalDate">Select date of arrival</label>
//                                 <br />
//                                 <input
//                                     type="date"
//                                     id="arrivalDate"
//                                     name="arrivalDate"
//                                     value={formData.arrivalDate || ''}
//                                     onChange={handleInputChange}
//                                 />
//                                 <img
//                                     className='calender-icon'
//                                     src="/img/Calender.svg"
//                                     alt=""
//                                     srcSet=""
//                                     onClick={() => { /* Open the calendar here */ }}
//                                 />
//                             </div>


//                             <div className="form-group">
//                                 <label htmlFor="numPassports">Enter number of passports</label>
//                                 <br />
//                                 <input
//                                     type="text"
//                                     id="numPassports"
//                                     name="numPassports"
//                                     placeholder="Kuwait"
//                                     value={formData.numPassports || ''}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group" style={{ position: 'relative' }}>
//                                 <label htmlFor="uploadDocuments">Upload documents</label>
//                                 <br />
//                                 <input
//                                     type="file"
//                                     className='upload-input'
//                                     id="uploadDocuments"
//                                     name="uploadDocuments"
//                                     accept="application/pdf,image/*"
//                                     onChange={handleInputChange}
//                                 />
//                                 <div className='upload-input-content'>
//                                     <a href="">
//                                         <img
//                                             className="placeholder-image"
//                                             src="/img/clound.png"
//                                             alt="Placeholder"
//                                         />
//                                         <p className="upload-description"><span>Click to upload </span>or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)</p>
//                                     </a>
//                                 </div>
//                             </div>

//                         </div>
//                     </>
//                 );
//             case 2:
//                 return (
//                     <>
//                         <div className='Form-head'>
//                             <h5>Search</h5>
//                         </div>
//                         <div className='form-title'>
//                             <h5>Calendar</h5>
//                         </div>
//                         <div className="form-content">
//                             <div className='form-group'>
//                                 <div className="wrapper">
//                                     <header>
//                                         <div className="current-month-main">
//                                             <h4 className="current-date">
//                                                 {monthNames[currMonth]} {currYear}
//                                             </h4>
//                                             <span
//                                                 className="material-symbols-rounded month-change"
//                                                 onClick={() => handlePrevNextClick(1)}
//                                             >
//                                                 <img src="/img/Vector 2.svg" alt="" srcSet="" />
//                                             </span>
//                                         </div>

//                                         <div className="current-month-main">
//                                             <span
//                                                 className="material-symbols-rounded year-change-previous"
//                                                 onClick={() => handlePrevNextClick(-1)}
//                                             >
//                                                 <img src="/img/Vector 3.svg" alt="" srcSet="" />
//                                             </span>
//                                             <span
//                                                 className="material-symbols-rounded year-change-next"
//                                                 onClick={() => handlePrevNextClick(1)}
//                                             >
//                                                 <img src="/img/Vector 2.svg" alt="" srcSet="" />
//                                             </span>
//                                         </div>
//                                     </header>
//                                     <div className="calendar">
//                                         <ul className="weeks">
//                                             <li>Mon</li>
//                                             <li>Tue</li>
//                                             <li>Wed</li>
//                                             <li>Thu</li>
//                                             <li>Fri</li>
//                                             <li>Sat</li>
//                                             <li>Sun</li>
//                                         </ul>
//                                         <ul className="days">
//                                             {days}
//                                         </ul>
//                                         <div className="bottom-message">
//                                             <p>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                                     <circle cx="10" cy="10" r="10" fill="#FF0000" />
//                                                 </svg> Soonest appointment in embassies
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="nationality">Selected Appointment</label>
//                                 <br />
//                                 <input
//                                     type="text"
//                                     id="nationality"
//                                     name="nationality"
//                                     placeholder="7 Jan 2023"
//                                     value={formData.nationality || ''}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>

//                         </div>
//                     </>
//                 );


//             case 3:
//                 return (
//                     <>
//                         <div className='case-3-lg'>
//                             <div className='Form-head'>
//                                 <h5>Search</h5>
//                             </div>
//                             <div className='form-title'>
//                                 <h5>Extra</h5>
//                             </div>
//                             <div className="form-content">
//                                 <div className="form-group">
//                                     <label htmlFor="visaDuration">Select extra</label>
//                                     <br />
//                                     <select
//                                         id="visaDuration"
//                                         name="visaDuration"
//                                         value={formData.visaDuration || ''}
//                                         onChange={handleInputChange}
//                                     >

//                                         <option value="individual">Individual</option>
//                                         <option value="1year">1 year</option>
//                                         <option value="2years">2 years</option>
//                                     </select>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="hotelSelection">Select hotel</label>
//                                     <br />
//                                     <select
//                                         id="hotelSelection"
//                                         name="hotelSelection"
//                                         value={formData.hotelSelection || ''}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">Select a hotel</option>
//                                         <option value="5 star hotel">5 star hotel</option>
//                                         <option value="4 star hotel">4 star hotel</option>
//                                         {/* Add more hotel options here */}
//                                     </select>
//                                 </div>


//                                 <div className="form-group">
//                                     <label htmlFor="ticketSelection">Select ticket</label>
//                                     <br />
//                                     <select
//                                         id="ticketSelection"
//                                         name="ticketSelection"
//                                         value={formData.ticketSelection || ''}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">Select a ticket</option>
//                                         <option value="Business Class">Business Class</option>
//                                         <option value="Economy Class">Economy Class</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="nationality">Enter your name</label>
//                                     <br />
//                                     <input
//                                         type="text"
//                                         id="nationality"
//                                         name="nationality"
//                                         placeholder="Bussiness Class"
//                                         value={formData.nationality || ''}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="nationality">Enter your Phone number</label>
//                                     <br />
//                                     <input
//                                         type="text"
//                                         id="nationality"
//                                         name="nationality"
//                                         placeholder="+123 456 789"
//                                         value={formData.nationality || ''}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="case-3-sm">
//                             <div className='Form-head'>
//                                 <h5>Confirm your Booking</h5>
//                             </div>
//                             <div className='form-title'>
//                                 <h5>Extra</h5>
//                             </div>
//                             <div className="form-content">
//                                 <div className='checkbox'>
//                                     <div>
//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="familyInsurance"
//                                                 checked={familyInsurance}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             تأمين عائلة
//                                         </label>
//                                         <h5>KWD 20</h5>
//                                     </div>
//                                     <div>

//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="individualInsurance"
//                                                 checked={individualInsurance}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             تأمين أفراد
//                                         </label>
//                                         <h5>KWD 20</h5>

//                                     </div>
//                                     <div>

//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="flightTicket"
//                                                 checked={flightTicket}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             تذكرة طيران
//                                         </label>
//                                         <h5>KWD 20</h5>

//                                     </div>
//                                     <div>

//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="hotelStay"
//                                                 checked={hotelStay}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             إقامة فندق
//                                         </label>
//                                         <h5>KWD 20</h5>
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="nationality">Enter your name</label>
//                                     <br />
//                                     <input
//                                         type="text"
//                                         id="nationality"
//                                         name="nationality"
//                                         placeholder="Mohammad Ali"
//                                         value={formData.nationality || ''}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="hotelSelection">Enter your Phone number</label>
//                                     <br />
//                                     <select
//                                         className='sm-case-3'
//                                         id="hotelSelection"
//                                         name="hotelSelection"
//                                         value={formData.hotelSelection || ''}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">+123 456 789</option>
//                                         <option value="5 star hotel">+123 456 789</option>
//                                         <option value="4 star hotel">+123 456 789</option>

//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );

//             case 4:
//                 return (
//                     <>
//                         <div className='Form-head'>
//                             <h5>Search</h5>
//                         </div>
//                         <div className='form-title'>
//                             <h5>Extra</h5>
//                         </div>
//                         <div className='form-content'>
//                             <div className="form-group">
//                                 <label htmlFor="visaDuration">Visa Duration</label>
//                                 <br />
//                                 <select
//                                     id="visaDuration"
//                                     name="visaDuration"
//                                     value={formData.visaDuration || ''}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="6month">6 months</option>
//                                     <option value="1year">1 year</option>
//                                     <option value="2years">2 years</option>
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="visaType">Visa Type</label>
//                                 <br />
//                                 <select
//                                     id="visaType"
//                                     name="visaType"
//                                     value={formData.visaType || ''}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="سياحية">سياحية</option>
//                                     <option value="طلابية">طلابية</option>
//                                     <option value="زيارة">زيارة</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </>
//                 );
//             case 5:
//                 return (
//                     <>
//                         <div className='checkout'>
//                             <div className='Form-head-5'>
//                                 <h5>Checkout</h5>
//                                 <h3>ع</h3>
//                             </div>
//                             <div className="form-content">
//                                 <div>
//                                     <h6>
//                                         Appointment time
//                                     </h6>
//                                     <div className='time-box'>
//                                         <h5><span>{timeTable}</span></h5>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h6>
//                                         Items - <span>edit</span>
//                                     </h6>
//                                     <div className='time-box-2'>
//                                         <div className='flex'>
//                                             <div><h5><span className='e-space'>4x</span>Family Visa</h5></div>
//                                             <div><h5>200 <span className='s-space'>KD</span> </h5></div>
//                                         </div>
//                                         <div className='flex'>
//                                             <div><h5><span className='e-space'>4x</span> Hotel</h5></div>
//                                             <div><h5> 50 <span className='s-space'>KD</span></h5></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h6>
//                                         Promotions
//                                     </h6>
//                                     <div className='time-box-3 flex'>
//                                         <img src="img/step5/label.svg" alt="" srcset="" />
//                                         <input type="text" placeholder='Enter promotion code' />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h6>
//                                         Payment Method
//                                     </h6>
//                                     <div className='time-box-2'>
//                                         <div className='flex'>
//                                             <div className="payment-options">
//                                                 <label className={`checkbox ${isKnetChecked ? 'checked' : ''}`}>
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={isKnetChecked}
//                                                         onChange={handleKnetChange}
//                                                     />
//                                                     <h5>
//                                                         K-net
//                                                     </h5>
//                                                 </label>
//                                             </div>
//                                             <img src="img/step5/Cash In Hand.svg" alt="" srcset="" />
//                                         </div>
//                                         <div className='flex'>
//                                             <label className={`checkbox ${isCreditCardChecked ? 'checked' : ''}`}>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={isCreditCardChecked}
//                                                     onChange={handleCreditCardChange}
//                                                 />

//                                                 <h5>
//                                                     Credit Card
//                                                 </h5>

//                                             </label>
//                                             <img src="img/step5/debit card with bug.svg" alt="" srcset="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className='time-box-3 up-space'>
//                                         <div className='flex'>
//                                             <h4>Subtotal</h4>
//                                             <h4>250 KD</h4>
//                                         </div>
//                                         <div className='flex'>
//                                             <h4>Additional services</h4>
//                                             <h4>5.000 KD</h4>
//                                         </div>
//                                         <div className='flex'>
//                                             <h4>
//                                                 <b>
//                                                     Total
//                                                 </b>
//                                             </h4>
//                                             <h4>
//                                                 <b>
//                                                     255 KD
//                                                 </b>
//                                             </h4>
//                                         </div>
//                                         <button className='next-btn step-5-btn sm-block' type="submit">Place Order</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );

//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="multi-step-form">
//             <div className="form-details">
//                 <form onSubmit={handleSubmit}>
//                     {renderFormStep()}
//                     <div className="buttons">
//                         {step === 1 ? (
//                             <button className='back-btn' type="button" disabled>
//                                 <img src="/img/left arrow.svg" alt="" srcSet="" />
//                             </button>
//                         ) : (
//                             <button className='back-btn' type="button" onClick={handlePrevStep}>
//                                 <img src="/img/left arrow.svg" alt="" srcSet="" />
//                             </button>
//                         )}
//                         {step < 5 && (
//                             <button className="next-btn" type="button" onClick={handleNextStep}>
//                                 {step === 4 ? "Confirm" : "Next"}
//                             </button>
//                         )}
//                         {step === 5 && (
//                             <button className='next-btn step-5-btn sm-none' type="submit">Place Order</button>
//                         )}

//                     </div>
//                 </form>
//             </div>
//             <div className="image-section">
//                 <img className='image-section-img' src="./img/Rectangle 3.png" alt="" />
//                 <div className="circle-box">
//                     <div>
//                         <a href="/">
//                             <img src="/img/icon/Menu.svg" alt="" />
//                         </a>
//                     </div>
//                     <div>
//                         <a href="/">
//                             <img src="/img/icon/Cart.svg" alt="" />
//                         </a>
//                     </div>
//                     <div>
//                         <a href="/">
//                             <img src="/img/icon/Search.svg" alt="" />
//                         </a>
//                     </div>
//                     <div>
//                         <h6>P</h6>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MultiStepForm;
 
// //////////////////////////////////////////////////





import React, { Component } from 'react';
import './Multistepform.css';
import '../../Responsive/Responsive.css';
import GDDataService from "../../../services/gd.service"

const timeTable = "Tommorow - 9:00 A < to 10:00 AM ";

class MultiStepForm extends Component {
    constructor(props) {


        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

        this.handleCreditCardChange = this.handleCreditCardChange.bind(this);

        this.handleNextStep = this.handleNextStep.bind(this);

    
        this.state = {
          step: 1,
          formData: {
            nationality: '',
            departureDate: '',
            arrivalDate: '',
            numPassports: '',
            uploadDocuments: null,
            appointmentDate:'',
            contact:'',
            UserName:'',
            visaDuration: '',
            hotelSelection: '',
            ticketSelection: '',
            visaType: '',
          },
          isKnetChecked: false,
          isCreditCardChecked: false,
          currentDate: new Date(),
          currYear: new Date().getFullYear(),
          currMonth: new Date().getMonth(),
          days: [],
          monthNames: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          familyInsurance: false,
          individualInsurance: false,
          flightTicket: false,
          hotelStay: false,
        };
      }

      handleKnetChange = () => {
        this.setState({ isKnetChecked: !this.state.isKnetChecked });
      };

  componentDidMount() {
    this.renderCalendar();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currYear !== prevState.currYear ||
      this.state.currMonth !== prevState.currMonth
    ) {
      this.renderCalendar();
    }
  }




  // handleDateClick = (day) => {
  //   const newDate = new Date(
  //     this.state.currYear,
  //     this.state.currMonth,
  //     day
  //   );
  //   this.setState({
  //     formData: { ...this.state.formData, selectedDate: newDate },
  //   });
  // };



  
  renderCalendar = () => {
    let firstDayofMonth = new Date(
      this.state.currYear,
      this.state.currMonth,
      1
    ).getDay();
    let lastDateofMonth = new Date(
      this.state.currYear,
      this.state.currMonth + 1,
      0
    ).getDate();
    let daysArray = [];

    for (let i = 0; i < firstDayofMonth; i++) {
      daysArray.push(
        <li key={`inactive-${i}`} className="inactive">
          {lastDateofMonth - firstDayofMonth + i + 1}
        </li>
      );
    }


    GDDataService.calculateSoonestAppointment(1)
    .then(response => 
      {
        console.log("_________________________________")
        console.log(response)
        console.log(response['data'].soonestDate)


        this.setState({

          formData: { ...this.state.formData, appointmentDate: response['data'].soonestDate },
          
        });
        
         
       })

   .catch(e => 
      {
      
         console.log(e);
       });

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === this.state.currentDate.getDate() &&
        this.state.currMonth === this.state.currentDate.getMonth() &&
        this.state.currYear === this.state.currentDate.getFullYear();
     
        const isSelected =
        this.state.formData.selectedDate &&
        i === this.state.formData.selectedDate.getDate() &&
        this.state.currMonth === this.state.formData.selectedDate.getMonth() &&
        this.state.currYear === this.state.formData.selectedDate.getFullYear();
  
     
        daysArray.push(
        <li
          key={`active-${i}`}
          // className={isSelected  ? 'active' : ''}

          className={isToday||isSelected  ? 'active' : ''}
          onClick={() => this.handleDateClick(i)}
        >
          {i}
        </li>
      );
    }

    this.setState({ days: daysArray });
  };

  handleDateClick = (day) => {
    const newDate = new Date(
      this.state.currYear,
      this.state.currMonth,
      day
    );
  
    // Use the callback function to ensure you're working with the updated state
    this.setState(
      (prevState) => {
        const selectedDate = prevState.formData.selectedDate;
  
        // Check if the clicked date is the currently selected date
        if (
          selectedDate &&
          newDate.getTime() === selectedDate.getTime()
        ) {
          // If it's the same date, deselect it
          return {
            formData: { ...prevState.formData, selectedDate: null },
          };
        } else {
          // If it's a different date, select it
          return {
            formData: { ...prevState.formData, selectedDate: newDate },
          };
        }
      },
      () => {
        // This callback will be executed after the state is updated
        // alert(this.state.formData.selectedDate);
        // Call renderCalendar to update the UI
        this.renderCalendar();
      }
    );
  };
  

  

  

  handlePrevNextClick = (direction) => {


    let newMonth = this.state.currMonth;
    let newYear = this.state.currYear;

    if (direction === -1) {
      newMonth -= 1;

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }
    } else if (direction === 1) {
      newMonth += 1;

      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
    }

    this.setState({ currMonth: newMonth, currYear: newYear });

  };

  


  
  handleInputChange = (e) => {
    const { name, value, type } = e.target;
  

    if (type === 'file') {
      
      const file = e.target.files[0];
      this.setState({
        formData: { ...this.state.formData, [name]: file },
      });
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value },
      });

      
    }
    // console.log(this.state.formData['nationality'])
  };
  

  handleNextStep = () => {

  

     if (this.state.step < 5) {

        if (this.state.step == 4) {


            var data = {


                nationality: this.state.formData['nationality'],
                departureDate: this.state.formData['departureDate'],
                arrivalDate: this.state.formData['arrivalDate'],
                numPassports: this.state.formData['numPassports'],
                uploadDocuments : this.state.formData['uploadDocuments'] , 
                visaDuration:  this.state.formData['visaDuration'] , 
                appointmentDate: this.state.formData['appointmentDate'],
                UserName: this.state.formData['UserName'],
                contact: this.state.formData['contact'],

                hotelSelection: this.state.formData['hotelSelection'],
                familyInsurance: this.state.familyInsurance,

                
                ticketSelection: this.state.formData['ticketSelection'],
                visaType: this.state.formData['visaType'],
                individualInsurance: this.state.individualInsurance,
                flightTicket: this.state.flightTicket,
                hotelStay : this.state.formData['hotelStay'] , 
                
             };

             console.log(data);
          

            //  GDDataService.saveData(data)
            // // GDDataService.ShowAllCustomer()
            //  .then(response => 
            //     {
                   
            //        console.log(response.data);
                   
            //      })
    
            //  .catch(e => 
            //     {
            //        console.log(e);
            //      });


           
            fetch('http://localhost:8080/api/GD/saveData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
              .then(response => response.json())
              .then(responseData => {
                console.log(responseData);
              })
              .catch(error => {
                console.error(error);
              });


        }

        
      this.setState({ step: this.state.step + 1 });
    }

    // console.log(this.state.formData['nationality'])
  };

  handlePrevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data, you can add your logic here
  };

  handleCreditCardChange = () => {
    this.setState({ isCreditCardChecked: !this.state.isCreditCardChecked });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case 'familyInsurance':
        this.setState({ familyInsurance: checked });
        break;
      case 'individualInsurance':
        this.setState({ individualInsurance: checked });
        break;
      case 'flightTicket':
        this.setState({ flightTicket: checked });
        break;
      case 'hotelStay':
        this.setState({ hotelStay: checked });
        break;
      default:
        break;
    }
  };

  renderFormStep = () => {
    const { step, formData, hotelStay,flightTicket,isKnetChecked, isCreditCardChecked, days ,currMonth,currYear,familyInsurance,individualInsurance,} =
      this.state;
      const   monthNames= [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]

    switch (step) {
      case 1:
        return (
          <>
            <div className='Form-head'>
              <h5>Search your visa</h5>
            </div>
            <div className='form-title'>
              <h5>Enter Details</h5>
            </div>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="nationality">Enter your nationality</label>
                <br />
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Kuwait"
                  value={formData.nationality || ''}
                  onChange={e =>this.handleInputChange(e)}
                />
              </div>
              <div className="form-group" style={{ position: 'relative' }}>
                <label htmlFor="departureDate">Select date of departure</label>
                <br />
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate || ''}
                  onChange={e =>this.handleInputChange(e)}
                />
                <img
                  className='calender-icon'
                  src="/img/Calender.svg"
                  alt=""
                  srcSet=""
                  onClick={() => { /* Open the calendar here */ }}
                />
              </div>
              <div className="form-group" style={{ position: 'relative' }}>
                <label htmlFor="arrivalDate">Select date of arrival</label>
                <br />
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate || ''}
                  onChange={e =>this.handleInputChange(e)}
                />
                <img
                  className='calender-icon'
                  src="/img/Calender.svg"
                  alt=""
                  srcSet=""
                  onClick={() => { /* Open the calendar here */ }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numPassports">Enter number of passports</label>
                <br />
                <input
                  type="text"
                  id="numPassports"
                  name="numPassports"
                  placeholder="2"
                  value={formData.numPassports || ''}
                  onChange={e =>this.handleInputChange(e)}
                />
              </div>
              <div className="form-group" style={{ position: 'relative' }}>
                <label htmlFor="uploadDocuments">Upload documents</label>
                <br />
                <input
                  type="file"
                  className='upload-input'
                  id="uploadDocuments"
                  name="uploadDocuments"
                  accept="application/pdf,image/*"
                  onChange={e =>this.handleInputChange(e)}
                />


                  <input type='file' className="form-control"
          onChange={e =>
          this.handleFile(e)}>

          </input>
                <div className='upload-input-content'>
                  <a href="">
                    <img
                      className="placeholder-image"
                      src="/img/clound.png"
                      alt="Placeholder"
                    />
                    <p className="upload-description"><span>Click to upload </span>or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
        case 2:
            return (
                <>
                        <div className='Form-head'>
                            <h5>Search</h5>
                        </div>
                        <div className='form-title'>
                            <h5>Calendar</h5>
                        </div>
                        <div className="form-content">
                            <div className='form-group'>
                                <div className="wrapper">
                                    <header>
                                        <div className="current-month-main">
                                            <h4 className="current-date">
                                                {monthNames[currMonth]} {currYear}
                                            </h4>
                                            <span
                                                className="material-symbols-rounded month-change"
                                                onClick={() => this.handlePrevNextClick(1)}
                                            >
                                                <img src="/img/Vector 2.svg" alt="" srcSet="" />
                                            </span>
                                        </div>

                                        <div className="current-month-main">
                                            <span
                                                className="material-symbols-rounded year-change-previous"
                                                onClick={() => this.handlePrevNextClick(-1)}
                                            >
                                                <img src="/img/Vector 3.svg" alt="" srcSet="" />
                                            </span>
                                            <span
                                                className="material-symbols-rounded year-change-next"
                                                onClick={() => this.handlePrevNextClick(1)}
                                            >
                                                <img src="/img/Vector 2.svg" alt="" srcSet="" />
                                            </span>
                                        </div>
                                    </header>
                                    <div className="calendar">
                                        <ul className="weeks">
                                            <li>Mon</li>
                                            <li>Tue</li>
                                            <li>Wed</li>
                                            <li>Thu</li>
                                            <li>Fri</li>
                                            <li>Sat</li>
                                            <li>Sun</li>
                                        </ul>
                                        <ul className="days">
                                            {days}
                                        </ul>
                                        <div className="bottom-message">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <circle cx="10" cy="10" r="10" fill="#FF0000" />
                                                </svg> Soonest appointment in embassies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appointmentDate">Selected Appointment</label>
                                <br />
                                <input
                                    type="text"
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    placeholder="7 Jan 2023"
                                    value={formData.appointmentDate || ''}
                                    onChange={e =>this.handleInputChange(e)}
                                />
                            </div>

                        </div>
                    </>
            );
    
          case 3:
            return (
                <>
                <div className='case-3-lg'>
                    <div className='Form-head'>
                        <h5>Search</h5>
                    </div>
                    <div className='form-title'>
                        <h5>Extra</h5>
                    </div>
                    <div className="form-content">
                        <div className="form-group">
                            <label htmlFor="visaDuration">Select extra</label>
                            <br />
                            <select
                                id="visaDuration"
                                name="visaDuration"
                                value={formData.visaDuration || ''}
                                onChange={e =>this.handleInputChange(e)}
                            >

                                <option value="individual">Individual</option>
                                <option value="1year">1 year</option>
                                <option value="2years">2 years</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hotelSelection">Select hotel</label>
                            <br />
                            <select
                                id="hotelSelection"
                                name="hotelSelection"
                                value={formData.hotelSelection || ''}
                                onChange={e =>this.handleInputChange(e)}
                            >
                                <option value="">Select a hotel</option>
                                <option value="5 star hotel">5 star hotel</option>
                                <option value="4 star hotel">4 star hotel</option>
                                {/* Add more hotel options here */}
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="ticketSelection">Select ticket</label>
                            <br />
                            <select
                                id="ticketSelection"
                                name="ticketSelection"
                                value={formData.ticketSelection || ''}
                                onChange={e =>this.handleInputChange(e)}
                            >
                                <option value="">Select a ticket</option>
                                <option value="Business Class">Business Class</option>
                                <option value="Economy Class">Economy Class</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="UserName">Enter your name</label>
                            <br />
                            <input
                                type="text"
                                id="UserName"
                                name="UserName"
                                placeholder="name"
                                value={formData.UserName || ''}
                                onChange={e =>this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Enter your Phone number</label>
                            <br />
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                placeholder="+123 456 789"
                                value={formData.contact || ''}
                                onChange={e =>this.handleInputChange(e)}
                            />
                        </div>
                    </div>

                </div>

                <div className="case-3-sm">
                    <div className='Form-head'>
                        <h5>Confirm your Booking</h5>
                    </div>
                    <div className='form-title'>
                        <h5>Extra</h5>
                    </div>
                    <div className="form-content">
                        <div className='checkbox'>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="familyInsurance"
                                        checked={familyInsurance}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    تأمين عائلة
                                </label>
                                <h5>KWD 20</h5>
                            </div>
                            <div>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="individualInsurance"
                                        checked={individualInsurance}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    تأمين أفراد
                                </label>
                                <h5>KWD 20</h5>

                            </div>
                            <div>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="flightTicket"
                                        checked={flightTicket}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    تذكرة طيران
                                </label>
                                <h5>KWD 20</h5>

                            </div>
                            <div>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="hotelStay"
                                        checked={hotelStay}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    إقامة فندق
                                </label>
                                <h5>KWD 20</h5>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="UserName">Enter your name</label>
                            <br />
                            <input
                                type="text"
                                id="UserName"
                                name="UserName"
                                placeholder="Mohammad Ali"
                                value={formData.UserName || ''}
                                onChange={e =>this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hotelSelection">Enter your Phone number</label>
                            <br />
                            <select
                                className='sm-case-3'
                                id="hotelSelection"
                                name="hotelSelection"
                                value={formData.hotelSelection || ''}
                                onChange={e =>this.handleInputChange(e)}
                            >
                                <option value="">+123 456 789</option>
                                <option value="5 star hotel">+123 456 789</option>
                                <option value="4 star hotel">+123 456 789</option>

                            </select>
                        </div>
                    </div>
                </div>
            </>
            );
    
          case 4:
            return (
                <>
                        <div className='Form-head'>
                            <h5>Search</h5>
                        </div>
                        <div className='form-title'>
                            <h5>Extra</h5>
                        </div>
                        <div className='form-content'>
                            <div className="form-group">
                                <label htmlFor="visaDuration">Visa Duration</label>
                                <br />
                                <select
                                    id="visaDuration"
                                    name="visaDuration"
                                    value={formData.visaDuration || ''}
                                    onChange={e =>this.handleInputChange(e)}
                                >
                                    <option value="6month">6 months</option>
                                    <option value="1year">1 year</option>
                                    <option value="2years">2 years</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="visaType">Visa Type</label>
                                <br />
                                <select
                                    id="visaType"
                                    name="visaType"
                                    value={formData.visaType || ''}
                                    onChange={e =>this.handleInputChange(e)}
                                >
                                    <option value="سياحية">سياحية</option>
                                    <option value="طلابية">طلابية</option>
                                    <option value="زيارة">زيارة</option>
                                </select>
                            </div>
                        </div>
                    </>
            );
    
          case 5:
            return (
                <>
                        <div className='checkout'>
                            <div className='Form-head-5'>
                                <h5>Checkout</h5>
                                <h3>ع</h3>
                            </div>
                            <div className="form-content">
                                <div>
                                    <h6>
                                        Appointment time
                                    </h6>
                                    <div className='time-box'>
                                        <h5><span>{timeTable}</span></h5>
                                    </div>
                                </div>
                                <div>
                                    <h6>
                                        Items - <span>edit</span>
                                    </h6>
                                    <div className='time-box-2'>
                                        <div className='flex'>
                                            <div><h5><span className='e-space'>4x</span>Family Visa</h5></div>
                                            <div><h5>200 <span className='s-space'>KD</span> </h5></div>
                                        </div>
                                        <div className='flex'>
                                            <div><h5><span className='e-space'>4x</span> Hotel</h5></div>
                                            <div><h5> 50 <span className='s-space'>KD</span></h5></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6>
                                        Promotions
                                    </h6>
                                    <div className='time-box-3 flex'>
                                        <img src="img/step5/label.svg" alt="" srcset="" />
                                        <input type="text" placeholder='Enter promotion code' />
                                    </div>
                                </div>
                                <div>
                                    <h6>
                                        Payment Method
                                    </h6>
                                    <div className='time-box-2'>
                                        <div className='flex'>
                                            <div className="payment-options">
                                                <label className={`checkbox ${isKnetChecked ? 'checked' : ''}`}>
                                                    <input
                                                        type="checkbox"
                                                        checked={isKnetChecked}
                                                        onChange={this.handleKnetChange}
                                                    />
                                                    <h5>
                                                        K-net
                                                    </h5>
                                                </label>
                                            </div>
                                            <img src="img/step5/Cash In Hand.svg" alt="" srcset="" />
                                        </div>
                                        <div className='flex'>
                                            <label className={`checkbox ${isCreditCardChecked ? 'checked' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={isCreditCardChecked}
                                                    onChange={this.handleCreditCardChange}
                                                />

                                                <h5>
                                                    Credit Card
                                                </h5>

                                            </label>
                                            <img src="img/step5/debit card with bug.svg" alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='time-box-3 up-space'>
                                        <div className='flex'>
                                            <h4>Subtotal</h4>
                                            <h4>250 KD</h4>
                                        </div>
                                        <div className='flex'>
                                            <h4>Additional services</h4>
                                            <h4>5.000 KD</h4>
                                        </div>
                                        <div className='flex'>
                                            <h4>
                                                <b>
                                                    Total
                                                </b>
                                            </h4>
                                            <h4>
                                                <b>
                                                    255 KD
                                                </b>
                                            </h4>
                                        </div>
                                        <button className='next-btn step-5-btn sm-block' type="submit">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            );
    
          default:
            return null;
        }
      };
  
  render() {
    return (
      <div className="multi-step-form">
        <div className="form-details">
          <form onSubmit={this.handleSubmit}>
            {this.renderFormStep()}
            <div className="buttons">
              {this.state.step === 1 ? (
                <button className='back-btn' type="button" disabled>
                  <img src="/img/left arrow.svg" alt="" srcSet="" />
                </button>
              ) : (
                <button className='back-btn' type="button" onClick={this.handlePrevStep}>
                  <img src="/img/left arrow.svg" alt="" srcSet="" />
                </button>
              )}
              {this.state.step < 5 && (
                <button className="next-btn" type="button" onClick={this.handleNextStep}>
                  {this.state.step === 4 ? "Confirm" : "Next"}
                </button>
              )}
              {this.state.step === 5 && (
                <button className='next-btn step-5-btn sm-none' type="submit">Place Order</button>
              )}
            </div>
          </form>
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
export default MultiStepForm;
