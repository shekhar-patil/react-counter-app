import React, { Component } from 'react';
class Counter extends Component {
  state = {
    value : this.props.value, 
  };

  render() { 
    
    return ( 
      <div>
        <span className = {this.getBadgeClasses()} >{this.getValue()}</span>
        <button onClick = { () => this.handleIncrement("product")}>increment</button>
        
      </div> 
    ); 
  }

  handleIncrement = (product) => {
    console.log(product)
    this.setState({ value: this.state.value + 1})
  }


  getValue(){
    return (this.state.value) === 0 ? "Zero" : this.state.value ; 
  }

  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.state.value) === 0 ? "badge-warning" : "badge-primary" ;
    return classes ;
  }
}
 
export default Counter;