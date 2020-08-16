import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Tooltip from './Tooltip'
import data from './data'
import * as S from './style'

const LineGraph = ({ theme }) => {
  const ids = data.map(active => active.id)
  const [activeCheckboxes, setActiveCheckboxes] = React.useState(ids)
  const [realData, setRealData] = React.useState(data)

  const handleCheckboxChange = id => {
    const checkboxIsActive = activeCheckboxes.includes(id)

    if (checkboxIsActive) {
      const newData = realData.filter(d => d.id !== id)
      setActiveCheckboxes(activeCheckboxes.filter(checkbox => checkbox !== id))
      setRealData(newData)
    } else {
      const [dataToAdd] = data.filter(d => d.id === id)
      const newData = [...realData, dataToAdd]
      setActiveCheckboxes([...activeCheckboxes, id])
      setRealData(newData)
    }
  }

  return (
    <S.LineGraph>
      <ResponsiveLine
        data={realData}
        height={300}
        margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Meses',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Porcentagem',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        enableGridY={false}
        colors={[
          theme.colors.primary,
          theme.colors.primaryDark,
          theme.colors.primaryLight,
          theme.colors.secondary,
          theme.colors.secondaryLight,
        ]}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        areaOpacity={0.05}
        useMesh
        tooltip={d => <Tooltip data={d} />}
      />
      <S.FlexContainer>
        <S.Text>Comparativos:</S.Text>
        {data.map(active => (
          <S.CheckboxContainer key={active.id}>
            <S.Input
              type="checkbox"
              backgroundColor={active.color}
              id={active.id}
              checked={activeCheckboxes.includes(active.id)}
              onChange={() => handleCheckboxChange(active.id)}
            />
            <S.Label htmlFor={active.id}>{active.id}</S.Label>
          </S.CheckboxContainer>
        ))}
        <S.Small>
          *A rentabilidade corresponde ao período de 02/01/2019 em diante para
          clientes que criaram carteiras antes de Jan/19. Demais clientes verão
          a rentabilidade desde a data de criação da carteira.
        </S.Small>
      </S.FlexContainer>
      <S.Info>
        **A rentabilidade de CRA, CRI, COE, Prev, Super CDB e Exercícios de
        Opção ainda não está disponível em nossa plataforma
      </S.Info>
    </S.LineGraph>
  )
}

LineGraph.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}

export default withTheme(LineGraph)
