import React from 'react'
import * as S from './style'
import logo from '../../assets/logo.svg'
import menuList from './menuList'

const Menu = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
  <S.MenuContainer>
    <S.LogoContainer>
      <S.Logo src={logo} onClick={() => setShowMenu(!showMenu)}/>
    </S.LogoContainer>

    <S.MenuList showMenu={showMenu}>
      {menuList.map(menuItem => (
        <S.MenuItem showMenu={showMenu} key={menuItem.name} active={menuItem.active}>
          <S.Icon src={menuItem.icon} />
          <S.Text>{menuItem.name}</S.Text>
        </S.MenuItem>
      ))}
    </S.MenuList>
  </S.MenuContainer>
  )
}

export default Menu
