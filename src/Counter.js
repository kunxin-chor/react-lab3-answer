
import React from "react"

export default class Counter extends React.Component
{
    state = {
        count:0
    }
    
    styles = {
        padding:"10px",
        margin:"10px",
        border:"black solid 1px"
    }
    
    constructor(props) {
        super(props);
        
        // binding
        this.increaseCount = this.increaseCount.bind(this);
    }
    
    render() {
        return (
            <div>
                <div style={this.styles}>
                 {this.state.count}
                </div>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
    
    increaseCount() {
        this.setState({
            count: this.state.count + 1
        })   
    }
    
    // Because it's arrow function, there
    // is no need to bind this in constructor
    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    reset = () => {
        this.setState({
            count: 0
        })
    }
}
