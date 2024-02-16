import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Signupform = ({setisLoggedin}) => {

    const[showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
          firstName:"",
          LastName:"",
          email:"",
          password:"",
          confirmpassword:""
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

   if(formData.password !== formData.confirmpassword){
    toast.error("Passwords dont match");
    return;
   }
//    Account will be created and you will login only if passwords match 
  setisLoggedin(true);
  toast.success("Account created Successfully");
  const accountdata = {
    ...formData
  }
  console.log("Account details lelo");
  console.log(accountdata);
  navigate('/dashboard');
}



  return (
    <div>
    
    <div>
        <button>Student</button>
        <button>Instructor</button>
    </div>

    <form onSubmit={submitHandler}>
    <div>
 {/* FirstName and LastName */}
 <label>
              <p>FirstName<sup>*</sup></p>
              <input                  
                  required
                  type= "text"
                  name='firstName'
                  value={FormData.firstName}
                  placeholder='Enter firstName'
                  onChange={changeHandler}
              />
          </label>

      <label>
      <p>LastName<sup>*</sup></p>
              <input                  
                  required
                  type= "text"
                  name='LastName'
                  value={FormData.LastName}
                  placeholder='Enter Last Name'
                  onChange={changeHandler}
              />
      </label>
    </div>
    
    {/* email */}
    <label>
    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
    </label>()

    {/* create password and confirm password */}
    <div>
   <label>
          <p>Create Password<sup>*</sup></p>
          <input
             required
             type={showPassword ? ("text") : ("password")}
             onChange={changeHandler}
             name='password'
             value={formData.password}
             placeholder='Enter your password'
          />
          <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
          </span>
   </label>

   <label>
          <p>Confirm Password<sup>*</sup></p>
          <input
             required
             type={showPassword ? ("text") : ("password")}
             onChange={changeHandler}
             name='confirmpassword'
             value={formData.confirmpassword}
             placeholder='Confirm your password'
          />
          <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
          </span>
   </label>
    </div>

       <button>
        Create Account
       </button>
    </form>
    </div>
  )
}

export default Signupform