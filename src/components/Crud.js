import axios from 'axios';
import React from 'react'
import Edit from './Edit';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';





function Crud() {
     const [students,setStudents] = useState([]);

     useEffect(() => {
        axios.get('http://localhost:8000/getstudents').then(res=>{
            setStudents(res.data)
           
        })
        .catch(err=>{console.log("something went wrong"+err)})
      },[]);


      function update(id) {
          <Edit id = {id} />
          window.location.assign("/crud/edit")
      }
      function remove(id) {
        axios.delete('http://localhost:8000/delstudent/' +id).then(res=>{
          window.location.assign("/crud")
      })
      .catch(err=>{console.log("something went wrong"+ err)})
    }
   
   
  return (
    <div>
    <br />
         <Link as={Link} className="btn btn-primary mb-5 px-5 ml-3" to="student">Register</Link>
       <br />
       <h2>Student List</h2>
       <table className="table">
         <thead>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Phone</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           {/* For Each loop */}
       {students.map(student => (
            <tr key={student._id}>
              <td>{student._id}</td> 
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.phone}</td>
             
              <td><button className="btn btn-success" onClick={()=>update(student._id)}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>remove(student._id)}>Delete</button></td>
     
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crud