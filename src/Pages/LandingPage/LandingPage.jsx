import './LandingPage.css'
import FirstSection from '../../Components/FirstSection/FirstSection';
import SecondSection from '../../Components/SecondSection/SecondSection';
import {useRef, useState, useEffect} from 'react';
import ShopCar from '../../Components/ShopCar/ShopCar';
import Footer from '../../Components/Footer/Footer';
const LandingPage = () =>{
    const divRef = useRef(null);
    const secondRef = useRef(null);
    let divClass = 'second-section-holder';
    const [divPos, setDivPos] = useState('');
    const [secondDiv, setSecondDiv] = useState('');
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
    if(divPos<scrollPosition){
        divClass = "scroll-div";
    }
    return <>
    <div className="landing-page-container">
        <FirstSection getDiv={secondDiv} />
        <div className={divClass} ref={divRef}>
            <SecondSection />
        </div>
        <div  className="shopcar" ref={secondRef}>
            <ShopCar />
        </div>
        <Footer />
    </div>
    </>
}
export default LandingPage;