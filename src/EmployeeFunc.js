import React, {Component, useState, useEffect} from 'react'


export function EmployeeFunc(){
    const [employee, setEmployeeData]=useState({Id:'',Name:'',Location:'',Salary:''});  

    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setEmployeeData({...employee, [name]:value});
    }

  
     return (<div>
         
         <p>
           Emp Name: <input type="text" name="Name" value={employee.Name} onChange={handleChange}/>
         </p>
         <p>
           Emp Location: <input type="text" name="Location" value={employee.Location} onChange={handleChange}/>
         </p>
         <p>
           Emp Location: <input type="text" name="Salary" value={employee.Salary} onChange={handleChange}/>
         </p>
         <p>
             {JSON.stringify(employee)}
         </p>
         <SalaryComponent onSalaryChange={handleChange} salary={employee.Salary}></SalaryComponent>
       </div>
     )
}

const SalaryComponent=({onSalaryChange,salary})=>{

    function changeSalary(e){
  
      onSalaryChange(e);
  
    }
  
    return(
  
      <div style={{border:'3px solid red', width:'500px'}}>
  
        <h2>Welcome to Salary Component</h2>
  
      <p>
  
          <label>Employee Salary : 
  
                  <input type="text" name="Salary" value={salary}
  
                  onChange={changeSalary}></input>
  
          </label>
  
        </p>
  
      </div>
    );
  
  }

  function GetListHook(url){
    const[data, setData] = useState([]);

    useEffect(()=>{
      setData([
        {id:"1",name:"Riki",location:"Than"},
        {id:"1",name:"Dipak",location:"Rajkot"}
      ])
      // fetch(url)
      // .then(res => res.json())
      // .then(
      //   (result) => {
      //     setData(result);
      //   }
      // );
     
     },[]);

     return data;
  }

  export function EmployeeComponent(){
    // const [employees,setEmployees] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [employeeCount, setEmployeeCount]=useState(0);

    const employees = GetListHook(`https://localhost:44314/employees/${searchText}`);

    // useEffect(()=>{
    //  var handle = setInterval(() => {
    //     loadEmployee();
    //   }, 5000);

    //   return ()=>{
    //     clearInterval(handle);
    //   }
    
    // },[searchText,employeeCount]);

    // function loadEmployee(){
    //   fetch(`https://localhost:44314/employees/${searchText}`)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       setEmployees(result);
    //     }
    //   );
    // }
    function onSearchTextChange(e){
      setSearchText(e.target.value);
    }

    function addNewEmployee(){
      setEmployeeCount(employeeCount+1);
    }

    return(
      <div>
        <h2>Employees Data...</h2>
        <p>
        <label>Search By Name : <input type="text" value={searchText}
                                  onChange={onSearchTextChange}></input></label>
      </p>  
      <p>
        <button onClick={addNewEmployee}>Add Employee</button>
      </p>   
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp=>(
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }