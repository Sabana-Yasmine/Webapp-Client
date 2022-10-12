
import React, {useState} from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


function Signup() {
    
  const navigate =useNavigate();
   const[admin, setAdmin] = useState({
    firstName:"",
    lastName:"",
    phoneNumber :"",
    email:"",
    password:""
   })

   const handleChange =(e)=>{
    console.log(e.target.value)
    const{name, value} = e.target

    setAdmin({
        ...admin,//spread operator
        [name]:value
    })
    console.log("admin",admin)
   }

   console.log("adminValue",admin)

   const signup = ()=>{
    console.log("entered")
    const {firstName,lastName,phoneNumber,email,password}=admin
    console.log("get values",admin)
    if(firstName && lastName && phoneNumber && email && password){
      console.log("Admin Details",admin);
      axios({
        
        method : "post",
        url : "http://localhost:2020/admin/Register",
        data : admin
      }).then((res) =>{
        console.log("response", res.data.message)
        alert("admin registered successfully")
        navigate("/signin")
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
      <Input name="firstName" value = {admin.firstName} onChange={handleChange} type="text" />
    </Form.Item>

    <Form.Item  label="Last Name" 
     rules={[{  required: true, message: 'Please input your Last Name!', },]}
     >
        <Input name="lastName" value = {admin.lastName} onChange={handleChange} type="text" />
    </Form.Item>

    <Form.Item  label="Phone Number" name="phoneNumber"
     rules={[{  required: true, message: 'Please input your Phone Number!', },]}
    >
        <Input  name="phoneNumber" value = {admin.phoneNumber} onChange={handleChange} type="text"/>
    </Form.Item>


     <Form.Item label="Email" name="email"
        rules={[{ required: true, message: 'Please input your Email ',} ]}
        > 
         <Input name="email" value = {admin.email} onChange={handleChange} type="text"/>
    </Form.Item>

    <Form.Item  label="Password" name="password"
     rules={[{  required: true, message: 'Please input your password!', },]}
     >
        <Input.Password  name="password" value = {admin.password} onChange={handleChange} />
    </Form.Item>

    <Form.Item  wrapperCol={{ offset:1, span: 10,}}>
    <Button type="primary" htmlType="submit" onClick={signup}>
    Submit
  </Button>
</Form.Item>
</Form>

)
}

export default Signup;
   
 

  



    
          
       
      
    
    

    
      
      
     
      
    
      

    
      
      
        
        
      
    
      

   
     