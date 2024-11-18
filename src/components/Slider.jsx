import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../assets/241113-acr-883-macys-crsl-dt_.jpg";
import slideTwos from "../assets/241018-acr-574-temu-crsl-dt.jpg";
import slideThree from "../assets/241108-acr-880-walmart-crsl-dt.jpg";
import slideFour from "../assets/241114-acr-953-walmart-crsl-dt.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        transitionTime={500}
      >
        <div>
          <img
            src={slideOne}
            alt="Slide 1"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slideTwos}
            alt="Slide 2"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slideThree}
            alt="Slide 3"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slideFour}
            alt="Slide 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
