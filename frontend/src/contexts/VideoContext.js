import React, { createContext, useState } from 'react'
import FormModal from '../components/FormModal'
import { useAxios } from '../hooks/useAxios'
import api from '../services/api'

export const VideoContext = createContext()

// eslint-disable-next-line react/prop-types
export function VideoContextProvider ({ children }) {
  const { data, mutate } = useAxios('videos')

  const [openFormModal, setOpenFormModal] = useState(false)
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [id, setId] = useState(false)

  const handleAdd = () => {
    setOpenFormModal(true)
  }

  const handleClose = () => {
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
    setOpenFormModal(false)
  }

  const titleHandler = ({ target }) => {
    setTitle(target.value)
  }

  const linkHandler = ({ target }) => {
    setLink(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const video = {
      title, link
    }
    if (id) {
      api.put(`videos/${id}`, video)

      const updatedVideos = {
        videos: data.videos?.map((video) => {
          if (video._id === id) {
            return { ...video, title, link }
          }
          return video
        })
      }
      mutate(updatedVideos, false)
    } else {
      api.post('videos', video)

      const updatedVideos = {
        videos: [...data.videos, video]
      }
      mutate(updatedVideos, false)
    }

    setOpenFormModal(false)
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
  }

  const handleEdit = (videoId, videoTitle, videoLink) => {
    setTitle(videoTitle)
    setLink(videoLink)
    setId(videoId)
    setOpenFormModal(true)
  }

  const handleLike = (id) => {
    api.patch(`videos/${id}`)

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
          return { ...video, title: video.title, link: video.link, liked: !video.liked }
        }
        return video
      })
    }

    mutate(updatedVideos, false)
  }

  const handleDelete = (id) => {
    api.delete(`videos/${id}`)

    const updatedVideos = {
      videos: data.videos?.filter((video) => video._id !== id)
    }

    mutate(updatedVideos, false)
  }

  return (
    <VideoContext.Provider value={{
      handleAdd,
      handleClose,
      title,
      setTitle,
      link,
      setLink,
      titleHandler,
      linkHandler,
      handleSubmit,
      handleEdit,
      handleDelete,
      handleLike,
      id,
      setId
    }}>
I     {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  )
}
