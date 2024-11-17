import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../assets/241113-acr-883-macys-crsl-dt_.jpg";
import slideTwos from "../assets/241018-acr-574-temu-crsl-dt.jpg";
import slideThree from "../assets/241108-acr-880-walmart-crsl-dt.jpg";
import slideFour from "../assets/241116-holiday-savings-3x-hpcarousel-large-baked-2304x608@2x.jpg";
const Slider = () => {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div>
          <img className="" src={slideOne} alt="Slide 1" />
        </div>
        <div>
          <img src={slideTwos} alt="Slide 1" />
        </div>
        <div>
          <img src={slideThree} alt="Slide 1" />
        </div>
        <div>
          <img className="" src={slideFour} alt="Slide 1" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
