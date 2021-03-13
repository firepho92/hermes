import PropTypes from 'prop-types'

const TextField = () => {
  return (
    <input type="text"/>
  )
}

TextField.propTypes = {
  type: PropTypes.string.isRequired
}