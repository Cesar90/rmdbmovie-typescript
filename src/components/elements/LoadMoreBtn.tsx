import React from 'react'

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

interface IProps{
  text: string
  callback: () => void
  
}

const LoadMoreBtn = ({ text,  callback}:IProps ) => (
<StyledLoadMoreBtn type="button" onClick={callback}>
  {text}
</StyledLoadMoreBtn>)

export default LoadMoreBtn