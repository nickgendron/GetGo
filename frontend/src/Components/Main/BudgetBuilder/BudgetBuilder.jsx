import React from "react";
import "./BudgetBuilder.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

function BudgetBuilder() {
  const [hotelCost, setHotelCost] = useState(0);
  const [flightCost, setFlightCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [rentalCarCost, setRentalCarCost] = useState(0);
  const [giftCost, setGiftCost] = useState(0);
  const [miscExpenses, setMiscExpenses] = useState(0);
  const [currentTripTotal, setCurrentTripTotal] = useState(0);
  const [amountToAddToBudget, setAmountToAddToBudget] = useState(0);
  const [amountToSubtractFromBudget, setAmountToSubtractFromBudget] =
    useState(0);
  const [precentageSaved, setPercentageSaved] = useState(0);
  var [amountSaved, setAmountSaved] = useState();
  var test = 0;

  function generatePrecentageSaved(value) {

    const precentageSaved = (value / currentTripTotal) * 100;
    setPercentageSaved(precentageSaved.toFixed(2));
  }

  function updateAmountSaved(){
    async function updateAmountSaved() {
      try {
        const attractionResponse = await axios.get(
          "http://127.0.0.1:8080/api/tripPlanner/getTotalSaved?plannerID=" +
            sessionStorage.getItem("plannerID")
        );
        const data = attractionResponse.data;
        setAmountSaved(data);
      } catch (error) {
        // console.error(error);
      }

    }
updateAmountSaved();
  }
  async function HandleAddToSavings() {
  
    const parsedValue = parseFloat(amountToAddToBudget);
    try {
      const attractionResponse = await axios.post(
        "http://127.0.0.1:8080/api/tripPlanner/addSavings?plannerID=" +
          sessionStorage.getItem("plannerID") +
          "&addToTotal=" +
          parsedValue
      );
      const data =attractionResponse.data;
      setAmountSaved(data);
      generatePrecentageSaved(data);

    } catch (error) {
      // console.error(error);
    }

  }

  async function handleSubtractFromSavings() {
    const parsedValue = parseFloat(amountToSubtractFromBudget);
    try {
      const attractionResponse = await axios.post(
        "http://127.0.0.1:8080/api/tripPlanner/subSavings?plannerID=" +
          sessionStorage.getItem("plannerID") +
          "&subFromTotal=" +
          parsedValue
      );
      const data = attractionResponse.data;
      setAmountSaved(data);
      generatePrecentageSaved(data);
    } catch (error) {
      // console.error(error);
    }
  }
  function handleBudgetFormSubmission() {
    const totalBudget =
      parseFloat(hotelCost) +
      parseFloat(flightCost) +
      parseFloat(foodCost) +
      parseFloat(rentalCarCost) +
      parseFloat(giftCost) +
      parseFloat(miscExpenses);
    try {
      const attractionResponse = axios.post(
        "http://127.0.0.1:8080/api/tripPlanner/setGrandTotal?plannerID=" +
          sessionStorage.getItem("plannerID") +
          "&grandTotal=" +
          totalBudget
      );
      window.location.reload();
    } catch (error) {
      // console.error(error);
    }
  }
  useEffect(() => {

    async function fetchData() {
      try {
        const totalCostResponse = await axios.get(
          `http://127.0.0.1:8080/api/tripPlanner/getTripTotal?plannerID=` +
            sessionStorage.getItem("plannerID")
        );
        const totalCost = totalCostResponse.data;
        setCurrentTripTotal(totalCost);
      } catch (error) {
        console.error(error);
      } try {
        const attractionResponse = await axios.get(
          "http://127.0.0.1:8080/api/tripPlanner/getTotalSaved?plannerID=" +
            sessionStorage.getItem("plannerID")
        );
        const data = attractionResponse.data;
        setAmountSaved(data);
        
      } catch (error) {
      }


    }

    fetchData();


  }, []);




  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>
      <div className="summaryRoot">
        <h1 className="flightsToCity">
          Trip planner for: {sessionStorage.getItem("whereTo")}{" "}
        </h1>
        <hr
          style={{
            background: "black",
            color: "#F3F3F3",
            borderColor: "black",
            height: "4px",
            width: "93%",
            marginLeft: "3%",
            borderRadius: "20px",
          }}
        />
        <br />
        <br />

        <h1 className="budgetCalculatorText">Budget Calculator</h1>
        <div className="budgetInputForm">
          <h2 className="topLevelTextForForm">
            Plan your maximum travel budget.
          </h2>
          <br />
          <br />
          <p className="formtPromptQuestion">
            {" "}
            How much are you willing to spend on your flight?
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setFlightCost(e.target.value);
            }}
          />
          <br /> <br />
          <p className="formtPromptQuestion">
            How much are you willing to spend on your hotel?
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setHotelCost(e.target.value);
            }}
          />
          <br /> <br />
          <p className="formtPromptQuestion">
            How much to spend on food/attrications?
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setFoodCost(e.target.value);
            }}
          />
          <br /> <br />
          <p className="formtPromptQuestion">
            Maximum to Spend on Rental Car/Transportation
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setRentalCarCost(e.target.value);
            }}
          />
          <br /> <br />
          <p className="formtPromptQuestion">
            Maximum to Spend on Gifts/Souvenirs{" "}
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setGiftCost(e.target.value);
            }}
          />
          <br /> <br />
          <p className="formtPromptQuestion">
            Money for Unplanned/Miscellaneous Expenses
          </p>
          <input
            className="budgetInputField"
            onBlur={(e) => {
              setMiscExpenses(e.target.value);
            }}
          />
          <br /> <br /> <br />
          <button
            className="sumTotalButton"
            onClick={handleBudgetFormSubmission}
          >
            {" "}
            Total
          </button>
          <br />
          <br />
        </div>
        <h1 className="budgetCalculatorText">Savings plan</h1>

        <div className="budgetInputForm">
          <div className="savingsControlButtonsDiv">
            <br /> <br />
            <p> Projected vacation cost: ${currentTripTotal}</p>
            <p> Precentage saved: {precentageSaved}% </p>
            <p> Total saved: ${amountSaved}</p>
            <br /> <br />
            <input
              className="textFormInputDetails"
              required={true}
              onBlur={(e) => {
                setAmountToAddToBudget(e.target.value);
              }}
            ></input>
            <button
              className="savingsControlButtons"
              onClick={HandleAddToSavings}
            >
              Add to savings
            </button>
            <br /> <br />
            <input
              className="textFormInputDetails"
              required={true}
              onBlur={(e) => {
                setAmountToSubtractFromBudget(e.target.value);
              }}
            ></input>
            <button
              className="savingsControlButtons"
              onClick={handleSubtractFromSavings}
            >
              Subtract savings
            </button>
            <br /> <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetBuilder;
