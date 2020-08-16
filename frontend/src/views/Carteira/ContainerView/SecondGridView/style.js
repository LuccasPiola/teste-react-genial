import styled from 'styled-components'

export const SecondGridView = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: bold;
  margin-right: 10px;
`

export const Small = styled.small`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray2};
`
