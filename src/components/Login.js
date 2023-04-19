// import  React ,{ useState } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";


// function Login() {

    
  
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     let user = JSON.parse(sessionStorage.getItem('data'));
//     const token = user.data.id;

//     this.state={
//       items:[email,  password,  ],
//       isLoaded: false,
//       redirectToReferrer:false,
//       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjY2Y2NzFmYzVjMWUzODlkOWUwNjEiLCJpYXQiOjE2Nzg1NjExMjd9.0EhsnUJ1EQUrlyT6pmBCubX4NGsT2diRyRwAA7UiRcs'
//   }
    
       
//     const api = `http://localhost:8000/welcome`
//     axios.get(api, { headers: {auth : `Bearer ${token}`} })
//             .then(res => {
//                 console.log(res.data);
//             this.setState({
//                 items: res.data,  /*set response data in items array*/
//                 isLoaded : true,
//                 redirectToReferrer: false
//             })
       

//     function registerHandler(e) {
//         e.preventDefault()
//                   console.log(email)
//                   axios.post(`http://localhost:8000/login`, token).then(res=>{
//                   window.location.assign("/crud")
//                   }).catch((e)=>{console.log(e)})
//             }
  
//     return (
//     <div>


      


// <form onSubmit={(e)=>{registerHandler(e)}}>
//         <div>
//            <br /> <input type="text" name="email" id="email" placeholder='Enter Your E-mail' value={email.email}  />
//            <br /> <input type="text" name="password" id="password" placeholder='Enter Your Password' value={password.password}  />
//            <br /> <button type="submit">Submit</button>
//         </div>

//         <NavLink  className="btn btn-primary mt-5 px-5 ml-3" to="/login/register">Register</NavLink>
//         </form>


        
//     </div>
//   )
// }
//             )}
// export default Login





import React from 'react'

function Login() {
  return (
    <div>

        <h1>Heelo</h1>
      
    </div>
  )
}

export default Login


