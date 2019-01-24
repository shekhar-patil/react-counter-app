import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count : 0 , 
    tags : ["tag1" , "tag2" , "tag3" ]
  };

  render() { 
    
    return ( 
      <div>
        <span className = {this.getBadgeClasses()} >{this.getValue()}</span>
        <button onClick = { () => this.handleIncrement("product")}>increment</button>
        <ul> {this.state.tags.map( tag => <li key = {tag}>{tag}</li> )}</ul>
      </div> 
    ); 
  }

  handleIncrement = (product) => {
    console.log(product)
    this.setState({ count: this.state.count + 1})
  }

  
  getValue(){
    return (this.state.count) === 0 ? "Zero" : this.state.count ; 
  }

  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.state.count) === 0 ? "badge-warning" : "badge-primary" ;
    return classes ;
  }
}
 
export default Counter;