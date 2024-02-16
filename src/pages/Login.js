import React from 'react'
import Template from '../component/Template'
import LoginImg from '../assets/login.png'

const Login = ({setisLoggedin}) => {
   
  return (
    <div>

        <Template 
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond"
            desc2="Education to future-proof your career."
            image={LoginImg}
            formType="loginform"
            setisLoggedin={setisLoggedin}
        />
    </div>
  )
}

export default Login