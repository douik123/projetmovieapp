import React  from 'react';
import MovieCard from './MovieCard.js'
function MovieContainre({SearchTerm,movies}) {

  return (
    <div className='allbas'>
      {
        SearchTerm==="" ? movies.map(movie=>(
          <div>
      <MovieCard data={movie}/>
      

      </div>
        )):
        movies.filter((val)=>
          val.name.toLowerCase().includes(SearchTerm.toLowerCase())
        )
        .map(movie=>(
          <div>
      <MovieCard data={movie}/>
      </div>
        ))
      }
    </div>
  
    )
}

export default MovieContainre;