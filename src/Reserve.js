import React from "react"

export default class Survey extends React.Component {
    state = {
        name: '',
        email: '',
        number:0,
        date:'',
        haveConfirmed:false
    }
    
    constructor(props) {
        super(props); // tell the parent constructor about the props
        this.handleChange = this.handleChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }
    
    handleChange(event) {
        let fieldName = event.target.name;
        this.setState({
            [fieldName] : event.target.value
        })
    }
    
    confirm() {
        this.setState({
            haveConfirmed:true
        })
        
        alert(`Name:${this.state.name}
               Email:${this.state.email}
               Pax:${this.state.no}
               Date"${this.state.date}
        
        `)
    }
    

    render() {
        return (
        <div>
            <div>
                <label>Name:</label>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div>
                <label>Number of people:</label>
                <input type='number' name='number' onChange={this.handleChange} value={this.state.number}/>
            </div>
            <div>
                <label>Date:</label>
                <input type='date' name='date' onChange={this.handleChange} value={this.state.date}/>
            </div>
            <button onClick={this.confirm}>Confirm</button>
            {
               this.state.haveConfirmed === true ?
            
                <ul>
                    <li>Name: {this.state.name} </li>
                    <li>Email: {this.state.email} </li>
                    <li>Pax: {this.state.number}</li>
                    <li>Date: {this.state.date}</li>
                </ul> : null 
                
            }
        </div>
        
        )
    }
}