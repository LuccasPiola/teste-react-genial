import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
