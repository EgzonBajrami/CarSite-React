import './LandingPage.css'
import FirstSection from '../../Components/FirstSection/FirstSection';
import SecondSection from '../../Components/SecondSection/SecondSection';
import {useRef, useState, useEffect} from 'react';
import ShopCar from '../../Components/ShopCar/ShopCar';
import Footer from '../../Components/Footer/Footer';
import Testimonials from '../../Components/Testimonials/Testimonials';
const LandingPage = () =>{
    const divRef = useRef(null);
    const secondRef = useRef(null);
    const finalDiv = useRef(null);
    let finalDivClass = "testimonials";
    let divClass = 'second-section-holder';
    const [divPos, setDivPos] = useState('');
    const [secondDiv, setSecondDiv] = useState('');
    const [finalDivPos, setFinalDivPos] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
        passive: true
    });
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, [scrollPosition]);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(()=>{
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setDivPos(rect.top);
          }

    },[divRef])
    useEffect(()=>{
        if(secondRef.current){
            const rect = secondRef.current.getBoundingClientRect();
            setSecondDiv(rect.top);

        }
    },[secondDiv])
    useEffect(()=>{
        if(finalDiv.current){
            const rect = secondRef.current.getBoundingClientRect();
            setFinalDivPos(rect.top);

        }
    },[finalDiv])
    if(divPos<scrollPosition){
        divClass = "scroll-div";
    }
    if(finalDivPos<scrollPosition){
        finalDivClass ="testimonials-bigger";
    }
    return <>
    <div className="landing-page-container">
        <FirstSection  getDiv={secondDiv} />
        <div className={divClass} ref={divRef}>
            <SecondSection />
        </div>
        <div  className="shopcar" ref={secondRef}>
            <ShopCar />
        </div>
        <div className={finalDivClass} ref={finalDiv}>
            <Testimonials />
        </div>
        <Footer />
    </div>
    </>
}
export default LandingPage;