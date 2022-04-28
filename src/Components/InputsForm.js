import  Button  from './Button'
import React from 'react'
import '../Styles/InputsForm.css'

const InputsForm = () => {
  return (
     <>
       <form className='form_container'>
            <input type='text' placeholder='Enter Your Name'/>
            <input type='text' placeholder='Enter Your Surname'/>
            <input type='email' placeholder='Enter Your Email Adress...'/>
            <input type='password' placeholder='Enter Your Password'/>
            <Button/>
       </form>
     </>
  )
}

export default InputsForm