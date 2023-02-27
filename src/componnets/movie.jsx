import React, { Component } from 'react'
import getComponenet from "../services/fakeMovieService";
import Counters from './counters';

export class Movie extends Component {
  state = {
    movies: getComponenet()
  }
  handelDeletemovies =(movie)=>{
    const movies = this.state.movies.filter(m=>m._id !== movie._id);
  this.setState({movies}); // in modern js if the key and value are the same you can remove that repeatation 
  }
  render() {
    if(this.state.movies.length == 0 ) return (<div className="container"> <p> there is ${this.state.movies.length} moves </p> </div>) ;

    return (
      <> 
          <div className="container"> <p> there is {this.state.movies.length} moves </p>
        <table className="table">
          <thead>
            <tr>
              <th className="col">title</th>
              <th className="col">Name</th>
              <th className="col">numberInStock</th>
              <th className="col">dailyRentalRate</th>
              <th className="col"></th>

            </tr>
          </thead>
          <tbody>
        {  this.state.movies.map(movie =>(
    <tr key={movie._id}>
    <td className="col">{movie.title}</td>
    <td className="col">{movie.genre.name}</td>
    <td className="col">{movie.numberInStock}</td>
    <td className="col">{movie.dailyRentalRate}</td>
    <td className="col"><button onClick={()=> this.handelDeletemovies(movie)} className='btn btn-danger'>Delete</button></td>
  </tr>
  ))}
          </tbody>
        </table>
      </div>
      
   <Counters />
      
      </>

    )
  }
}


export default Movie;