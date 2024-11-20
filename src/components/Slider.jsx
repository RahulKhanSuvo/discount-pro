import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../assets/50.jpg";
import stwo from "../assets/boy50.jpg";
import slideThree from "../assets/slider-img3.jpg";
import slideFour from "../assets/young-fashion-woman-holding-shopping-bags-discount-percentage-through-torn-paper-hole-wall (1).jpg";
import slideFive from "../assets/black-friday-sale-concept-with-woman (1).jpg";
const Slider = () => {
  return (
    <div>
      <Carousel autoPlay={2000} showThumbs={false} infiniteLoop={true}>
        <div>
          <img
            src={slideOne}
            alt="Slide 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={stwo}
            alt="Slide 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slideThree}
            alt="Slide 4"
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
        <div>
          <img
            src={slideFive}
            alt="Slide 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
