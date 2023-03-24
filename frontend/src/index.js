import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './System/reportWebVitals';
import { BrowserRouter as IndexRoute,Router, Routes, Route, Switch, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Login/loginTemplate"
import "@fontsource/work-sans";

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
 )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
