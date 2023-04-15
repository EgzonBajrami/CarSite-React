import './ShopCar.css';
import {useState} from 'react';
import CarDisplay from '../../Components/CarDisplay/CarDisplay'
const ShopCar = () =>{
    const [currently, setCurrently] = useState(true);
    const [currently2, setCurrently2] = useState(false);
    const [currently3, setCurrently3] = useState(false);
    const [currently4, setCurrently4] = useState(false);
    const [currently5, setCurrently5] = useState(false);

    return <>
    <div className="shopcar-container">
        <div className="shopcar-maintitle">
            <h1>Your next car is here!</h1> <br />
        </div>
        <div className="shopcar-titles">
            <h3 className={currently ? "blue" : ""}
            onClick={()=>{
            setCurrently5(false)
            setCurrently4(false)
            setCurrently3(false)
            setCurrently(!currently)
            setCurrently2(false)}}>Suv</h3>
            <h3 className={currently2 ? "blue" : ""}
            onClick={()=>{
            setCurrently5(false)
            setCurrently4(false)
            setCurrently3(false)
            setCurrently2(!currently2)
            setCurrently(false)}}>Sedan</h3>
            <h3 className={currently3 ? "blue" : ""}
            onClick={()=>{
            setCurrently5(false)
            setCurrently4(false)
            setCurrently3(!currently3)
            setCurrently2(false)
            setCurrently(false)}}>Sport Car</h3>
             <h3 className={currently4 ? "blue" : ""}
            onClick={()=>{
            setCurrently5(false)
            setCurrently4(!currently4)
            setCurrently3(false)
            setCurrently2(false)
            setCurrently(false)}}>Truck</h3>
            <h3 className={currently5 ? "blue" : ""}
            onClick={()=>{
            setCurrently5(!currently5)
            setCurrently4(false)
            setCurrently3(false)
            setCurrently2(false)
            setCurrently(false)}}>Pickup Truck</h3>
        </div>
        <br />
        {currently &&(<>
        <CarDisplay type="Suv" /></>)}
        {currently2 &&(<>
        <CarDisplay type="Sedan" /></>)}
        {currently3 &&(<>
        <CarDisplay type="Sport" /></>)}
        {currently4 &&(<>
        <CarDisplay type="Truck" /></>)}
        {currently5 &&(<>
        <CarDisplay type="Pickup" /></>)}
        
    </div>
    </>
}
export default ShopCar;