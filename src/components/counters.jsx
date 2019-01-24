import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

  render() { 
    return ( 
    <div>
      <button className="btn btn-secondary btn-sm m-2" onClick={ this.props.onReset }>Reset</button>
      {this.props.counters.map( counter => 
        <Counter 
          onIncrement={ this.props.onIncrement} 
          onDelete={ this.props.onDelete } 
          key={counter.id}   
          counter = {counter}
        />
      )}

    </div>
     );
  }
}
 
export default Counters;