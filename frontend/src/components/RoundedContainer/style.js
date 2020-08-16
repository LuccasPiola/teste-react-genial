import styled from 'styled-components'
import { shade } from 'polished'

export const RoundedContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background-color 0.3s ease;
  color: ${({ color }) => color};

  &:hover {
    transition: background-color 0.3s ease;
    background-color: ${({ backgroundColor }) => shade(0.2, backgroundColor)};
  }

  &:active {
    transition: background-color 0.3s ease;
    background-color: ${({ backgroundColor }) => shade(0.3, backgroundColor)};
  }
`
