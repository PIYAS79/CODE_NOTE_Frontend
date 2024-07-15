import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username: string;
  password: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const validateString = (_: any, value: string) => {
  if (typeof value === 'string' && isNaN(Number(value))) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('The input must be a string'));
};

const validateNumber = (_: any, value: string) => {
  if (!isNaN(Number(value))) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('The input must be a number'));
};






const CreateAcSemester = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }, { validator: validateString }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }, { validator: validateNumber }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateAcSemester