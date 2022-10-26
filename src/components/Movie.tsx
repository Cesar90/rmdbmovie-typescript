import React from 'react'
import { RouteComponentProps } from 'react-router'
//Components
import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

import { useMovieFetch } from './hooks/useMovieFetch'

interface MatchParams{
  moviedId: string
}

const Movie = ({ match }: RouteComponentProps<MatchParams>) => {
  const { moviedId } = match.params
  const [movie, loading, error] = useMovieFetch(moviedId)

  if(error) return <div>Something went wrong...</div>
  if(loading) return <Spinner />

  return (
    <>  
      {movie && <Navigation movie={movie.original_title} />}
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
          {movie.actors && movie.actors.map(actor => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
      </Grid>
    </>
  ) 

}

export default Movie