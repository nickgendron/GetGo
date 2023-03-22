// I recommend using react bootstrap for easier styling and formatting
import "./HomePage.css";
// React router to route to different pages from the homepage
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Login/LoginPage.js";
import Signup from "../Signup/SignupPage.jsx";
import Main from "../Main/Navbar/Navbar.js";

function HomePage() {
  // Create proper return function to route to the right page based on link clicks
  return (
    <>

      <Router>
        <div className="home-page">
        <p>Hello!</p>
        <p><link rel="Login" href="/login"/></p>
        <link rel="Signup" href="/signup"/>
        <link rel="Main" href="/main">Link</link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default HomePage;
