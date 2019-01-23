import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count : 1

  };
  render() { 
    
    return ( 
      <div>
        <span>{this.getValue()}</span>
        <button>increment</button>
      </div> 
    ); 
  }

  getValue(){
    return (this.state.count) === 0 ? "Zero" : this.state.count ; 
  }
}
 
export default Counter;