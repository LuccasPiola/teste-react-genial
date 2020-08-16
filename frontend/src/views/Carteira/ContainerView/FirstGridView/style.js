import styled from 'styled-components'

export const FirstGridView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'pieGraph rentability . '
    'pieGraph lineGraph lineGraph'
    'pieGraph lineGraph lineGraph'
    'pieGraph lineGraph lineGraph'
    'pieGraph lineGraph lineGraph'
    'pieGraph lineGraph lineGraph'
    'pieGraph lineGraph lineGraph';
  grid-gap: 10px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'pieGraph'
      'rentability'
      'lineGraph';
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: 100%;
  }
`

export const Title = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: bold;
`

export const FlexContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop && `${marginTop}px`};
  div {
    & + div {
      margin-left: ${({ justifyContent }) => justifyContent && '20px'};
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: ${({ needAdjust }) => needAdjust && 'column'};
    justify-content: center;
  }
`

export const Container = styled.div`
  margin-right: ${({ marginRight }) => `${marginRight}px`};

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-top: 10px;
  }
`

export const Small = styled.small`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray4};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  display: ${({ isFlex }) => isFlex && 'flex'};
  align-items: center;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`

export const Rentability = styled.div`
  & + div {
    margin-left: 60px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 10px;
    & + div {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
`

export const Category = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  user-select: none;
`

export const Value = styled.p`
  font-size: 12px;
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.success : theme.colors.error};
  text-align: center;
  font-weight: bold;
`

export const BigFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Button = styled.button`
  font-size: 12px;
  background: transparent;
  padding: 5px 10px;
  border-radius: 4px;
  border: 0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  margin-top: 5px;
`

export const Gorila = styled.p`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 900;
  background: linear-gradient(to right, #10c0c6, #4cdd91);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Text = styled.p`
  font-size: 12px;
`
