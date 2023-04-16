import './Testimonials.css'
import personOne from '../../Assets/Images/personOne.jpeg'
import personTwo from '../../Assets/Images/personTwo.jpeg'
import personThree from '../../Assets/Images/personThree.jpeg'
const Testimonials = () =>{
    return<>
    <div className="testimonials-container">
        <div className="full-person">
            <img src={personOne} alt="person-here" />
        </div>
        <div className="person-text">
            <div className="person-avatar">
            <img src={personThree} alt="person-avatar" />
            </div>
            <div className="person-text-here">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisl ac eros finibus ornare.</p>
            </div>
            <div className="person-name">
            <h3>Celia Almeda</h3>
            <p>Secretary</p>
            </div>
            
        </div>
        <div className="person-text2">
            <div className="person-avatar">
            <img src={personOne} alt="person-avatar" />
            </div>
            <div className="person-text-here">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisl ac eros finibus ornare.</p>
            </div>
            <div className="person-name">
            <h3>Nat Reynolds</h3>
            <p>Chief Accountant</p>
            </div>
        </div>
        <div className="person-text3">
            <div className="person-avatar">
            <img src={personTwo} alt="person-avatar" />
            </div>
            <div className="person-text-here">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisl ac eros finibus ornare.</p>
            </div>
            <div className="person-name">
            <h3>Bob Roberts</h3>
            <p>Sales Manager</p>
            </div>
        </div>

    </div>
    </>
}
export default Testimonials;