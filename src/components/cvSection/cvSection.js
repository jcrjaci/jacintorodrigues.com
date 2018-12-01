import React from 'react'

const CvSection = ({ name, content }) => (
    <div style={{
      display: 'flex',
      // marginTop: '20px',
    }}>
      <div style={{
        flex: 1,
        color: '#000',
        fontWeight: '700',
        fontSize: '24px',
        marginRight: '30px',
        textTransform: 'uppercase'
      }}>
        {name}
        <div style={{
          height: '10px',
          backgroundColor: '#b32500',
          marginTop: '5px',
        }}>
        </div >
      </div >
      <div style={{
        flex: 3,
        fontSize: '11px',
        lineHeight: '1.5',
        marginBottom: '0',
      }}>
      {content}
      </div >
    </div >
)

export default CvSection;
