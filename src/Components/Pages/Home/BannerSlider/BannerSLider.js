import React, { Component } from "react";

const images = ["/img/sliderImages/0001.JPG", "/img/sliderImages/0002.JPEG"];

class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
    };
  }

  componentDidMount() {
    // Set an interval to change the image every 3 seconds (3000 milliseconds)
    this.interval = setInterval(this.changeImage, 3000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to avoid memory leaks
    clearInterval(this.interval);
  }

  changeImage = () => {
    const { currentImageIndex } = this.state;
    // Calculate the index of the next image
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    this.setState({
      currentImageIndex: nextImageIndex,
    });
  };

  render() {
    const { currentImageIndex } = this.state;

    return (
      <div className="banner-slider">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    );
  }
}

export default BannerSlider;
