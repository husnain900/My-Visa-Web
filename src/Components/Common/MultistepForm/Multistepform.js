import React, { Component } from "react";
import "./Multistepform.css";
import "../../Responsive/Responsive.css";
import GDDataService from "../../../services/gd.service";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const timeTable = "Tommorow - 9:00 A < to 10:00 AM ";

class MultiStepForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);

    this.handleNextStep = this.handleNextStep.bind(this);

    this.state = {
      CountryName: localStorage.getItem("selectedCountry") || "",
      step: 1,
      arrivalDate: null,
      pdfError: "",
      formattedDate: "",
      countries: [],
      ExtrasList: [],
      sectionFields_Answered: true,
      VisaTypesOptions: [],
      formData: {
        nationality: "1",
        departureDate: "",
        // arrivalDate: "",
        numPassports: "",
        nameOfSchoolWorkPlace: "",
        address: "",
        jobTitle: "",
        uploadDocuments: null,
        appointmentDate: "",
        SoonestappointmentDate: "",

        contact: "",
        UserName: "",
        visaDuration: "",
        hotelSelection: "",
        ticketSelection: "",
        visaType: "",
      },
      isKnetChecked: false,
      isconsentChecked: false,
      isCreditCardChecked: false,
      currentDate: new Date(),
      currYear: new Date().getFullYear(),
      currMonth: new Date().getMonth(),
      days: [],
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      familyInsurance: false,
      individualInsurance: false,
      flightTicket: false,
      hotelStay: false,
    };
  }

  handleconsentChange = () => {
    this.setState({ isconsentChecked: !this.state.isconsentChecked });
  };

  handleKnetChange = () => {
    this.setState({ isKnetChecked: !this.state.isKnetChecked });
  };

  componentDidMount() {
    console.log("Country Name: " + this.state.CountryName);

    // this.setState({ CountryName: decodedCountryName });

    this.renderCalendar();

    // ////////////////////////

    GDDataService.calculateSoonestAppointment(1)
      .then((response) => {
        console.log(response["data"].soonestDate);

        this.setState({
          formData: {
            ...this.state.formData,
            SoonestappointmentDate: response["data"].soonestDate,
          },
        });
      })

      .catch((e) => {
        console.log(e);
      });
    // ////////////////////////////////////////
    GDDataService.getcountries()
      .then((response) => {
        this.setState({ countries: response.data }); // Update the countries state with fetched data
      })

      .catch((error) => {
        console.error("Error fetching countries:", error);
      });

    // ////////////////////////////////////////
    GDDataService.getExtras()
      .then((response) => {
        this.setState({ ExtrasList: response.data }); // Update the ExtrasList state with fetched data
      })

      .catch((error) => {
        console.error("Error fetching ExtrasList:", error);
      });

    // ///////////////////////////////////////

    GDDataService.getCountryVisaType(this.state.CountryName)
      .then((response) => {
        this.setState({ VisaTypesOptions: response.data }); // Update the VisaTypesOptions state with fetched data
      })

      .catch((error) => {
        console.error("Error fetching VisaTypesOptions:", error);
      });

    // GDDataService.getVisaType()
    //   .then((response) => {
    //     this.setState({ VisaTypesOptions: response.data }); // Update the VisaTypesOptions state with fetched data
    //   })

    //   .catch((error) => {
    //     console.error("Error fetching VisaTypesOptions:", error);
    //   });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currYear !== prevState.currYear ||
      this.state.currMonth !== prevState.currMonth
    ) {
      this.renderCalendar();
    }
  }

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

          className={isToday || isSelected ? "active" : ""}
          onClick={() => this.handleDateClick(i)}
        >
          {i}
        </li>
      );
    }

    this.setState({ days: daysArray });
  };

  formatDate = (date) => {
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  handleDateClick = (day) => {
    const newDate = new Date(this.state.currYear, this.state.currMonth, day);

    this.setState(
      (prevState) => {
        const selectedDate = prevState.formData.selectedDate;

        if (selectedDate && newDate.getTime() === selectedDate.getTime()) {
          return {
            formData: { ...prevState.formData, selectedDate: null },
          };
        } else {
          return {
            formData: { ...prevState.formData, selectedDate: newDate },
          };
        }
      },
      () => {
        this.renderCalendar();
        if (this.state.formData.selectedDate) {
          const SelectedDateformattedDate = this.formatDate(
            this.state.formData.selectedDate
          );

          this.setState({ formattedDate: SelectedDateformattedDate });

          console.log("Formatted Date: " + this.state.formattedDate);
        }
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

    if (type === "file") {
      const file = e.target.files[0];
      this.setState({
        formData: { ...this.state.formData, [name]: file },
      });
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value },
      });
    }
  };

  handleFile = (e) => {
    e.preventDefault(); // Prevent the default behavior
    const { name } = e.target;
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const allowedTypes = ["image/png", "image/svg+xml"]; // Define allowed file types
      if (allowedTypes.includes(file.type)) {
        // File is valid, proceed with the upload
        this.setState({
          pdfError: "File is valid:" + file.name,
        });

        this.setState({
          formData: { ...this.state.formData, [name]: file },
        });

        console.log("File is valid:", file.name);
      } else {
        this.setState({
          pdfError: "Invalid file type. Please select a PNG or SVG file.",
        });
        console.log("Invalid file type. Please select a PNG or SVG file.");
      }
    }
  };

  handleNextStep = () => {
    if (this.state.step < 5) {
      if (this.state.step === 4) {
        if (
          this.state.formData["nationality"] === "" ||
          // this.state.formData["departureDate"] == "" ||
          this.state.arrivalDate === "" ||
          this.state.formData["arrivalDate"] === "" ||
          this.state.formData["numPassports"] === "" ||
          this.state.formData["appointmentDate"] === "" ||
          this.state.formData["contact"] === "" ||
          this.state.formData["UserName"] === "" ||
          this.state.formData["visaType"] === "" ||
          this.state.formData["visaDuration"] === ""
        ) {
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log(this.state.formData);

          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          return;
        } else {
          var data = {
            nationality: this.state.formData["nationality"],
            isconsentChecked: this.state.isconsentChecked,
            CountryName: this.state.CountryName,
            appointmentDate: this.state.formData["appointmentDate"],
            departureDate: this.state.formData["departureDate"],
            arrivalDate: this.state.arrivalDate,
            // arrivalDate: this.state.formData["arrivalDate"],

            numPassports: this.state.formData["numPassports"],
            jobTitle: this.state.formData["jobTitle"],
            nameOfSchoolWorkPlace: this.state.formData["nameOfSchoolWorkPlace"],
            address: this.state.formData["address"],
            uploadDocuments: this.state.formData["uploadDocuments"],
            visaDuration: this.state.formData["visaDuration"],
            UserName: this.state.formData["UserName"],
            contact: this.state.formData["contact"],
            hotelSelection: this.state.formData["hotelSelection"],
            familyInsurance: this.state.familyInsurance,
            ticketSelection: this.state.formData["ticketSelection"],
            visaType: this.state.formData["visaType"],
            individualInsurance: this.state.individualInsurance,
            flightTicket: this.state.flightTicket,
            hotelStay: this.state.formData["hotelStay"],
          };

          console.log(data);

          if (this.state.formData["uploadDocuments"] === "") {
            fetch("http://localhost:8080/api/GD/saveData", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((responseData) => {
                console.log(responseData);
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            console.log(this.state.formData["uploadDocuments"]);

            // Create a new FormData object to send the file
            const fileData = new FormData();
            fileData.append("file", this.state.formData["uploadDocuments"]); // Attach the file to the form data
            // Make a POST request to your server
            fetch("http://localhost:8080/api/GD/upload", {
              method: "POST",
              body: fileData, // Use the fileData object as the request body
            })
              .then((response) => response.json())
              .then((fileResponsedata) => {
                console.log("File uploaded successfully:", fileResponsedata);
                var fileId = fileResponsedata["id"];

                data.uploadDocuments = fileId;

                fetch("http://localhost:8080/api/GD/saveData", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => response.json())
                  .then((responseData) => {
                    console.log(responseData);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              })
              .catch((error) => {
                console.error("File upload failed:", error);
              });
          }
        }
      }

      this.setState({ step: this.state.step + 1 });
    }
  };

  handleDateChange = (date) => {
    // Handle the date selection here
    this.setState({ arrivalDate: date });
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
      case "familyInsurance":
        this.setState({ familyInsurance: checked });
        break;
      case "individualInsurance":
        this.setState({ individualInsurance: checked });
        break;
      case "flightTicket":
        this.setState({ flightTicket: checked });
        break;
      case "hotelStay":
        this.setState({ hotelStay: checked });
        break;
      default:
        break;
    }
  };

  renderFormStep = () => {
    const {
      step,
      isconsentChecked,
      formData,
      hotelStay,
      flightTicket,
      isKnetChecked,
      countries,
      ExtrasList,
      VisaTypesOptions,
      isCreditCardChecked,
      days,
      currMonth,
      currYear,
      familyInsurance,
      individualInsurance,
    } = this.state;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    switch (step) {
      case 1:
        return (
          <>
            <div className="Form-head">
              <h5>Search your visa</h5>
            </div>
            <div className="form-title">
              <h5>Enter Details</h5>
            </div>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="nationality">
                  Enter your nationality
                  <span style={{ color: "red" }}> *</span>
                </label>

                <br />

                <select
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={(e) => this.handleInputChange(e)}
                >
                  <option value="">Select nationality</option>
                  {countries.map((country) => (
                    <option key={country.CountryID} value={country.CountryID}>
                      {country.CountryPassport}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="departureDate">
                  Select date of departure{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate || ""}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              {/* ////////////////////// */}

              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="arrivalDate">
                  Select date of arrival <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  selected={this.state.arrivalDate}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              {/* //////////// */}
              <div className="form-group">
                <label htmlFor="numPassports">
                  Enter number of passports{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="numPassports"
                  name="numPassports"
                  placeholder="2"
                  value={formData.numPassports || ""}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle"> Job Title (optional)</label>
                <br />
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="ex. Software Engineer"
                  value={formData.jobTitle || ""}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address"> Address (optional)</label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="ex. st.105, block 4, Salmiya"
                  value={formData.address || ""}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nameOfSchoolWorkPlace">
                  {" "}
                  Name of School/Workplace (optional)
                </label>
                <br />
                <input
                  type="text"
                  id="nameOfSchoolWorkPlace"
                  name="nameOfSchoolWorkPlace"
                  placeholder="ex. ICS, Kwt"
                  value={formData.nameOfSchoolWorkPlace || ""}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="uploadDocuments">
                  Upload documents (optional)
                </label>
                <br />
                <input
                  type="file"
                  className="upload-input"
                  id="uploadDocuments"
                  name="uploadDocuments"
                  accept="application/pdf,image/*"
                  onChange={(e) => this.handleFile(e)}
                  // onChange={e =>this.handleInputChange(e)}

                  ref={(fileInput) => (this.fileInput = fileInput)} // Create a reference to the file input

                  // style={{ display: 'none' }} // Hide the file input
                />

                <div className="upload-input-content">
                  <a onClick={() => this.fileInput.click()}>
                    <img
                      className="placeholder-image"
                      src="/img/clound.png"
                      alt="Placeholder"
                    />
                    <p className="upload-description">
                      <span>Click to upload </span>or drag and drop <br /> SVG,
                      PNG, JPG or GIF (max. 800x400px)
                    </p>
                    {this.state.pdfError && (
                      <span className="text-danger">{this.state.pdfError}</span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="Form-head">
              <h5>Search</h5>
            </div>
            <div className="form-title">
              <h5>Calendar</h5>
            </div>
            <div className="form-content">
              <div className="form-group">
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
                    <ul className="days">{days}</ul>
                    <div className="bottom-message">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle cx="10" cy="10" r="10" fill="#FF0000" />
                        </svg>{" "}
                        Soonest appointment in embassies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="selectedDate">Normal Appointment</label>
                <br />
                <input
                  type="text"
                  id="selectedDate"
                  name="selectedDate"
                  value={this.state.formattedDate || ""}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="SoonestappointmentDate">
                  Soonest Appointment
                </label>
                <br />
                <input
                  type="text"
                  readonly
                  id="SoonestappointmentDate"
                  name="SoonestappointmentDate"
                  placeholder="7 Jan 2023"
                  value={formData.SoonestappointmentDate || ""}
                />
              </div>
            </div>

            <div className="form-content">
              <div className="form-group">
                <label htmlFor="appointmentDate">
                  Choose Appointment <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <select
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate || ""}
                  onChange={(e) => this.handleInputChange(e)}
                >
                  <option value="">Select Appointment date </option>
                  <option value={formData.SoonestappointmentDate}>
                    Soonest Appointment
                  </option>
                  <option value={this.state.formattedDate}>
                    Normal Appontment
                  </option>
                </select>
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="case-3-lg">
              <div className="Form-head">
                <h5>Search</h5>
              </div>
              <div className="form-title">
                <h5>Extra</h5>
              </div>
              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="visaDuration">
                    Select extra <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="visaDuration"
                    name="visaDuration"
                    value={formData.visaDuration || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  >
                    <option value="individual">Individual</option>
                    <option value="1year">1 year</option>
                    <option value="2years">2 years</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="hotelSelection">
                    Select hotel <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="hotelSelection"
                    name="hotelSelection"
                    value={formData.hotelSelection || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  >
                    <option value="">
                      Select a hotel <span style={{ color: "red" }}>*</span>
                    </option>
                    <option value="5 star hotel">5 star hotel</option>
                    <option value="4 star hotel">4 star hotel</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="ticketSelection">
                    Select ticket <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="ticketSelection"
                    name="ticketSelection"
                    value={formData.ticketSelection || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  >
                    <option value="">
                      Select a ticket <span style={{ color: "red" }}>*</span>
                    </option>
                    <option value="Business Class">Business Class</option>
                    <option value="Economy Class">Economy Class</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="UserName">
                    Enter your name <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="UserName"
                    name="UserName"
                    placeholder="name"
                    value={formData.UserName || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">
                    Enter your Phone number{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="+123 456 789"
                    value={formData.contact || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>

                {/* /////////////////////////End///////////////////////////////// */}
              </div>
            </div>

            <div className="case-3-sm">
              <div className="Form-head">
                <h5>Confirm your Booking</h5>
              </div>

              {/* /////////////START OF EXTRA////////////////// */}
              <div className="form-title">
                <h5>Extra</h5>
              </div>
              <div className="form-content">
                <div className="checkbox">
                  {ExtrasList.map((extra) => (
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name={extra.Name}
                          // checked={extra.Name}
                          onChange={this.handleCheckboxChange}
                        />
                        {extra.Label}
                      </label>
                      <h5>{extra.Price}</h5>
                    </div>
                  ))}

                  {/* <div>
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
                  </div> */}
                </div>
                {/* ///////////END OF EXTRA/////////  */}
                <div className="form-group">
                  <label htmlFor="UserName">
                    Enter your name <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="UserName"
                    name="UserName"
                    placeholder="Mohammad Ali"
                    value={formData.UserName || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">
                    Enter your Phone number{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="00123456789"
                    value={formData.contact || ""}
                    onChange={(e) => this.handleInputChange(e)}
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                    }
                  />
                </div>

                {/* <div className="form-group">
                  <label htmlFor="contact">
                    Enter your Phone number{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    className="sm-case-3"
                    id="contact"
                    name="contact"
                    value={formData.contact || ""}
                    onChange={(e) => this.handleInputChange(e)}
                  >
                    <option value="+123 456 789">+123 456 789</option>
                    <option value="+123 456 789">+123 456 789</option>
                    <option value="+123 456 789">+123 456 789</option>
                  </select>
                </div> */}
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="Form-head">
              <h5>Search</h5>
            </div>
            <div className="form-title">
              <h5>Extra</h5>
            </div>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="visaDuration">
                  Visa Duration <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <select
                  id="visaDuration"
                  name="visaDuration"
                  value={formData.visaDuration || ""}
                  onChange={(e) => this.handleInputChange(e)}
                >
                  <option value="">Select Visa Duration</option>
                  <option value="6month">6 months</option>
                  <option value="1year">1 year</option>
                  <option value="2years">2 years</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="visaType">
                  Visa Type <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <select
                  id="visaType"
                  name="visaType"
                  value={formData.visaType || ""}
                  onChange={(e) => this.handleInputChange(e)}
                >
                  <option value="">Select Visa Type</option>
                  {VisaTypesOptions.map((vt) => (
                    <option key={vt.VisaTypeID} value={vt.VisaTypeID}>
                      {vt.VisaTypeName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="payment-options">
                <label
                  className={`checkbox ${isconsentChecked ? "checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={isconsentChecked}
                    onChange={this.handleconsentChange}
                  />
                  <h5>
                    {" "}
                    I agree (consent is required for agent to call customer)
                  </h5>
                </label>
              </div>

              {this.state.sectionFields_Answered == false ? (
                <p style={{ color: "red" }}>
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
                  Please fill the required fields
                </p>
              ) : (
                <p style={{ color: "green" }}></p>
              )}
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="checkout">
              <div className="Form-head-5">
                <h5>Checkout</h5>
                <h3>ع</h3>
              </div>
              <div className="form-content">
                <div>
                  <h6>Appointment time</h6>
                  <div className="time-box">
                    <h5>
                      <span>{timeTable}</span>
                    </h5>
                  </div>
                </div>
                <div>
                  {/* huda */}
                  <h6>
                    Items - <span>edit</span>
                  </h6>

                  {this.state.hotelStay ? (
                    <div className="time-box-2">
                      <div className="flex">
                        <div>
                          <h5>
                            <span className="e-space">
                              {this.state.formData["numPassports"]}x
                            </span>
                            Hotel Stay
                          </h5>
                        </div>
                        <div>
                          <h5>
                            200 <span className="s-space">KD</span>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {this.state.flightTicket ? (
                    <div className="time-box-2">
                      <div className="flex">
                        <div>
                          <h5>
                            <span className="e-space">
                              {this.state.formData["numPassports"]}x
                            </span>
                            Flight Ticket
                          </h5>
                        </div>
                        <div>
                          <h5>
                            200 <span className="s-space">KD</span>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {this.state.individualInsurance ? (
                    <div className="time-box-2">
                      <div className="flex">
                        <div>
                          <h5>
                            <span className="e-space">
                              {this.state.formData["numPassports"]}x
                            </span>
                            Individual Insurance
                          </h5>
                        </div>
                        <div>
                          <h5>
                            200 <span className="s-space">KD</span>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {this.state.familyInsurance ? (
                    <div className="time-box-2">
                      <div className="flex">
                        <div>
                          <h5>
                            <span className="e-space">
                              {this.state.formData["numPassports"]}x
                            </span>
                            Family Insurance
                          </h5>
                        </div>
                        <div>
                          <h5>
                            200 <span className="s-space">KD</span>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* <div className="time-box-2">
                    <div className="flex">
                      <div>
                        <h5>
                          <span className="e-space">4x</span>Family Visa
                        </h5>
                      </div>

                      <div>
                        <h5>
                          200 <span className="s-space">KD</span>{" "}
                        </h5>
                      </div>
                    </div>

                    <div className="flex">
                      <div>
                        <h5>
                          <span className="e-space">4x</span> Hotel
                        </h5>
                      </div>
                      <div>
                        <h5>
                          {" "}
                          50 <span className="s-space">KD</span>
                        </h5>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div>
                  <h6>Promotions</h6>
                  <div className="time-box-3 flex">
                    <img src="img/step5/label.svg" alt="" srcset="" />
                    <input type="text" placeholder="Enter promotion code" />
                  </div>
                </div>
                <div>
                  <h6>Payment Method</h6>
                  <div className="time-box-2">
                    <div className="flex">
                      <div className="payment-options">
                        <label
                          className={`checkbox ${
                            isKnetChecked ? "checked" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isKnetChecked}
                            onChange={this.handleKnetChange}
                          />
                          <h5>K-net</h5>
                        </label>
                      </div>
                      <img src="img/step5/Cash In Hand.svg" alt="" srcset="" />
                    </div>
                    <div className="flex">
                      <label
                        className={`checkbox ${
                          isCreditCardChecked ? "checked" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isCreditCardChecked}
                          onChange={this.handleCreditCardChange}
                        />

                        <h5>Credit Card</h5>
                      </label>
                      <img
                        src="img/step5/debit card with bug.svg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="time-box-3 up-space">
                    <div className="flex">
                      <h4>Subtotal</h4>
                      <h4>250 KD</h4>
                    </div>
                    <div className="flex">
                      <h4>Additional services</h4>
                      <h4>5.000 KD</h4>
                    </div>
                    <div className="flex">
                      <h4>
                        <b>Total</b>
                      </h4>
                      <h4>
                        <b>255 KD</b>
                      </h4>
                    </div>
                    <button
                      className="next-btn step-5-btn sm-block"
                      type="submit"
                    >
                      Place Order
                    </button>
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
                <button className="back-btn" type="button">
  <Link to="/">
    <img src="/img/left arrow.svg" alt="" srcSet="" />
  </Link>
</button>
              ) : (
                <button
                  className="back-btn"
                  type="button"
                  onClick={this.handlePrevStep}
                >
                  <img src="/img/left arrow.svg" alt="" srcSet="" />
                </button>
              )}
              {this.state.step < 5 && (
                <button
                  className="next-btn"
                  type="button"
                  onClick={this.handleNextStep}
                >
                  {this.state.step === 4 ? "Confirm" : "Next"}
                </button>
              )}
              {this.state.step === 5 && (
                <button className="next-btn step-5-btn sm-none" type="submit">
                  Place Order
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="image-section">
          <img
            className="image-section-img"
            // src="../../../../public/img/Rectangle 3.png"
            src="./img/Rectangle 3.png"
            alt=""
          />
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
