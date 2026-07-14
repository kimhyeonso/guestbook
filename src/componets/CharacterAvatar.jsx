import React from 'react'
import CHARACTERS from './characterData'

const CharacterAvatar = ({character}) => {
  const selectedCharacter = CHARACTERS.find((item) => item.id === character)

  if (!selectedCharacter) return null

  return (
    <div>
      <img src={selectedCharacter.src} alt={selectedCharacter.label} />
    </div>
  )
}

export default CharacterAvatar
