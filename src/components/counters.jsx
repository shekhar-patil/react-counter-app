import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
  state = { 

    counters : [
      { id: 1 , value: 0},
      { id: 2 , value: 2},
      { id: 3 , value: 0},
      { id: 4 , value: 0}
    ]
  };

  handleReset = () =>{
    const counters = this.state.counters.map( c => {
      c.value = 0; 
      return c;
    });
    this.setState({counters});
  };

  handleDelete= (counterID) =>{
    const counters = this.state.counters.filter(c => c.id !== counterID );
    this.setState({ counters : counters })
  };

  handleIncrement = (counter) => {
    const counters = [ ...this.state.counters ];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters })
  }

  render() { 
    return ( 
    <div>
      <button className="btn btn-secondary btn-sm m-2" onClick={ this.handleReset }>Reset</button>
      {this.state.counters.map( counter => 
        <Counter 
          onIncrement={ this.handleIncrement} 
          onDelete={ this.handleDelete } 
          key={counter.id} 
          counter = { counter }    
        />
      )}

    </div>
     );
  }
}
 
export default Counters;