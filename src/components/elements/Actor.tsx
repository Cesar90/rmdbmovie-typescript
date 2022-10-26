import React from 'react'
import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE } from 'src/config'
import { StyledActor } from '../styles/StyledActor'

interface IActor{
  profile_path: string
  name: string
  character: string
}

interface IProps{
  actor: IActor
}

const Actor = ({ actor }: IProps) => (
  <StyledActor>
    <img src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} alt="actorthumb" />
    <span className="actor-name">
      {actor.name}
    </span>
    <span className="actor-character">
      {actor.character}
    </span>
  </StyledActor>
)

export default Actor