import React from 'react'
import Template from '../component/Template'
import SignupImg from '../assets/signup.png'

const SignUp = ({setisLoggedin}) => {
  return (
    <div>
 <Template 
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond"
            desc2="Education to future-proof your career."
            image={SignupImg}
            formType="signupform"
            setisLoggedin={setisLoggedin}
        />

    </div>
  )
}

export default SignUp