import React from 'react'
import PropTypes from 'prop-types'

const Basic = ({ backgroudColor, children }) => {
  const headerStyle = {
    background: backgroudColor,
    height: '100px',
  }
  return (
    <div>
      <div style={headerStyle}>
        this is header
      </div>
      {children}
    </div>
  )
}

Basic.propTypes = {
  backgroudColor: PropTypes.string,
}

Basic.defaultProps = {
  backgroudColor: 'green',
}

export default Basic
