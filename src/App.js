import "./App.css";
import Navbar from './component/Navbar';
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"

function App() {
 const[isLoggedin, setisLoggedin] = useState(false);
//  Initially we did not login to the account. So set to false. Whenever logged in or signed up to the account then change to true the variable

  return (
    <div>
<Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>

<Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/login" element ={<Login setisLoggedin={setisLoggedin}/>} />
    <Route path="/signup" element ={<SignUp setisLoggedin={setisLoggedin}/>} />
    <Route path="/dashboard" element ={<Dashboard/>} />
</Routes>
    </div>
  )
}

export default App;
