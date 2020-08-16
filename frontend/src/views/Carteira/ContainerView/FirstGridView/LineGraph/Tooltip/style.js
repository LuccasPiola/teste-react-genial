import styled from 'styled-components'

export const Tooltip = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`

export const Name = styled.h2`
  color: ${({ color }) => color};
  font-size: 12px;
`

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
  font-size: 10px;
  margin-top: 5px;
`
