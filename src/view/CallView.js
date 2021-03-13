import React from 'react'
import FadeAnimation from '../animation/FadeAnimation'
import MediaStreaming from '../components/MediaStreaming'
import OutSourceMediaStream from '../components/OutSourceMediaStream'
import { AlertWarning } from '../components/Alert'

const CallView = ({mediaConstraints}) => {
  const [alertIsVisible, setAlertIsVisible] = React.useState(false)

  const handleAlertVisibility = () => {
    setAlertIsVisible(!alertIsVisible)
  }

  return (
    <FadeAnimation>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <OutSourceMediaStream/>
        <MediaStreaming mediaConstraints={mediaConstraints}/>
        <AlertWarning text='Cuidado' alertIsVisible={alertIsVisible} handleAlertVisibility={handleAlertVisibility} />
      </div>
    </FadeAnimation>
  )
}

export default CallView