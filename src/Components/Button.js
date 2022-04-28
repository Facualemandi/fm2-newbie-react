import React from 'react'
import '../Styles/Button.css'
const Button = ({verifica}) => {
  return (
     <>
        <section>
           <button
             type='submit'
             className='buttom_claim'
             onClick={verifica}

             > 
             Claim Your Free Trial</button>
        </section>
     </>
  )
}

export default Button