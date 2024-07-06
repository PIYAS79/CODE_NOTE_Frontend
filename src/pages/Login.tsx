import { Button, Form, Input } from 'antd';
import { useState, FormEvent } from 'react';
import { useUserLoginMutation } from '../redux/api/authApi';
import { decodeJWTtoken } from '../utils/decodeToken';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'




const Login = () => {
  const [id, setId] = useState('0001')
  const [password, setPassword] = useState('admin12345')
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const [login, { isLoading }] = useUserLoginMutation()
  if (isLoading) {
    return <p>loading.....</p>
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let toastId = toast.loading('loading.... !', { position: 'top-center' });
    try {

      const res = await login({ id, password }).unwrap();
      const user = decodeJWTtoken(res.data.accessToken);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Successfully login User ... !", { id: toastId, position: 'top-center' });
      navigate('/admin/dashboard');
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong...!", { id: toastId, position: 'top-center' });
    }
  }



  return (
    <Form style={{ maxWidth: '500px', padding: '2rem', backgroundColor: 'gray' }} onSubmitCapture={handleSubmit}>
      <h1>User Login </h1>
      <Input onChange={e => setId(e.target.value)} value={id} type="text" placeholder="Enter your id" />
      <br />
      <br />
      <Input onChange={e => setPassword(e.target.value)} value={password} type="text" placeholder="Enter your pass" />
      <br />
      <br />
      <Button htmlType='submit'>login</Button>
    </Form>
  )
}

export default Login


/**
 * router set up
 * baseapi and authapi inject end point
 * api call and set data from baseapi
 */