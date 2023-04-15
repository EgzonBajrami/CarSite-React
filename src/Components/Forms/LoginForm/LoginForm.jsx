import {Form,Button} from 'react-bootstrap'
import {useState} from 'react';

const LoginForm = ({submit}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email,
            password
        }
        submit(data);
    }
    return <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
            </Form>
    </>
}
export default LoginForm;