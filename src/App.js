// import logo from './logo.svg';
import './App.css';
import Login from "./Pages/Login/Login.js"
import { Routes, Route, Link } from "react-router-dom";
import Signup from './Pages/Signup/Signup';
import Nav from "./Pages/Nav/Nav.js";
import Main from './Pages/MainPage/Main';
import Booked from './Pages/BookedTickes/Booked';
import OldTickes from './Pages/OldTickes/OldTickes';
import Offers from './Pages/OffersPage/Offers';
import Logout from './Pages/Logout';
import Payment from './Pages/Payment/Payment';


export  const Api= "http://localhost:5000"

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={[<Nav />,<Main />]} />
        <Route path="/Dashboard/:id" element={[<Nav />,<Payment />]} />
        <Route path="/BookedTickes" element={[<Nav />,<Booked />]} />
        <Route path="/OldTickes" element={[<Nav />,<OldTickes/>]} />
        <Route path="/Offers" element={[<Nav />,<Offers />]} />
        <Route path="/payment" element={[<Nav />,<Payment />]} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
