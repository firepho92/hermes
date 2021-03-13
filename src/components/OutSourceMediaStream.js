import React from 'react'
import Spinner from './Spinner'

const OutSourceMediaStream = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <div style={{ height: '288px', width: '512px', background: 'black', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      { isLoading ? <Spinner/> : 'hola' }
    </div>
  )
}

export default OutSourceMediaStream