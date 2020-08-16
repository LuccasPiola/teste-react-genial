import styled from 'styled-components'
import tick from '../../../../../assets/icons/tick.svg'

export const LineGraph = styled.div`
  height: 350px;
  position: relative;

  @media screen and (max-width: 1366px) {
    height: 400px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 0 0;
  position: absolute;
  bottom: 0px;

  @media screen and (max-width: 1366px) {
    bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    left: 20%;
  }

  @media screen and (max-width: 700px) {
    left: 0%;
  }
`

export const Text = styled.h2`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 30px;
  font-size: 12px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-left: 20px;
  }
`

export const Input = styled.input`
  appearance: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid #dfe0e7;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 4px;
  position: relative;

  &:checked {
    border: 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: url(${tick});
    background-position: 40%;
    background-repeat: no-repeat;
    background-size: 60%;
  }
`

export const Label = styled.label`
  user-select: none;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray2};
  margin-left: 5px;
`

export const Small = styled.small`
  margin-left: 100px;
  width: 40%;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray1};

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Info = styled.small`
  position: absolute;
  bottom: -60px;

  @media screen and (max-width: 1600px) {
    bottom: -40px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray1};
`
