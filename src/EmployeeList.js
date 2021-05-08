import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            showModel: false,
            selectedEmp: {}
        };

       
    }

    getEmp = () => {

        fetch("https://localhost:44314/employees").then(a => a.json()).then(result => {
            console.log(result);
            this.setState({
                employees: result,

            });
        })

    }
    componentDidMount() {
        this.getEmp();
    };

    editEmp = (e) => {
        let id = e.target.id;

        let selected = this.state.employees.find(a => a.id == id);

        this.setState({
            showModel: !this.state.showMode || selected != undefined,
            selectedEmp: selected
        })


    }

    render() {
        return (
            <div>
                <div>
                    <ChangeDetection></ChangeDetection>
                </div>
                <h2>Employee List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(emp =>
                        (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.location}</td>
                                <td>
                                    <a href={'/employee/'+emp.id}>Edit</a>
                                    {/* <button id={emp.id} onClick={this.editEmp}>Edit</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Modal open={this.state.showModel} close={this.editEmp}>
                    <EmployeeModel employee={this.state.selectedEmp}></EmployeeModel>
                </Modal>
            </div>

        )
    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.open ? ReactDOM.createPortal(<div className="modal">{this.props.children}</div>, document.body) : null
        );
    }
}

class EmployeeModel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Employee Data</h2>
                <p>
                    {/* Name: <input type="text" ref={this.name}></input> */}
                    Name: <input type="text" name="Name" value={this.props.employee.name}></input>
                </p>
                <p>
                    {/* Location: <input type="text" ref={this.location}></input> */}
                    Location: <input type="text" name="Location" value={this.props.employee.location}></input>
                </p>
            </div>
        );
    }
}

class ChangeDetection extends React.PureComponent {
    handle = null;
    constructor(props) {
  
      super(props);
  
      this.state = {
  
        employeeCount:0
  
      }; 
  
  
  
     this.handle = setInterval(() => {
  
        fetch("https://localhost:44314/employees")
  
        .then(res => res.json())
  
        .then(
  
          (result) => {          
  
            this.setState({
  
              employeeCount: result.length
  
            });
  
          }
  
        );
  
      }, 5000);    
  
    }

    componentWillUnmount(){
        clearInterval(this.handle);
    }
  
    render() {
  alert("Reloaded");
      return (
  
        <div>
  
          <h2>Welcome to Pure Component Demonstration...</h2>
  
  <p>
  
            <label>Number of Employees are : <b>{this.state.employeeCount}</b></label>
  
          </p>
          </div>
  
        );
  
      }
  
  }

  export default EmployeeList;