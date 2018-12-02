import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"

const Container = styled.div`
  background-color: #ddd;
  font-family: 'Bitter';
  padding: 50px 0;
`;
const Cv = ({ children, title }) => (
  <>
    <Helmet
      title={title}
      meta={[{ name: 'Description', content: 'Jacinto Rodrigues CV' }]}
    >
      <html lang="en" />
    </Helmet>
    <Container>{children}</ Container>
  </>
);

Cv.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Cv;
