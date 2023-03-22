import "./App.css";
import Home from "./Components/Home/HomePage"
import {BrowserRouter as Router, redirect, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/LoginPage.js";
import Signup from "./Components/Signup/SignupPage.jsx";
import Main from "./Components/Main/Navbar/Navbar.js";
import SignupPage from "./Components/Signup/SignupPage.jsx";

function App() {
  return (
    <div className="home">
      <Router>
      <div className="home-page">
        <Link to={"/login"}> Login </Link>
        <Link to={"/signup"}> Signup </Link>
        <Link to={"/main"} >Main </Link> 
      </div>
      <div>
        <Routes>
          <Route exact path="/">
        <redirect>
            <Home />
        </redirect>
          </Route>
          <Route exact path="/login">
            
            <Login />
          </Route>
          <Route exact path="/signup">
            
            <SignupPage />
          </Route>
          <Route exact path="/main">
            
            <Main />
          </Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
