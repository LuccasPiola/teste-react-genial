import React from 'react'
import * as S from './style'
import logo from '../../assets/logo.svg'
import menuList from './menuList'

const Menu = () => (
  <S.MenuContainer>
    <S.LogoContainer>
      <S.Logo src={logo} />
    </S.LogoContainer>

    <S.MenuList>
      {menuList.map(menuItem => (
        <S.MenuItem key={menuItem.name} active={menuItem.active}>
          <S.Icon src={menuItem.icon} />
          <S.Text>{menuItem.name}</S.Text>
        </S.MenuItem>
      ))}
    </S.MenuList>
  </S.MenuContainer>
)

export default Menu
