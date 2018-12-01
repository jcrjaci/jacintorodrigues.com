import React from 'react'
import PropTypes from 'prop-types'

const CvHeader = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
    }}>
      <div style={{
        flex: 3,
        fontSize: '42px',
        textTransform: 'upperCase',
        fontWeight: '700',
        fontFamily: 'Bitter',
        textAlign: 'center',
      }}>
        <span>Jacinto rodrigues</span>
      </div >
      <div style={{
        flex: 1,
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <div style={{lineHeight: 1.25 }}>me@jacintorodrigues.com</div>
      <div style={{lineHeight: 1.25 }}>jacintorodrigues.com</div>
      <div style={{lineHeight: 1.25 }}>91.256499958</div>
      <div style={{lineHeight: 1.25 }}>Paços de Ferreira, Portugal</div>
      </div >
    </div >
)

export default CvHeader;
