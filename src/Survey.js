import React from "react"

export default class Survey extends React.Component {
    
    state = {
        name:"",
        gender:"male",
        country:"malaysia",
        send:true,
        how_you_heard:{
            'word-of-mouth':true,
            'social-media':false,
            'others':false
        } // array because there can be more than one checkbox selected
    }
    
    constructor(props) {
        super(props);
        this.updateGender = this.updateGender.bind(this);
        this.updateHeardAbout = this.updateHeardAbout.bind(this);
        this.updateCountry = this.updateCountry.bind(this);
        this.updateSend = this.updateSend.bind(this);
    }
    
    updateGender(event) {
        this.setState({
            gender: event.target.value
        })
    }
    
    updateHeardAbout(event) {
        
        let cloned = {...this.state.how_you_heard}
        
        cloned[event.target.value] = event.target.checked;
        
        this.setState({
            how_you_heard:cloned
        })
    }
    
    updateCountry(event) {
        this.setState({
            country:event.target.value
        })
    }
    
    updateSend(event) {
        this.setState({
            send: event.target.checked
        })
    }
    
    render() {
        return (
        <div>        
            <div>
                <label>Name:</label>
                <input type='text'/><br/>
            </div>
            <div>
                <label>Gender:</label>
                <input type='radio' 
                    name='gender' 
                    value='male' 
                    onChange={this.updateGender}
                    checked={this.state.gender === 'male'}
                    /> Male
                <input type='radio' 
                        name='gender'
                        value='female' 
                        onChange={this.updateGender}
                        checked={this.state.gender === 'female'}
                />Female
            </div>
            <div>
                <label>How you heard about us</label>
                <input type='checkbox' value='word-of-mouth' onChange={this.updateHeardAbout} checked={this.state.how_you_heard['word-of-mouth']}/>Word of mouth
                <input type='checkbox' value='social-media' onChange={this.updateHeardAbout} checked={this.state.how_you_heard['social-media']}/>Social Media
                <input type='checkbox' value='others' onChange={this.updateHeardAbout} checked={this.state.how_you_heard['others']}/>Others
            </div>
            <div>
                <label>Which country are you from?</label>
                <select onChange={this.updateCountry} value={this.state.country}>
                    <option value='singapore'>Singapore</option>
                    <option value='malaysia'>Malaysia</option>
                </select>
            </div>
            <div>
                Can we spend you our spam? <input type='checkbox' onChange={this.updateSend} checked={this.state.send} />
            </div>
        </div>    
        )
    }
}