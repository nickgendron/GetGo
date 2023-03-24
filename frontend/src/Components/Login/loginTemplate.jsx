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
    
    </div>
    </>
  );
}

export default LoginForm;