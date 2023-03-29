// I recommend using react bootstrap for easier styling and formatting
import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom'

  function LogoImage() {
    return (
      <section>
        <img className="left-one"
        src={require('./SmallLogo.png')}
        alt="logo"
      />
      <img className="right-one"
        src={require('./logotext.png')}
        alt="getGo"
      />
      </section>
    )
  }  
function BackgroundImage() {
  return (
    <section>
      <img className="big-one"
      src={require('./happypeople.png')}
      alt="Happy People"
      />
    </section>
  )
}
function Links() {
  return (
    <>
    <Link to="/Components/Login/Login" className='LoginLink'> Log in </Link>
    <Link to="/Components/Signup/SignupPage" className='SigninLink'> Sign up </Link>
    <Link to="/Components/WhereTo/WhereTo" className='StartHereLink'> Start Here </Link>
    </>
  )

}

  export default function Home() {
    return (
      <section>
        <LogoImage />
        
        
        <h1>Plan your trip <br></br>with ease</h1>
        
        <p>Pick the best flights, hotels, and <br></br>
        activities for your trip as well as<br></br>
        begin saving. All in one spot!</p>
        <BackgroundImage />
        <Links />
        
      </section>
    );
  }
