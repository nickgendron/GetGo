import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, Link } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/LoginPage';
import Signup from './Components/Signup/SignupPage';
import Attractions from "./Components/Main/Attractions/AttractionsPage";
import Flights from "./Components/Main/Flights/FlightsPage";
import Hotels from "./Components/Main/Hotels/HotelsPage";
import Summary from "./Components/Main/Summary/SummaryPage";
import Details from "./Components/Main/Details/DetailsPage";
import WhereTo from './Components/WhereTo/WhereToPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/Components/Login/LoginPage' element={<Login />} />
        <Route path='/Components/Signup/SignupPage' element={<Signup />} />
        <Route path='/Components/Main/Attractions/AttractionsPage' element={<Attractions />} />
        <Route path='/Components/Main/Details/DetailsPage' element={<Details />} />
        <Route path='/Components/Main/Flights/FlightsPage' element={<Flights />} />
        <Route path='/Components/Main/Hotels/HotelsPage' element={<Hotels />} />
        <Route path='/Components/Main/Summary/SummaryPage' element={<Summary />} />
        <Route path='/Components/WhereTo/WhereToPage' element={<WhereTo />} />
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