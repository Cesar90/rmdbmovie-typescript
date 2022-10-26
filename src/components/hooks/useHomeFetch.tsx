import { useState, useEffect, useCallback } from "react";
import { POPULAR_BASE_URL } from "src/config";

interface IMovie{
  adult: boolean
  backdrop_path: string
  original_title: string
  overview: string
  id: string
  poster_path: string
}

interface IState {
  movies: IMovie[]
  heroImage?: IMovie
  currentPage?: number
  totalPages?: number
}

interface IFetchMovies{
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}

export const useHomeFetch = (searchTerm: string) : [{state: IState, loading: Boolean, error: Boolean}, (endpoint: string) => Promise<void>] => {
  const [state, setState] = useState<IState>({ movies: [] })
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)

  const fetchMovies = useCallback(async(endpoint:string) => {
    setError(false)
    setLoading(true)

    const isLoadMore = endpoint.search('page')

    try {
      const result = await (await fetch(endpoint)).json() as IFetchMovies
      setState(prev => ({
        ...prev,
        movies: isLoadMore !== -1 ? [...prev.movies, ...result.results] : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }))

    } catch (error) {
      setError(true)
      console.log(error)
    }
    setLoading(false)
  }, []) 

  useEffect(() => {
    if(sessionStorage.homeState){
      setState(JSON.parse(sessionStorage.homeState))
      setLoading(false)
    } else {
      fetchMovies(POPULAR_BASE_URL)
    }
    
  }, [fetchMovies])

  useEffect(() => {
    if(!searchTerm){
      console.log("Writting to sessionStorage")
      sessionStorage.setItem('homeState', JSON.stringify(state))
    }
  },[searchTerm, state])

  return [{state, loading, error }, fetchMovies]
}