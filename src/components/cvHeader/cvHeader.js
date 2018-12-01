import React from 'react'
import PropTypes from 'prop-types'
import { FaEnvelope, FaGlobe, FaPhone, FaMapMarker, FaLinkedin, FaGithub } from 'react-icons/fa';


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
        fontSize: '13px',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <div style={{lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>
        <FaEnvelope/>
        <span style={{paddingLeft: '3px' }}>me@jacintorodrigues.com</span>
      </div>
      <div style={{lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>
        <FaGlobe/>
        <span style={{paddingLeft: '3px' }}>jacintorodrigues.com</span>
      </div>
      <div style={{lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>
        <FaPhone/>
        <span style={{paddingLeft: '3px' }}>916 499 958</span>
      </div>
      <div style={{lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>
        <FaMapMarker/>
        <span style={{paddingLeft: '3px' }}>Paços de Ferreira, Portugal</span>
      </div>
      <div style={{lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>
        <FaLinkedin/>
        <span style={{padding: '0 3px' }}>jacintoRodrigues</span>
        <FaGithub/>
        <span style={{paddingLeft: '3px' }}>jcrjaci</span>
      </div>
      </div >
    </div >
)

export default CvHeader;
