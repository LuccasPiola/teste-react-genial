import React from 'react'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Box from '../../../../components/Box'
import { formatPercent } from '../../../../utils/intlFormat'
import RoundedContainer from '../../../../components/RoundedContainer'
import PieGraph from './PieGraph'
import LineGraph from './LineGraph'
import * as S from './style'

const FirstGridView = ({ theme }) => {
  return (
    <S.FirstGridView>
      <Box gridArea="pieGraph">
        <S.Title>Minha carteira</S.Title>
        <PieGraph />
      </Box>

      <Box gridArea="rentability">
        <S.FlexContainer needAdjust>
          <S.Container marginRight={70}>
            <S.Title>Rentabilidade da carteira</S.Title>
            <S.Small>Versão Beta</S.Small>
          </S.Container>

          <S.Rentability>
            <S.Category>no mês</S.Category>
            <S.Value isPositive={0.05 >= 0}>
              {formatPercent(0.05, true)}
            </S.Value>
          </S.Rentability>

          <S.Rentability>
            <S.Category>no ano</S.Category>
            <S.Value isPositive={-0.0975 >= 0}>
              {formatPercent(-0.0975, true)}
            </S.Value>
          </S.Rentability>

          <S.Rentability>
            <S.Category>12 meses</S.Category>
            <S.Value isPositive={-0.0542 >= 0}>
              {formatPercent(-0.0542, true)}
            </S.Value>
          </S.Rentability>
        </S.FlexContainer>
      </Box>

      <Box gridArea="lineGraph">
        <S.BigFlexContainer>
          <S.Container>
            <S.FlexContainer>
              <S.Title>Gráfico de rentabilidade</S.Title>
              <S.Small marginLeft={10}>Versão Beta</S.Small>
            </S.FlexContainer>

            <S.FlexContainer justifyContent marginTop={20}>
              <RoundedContainer
                backgroundColor={theme.colors.white}
                color={theme.colors.gray2}
              >
                <S.Text>no ano</S.Text>
              </RoundedContainer>
              <RoundedContainer
                backgroundColor={theme.colors.white}
                color={theme.colors.gray2}
              >
                <S.Text>no mês</S.Text>
              </RoundedContainer>
              <RoundedContainer
                backgroundColor={theme.colors.primary}
                color={theme.colors.white}
              >
                <S.Text>desde o início</S.Text>
              </RoundedContainer>
            </S.FlexContainer>
          </S.Container>

          <S.Container>
            <S.Small isFlex>
              Powered by <S.Gorila>Gorila</S.Gorila>
            </S.Small>
            <S.Button>Conheça o Gorila Connect</S.Button>
          </S.Container>
        </S.BigFlexContainer>
        <LineGraph />
      </Box>
    </S.FirstGridView>
  )
}

FirstGridView.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}

export default withTheme(FirstGridView)
