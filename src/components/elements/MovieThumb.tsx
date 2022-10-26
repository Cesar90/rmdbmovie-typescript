import React from 'react'
import { 
  NavLink
} from 'react-router-dom'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

interface IProps{
  image: string
  movieId?: string
  clickable?: boolean
  movieName?: string
}

const MovieThumb = ({ image, movieId,  clickable} :IProps) => (
  <StyledMovieThumb>
      {clickable ? (
        <NavLink to={`/${movieId}`}>
          <img className="clickable" src={image} alt="moviethumb"  />
        </NavLink>
      ) : <img src={image} alt="moviethumb" />}
  </StyledMovieThumb>
)

export default MovieThumb