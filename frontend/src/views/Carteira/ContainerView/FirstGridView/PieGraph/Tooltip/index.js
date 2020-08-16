import React from 'react'
import PropTypes from 'prop-types'
import {
  formatPercent,
  formatCurreny,
} from '../../../../../../utils/intlFormat'
import * as S from './style'

const Tooltip = ({ data }) => {
  const total = 10000000
  const truePercent = data.value / 100

  return (
    <S.Tooltip>
      <S.Name>{data.label}</S.Name>
      <S.Values>
        {formatCurreny(total * truePercent)} | {formatPercent(truePercent)}
      </S.Values>
    </S.Tooltip>
  )
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
}

export default Tooltip
