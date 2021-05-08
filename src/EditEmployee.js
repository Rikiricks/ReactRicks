import React from 'react';
import { useState, useEffect } from "react";

function EditEmployee(props) {
    
  const [employee,setEmployee]=useState({});

    useEffect(()=> {
        fetch("https://localhost:44314/employee/"+props.match.params.id)
        .then(res => res.json())
        .then(
          (result) => {
            setEmployee(result);
          }
        );
    },[]);
  function changeEmployeeData(e){

  }
      return (
       <div>
           <h2>Employee Details...</h2>
           <p>
               <label>Employee ID : <input type="text" name="Id" 
               value={employee.id} onChange={changeEmployeeData}></input></label>
           </p>
           <p>
               <label>Employee Name : <input type="text" name="Name" 
               value={employee.name} onChange={changeEmployeeData}></input></label>
           </p>
           <p>
               <label>Employee Location : <input type="text" name="Location" 
               value={employee.location} onChange={changeEmployeeData}></input></label>
           </p>
           
           <button>Update</button>
       </div>
        );
}

export default EditEmployee