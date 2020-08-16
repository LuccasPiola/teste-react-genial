import styled from 'styled-components'

export const NormalContainer = styled.div`
  min-width: 90%;

  @media screen and (max-width: 1400px) {
    min-width: 85%;
  }

  @media screen and (max-width: 1000px) {
    min-width: 80%;
  }

  @media screen and (max-width: 800px) {
    min-width: 70%;
  }
`
