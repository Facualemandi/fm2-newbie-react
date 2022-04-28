import React from 'react'
import '../Styles/Content.css'

const Content = (props) => {
  return (
     <section className='section_content'>
         {props.children}
     </section>
  )
}

export default Content