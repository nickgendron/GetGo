import React from "react";
import "./BudgetBuilder.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

function BudgetBuilder() {
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
          <h2 className="topLevelTextForForm">Plan your maximum travel budget.</h2>
          <br />
          <br />
          <p className="formtPromptQuestion" > How much are you willing to spend on your flight?</p>
          <input className="budgetInputField"/>
          <br /> <br />
          <p className="formtPromptQuestion" >How much are you willing to spend on your hotel?</p>
          <input className="budgetInputField"/>
          <br /> <br />
          <p className="formtPromptQuestion" >How much to spend on food/attrications?</p>
          <input className="budgetInputField"/>
          <br /> <br />
          <p className="formtPromptQuestion" >Maximum to Spend on Rental Car/Transportation</p>
          <input className="budgetInputField" />
          <br /> <br />
          <p className="formtPromptQuestion" >Maximum to Spend on Gifts/Souvenirs </p>
          <input className="budgetInputField" />
          <br /> <br />
          <p className="formtPromptQuestion" >Money for Unplanned/Miscellaneous Expenses</p>
          <input className="budgetInputField" />
          <br /> <br /> <br />
          <button className="sumTotalButton"> Total</button>
          <br/><br/>
        </div>
      </div>
    </>
  );
}

export default BudgetBuilder;
