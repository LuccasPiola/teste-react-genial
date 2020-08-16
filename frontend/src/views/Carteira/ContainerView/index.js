import React from 'react'
import * as S from './style'
import FirstGridView from './FirstGridView'
import SecondGridView from './SecondGridView'

const ContainerView = () => {
  return (
    <S.ContainerView>
      <FirstGridView />
      <SecondGridView />
    </S.ContainerView>
  )
}

export default ContainerView
