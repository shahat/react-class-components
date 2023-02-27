import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  }
  getBadgeClasses() {
    let classes = "badge  bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
 

  render() {
    // console.log( "this" , this.props); 
    // using this line i can access the properityes that 
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"    
        >
          Decrement
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm "    
        >
          Delete
        </button>
       
      </div>
    );
  }

}

export default Counter;
