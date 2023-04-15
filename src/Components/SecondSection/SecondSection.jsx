import './SecondSection.css';
import happy from '../../Assets/Images/happy.jpg'
const SecondSection = () =>{

    return<>
    <div className="second-section-container">
        <div className="second-section-image">
            <img src={happy} alt="happy after buying" />
        </div>
        <div className="second-section-info">
            <h2>The way it should be.</h2>
            <div className="second-section-block">
            <div className="second-section-text">
                <h3>Do more from home</h3>
                <p>Express pickup and delivery options available</p>
            </div>
            <div className="second-section-text">
                <h3>Test drives for real life</h3>
                <p>24-hour take home test drives</p>
            </div>
            <div className="second-section-text">
                <h3>Love it or return it</h3>
                <p>30-day money back (up to 1500 mi.)</p>
            </div>
            <div className="second-section-text">
                <h3>All major systems covered</h3>
                <p>90 days or 4,000 miles (whichever comes first)</p>
            </div>
            <div className="second-section-btn">
                <a href="/#">
             <button>Shop all cars</button></a>
            </div>

        </div>
        </div>
      
    </div>
    </>
}
export default SecondSection;