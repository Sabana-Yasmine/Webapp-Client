import React from 'react';
import { Button,  Form, Input } from 'antd';

function ChangePass() {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    >
      <Form.Item
        label="New Password"
        name="newpassword"
        rules={[
          {
            required: true,
            message: 'Please input new password!',
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        label=" Confirm Password"
        name="confirmpassword"
        rules={[
          {
            required: true,
            message: 'both password must be same',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

           <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

  )
}

export default ChangePass