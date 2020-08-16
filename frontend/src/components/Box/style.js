import styled from 'styled-components'

export const Box = styled.div`
  padding: 20px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  grid-area: ${({ gridArea }) => gridArea};
`
