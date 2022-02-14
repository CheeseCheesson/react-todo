import React from 'react'
import PropTypes from 'prop-types'

const TextAria = ({ name, value, type, classValue, placeHolder, onChange }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      className={classValue}
      placeholder={placeHolder}
      value={value}
      type={type}
      autoFocus
    />
  )
}
TextAria.defaultProps = {
  onChange: () => {},
  type: 'text',
}
TextAria.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  classValue: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
}
export default TextAria
