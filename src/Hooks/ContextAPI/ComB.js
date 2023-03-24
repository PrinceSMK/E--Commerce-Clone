import React from 'react'
import { useContext } from 'react'
import { ClassName, FirstName } from './Context'



function ComB() {
    
    const fName = useContext(FirstName)
    const cname = useContext(ClassName)
   
    return (
    <div>

        
        <h1>My Name is {fName}</h1>
        <h2>My Class name is {cname}</h2>
        
      
    </div>
  )
}

export default ComB
