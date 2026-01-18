import React from 'react'
import useMovies from '../hooks/useMovies'
import MovieGrid from '../components/MovieGrid';

const Movies = () => {
    const {movies,loading,error,loadMore} = useMovies();
    if(error) return <p>{error.message}</p>
  return (
    <div>
        <h2>Popular Movies</h2>
        {loading && <p>Loading</p>}
        <MovieGrid movies={movies}/>
        <button onClick={loadMore}>Load more</button>
    </div>
  )
}

export default Movies