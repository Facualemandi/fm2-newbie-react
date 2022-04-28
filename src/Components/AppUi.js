import React from 'react'
import LearnCode from './LearnCode'
import Free from './Free'
import Content from './Content'
import InputsForm from './InputsForm'


const AppUi = () => {
  return (
       <>
       <main className='main'>
         <section>
           <LearnCode/>
         </section>
         <section>
             <Free/>
               <Content>
                  <InputsForm/>
               </Content>
         </section>
       </main>
               
       </>
  )
}

export default AppUi