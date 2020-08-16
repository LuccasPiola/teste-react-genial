import styled from 'styled-components'
import lupa from '../../assets/icons/lupa.svg'
import on from '../../assets/icons/on.svg'

export const TopMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 90px;
  display: flex;
  justify-content: space-between;
  min-width: 90%;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
  padding: 20px 15px;
  position: relative;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: 160px;
    align-items: center;
  }
`

export const SearchContainer = styled.div`
  padding: 5px 20px;
  background-color: rgba(87, 87, 87, 0.05);
  border-radius: 100px;
  width: 40%;
  background-image: url(${lupa});
  background-position-x: 98%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 20px 20px;
    width: 100%;
  }
`

export const SearchInput = styled.input`
  font-size: 14px;
  background-color: transparent;
  border: 0;
  width: 97%;

  &::placeholder {
    opacity: 0.5;
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.div`
  color: rgba(87, 87, 87, 0.7);
  text-transform: uppercase;
  font-size: 12px;
`

export const GrayBall = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(87, 87, 87, 0.7);
  margin-left: 10px;
`

export const OnButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: -130px;
  width: 200px;
  height: 50px;
  background-color: #28388f;
  border-radius: 100px;
  background-image: url(${on});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position-x: 20px;
  background-position-y: center;
  transition: background-color 0.4s ease, transform 0.3s ease 0.3s;

  @media screen and (max-width: 1200px) {
    right: -100px;
  }

  @media screen and (max-width: 900px) {
    right: -130px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }

  &:hover {
    transform: translateX(-20px);
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transition: transform 0.3s ease, background-color 0.4s ease 0.3s;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s ease;
  }
`
