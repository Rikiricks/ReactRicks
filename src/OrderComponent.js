import React from 'react';
import {CustomErrorBoundary} from './CustomErrorBoundary';

export class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            address: '',
            count: 0
        };

        this.countRef = React.createRef();
    }

    OrderChange = (value) => {
        this.setState({
            quantity: value
        });
    }

    AddressChange = (val) => {
        this.setState({
            address: val
        });
    }

    increment = val =>{
        // this.setState({
        //     count: this.state.count + 1
        // });
        this.countRef.current.value++;
    }

    render() {
        alert("Hola")
        return (
            <>
                <h1>Order Info</h1>
                
                <div>
                <p>
                    {/* <label>Quantity: <input type="text" value={this.state.count}></input><button onClick={this.increment}>+</button></label> */}
                    <label>Count: <input type="text" ref={this.countRef}></input><button onClick={this.increment}>+</button></label>
                </p>
                </div>
                <ProductInformation quantity={this.state.quantity} address={this.state.address} onQuantityChange={this.OrderChange}></ProductInformation>
                <Address address={this.state.address} onAddressChange={this.AddressChange}></Address>
                <Summary innerRef={this.countRef} quantity={this.state.quantity} address={this.state.address} onQuantityChange={this.OrderChange}></Summary>
                <ForwardRefComponent ref={this.countRef}></ForwardRefComponent>
            
               
            </>
        )
    }
}

export class ProductInformation extends React.Component {
    constructor(props) {
        super(props);

        this.quantityRef = React.createRef();
    }

    handleChange = e => {
        this.props.onQuantityChange(e.target.value);
    }

    render() {
        return (
            <div style={{ border: '3px solid red' }}>
                <h2>Product Info</h2>
                <p>
                    <label>Name</label>
                    <select>
                        <option value="Mobile">Mobile</option>
                        <option value="Phone">Phone</option>
                        <option value="Telephone">Telephone</option>
                    </select>
                </p>
                <p>
                    <label>Quantity: <input type="text" ref={this.quantityRef}value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
              

            </div>
        );

    }
}





 class Address extends React.Component {
    constructor(props) {
        super(props);
    }


    handleChange = e => {
        this.props.onAddressChange(e.target.value);
    }

    render() {
        return (
        <div style={{ border: '3px solid red' }}>
            <h2>Address Info</h2>
            <p>
                <label>Address</label>
                <input type="text" value={this.props.address} onChange={this.handleChange}></input>
            </p>

            <CustomErrorBoundary>
                <PreferredAddresses/>
            </CustomErrorBoundary>
        
           

        </div>
        )
    }

}



class PreferredAddresses extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        
        return (
            <React.Fragment>

        <div style={{ border: '3px solid red' }}>
            <h2>Preferred Address Info</h2>
            <p>
                <label>Address</label>
                <b> </b>
            </p>
           
        </div>

            </React.Fragment>
        
       
        );
    }

}

const ForwardRefComponent = React.forwardRef((props,ref)=>{
    function focusCount(){
        ref.current.focus();
    }
return(
    <button onClick={focusCount}>Focus to Count</button>
)
});

 class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        this.props.onQuantityChange(e.target.value);
    }

    onFocus = ()=> {
        this.props.innerRef.current.focus();
    }

    render() {
        return (
        <div style={{ border: '3px solid red' }}>
            <h2>Summary Info</h2>
            <p onClick={this.onFocus}>
                <label> Product Name: <b>Mobile</b></label>
            </p>

            <p>
                <label>Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
            </p>
            <p>
                Address: <b>{this.props.address}</b>
            </p>

        </div>
        );

    }
}


