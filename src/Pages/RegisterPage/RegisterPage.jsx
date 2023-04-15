import RegisterForm from '../../Components/Forms/RegisterForm/RegisterForm';
import './RegisterPage.css'
import {api,endpoints} from '../../Lib/Api'


const RegisterPage = () =>{
    const submit = async(data) =>{
        const config = {
            data:data
        }
        console.log(config);
        const result = await api.call(endpoints.register,config);
        console.log(result);

    }
    return <>
    <div className="register-wrapper">
        <RegisterForm submit ={submit} />

    </div>
    </>
}
export default RegisterPage;