import React from 'react'
import { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Carteira from './views/Carteira'
import { FlexContainer } from './styles/style'
import theme from './styles/themes'

const App = () => (
  <ThemeProvider theme={theme}>
    <FlexContainer>
      <Menu />
      <Carteira />
    </FlexContainer>
  </ThemeProvider>
)

export default App
