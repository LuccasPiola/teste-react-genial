import React from 'react'
import * as S from './style'
import ContainerView from '../ContainerView'

const TabView = () => {
  return (
    <S.TabView>
      <S.Tabs>
        <S.Container>
          <S.Tab active>Resumo</S.Tab>
          <S.Tab>Movimentações</S.Tab>
          <S.Tab>Posição</S.Tab>
          <S.Tab>Saque</S.Tab>
        </S.Container>

        <S.Container>
          <S.Tab>Monte sua Carteira</S.Tab>
        </S.Container>
      </S.Tabs>

      <ContainerView />
    </S.TabView>
  )
}

export default TabView
