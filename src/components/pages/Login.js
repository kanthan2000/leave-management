import React from 'react';
import Log from './Log.css';


const Login = () => {


    return (
        <>
        <div  className='login-wrapper'>
            <h1> Iconio Technology Private Limited </h1>
        </div>
        <card>
        <form>
            <div className="mb-3">
            <input type="email" placeholder='Enter email' />            
            </div>
            <div className="mb-3">
            <input type="password" placeholder='Enter Password' />            
            </div>
            <div className="mb-3">
            <input type="button" value="Login" />            
            </div>         
        </form>
        </card>
        
        </>
    );
};

export default Login;