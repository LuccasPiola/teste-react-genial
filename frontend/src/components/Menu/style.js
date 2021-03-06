import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 10%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.gray4};
  padding: 20px 0;
  min-height: 100%;

  @media screen and (max-width: 1400px) {
    min-width: 15%;
  }

  @media screen and (max-width: 1000px) {
    min-width: 20%;
  }

  @media screen and (max-width: 800px) {
    min-width: 100%;
    padding: 20px 0 0 0;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const MenuList = styled.ul`
  list-style: none;
  transition: max-height 0.3s ease;

  @media screen and (max-width: 800px) {
    transition: max-height 0.3s ease;
    max-height: ${({ showMenu }) => showMenu ? '500px' : '0'}
  }
`

export const MenuItem = styled.li`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primaryLight : 'transparent'};
  transition: background-color 0.5s ease, max-height 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transition: background-color 0.5s ease;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.5s ease;
  }

  @media screen and (max-width: 800px) {
    transition: opacity 0.3s ease;
    opacity: ${({ showMenu }) => showMenu ? '1' : '0'};
  }
`

export const Text = styled.p`
  font-size: 12px;
  margin-left: 15px;
  font-weight: 600;
`

export const Icon = styled.img`
  width: 20px;
`

export const Logo = styled.img`
  width: 90px;
  cursor: pointer;
`
