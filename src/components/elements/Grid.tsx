import React, {ReactNode} from 'react'

import { StyledGrid, StyledGridContent} from '../styles/StyledGrid'

interface IProps{
  header: string
  children:ReactNode
}

const Grid = ({ header, children }:IProps ) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>
      {children}
    </StyledGridContent>
  </StyledGrid>
)

export default Grid