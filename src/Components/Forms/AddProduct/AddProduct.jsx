import {Form,Button} from 'react-bootstrap';

import {useState} from 'react';
import './AddProduct.css'
import {useSelector} from 'react-redux';
import {api,endpoints} from '../../../Lib/Api';
import {getHeaderStructure} from '../../../Lib/helper.js'
import CreateImage from '../../CreateImage/CreateImage';


const AddProduct = () =>{
    const auth = useSelector((state)=>state.auth.data)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [yearProduction, setYearProduction] =  useState(['']);
    const [price, setPrice] = useState('');
    const [section, setSection] = useState('');
    const [add,setAdd] = useState(false);
    const [postId, setPostId] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data ={
            title,
            description,
            yearProduction,
            section,
            price,
           
        }
        const config = {
            headers: getHeaderStructure(auth.token),
            
        }
        config.data = data;
        const result = await api.call(endpoints.addCar, config);
        console.log(result);
        if(result.success){
          setAdd(true);
          setPostId(result.data._id);
        }
    }

    return <>
    {add ? (<>
    <CreateImage postId={postId} />
    </>):(


    <div className="form-container">
    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Car name:</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="Car name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <textarea
                type="text"
                rows="5"
                required
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                placeholder="A short description about the vehicle!"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Year of Production:</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={yearProduction}
                onChange={(e) => {
                  setYearProduction(e.target.value)
                }}
                placeholder="Car year of production"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Type:</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={section}
                onChange={(e) => {
                  setSection(e.target.value)
                }}
                placeholder="Type of vehicle"
              />
            </Form.Group>
     
<Form.Group className="mb-3">
              <Form.Label>Price:</Form.Label>
              <input
                type="number"
                required
                className="form-control"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
                placeholder="Vehicle price"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>

            </Form>
    </div>
        )}
    </>
}
export default AddProduct;