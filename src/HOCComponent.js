import React from 'react';

function reportsHOC(InputComponent, inputData){
return class extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            columns: inputData.columns,
            header: inputData.header
        }
    }

    componentDidMount(){
        fetch(inputData.url)
        .then(res => res.json()).then(result => {
            if(result){
            this.setState({
                data: result
            });
        }
        });
    }

    render(){
        return(
            <InputComponent data={this.state}></InputComponent>
        )
    }
}
}

class DataGrid extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(JSON.stringify(this.props))
        return(
            
            <div>
                <h2>{this.props.data.header}...</h2>
                
                <table>
                    <thead>
                         <tr>
                        {this.props.data.columns.map((c,i)=>(
                            <th key={i}>{c}</th>
                        ))}
                        </tr>
                    </thead>    
                   <tbody>
                    {this.props.data.data.map((r,i)=>(
                        <tr key={r.id}>
                            {this.props.data.columns.map((c,i)=>(
                             <td key={i}>{r[c]}</td>
                            ))}

                        </tr>
                    ))}
                </tbody>
                </table>                
            </div>
        );
    }
}

class Reports extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }
}
const EmployeeReport = reportsHOC(DataGrid, {url:"https://localhost:44314/employees", columns:['id','name','location'], header:"Employee List"})

export class AdminDashBoard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <EmployeeReport></EmployeeReport>
            </>
        );
    }

}

