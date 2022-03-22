import React, { useContext } from 'react'
import { Container, Button, ButtonArea } from './styles'
import { IoTrashBin, IoThumbsUp, IoPencil } from 'react-icons/io5'
import { VideoContext } from '../../contexts/VideoContext'

// eslint-disable-next-line react/prop-types
const Video = ({ _id, title, link, liked }) => {
  const { handleEdit, handleLike, handleDelete } = useContext(VideoContext)

  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="blank">{link}</a>
        <ButtonArea>

          <Button liked={liked} onClick={() => handleLike(_id)}>
            <IoThumbsUp/>
          </Button>

          <Button onClick={() => handleEdit(_id, title, link)}>
            <IoPencil/>
          </Button>

          <Button onClick={() => handleDelete(_id)}>
            <IoTrashBin/>
          </Button>

        </ButtonArea>
      </Container>
    </li>
  )
}

export default Video
