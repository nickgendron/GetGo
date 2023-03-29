import "./App.css";
import Home from "./Components/Home/HomePage";
import { Route, Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/SignupPage";
import Attractions from "./Components/Main/Attractions/Attractions";
import Flights from "./Components/Main/Flights/Flights";
import Hotels from "./Components/Main/Hotels/Hotels";
import Summary from "./Components/Main/Summary/Summary";
import Details from "./Components/Main/Details/Details";
import WhereTo from "./Components/WhereTo/WhereTo";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/Components/Login/Login' element={<Login />} />
        <Route path='/Components/Signup/SignupPage' element={<Signup />} />
        <Route path='/Components/Main/Attractions/Attractions' element={<Attractions />} />
        <Route path='/Components/Main/Details/Details' element={<Details />} />
        <Route path='/Components/Main/Flights/Flights' element={<Flights />} />
        <Route path='/Components/Main/Hotels/Hotels' element={<Hotels />} />
        <Route path='/Components/Main/Summary/Summary' element={<Summary />} />
        <Route path='/Components/WhereTo/WhereTo' element={<WhereTo />} />
      </Route>
    )
  )
  return (
    <><div>
      <RouterProvider router={router} />
    </div></>
  );
}


export default App;

function Root() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}