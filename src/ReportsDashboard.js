import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';

class NewAccountReports extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            FromDate: '',

            ToDate: ''

        };

    }



    handleChange = e => {

        let name = e.target.name;

        let value = e.target.value;

        this.setState({

            [name]: value

        });

    }

    render() {

        return (

            <div>

                <h2>Welcome to New Accounts Reports Component...</h2>

                <p>

                    <label>From Date : <input type="text" name="FromDate"

                        onChange={this.handleChange} value={this.state.FromDate}></input></label>

                </p>

                <p>

                    <label>To Date : <input type="text" name="ToDate"

                        onChange={this.handleChange} value={this.state.ToDate}></input></label>

                </p>

                <input type="submit" value="Generate"></input>

            </div>

        )

    }

}



class LoansRepaymentReports extends React.Component {

    constructor(props) {

        super(props);

    }



    render() {

        return (

            <div>

                <h2>Welcome to Loans Repayment Reports Component...</h2>

            </div>

        );

    }

}



export class ReportsDashboard extends React.Component {

    constructor(props) {

        super(props);

    }


    callBackFunction = (id, phase,actualDuration, baseDuration,  startTime, commitTime,interactions)=>{
        console.log('Id is : '+id+', Phase is : '+phase);

        console.log('Actual Duration is : '+actualDuration+' and Base Duration is :'+
  
        baseDuration);
  
    }


    render() {

        return (

            <React.Fragment>

                <h2>Welcome to Reports Dashboard...</h2>
                <Profiler id="newReports" onRender={this.callBackFunction}>
                    <NewAccountReports></NewAccountReports>
                </Profiler>

                <Profiler  id="loanReports" onRender={this.callBackFunction}>
                <LoansRepaymentReports></LoansRepaymentReports>

                </Profiler>
                
            </React.Fragment>

        );

    }

}