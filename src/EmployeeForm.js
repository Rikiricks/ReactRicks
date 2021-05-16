import React from 'react';

class EmployeeForm extends React.Component{

    constructor(props){
        super(props);
        this.name = React.createRef();
        this.location = React.createRef();

        // this.state = {
        //     msj: ''
        // }
        this.state = {
            employee:{
                Name:'',
                Location:''
            } 
        }
    }

    componentDidMount(){
        this.name.current.focus();
    }

    changeHandler = e => {
       const {name, value} = e.target;

        this.setState({
           employee:{...this.state.employee, [name]:value}     
        });

        console.log(this.state);
    }

    saveEmp = () =>{
        
        const emp = {
            Name: this.name.current.value,
            Location: this.location.current.value
        }
        fetch("https://localhost:44314/employees",{
            method:'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(emp)
        }).then(res => res.json()).then(result => {
            if(result){
            this.setState({
                msj: 'Great'
            });
        }
        });
    }

    render(){
        const {employee} = this.state;
        return(
            <div>
                <h2>Add Employee</h2>
                <p>
                    {/* Name: <input type="text" ref={this.name}></input> */}
                    Name: <input type="text" name="Name" ref={this.name} value={employee.Name} onChange={this.changeHandler}></input>
                </p>
                <p>
                    {/* Location: <input type="text" ref={this.location}></input> */}
                    Location: <input type="text" name="Location" value={employee.Location} onChange={this.changeHandler}></input>
                </p>
                <p>
                    <button onClick={this.saveEmp}>Save</button>
                </p>
            </div>
        )
    }
}

export default EmployeeForm;