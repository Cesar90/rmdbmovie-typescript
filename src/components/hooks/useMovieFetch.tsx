import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "src/config";

interface ICast{
  adult: boolean
  cast_id: number
  character: string
  credit_id: number
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

interface Movie{
  adult?: boolean
  backdrop_path?: string
  original_title?: string
  overview?: string
  id?: string
  poster_path?: string
  title?: string
  vote_average?: string
  runtime?: number
  budget?: number
  revenue?: number
}

export interface IMovie{
  [key: string]: string | number
}

export interface IState extends Movie{
  properties?: IMovie
  actors?: ICast[],
  directors?: ICrew[]
}

interface ICrew{
  id: number
  job: string
  credit_id: string
  name: string
}

interface IFetchCredits{
  crew: ICrew[]
  cast: ICast[]
}

export const useMovieFetch = (movieId: string): [IState, boolean, boolean] => {
  const [state, setState] = useState<IState>({ directors: [] })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    setError(false)
    setLoading(true)
    try {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        const result = await (await fetch(endpoint)).json() as Movie
        const creditsEnpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        const credistsResult = await (await fetch(creditsEnpoint)).json() as IFetchCredits
        const directors = credistsResult.crew.filter(
          member => member.job === 'Director'
        )
        setState({
          ...result,
          actors: credistsResult.cast,
          directors
        })

    } catch (error) {
      setError(true)
    }
    setLoading(false)

  }, [movieId])

  useEffect(() => {
    if(localStorage[movieId]){
      setState(JSON.parse(localStorage[movieId]))
      setLoading(false)
    } else {
      fetchData()
    }
    
  }, [fetchData, movieId])

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return [state, loading, error]
}