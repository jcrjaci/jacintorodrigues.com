import React from 'react'

const CvSection = ({ name, content }) => (
    <div style={{
      display: 'flex',
      marginTop: '20px',
    }}>
      <div style={{
        flex: 1,
        color: '#000',
        fontWeight: '700',
        fontSize: '27px',
        marginRight: '30px',
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
        flex: 5,
      }}>
      {content}
      </div >
    </div >
)

export default CvSection;
