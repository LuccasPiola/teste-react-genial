import styled from 'styled-components'

export const MainValues = styled.div`
  display: flex;
  padding: 20px 30px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray5};

  @media screen and (max-width: 1000px) {
    padding: 20px 0px;
    flex-direction: column;
    align-items: center;
  }
`

export const MoneyCounter = styled.div`
  & + div {
    margin-left: 20px;
  }

  @media screen and (max-width: 1000px) {
    & + div {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 13px;
  margin-bottom: 5px;
`

export const Value = styled.p`
  font-weight: 100;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
`
