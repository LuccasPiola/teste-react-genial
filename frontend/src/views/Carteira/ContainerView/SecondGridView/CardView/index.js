import React from 'react'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Box from '../../../../../components/Box'
import RoundedContainer from '../../../../../components/RoundedContainer'
import data from '../../FirstGridView/PieGraph/data'
import { formatCurreny, formatPercent } from '../../../../../utils/intlFormat'
import * as S from './style'

const CardView = ({ theme }) => {
  const total = 10000000

  return (
    <S.CardView>
      {data.map(d => {
        const realPercent = d.value / 100

        return (
          <Box key={d.id}>
            <S.InlineContainer>
              <RoundedContainer
                color={theme.colors.white}
                backgroundColor={d.color}
              >
                <S.Label>{d.label}</S.Label>
              </RoundedContainer>
            </S.InlineContainer>
            <S.Value>{formatCurreny(total * realPercent)}</S.Value>
            <S.Times>
              <S.Time>
                <S.Text>Mês</S.Text>
                <S.Percent isPositive={0.05 > 0}>
                  {formatPercent(0.05, true)}
                </S.Percent>
              </S.Time>
              <S.Time>
                <S.Text>Ano</S.Text>
                <S.Percent isPositive={0.05 > 0}>
                  {formatPercent(0.05, true)}
                </S.Percent>
              </S.Time>
              <S.Time>
                <S.Text>12 meses</S.Text>
                <S.Percent isPositive={0.05 > 0}>
                  {formatPercent(0.05, true)}
                </S.Percent>
              </S.Time>
            </S.Times>
          </Box>
        )
      })}
    </S.CardView>
  )
}

CardView.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}

export default withTheme(CardView)
