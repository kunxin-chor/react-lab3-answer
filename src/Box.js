
import React from "react"

const styles = {
  box: {
    height:'150px',
    width:'150px',
    border:'black solid 1px',
    margin:'10px'
  }
}

export default class Box extends React.Component
{
     state = {
     colour:'white'
   }
   
   constructor(props) {
     super(props);
     this.toggleBoxRed = this.toggleBoxRed.bind(this);
     this.toggleBoxWhite = this.toggleBoxWhite.bind(this);
   }
  
   render() {
       
     let newStyle =  {
            ...styles.box,
            backgroundColor: this.state.colour
       }
       
     return (
    <div>
      <div
        style={newStyle}
        onMouseOver={() =>{
          this.toggleBoxColor("red");  
        }}
        onMouseOut={() =>{
            this.toggleBoxColor("white");
        }}
       />
    </div>
    );
  }
  
  toggleBoxColor(newColor)
  {
      this.setState({
          colour: newColor
      })
  }
  
  toggleBoxRed()
  {
      this.setState({
          colour:'red'
      })
  }
  
  toggleBoxWhite()
  {
      this.setState({
          colour:'white'
      })
  }
}
