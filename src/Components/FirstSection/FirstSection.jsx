import './FirstSection.css'
import FirstImage from '../../Assets/Images/FirstImage.jpg'
import Header from '../Header/Header';
import Prequalify from '../Prequalify/Prequalify';
import {useState, useRef, useEffect} from 'react';
const FirstSection = ({ getDiv}) => {
    const firstRef = useRef(null);
    const [firstPos, setFirstPos] = useState('');
    useEffect(()=>{
        if(firstRef.current){
            const rect = firstRef.current.getBoundingClientRect();
            setFirstPos(rect.bottom);

        }
    },[firstRef])
    return <>
    <div className="firstSection-container" >
        <div className="firstSection-image" ref={firstRef}>
            <img src={FirstImage} alt="Road Trip" />
        </div>
        <Header firstRef={firstPos}/>
        
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