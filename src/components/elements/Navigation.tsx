import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavigation } from '../styles/StyledNavigation'

interface IProps{
  movie: string | undefined
}

const Navigation = ({movie}: IProps) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
)

export default Navigation