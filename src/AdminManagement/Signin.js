import React ,{useState}from 'react';
import './Signin.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signin() {

    const navigate =useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signin = async() => {
      await axios.post("http://localhost:2020/admin/login", {email,password})
            .then((res)=>{
              console.log(res)
              console.log("admintoken", res.data.admintoken);
              localStorage.setitem("admintoken",res.data.admintoken);
              alert("Succesfully login")

            }).catch((error)=>{
              console.log(error)
            })
    }

  <h1>Signin Form</h1>
  return (
    
    <Form  labelCol={{span: 5,}} wrapperCol={{span: 10,}} 
      name="normal_login"
      className="login-form "
      initialValues={{
        remember: true,
      }}
      //onFinish={onFinish}
    >
      <Form.Item name="username"  rules={[  { required: true, message: 'Please input your Username!', }, ]}>
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
         onChange={(e)=>setEmail(e.target.value)} required/>
      </Form.Item>
      
      <Form.Item name="password"  rules={[ {required: true, message: 'Please input your Password!', },]}>
      <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"
           onChange={(e)=>setPassword(e.target.value)} required/>
      </Form.Item>
      
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <button className="login-form-forgot" type='text'  onClick={()=>{navigate("/Forgotpass")}} href="/">
          Forgot password
        </button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={signin}>
         Sign in
        </Button> Or  <a href="/">Signup now!</a>
        
      </Form.Item>
    </Form>


  )
}

export default Signin