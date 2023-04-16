import './Header.css'
import {useState,useEffect} from 'react';
const Header = ({firstRef}) => {
    console.log(firstRef);
    const [hamburger, setHamburger] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    let colors = "white";
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
        console.log(scrollPosition);
        if(scrollPosition>firstRef-30){
            colors="black";
        }else{
            colors="white";
        }
    return <>
    <div className="header-container">
        <div className="header-boxes">
            <p>CARSHOP</p>
        </div>
        <div className="nav">
            <div className={hamburger ?("hamburger hamburger-opened"):("hamburger")} id="hamb"
           
            onClick={()=>setHamburger(!hamburger)}>
                {hamburger ? (<>

                <span></span>
                <span></span>
                <span></span></>
                ):(<>
               
            <span  style={{"background-color":colors}}></span>
            <span  style={{"background-color":colors}}></span>
            <span  style={{"background-color":colors}}></span>
            </>)}
        </div>
      </div>
      <div className="menus-container" style={{display:hamburger ? ("block"):("none")}}>

    
      <div className="menu-overlay" style={{visiblity:hamburger ? "visible" : "hidden" , opacity:hamburger ? ("1"):("0")
    ,"z-index": hamburger ? "2" : "-1"}}>
        <div className="menu-content">
            <ul>
                <li>Shop</li>
                <li>Sell/Trade</li>
                <li>Finance</li>
            </ul>
        </div>
      </div>
      <div className="menu-blur" style={{visiblity:hamburger ? "visible" : "hidden" , opacity:hamburger ? ("1"):("0"), "z-index": hamburger ? "2" : "-1"}}>

      </div>
      </div>
    
    </div>
    </>
}
export default Header;