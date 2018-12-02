import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

const Container = styled.div`
  width: 21cm;
  height: 29.7cm;
  padding: 15px 30px;
  background-color: #ffffff;
  margin: 0 auto;
  box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
`;

const BlankPage = ({ children }) => (
  <Container>
    {children}
  </Container >
);

BlankPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankPage;
