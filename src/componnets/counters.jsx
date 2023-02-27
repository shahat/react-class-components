import React, { Component } from 'react'
import Counter from './counter'

 class Counters extends Component {
    state = { 
        counters: [
                    {id: 1, value: 5},
                    {id: 2, value: 5},
                    {id: 3, value: 5},
                    {id: 4, value: 5}               
        ]
    }
    handelDelete = counterId => {
        console.log(" counter clicked id : ", counterId );
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState({counters}); 
        console.log("this is the state after delete : ",counters);
    
      };
  render() {
    return (
<React.Fragment>
   {
    this.state.counters.map( (counter)=>(
        <Counter key={counter.id} value={counter.value} id={counter.id} selected onDelete={this.handelDelete} />
    ))
   }
</React.Fragment>

 )
  }
}
export default Counters