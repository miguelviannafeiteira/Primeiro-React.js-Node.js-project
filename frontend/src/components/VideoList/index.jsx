import React from 'react'
import AddVideo from '../AddVideo'
import Video from '../Video'
import { Container, VideoListWrapper } from './styles'
import { useAxios } from '../../hooks/useAxios'

const VideoList = () => {
  // const [videos, setVideos] = useState<[VideoApi]>()
  // useEffect(() => {
  //   api.get('videos').then(({ data }) => {
  //     setVideos(data.videos)
  //   })
  // }, [videos])

  const { data } = useAxios('videos')

  // a  primeira forma é usando useeffect e axios
  // a segunda é com  swr e axios

  return (
    <Container>
      <VideoListWrapper>
        {data?.videos?.map((video) => (
           <Video
            key={video._id}
            _id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}/>
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  )
}

export default VideoList
