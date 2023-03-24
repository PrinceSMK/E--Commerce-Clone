import React from 'react'
import { createContext } from 'react'
import ComB from './ComB'



const FirstName = createContext()
const ClassName = createContext()

function Context() {
    
    
    
  
  
    return (
    <div>


        <FirstName.Provider value={"KING"}>
            <ClassName.Provider value={"LLB"}>
            <ComB />
            </ClassName.Provider>
        </FirstName.Provider>




      
    </div>
  )
}

export default Context
export {FirstName , ClassName}
