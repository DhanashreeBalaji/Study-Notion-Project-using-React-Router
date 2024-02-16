import React from 'react'
import Signupform from './Signupform'
import Loginform from './Loginform'
import frameimage from '../assets/frame.png'

const Template = ({title,desc1,desc2,formType,image,setisLoggedin}) => {

  return (
    <div>
    <div>
    <h1>{title}</h1>
    <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
    </p>
         {
            formType === "signupform" ?
            (<Signupform setisLoggedin={setisLoggedin}/>) :
            (<Loginform setisLoggedin={setisLoggedin}/>)
         }

   <div>
      <div></div>
      <p>OR</p>
      <div></div>
   </div>

  <button>
    <p>Sign Up with Google</p>
  </button>

    </div>

<div>
    <img
        src={image}
        alt="Students"
                width={558}
                height={490}
                loading="lazy"

    />
    <img
        src= {frameimage}
        alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
    />
</div>
    </div>
  )
}

export default Template