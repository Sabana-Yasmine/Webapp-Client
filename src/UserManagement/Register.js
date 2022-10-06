import React, {useState} from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


function Register() {
    
  const navigate =useNavigate();
   const[user, setUser] = useState({
    firstName:"",
    lastName:"",
    phoneNumber :"",
    email:"",
    password:""
   })

   const handleChange =(e)=>{
    console.log(e.target.value)
    const{name, value} = e.target

    setUser({
        ...user,//spread operator
        [name]:value
    })
    console.log("user",user)
   }

   console.log("userValue",user)

   const register = ()=>{
    console.log("entered")
    const {firstName,lastName,phoneNumber,email,password}=user
    console.log("get values",user)
    if(firstName && lastName && phoneNumber && email && password){
      console.log("user Details",user);
      axios({
        method : "post",
        url : "http://localhost:2020/user/Register",
        data : user
      }).then((res) =>{
        console.log(res.data.message)
        alert("user registered successfully")
        navigate("/login")
      }).catch((err) =>{
        console.log("err",err)
      })

      }else{
        alert("please enter all values")
      }
   }

   
  return (
    <Form name="basic" labelCol={{span: 5,}} wrapperCol={{span: 16,}} 
    initialValues={{remember: true,}} 
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    >
    <Form.Item  label="First Name"  placeholder=""
     rules={[{  required: true, message: 'Please input your First Name!', },]}
    >
      <Input name="firstName" value = {user.firstName} onChange={handleChange} type="text" />
    </Form.Item>

    <Form.Item  label="Last Name" 
     rules={[{  required: true, message: 'Please input your Last Name!', },]}
     >
        <Input name="lastName" value = {user.lastName} onChange={handleChange} type="text" />
    </Form.Item>

    <Form.Item  label="Phone Number" name="phoneNumber"
     rules={[{  required: true, message: 'Please input your Phone Number!', },]}
    >
        <Input  name="phoneNumber" value = {user.phoneNumber} onChange={handleChange} type="text"/>
    </Form.Item>


     <Form.Item label="Email" name="email"
        rules={[{ required: true, message: 'Please input your Email ',} ]}
        > 
         <Input name="email" value = {user.email} onChange={handleChange} type="text"/>
    </Form.Item>

    <Form.Item  label="Password" name="password"
     rules={[{  required: true, message: 'Please input your password!', },]}
     >
        <Input.Password  name="password" value = {user.password} onChange={handleChange} />
    </Form.Item>

    <Form.Item  wrapperCol={{ offset:1, span: 10,}}>
    <Button type="primary" htmlType="submit" onClick={register}>
    Submit
  </Button>
</Form.Item>
</Form>

)
}

export default Register;
   
 

  



    
          
       
      
    
    

    
      
      
     
      
    
      

    
      
      
        
        
      
    
      

   
     