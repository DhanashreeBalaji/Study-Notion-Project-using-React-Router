import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate ,Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
 
const Loginform = ({setisLoggedin}) => {

    const[showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
          email:"",
          password:""
    })
    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
        
    }
    function submitHandler(event){
        event.preventDefault();
         setisLoggedin(true);
        toast.success("Logged in Successfully");
        const accountdata = {
          ...formData
        }
        console.log("Account details lelo");
        console.log(accountdata);
        navigate('/dashboard');
      }

  return (
    <div>

    <form onSubmit={submitHandler}>
    {/* email */}
    <label>
    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                    />
    </label>

  {/* password */}
   <label>
          <p>Password<sup>*</sup></p>
          <input
             required
             type={showPassword ? ("text") : ("password")}
             onChange={changeHandler}
             name="password"
             value={formData.password}
             placeholder='Enter your password'
          />
          <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
          </span>

          <Link to="#">
          <p>
          Forgot Password
          </p>
          </Link>
   </label>
    
 
       <button>
       Log In
       </button>
      
    </form>
    </div>
  )
}

export default Loginform