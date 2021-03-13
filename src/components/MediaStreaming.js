import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneSlash, faVideoSlash, faMicrophone, faVideo, faDesktop, faStopCircle } from '@fortawesome/free-solid-svg-icons'
import Spinner from './Spinner'

const MediaStreaming = ({ mediaConstraints }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [stream, setStream] = React.useState(null)
  const [child, setChild] = React.useState(null)
  const [message, setMessage] = React.useState('')
  const userMedia = React.useRef()

  React.useEffect(() => {
    openMediaDevices(mediaConstraints)
  }, [])

  React.useEffect(() => {
    if(!isLoading) {
      if(!stream) {
        setChild(<Message message={message}/>)
      } else {
        setChild(<MediaPlayer userMedia={ userMedia } shareScreen={shareScreen} toggleMuteAudio={toggleMuteAudio} toggleMuteVideo={toggleMuteVideo}/>)
      }
    }
  }, [isLoading, stream, message])

  React.useEffect(() => {
    if(child !== null && message === '') {
      userMedia.current.srcObject = stream
    }
  }, [child, message, stream])

  const openMediaDevices = async (constraints) => {
    try {
      setChild(null)
      const userMediaStream = await navigator.mediaDevices.getUserMedia(constraints)
      setStream(userMediaStream)
    } catch(error) {
      setMessage('Error')
      setStream(false)
    } finally {
      setIsLoading(false)
    }
  }

  const shareScreen = async () => {
    setIsLoading(true)
    try {
      setChild(null)
      const userDisplayMediaStream = await navigator.mediaDevices.getDisplayMedia({cursor: true})
      setStream(userDisplayMediaStream)
    } catch(error) {
      setMessage('Error')
      setStream(false)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMuteVideo = () => {
    userMedia.current.srcObject.getVideoTracks()[0].enabled = !userMedia.current.srcObject.getVideoTracks()[0].enabled
  }

  const toggleMuteAudio = () => {
    userMedia.current.srcObject.getAudioTracks()[0].enabled = !userMedia.current.srcObject.getAudioTracks()[0].enabled
  }

  return (
    <div className='mediaStreaming' style={{ borderRadius: 6, overflow: 'hidden' }}>
      { isLoading ? 
        <Spinner/>
        :
        child
      }
    </div>
  )
}

export default MediaStreaming

const Message = ({message}) => {
  return (
    <div>
      { message }
    </div>
  )
}

const MediaPlayer = ({userMedia, toggleMuteAudio, toggleMuteVideo, shareScreen}) => {
  const [isAudioEnable, setIsAudioEnable] = React.useState(true)
  const [isVideoEnable, setIsVideoEnable] = React.useState(true)

  const toggleAudio = () => {
    setIsAudioEnable(!isAudioEnable)
    toggleMuteAudio()
  }

  const toggleVideo = () => {
    setIsVideoEnable(!isVideoEnable)
    toggleMuteVideo()
  }

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <video playsInline muted ref={userMedia} autoPlay style={{ flex: 1, maxHeight: '100%', maxWidth: '100%' }}/>
      <div style={{ width: '100%', padding: 5, position: 'absolute', bottom: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', background: 'rgba(0, 0, 0, 0.5)' }}>
        <FontAwesomeIcon className='grow' icon={isVideoEnable ? faVideo : faVideoSlash} color='white' onClick={toggleVideo} style={{cursor: 'pointer'}}/>
        <FontAwesomeIcon className='grow' icon={isAudioEnable ? faMicrophone : faMicrophoneSlash} color='white' onClick={toggleAudio} style={{cursor: 'pointer'}}/>
        <FontAwesomeIcon className='grow' icon={faDesktop} color={'white'} onClick={shareScreen} style={{cursor: 'pointer'}}/>
      </div>
    </div>
  )
}