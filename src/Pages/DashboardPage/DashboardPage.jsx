import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css'
import {useState} from 'react';
import AddProduct from '../../Components/Forms/AddProduct/AddProduct';
const Dashboard = () =>{
    const [show, setShow] = useState('');
    console.log(show);
    return <>
    <div className="dashboard-wrapper">
        <Sidebar show={show} setShow={setShow} />
        {show==='product' &&(<>
        <AddProduct /></>)}

    </div>
    </>
}
export default Dashboard;