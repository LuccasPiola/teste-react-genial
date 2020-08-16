import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Tooltip from './Tooltip'
import { formatCurreny } from '../../../../../utils/intlFormat'
import data from './data'
import * as S from './style'

const PieGraph = ({ theme }) => (
  <S.PieGraph>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
      innerRadius={0.85}
      cornerRadius={0}
      colors={[
        theme.colors.primary,
        theme.colors.primaryDark,
        theme.colors.primaryLight,
        theme.colors.secondary,
        theme.colors.secondaryLight,
      ]}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      enableRadialLabels={false}
      enableSlicesLabels={false}
      tooltip={d => <Tooltip data={d} />}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          translateX: 15,
          itemWidth: 100,
          itemHeight: 40,
          itemTextColor: theme.colors.gray3,
          symbolSize: 15,
          symbolShape: 'circle',
        },
      ]}
    />

    <S.Infos>
      <S.Total>{formatCurreny(10000000)}</S.Total>
      <S.Actives>22 ATIVOS</S.Actives>
      <S.Text>Valor total bruto</S.Text>
    </S.Infos>
  </S.PieGraph>
)

PieGraph.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}

export default withTheme(PieGraph)
