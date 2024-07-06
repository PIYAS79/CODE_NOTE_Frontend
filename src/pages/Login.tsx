import { Button, Form, Checkbox, Input } from 'antd';
import { useState, FormEvent } from 'react';
import { useUserLoginMutation } from '../redux/api/authApi';
import { decodeJWTtoken } from '../utils/decodeToken';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'

import type { FormProps } from 'antd';
import { Header } from 'antd/es/layout/layout';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};




const Login = () => {
  // const [id, setId] = useState('0001')
  // const [password, setPassword] = useState('admin12345')
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useUserLoginMutation()
  if (isLoading) {
    return <p>loading.....</p>
  }


  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    let toastId = toast.loading('loading.... !', { position: 'top-center' });
    try {

      const res = await login({ id: values.username, password: values.password }).unwrap();
      const user = decodeJWTtoken(res.data.accessToken);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Successfully login User ... !", { id: toastId, position: 'top-center' });
      navigate('/admin/dashboard');
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong...!", { id: toastId, position: 'top-center' });
    }
  };

  // for error 
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  
  
  
  
  return (
    <div style={{ height: '100vh', display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>


      <h1 style={{width:'100%',paddingBottom:'3rem',color:'green',textAlign:'center'}}>Daffodil International Univeristy</h1>


      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 6, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login


/**
 * router set up
 * baseapi and authapi inject end point
 * api call and set data from baseapi
 */