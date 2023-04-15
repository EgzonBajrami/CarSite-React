import './FirstSection.css'
import FirstImage from '../../Assets/Images/FirstImage.jpg'
import Header from '../Header/Header';
import Prequalify from '../Prequalify/Prequalify';
const FirstSection = ({getDiv}) => {

    return <>
    <div className="firstSection-container">
        <div className="firstSection-image">
            <img src={FirstImage} alt="Road Trip" />
        </div>
        <Header />
        
        <div className="firstSection-text">
            <h1>
                Love Your Car<br />  Guarantee
            </h1>
            <h3>Take 30 days to return it or love it!</h3>
        </div>
        <Prequalify getDiv={getDiv} />
    </div>
    </>
}
export default FirstSection;