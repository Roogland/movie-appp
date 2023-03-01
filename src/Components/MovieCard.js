import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <img src={movie.imgSrc} alt={movie.title}  />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <a href="movie.posterUrl"></a>
      <p>{`Rating: ${movie.rating}`}</p>
    </div>
  )
}

export default MovieCard;