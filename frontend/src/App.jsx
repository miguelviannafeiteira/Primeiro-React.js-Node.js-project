import React from 'react'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import { VideoContextProvider } from './contexts/VideoContext'

const App = () => {
  return (
    <>
    <VideoContextProvider>
     <Layout />
     </VideoContextProvider>
     <GlobalStyles />
    </>
  )
}

export default App
