import "./App.css";
import Home from "./Components/Home/HomePage";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/Login/loginTemplate";
import Signup from "./Components/Main/Signup/SignupPage";
import Attractions from "./Components/Main/Attractions/Attractions";
import Flights from "./Components/Main/Flights/Flights";
import Hotels from "./Components/Main/Hotels/Hotels";
import Summary from "./Components/Main/Summary/Summary";
import Details from "./Components/Main/Details/Details";
import Navbar from "./Components/Main/Navbar/Navbar";
import GridCard from "./Components/Main/GridCard/GridCard";

function App() {

  // checkLoginStatis() {

  //   axios.get("http://localhost:8080/api/user/isLoggedIn").then((response) => {
  // }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/gridcard" element={<GridCard />} />
      </Routes>
    </Router>
  );
}

export default App;
