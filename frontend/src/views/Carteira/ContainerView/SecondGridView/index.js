import React from 'react'
import * as S from './style'
import CardView from './CardView'

const SecondGridView = () => (
  <S.SecondGridView>
    <S.FlexContainer>
      <S.Title>Rentabilidade por categoria</S.Title>
      <S.Small>Versão Beta</S.Small>
    </S.FlexContainer>
    <CardView />
  </S.SecondGridView>
)

export default SecondGridView
