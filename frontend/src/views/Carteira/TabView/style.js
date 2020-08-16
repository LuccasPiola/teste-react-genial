import styled from 'styled-components'

export const TabView = styled.div``

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px 50px 25px 30px;

  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 700px) {
    padding: 25px 5px 25px 10px;
  }
`

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  & + ul {
    margin-left: 20px;
  }
`

export const Tab = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ active }) => active && '700'};
  font-size: 14px;
  cursor: pointer;
  & + li {
    margin-left: 20px;
  }
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -8px;
    width: ${({ active }) => (active ? '50%' : '0%')};
    left: 0;
    border-bottom: 2px solid white;
    border-radius: 8px;
    transition: width 0.5s ease;
  }

  &:hover {
    &::before {
      width: ${({ active }) => !active && '50%'};
      transition: width 0.5s ease;
    }
  }
`
