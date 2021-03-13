import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const FadeAnimationProps = {
  atEnter: {
    opacity: 0
  },
  atLeave: {
    opacity: 0,
  },
  atActive: {
    opacity: 1
  },
  duration: 0.25
}

function FadeAnimation(props) {
  return (
    <motion.div
      key = { props.id }
      initial = { FadeAnimationProps.atEnter }
      animate = { FadeAnimationProps.atActive }
      exit = { FadeAnimationProps.atLeave }
      transition = {{ duration: FadeAnimationProps.duration, delay: props.delay ?? 0 }}
    >
      { props.children }
    </motion.div>
  )
}

export default FadeAnimation

FadeAnimation.propTypes = {
  delay: PropTypes.number
}