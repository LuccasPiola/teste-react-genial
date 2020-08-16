import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

const RoundedContainer = ({ backgroundColor, color, children }) => (
  <S.RoundedContainer backgroundColor={backgroundColor} color={color}>
    {children}
  </S.RoundedContainer>
)

RoundedContainer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default RoundedContainer
