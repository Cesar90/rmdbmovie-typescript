import React,{useState, useRef} from 'react'
import FontAwesome from 'react-fontawesome'

import { 
  StyledSearchBar,
  StyledSearchBarContent
 } from '../styles/StyledSearchBar'

interface IProps{
  callback: (value: string) => void
}

const SearchBar = ({ callback }: IProps) => {
  const [state, setState] = useState<string>('')
  const timeOut = useRef<ReturnType<typeof setInterval> | null>(null);

  const doSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if(timeOut.current){
      clearTimeout(timeOut.current)
    }
    setState(value)
    timeOut.current = setTimeout(() => {
      callback(value)
    }, 500)
  }

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input 
          type="text" 
          placeholder="Search Movie" 
          onChange={doSearch}
          value={state}
          />
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

export default SearchBar