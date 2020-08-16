import React from 'react'
import { formatCurreny } from '../../../utils/intlFormat'
import * as S from './style'

const MainValues = () => (
  <S.MainValues>
    <S.MoneyCounter>
      <S.Title>Saldo em conta corrente</S.Title>
      <S.Value>{formatCurreny(5620080.85)}</S.Value>
    </S.MoneyCounter>

    <S.MoneyCounter>
      <S.Title>Disponível para investir</S.Title>
      <S.Value>{formatCurreny(10000000)}</S.Value>
    </S.MoneyCounter>

    <S.MoneyCounter>
      <S.Title>Patrimônio total</S.Title>
      <S.Value>{formatCurreny(10000000)}</S.Value>
    </S.MoneyCounter>
  </S.MainValues>
)

export default MainValues
