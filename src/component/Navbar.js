import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setisLoggedin = props.setisLoggedin;

  function clickHandler(){
  setisLoggedin(false);
  toast.success("Logged out successfully");
  }
  return (
    <div className='maindiv'>
 
  <Link to= "/dashboard">
    <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
  </Link>

  <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">About</Link></li>
    <li> <Link to="/">Contact</Link></li>
  </ul>
  </nav>

{/* login,signup,logout,dashboard depends whether we are logged in or not */}

  <div>
   {!isLoggedin &&
      <Link to="/login">
        <button>
          Login
        </button>
      </Link>
   }
   {!isLoggedin &&
      <Link to="/signup">
        <button>
          SignUp
        </button>
      </Link>
   }
   {isLoggedin &&
      <Link to="/">
        <button onClick={()=>clickHandler}>
         Logout
        </button>
      </Link>
   }
   { isLoggedin &&
      <Link to="/dashboard">
        <button>
          dashboard
        </button>
      </Link>
   }
  </div>
    </div>
  )
}

export default Navbar
