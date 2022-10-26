import React from 'react'
import { StyledHeroImage } from '../styles/StyledHeroImage'

interface IProps{
  image: string,
  title: string,
  text: string
}

const HeroImage = ({ image, title, text }: IProps) => (
 <StyledHeroImage image={image}>
   <div className="heroimage-content">
    <div className="heroimage-text">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
   </div>
 </StyledHeroImage>
)

export default HeroImage