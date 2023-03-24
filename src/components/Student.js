// import React from 'react'
// import { useState } from 'react';

// import axios from 'axios';




// function Student(props) {


//         const [data, setData] = useState({
//             name: " ",
//             email: " ",
//             phone: " " ,
//         });
        
        
//         function handleSubmit(e) {
//           e.preventdefault()
//           console.log(data)
//           axios.post("http://localhost:8000/poststudent", data).then((req, res)=>{
//           window.location.assign("/crud")
//           }).catch((e)=>{console.log(e)})
        
//         }
        
        
//         function changeHandler(e) {
//             const newdata = {...data}
//             newdata[e.target.id] = e.target.value
//             setData(newdata)
//         }
        
//   return (
//     <div>
       



// return (
// <div>

//  <form onSubmit={(e)=>{handleSubmit(e)}}>
//     <div>
//     Name <input className='mx-3 mb-3' type="text" id="name" name="name" value={data.name}  onChange={(e)=>{changeHandler(e)}} />
//     <br />
//     Email <input type="text" className='mx-3 mb-3' id="email" name="email"  value={data.email}  onChange={(e)=>{changeHandler(e)}}/>
//     <br />
//     Phone <input className='mx-3 mb-3' type="Number" id="phone" name="phone"  value={data.phone}  onChange={(e)=>{changeHandler(e)}} />
//     <br />
//     <button className='mx-5 mb-3' type="submit">Submit</button>
//     </div>
//  </form>






//   </div>
      
//     </div>
//   )
// }

// export default Student
import React from 'react'
import { useState } from 'react'
import Headerr from "./Header";

import { Link } from 'react-router-dom'
import axios from 'axios'


function Student(props) {
    

    const [data, setData] = useState({
        name:"",
        phone:"",
        password:"",
        email :"",

    })




    const [file, setFile] = useState();
    
      const handleFileChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };


      function handleUploadClick() {
                  axios.post("http://localhost:8000/upload", {body: file}, {headers: {
                    'content-type': file.type,
                    'content-length': `${file.size}`, // 👈 Headers need to be a string
                  }}).then((req, res)=>{
                    res.json("File is uploaded")
                    console.log(file)
                  window.location.assign("/crud")
                  }).catch((e)=>{console.log(e)})
            }
    
  //     const handleUploadClick = () => {
  //       if (!file) {
  //         return;
  //       }
  //       fetch('http://localhost:8000/upload', {
  //     method: 'POST',
  //     body: file,
  //     // 👇 Set headers manually for single file upload
  //     headers: {
  //       'content-type': file.type,
  //       'content-length': `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };
  




       function submitHandler(e) {
        e.preventDefault()
                  console.log(data)
                  axios.post("http://localhost:8000/poststudent", data).then((req, res)=>{
                  window.location.assign("/crud")
                  }).catch((e)=>{console.log(e)})
            }
       

       function changeHandle(e) {
        const newdata = {...data}   
        newdata[e.target.id] = e.target.value
        setData(newdata)
       }
     


  return (
    <div> 
        <h1>Hello World</h1>


        <form onSubmit={(e)=>{submitHandler(e)}}>
        <Headerr />|

        <div className='ml-5'> 
           <h3>Name</h3> <input type="text"  name="name" id="name" value={data.name} onChange={(e)=>{changeHandle(e)}} />
           <h3>E-Mail</h3> <input type="text" name="email"  id="email" value={data.email} onChange={(e)=>{changeHandle(e)}} />
           <h3>Password</h3> <input type="text" name="password" className='d-flex' id="password" value={data.password} onChange={(e)=>{changeHandle(e)}} />
           <h3>Phone</h3><input type="number" name="phone" className='d-flex' id="phone" value={data.phone} onChange={(e)=>{changeHandle(e)}} />
            <button type="submit">Submit</button>

            <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
            
            <Link as={Link} className="btn btn-primary mt-5 px-5 ml-3" to="login">Login</Link>
        </div>
        </form>
        

      
    </div>
  )
}

export default Student