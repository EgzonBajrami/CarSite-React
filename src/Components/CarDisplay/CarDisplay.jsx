import './CarDisplay.css'
import {useState, useEffect} from 'react';
import {api,endpoints} from '../../Lib/Api'
import CarModal from '../../Components/CarModal/CarModal'
const CarDisplay = ({type}) =>{
    const [data, setData] = useState([]);
    const [elemId, setElemId] = useState('');
    const [modalShow, setModalShow] = useState(false);
    useEffect(()=>{
        const getData = async () =>{
            const config ={
                params:[type]
            }
            const result = await api.call(endpoints.getCars,config);
            setData(result.data);
        }
        getData();
      
    },[type])
    return <>
    <div className="cars-container">

    {
        data && data.map((elem)=>(
            <div className="cars-wrapper" key={elem._id}>
                <div className="cars-image">
                    <img src={process.env.REACT_APP_API_URL + elem.image[0]} alt="suv-car" />
                </div>
                <div className="car-title">
                    <p>{elem.title}</p> 
                </div>
                <div className="car-btn">
             <button onClick={()=>{setElemId(elem._id)
            setModalShow(!modalShow)}}>Check Specifications</button>
            {elemId===elem._id && (<CarModal
             show={modalShow}
             onHide={() => {setModalShow(!modalShow)
             setElemId()} }
              data={elem} />)}
            </div>
            </div>
        ))
    }
            
            </div>
    </>
}
export default CarDisplay;