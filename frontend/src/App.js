import "./App.css";
import Home from "./Components/Home/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from 'react';

import Login from "./Components/Login/loginTemplate";
import Signup from "./Components/Main/Signup/SignupPage";
import Attractions from "./Components/Main/Attractions/Attractions";
import Flights from "./Components/Main/Flights/Flights";
import Hotels from "./Components/Main/Hotels/Hotels";
import Summary from "./Components/Main/Summary/Summary";
import Details from "./Components/Main/Details/Details";
import Navbar from "./Components/Main/Navbar/Navbar";
import GridCard from "./Components/Main/GridCard/GridCard";
import MainAPI from "./Components/Main/MainAPI/MainAPI";
import BudgetBuilder from "./Components/Main/BudgetBuilder/BudgetBuilder"

export const AppContext = createContext();
//frontend/src/Components/MainAPI/MainAPI.jsx
function App() {
  const [variables, setVariables] = useState({
    locationString: '',
    flightOfferID: '',
  });

  const updateVariables = (data) => {
    setVariables({
      locationString: data.locationString,
      flightOfferID: data.flightOfferID,

    });
  };
  // sessionStorage.removeItem("userID");


  // Callback function to update variables with API response

  // checkLoginStatis() {

  //   axios.get("http://localhost:8080/api/user/isLoggedIn").then((response) => {
  // }
  return (
    <AppContext.Provider value={{ variables, updateVariables }}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/gridcard" element={<GridCard />} />
        <Route path="/mainapi" element={<MainAPI />} />
        <Route path="/savings" element={<BudgetBuilder />} />
      </Routes>
    </Router>
    </AppContext.Provider>

  );
}

export default App;
