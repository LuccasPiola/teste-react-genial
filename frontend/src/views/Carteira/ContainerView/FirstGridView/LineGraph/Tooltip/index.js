import React from 'react'
import PropTypes from 'prop-types'
import { formatPercent } from '../../../../../../utils/intlFormat'
import * as S from './style'

const Tooltip = ({ data }) => {
  const percent = data.point.data.y
  const truePercent = percent / 100

  return (
    <S.Tooltip>
      <S.Name color={data.point.borderColor}>{data.point.serieId}</S.Name>
      <S.Value>{formatPercent(truePercent)}</S.Value>
    </S.Tooltip>
  )
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    point: PropTypes.shape({
      borderColor: PropTypes.string,
      color: PropTypes.string,
      data: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
      id: PropTypes.string,
      index: PropTypes.number,
      serieCOlor: PropTypes.string,
      serieId: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }).isRequired,
}

export default Tooltip
