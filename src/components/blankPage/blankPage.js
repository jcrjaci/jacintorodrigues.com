import React from 'react'
import PropTypes from 'prop-types'

const BlankPage = ({ children }) => (
    <div style={{
        width: '21cm',
        height: '29.7cm',
        padding: '10px 30px',
        // padding: '30mm 45mm 30mm 45mm',
        backgroundColor: '#ffffff',
        margin: '0 auto',
        boxShadow: '0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)'
    }}>
      {children}
    </div >
)

BlankPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankPage;
