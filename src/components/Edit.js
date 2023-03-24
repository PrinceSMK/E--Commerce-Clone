import React, { useState , useEffect } from 'react'
import axios from 'axios'

function Edit() {
  

    const[data, setData] = useState({
        name:'',
        email:'',
        password:'',
        address:''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/getsinglestudents/` + `63f5dfc1eccff8e34692649a`).then(res=>{
            setData(res.data)
           
        })
        .catch(err=>{console.log("something went wrong"+err)})
      },[]);


      function changeHandle(e) {
        const newdata = {...data}   
        newdata[e.target.id] = e.target.value
        setData(newdata)
       }
     
    

    function updateHandler(e) {
        e.preventDefault()
                  console.log(data)
                  axios.patch(`http://localhost:8000/updatestudent/`+`63f5dfc1eccff8e34692649a` , data).then(res=>{
                  window.location.assign("/crud")
                  }).catch((e)=>{console.log(e)})
            }
  
  
  
  
    return (
    <div>

<h1>Edit</h1>


<form onSubmit={(e)=>{updateHandler(e)}}>
        <div>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' value={data.name} onChange={(e)=>{changeHandle(e)}} />
           <br /> <input type="text" name="email" id="email" placeholder='Enter Your E-mail' value={data.email} onChange={(e)=>{changeHandle(e)}} />
           <br /> <input type="text" name="password" id="password" placeholder='Enter Your Password' value={data.password} onChange={(e)=>{changeHandle(e)}} />
           <br /> <input type="number" name="phone" id="phone" placeholder='Enter Your Phone Number' value={data.phone} onChange={(e)=>{changeHandle(e)}} />
           <br /> <button type="submit">Submit</button>
        </div>
        </form>
      
    </div>
  )
}

export default Edit
