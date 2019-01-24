import React, { Component } from 'react';
class Counter extends Component {

  render() { 
    
    return ( 
      <div>

        <span className = {this.getBadgeClasses()} >{this.getValue()}</span>
        <button className="btn btn-secondary btn-sm m-2" onClick = { () => this.props.onIncrement(this.props.counter)}>increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)} >Delete</button>
        
      </div> 
    ); 
  }

  


  getValue(){
    const { value } = this.props.counter;
    return (value) === 0 ? "Zero" : value ; 
  }

  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.props.counter.value) === 0 ? "badge-warning" : "badge-primary" ;
    return classes ;
  }
}
 
export default Counter;