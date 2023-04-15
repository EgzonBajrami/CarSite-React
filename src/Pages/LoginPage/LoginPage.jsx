import './LoginPage.css'
import LoginForm from '../../Components/Forms/LoginForm/LoginForm';
import {api,endpoints} from '../../Lib/Api';
import { login } from '../../Lib/store/slices/auth';
import {useDispatch}  from 'react-redux';
const LoginPage = () =>{
    const dispatch = useDispatch();
    const submit = async(data) =>{
        const config = {
            data:data
        }
        const result = await api.call(endpoints.login, config);
        console.log(result);
        if(result.success){
            dispatch(login(result.data));
        }

    }
    return <>
    <div className="login-wrapper">
        <LoginForm submit={submit} />

    </div>
    </>
}
export default LoginPage;