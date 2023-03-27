import "./App.css";
import Home from "./Components/Home/HomePage";
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

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
