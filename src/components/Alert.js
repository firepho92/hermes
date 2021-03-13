import React from 'react'
import PropTypes from 'prop-types'
import FadeAnimation from '../animation/FadeAnimation'

const AlertSuccess = ({ text, alertIsVisible, handleAlertVisibility }) => {
  if(alertIsVisible) {
    return (
      <FadeAnimation>
        <div onClick={ handleAlertVisibility } className='alert alert-success' style={{ position: 'absolute', bottom: 0, right: 15, cursor: 'pointer' }}>
          { text }
        </div>
      </FadeAnimation>
    )
  } else {
    return null
  }
}

const AlertWarning = ({ text, alertIsVisible, handleAlertVisibility }) => {
  if(alertIsVisible) {
    return (
      <FadeAnimation>
        <div onClick={ handleAlertVisibility } className='alert alert-warning' style={{ position: 'absolute', bottom: 0, right: 15, cursor: 'pointer' }}>
          { text }
        </div>
      </FadeAnimation>
    )
  } else {
    return null
  }
}

const AlertDanger = ({ text, alertIsVisible, handleAlertVisibility }) => {
  if(alertIsVisible) {
    return (
      <FadeAnimation>
        <div onClick={ handleAlertVisibility } className='alert alert-danger' style={{ position: 'absolute', bottom: 0, right: 15, cursor: 'pointer' }}>
          { text }
        </div>
      </FadeAnimation>
    )
  } else {
    return null
  }
}

export { AlertSuccess, AlertWarning, AlertDanger }

AlertSuccess.propTypes = {
  text: PropTypes.string,
  alertIsVisble: PropTypes.bool,
  handleAlertVisibility: PropTypes.func
}

AlertWarning.propTypes = {
  text: PropTypes.string,
  alertIsVisble: PropTypes.bool,
  handleAlertVisibility: PropTypes.func
}

AlertDanger.propTypes = {
  text: PropTypes.string,
  alertIsVisble: PropTypes.bool,
  handleAlertVisibility: PropTypes.func
}