import React, { Component } from "react";
import Modal from "react-modal";
import GDDataService from "../../../../services/gd.service";
import { Link } from "react-router-dom";
import { ModalHeader, ModalBody } from "react-bootstrap";

const customStyles = {
  content: {
    width: "70%",
    height: "auto",
    margin: "auto",
  },
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "10px", // Adjust the gap as needed
  alignItems: "center",
};

const closeButtonStyle = {
  cursor: "pointer",
};

const flagImageStyle = {
  width: "20%", // Adjust the image size as needed
};

const centeredCloseButton = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px", // Adjust as needed
};

const redCloseButton = {
  color: "white",
  backgroundColor: "red",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
};

class PopupModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Shengincountries: [],
    };
  }

  componentDidMount() {
    localStorage.setItem("selectedCountry", "");

    GDDataService.getShenginContryFlags()
      .then((response) => {
        this.setState({ Shengincountries: response.data });
        console.log(this.state.Shengincountries);
      })
      .catch((error) => {
        console.error("Error fetching Shengincountries:", error);
      });
  }

  handleShenginFlagClick = (countryName) => {
    // Store the country name in local storage
    localStorage.setItem("selectedCountry", countryName);
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { Shengincountries } = this.state;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Shengin Popup Modal"
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <ModalHeader>{/* <h3>Shengin Countries</h3> */}</ModalHeader>

        <br></br>
        <ModalBody>
          <div style={gridContainerStyle}>
            {Shengincountries.map((country, index) => (
              <div key={index}>
                {/* <Link to={`/MultiStepForm/${country.ContryFlagsname}`}> */}
                <Link
                  to={`/MultiStepForm`}
                  onClick={() =>
                    this.handleShenginFlagClick(country.ContryFlagsname)
                  }
                >
                  <img
                    src={country.ContryFlagsSrc}
                    alt={country.ContryFlagsname}
                    style={flagImageStyle}
                  />
                </Link>
                <p>{country.ContryFlagsname}</p>
              </div>
            ))}
          </div>
        </ModalBody>
        <br></br>
        <div style={centeredCloseButton}>
          <button style={redCloseButton} onClick={closeModal}>
            CLOSE
          </button>
        </div>
      </Modal>
    );
  }
}

export default PopupModal;
