import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import RoundedContainer from '../RoundedContainer'
import UserInfo from '../UserInfo'
import * as S from './style'

const TopMenu = () => (
  <S.TopMenu>
    <S.SearchContainer>
      <S.SearchInput placeholder="O que você procura?" />
    </S.SearchContainer>

    <S.RightContainer>
      <RoundedContainer backgroundColor="#fff" color="#878787">
        <S.Text>ESCONDER VALORES</S.Text>
        <S.GrayBall />
      </RoundedContainer>

      <FontAwesomeIcon
        icon={faBell}
        color="#5E62C0"
        style={{ marginLeft: 20, marginRight: 20, cursor: 'pointer' }}
        size="lg"
      />

      <UserInfo
        data={{ name: 'Andreia Paula', cc: '16289-9' }}
        marginRight={80}
      />

      <S.OnButton />
    </S.RightContainer>
  </S.TopMenu>
)

export default TopMenu
