import React from "react"

export default class BMI extends React.Component {
    // state variables
    state = {
        weight: 0.0,
        height: 0.0,
        bmi:0.0
    }
    
    constructor(props) {
        super(props);
        this.updateWeight = this.updateWeight.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }
    
    updateWeight(event) {
        let newWeight = event.target.value;
        this.setState({
            weight:newWeight
        })
    }
    
    updateHeight(event) {
        let newHeight = event.target.value;
        this.setState({
            height:newHeight
        })
    }
    
    calculateBMI(event) {
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);
        let bmi = weight / (height * height);
        this.setState({
            bmi:bmi
        })
    }
    
    render() {
        return (
            <div>
                <input type='number' 
                 value={this.state.weight} 
                 placeholder='Weight'
                 onChange={this.updateWeight}
                 />
                <br/>
                
                <input type='number' 
                value={this.state.height} 
                placeholder='Height'
                onChange={this.updateHeight}
                />
                
                <button onClick={this.calculateBMI}> Calculate</button>
                
                <p>
                    BMI = {this.state.bmi}
                </p>
            </div>
        )
    }
}