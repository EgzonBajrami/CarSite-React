import './Footer.css';
import {Form} from 'react-bootstrap';
import {useState} from 'react';
import {api, endpoints} from '../../Lib/Api';
const Footer = () =>{
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(true);
    const [message, setMessage] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = {
            email
        }
        const config = {
            data:data
        }
        const result = await api.call(endpoints.subscribe, config);
        console.log(result);
        if(result.success){
            setSubscribed(false);
            setMessage('We thank you for subscribing to our newsletter.')
        }else{
            setSubscribed(false);
            setMessage('Oops something went wrong when subscribing to our newsletter. Please try again!')
            setTimeout(()=>{
                setSubscribed(true);
            },3000)
        }

    }
    return <>
    <footer className="footer-container">
        {subscribed ? (<>
        <div className="subscribe">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <div className="subscribe-label">
             <p>Want car shop's email newsletter?</p>
              </div>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Your email goes here:"
              />
            </Form.Group>
            <div className="footer-btn">
                <button type="submit">Subscribe</button>
            </div>
            </Form>
        </div>
        </>):(<>
        <div className="subscribe">
        <div className="subscribe-label">
             <p>{message}</p>
              </div>
        </div>
        </>)}
        <div className="subscribe-info">
            <p>About</p>
            <p>Need help?</p>
            <p>Content guide</p>
            <p>Privacy</p>
            <p>Terms of Use</p>
            <p>Careers</p>
        </div>
    </footer>
    </>
}
export default Footer;