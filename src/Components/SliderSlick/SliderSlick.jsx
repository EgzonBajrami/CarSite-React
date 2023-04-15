import './SliderSlick.css';
import Slider from "react-slick";
import suv from '../../Assets/Images/suv.png'
import truck from '../../Assets/Images/truck.png'
import sedan from '../../Assets/Images/sedan.PNG'
import sportcar from '../../Assets/Images/sportcar.png'
import pickup from '../../Assets/Images/pickup.png'
const SliderSlick = ({getDiv}) =>{
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 1,
              },
            },
          ]
      };
      const goToDiv = () =>{
        window.scrollTo({
            top: getDiv,
            behavior:"smooth"
          });
      }
    return<>
    <Slider {...settings}>
        <div className="slider-item">
            
            <img src={suv} alt="suv"/>
            <p onClick={goToDiv}>Suv</p>
            
        </div>
      
        <div className="slider-item" >
            <img src={sedan} alt="sedan" />
            <p  onClick={goToDiv}>Sedan</p>
    
        </div>
        <div className="slider-item" >
            <img src={sportcar} alt="sport" />
            <p onClick={goToDiv}>Sport Car</p>
        </div>
        <div className="slider-item" >
            <img src={truck} alt="truck" />
            <p onClick={goToDiv}>Truck</p>
        </div>
        <div className="slider-item" >
            <img src={pickup} alt="pickup truck" />
            <p onClick={goToDiv}>Pickup Truck</p>
        </div>
    </Slider>
    </>
}
export default SliderSlick;