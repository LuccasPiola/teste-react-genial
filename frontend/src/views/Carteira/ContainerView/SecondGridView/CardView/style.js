import styled from 'styled-components'

export const CardView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 30px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Value = styled.h1`
  font-weight: normal;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 30px;
  text-align: center;
`

export const Times = styled.div`
  margin-top: 10px;
  padding: 10px 15px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.gray4}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Time = styled.div`
  & + div {
    margin-left: 5px;
  }
`

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 5px;
`

export const Percent = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.success : theme.colors.error};
`

export const Label = styled.p`
  font-weight: bold;
  font-size: 14px;
`

export const InlineContainer = styled.div``
