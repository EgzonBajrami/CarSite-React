import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import {useRef} from 'react';
const CreateImage = ({postId}) =>{
    const auth = useSelector((state)=>state.auth.data);
    const fileRef = useRef(null);
    // eslint-disable-next-line


    const handleImageChange = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef.current.files[0])
      
    }
    const changeImage = async(file)=>{
        const formData = new FormData();
        formData.append('product-image',file);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
            params:[postId]
        }
        editConfig.data = formData;
        try{
            const result = await api.call(endpoints.addImage,editConfig);
            console.log(result);
      
            
        }catch(err){

        }
    }
    return <>
    <div className="create-wrapper">
        <div className="mb-3">
        <input ref={fileRef} type="file"  onChange={handleImageChange} name="product-image" accept="image/png, image/jpeg" />
        </div>
    </div>
    </>
}
export default CreateImage;