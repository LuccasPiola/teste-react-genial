import styled from 'styled-components'

export const PieGraph = styled.div`
  height: 500px;
  position: relative;

  div:first-child {
    z-index: 5;
    position: relative;
  }

  @media screen and (max-width: 700px) {
    height: 400px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  text-align: center;
`

export const Total = styled.h2`
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray1};

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`

export const Actives = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: 100;
  margin: 20px 0;
`

export const Text = styled.h3`
  padding: 10px 20px;
  display: inline;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: 100;
  border-top: ${({ theme }) => `1px solid ${theme.colors.gray3}`};
`
