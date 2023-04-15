import SliderSlick from '../SliderSlick/SliderSlick';
import './Prequalify.css'

const Prequalify = ({getDiv}) => {
    return <>
    <div className="prequalify-container">
        <div className="prequalify-wrapper">

        <div className="prequalify-heading">
            <h3>Find your next new car!</h3>
        </div>
        <div className="slider-wrapper">
            <p>What kind of car do you want?</p>
            <SliderSlick getDiv={getDiv}/>
        </div>
                    
        </div>
    </div>
    </>
}
export default Prequalify;