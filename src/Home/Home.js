import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home(props) {

    const navigate =useNavigate();
    
    return (
        <div>
            <h1>WELCOME !!!</h1>

            <p>Are you new here?  
                <button type ='button' className='btn btn-primary' onClick={navigate("/Register")}>Register now</button> 
                Already have an account
                <button type ='button' className='btn btn-primary' onClick={navigate("/Login")}>Login</button>
                </p>

            <p>Login as a admin?
                <button type="button" className='btn btn-primary' onClick={navigate("/Signup")}>Signin</button> 
                 </p>    
        </div>

     
    );
}

export default Home;