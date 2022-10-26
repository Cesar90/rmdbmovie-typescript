import React from 'react'
import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE } from 'src/config'
import MovieThumb from './MovieThumb'
import { StyledMovieInfo } from '../styles/StyledMovieInfo'
import { IState } from '../hooks/useMovieFetch'

// interface Movie extends IState{
//   adult: boolean
//   backdrop_path: string
//   original_title: string
//   overview: string
//   id: string
//   poster_path: string
// }

interface IProps{
  movie: IState
}

const MovieInfo = ({movie}: IProps) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb 
          image={
            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
          }
        />
      </div>
      <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          {movie.directors && (<div className="director">
            <h3>DIRECTOR{movie.directors?.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(element => (
              <p key={element.credit_id}>
                {element.name}
              </p>
            ))}
          </div>)}
      </div>

      </div>
    </div>
  </StyledMovieInfo>
)

export default MovieInfo