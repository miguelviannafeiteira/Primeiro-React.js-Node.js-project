import React, { useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'
import { Overlay, Container, Header, Footer, FormContainer, FormMain, InputGroup, CheckIcon, CloseIcon } from './styles'

const FormModal = () => {
  const { handleClose, title, link, titleHandler, linkHandler, handleSubmit } = useContext(VideoContext)

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Add a video</strong>
          <button type="button" onClick={ handleClose }>
            <CloseIcon/>
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={title} onChange={titleHandler} s/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="link">Link</label>
              <input id="link" type="text" value={link} onChange={linkHandler} s/>
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  )
}

export default FormModal
