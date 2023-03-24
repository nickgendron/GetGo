import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import image from "../Images/goldenGateBridge.jpg"



  function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);

      navigate('/home');
    }
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }

    const divStyle = {
      backgroundImage: `url("/Users/nickgendron/Desktop/CSC-3380-Rainbow-Team/frontend/src/Components/Images/goldenGateBridge.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    };

    
  return (
    <>
    <div className='container'> 
    <form onSubmit={handleSubmit}>  
        <div className="loginBox">  
          <div className='loginArea'>
          <h1 className='welcomeText'>Welcome to GetGo!</h1> 
          <br></br>
          <input className="inputLabel" type="text" placeholder="Email" name="username" value={email} onChange={handleEmailChange} required />
            <br></br>
            <input className="inputLabel" type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} required />
            <br></br> 
            <button className="button" type="submit">Login</button>   
            <br></br>
            <a className='centerText' href="#"> Forgot password? </a>  
            <br></br> 
            <a className='centerText' href="#">  Signup </a>   
            </div>
        </div>   
    </form> 
    </div>
    </>
  );
}

export default LoginForm;