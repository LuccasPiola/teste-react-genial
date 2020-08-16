import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

const Box = ({ children, gridArea = '' }) => (
  <S.Box gridArea={gridArea}>{children}</S.Box>
)

Box.propTypes = {
  children: PropTypes.node.isRequired,
  gridArea: PropTypes.string,
}

Box.defaultProps = {
  gridArea: '',
}

export default Box
