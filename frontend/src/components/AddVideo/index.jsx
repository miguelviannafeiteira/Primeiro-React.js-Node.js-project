import React, { useContext } from 'react'

import { AddVideoButton, AddIcon } from './styles'
import { VideoContext } from '../../contexts/VideoContext'

const AddVideo = () => {
  const { handleAdd } = useContext(VideoContext)

  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  )
}

export default AddVideo
