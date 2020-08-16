import React from 'react'
import TopMenu from '../../components/TopMenu'
import MainValues from './MainValues'
import TabView from './TabView'
import { NormalContainer } from './style'

const Carteira = () => {
  return (
    <NormalContainer>
      <TopMenu />
      <MainValues />
      <TabView />
    </NormalContainer>
  )
}

export default Carteira
