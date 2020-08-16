import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

const UserInfo = ({ data, marginRight = 0 }) => {
  const [firstName, lastName] = data.name.split(' ')
  return (
    <S.UserInfo marginRight={marginRight}>
      <S.NameInitials>
        {firstName.slice(0, 1)}
        {lastName.slice(0, 1)}
      </S.NameInitials>
      <S.UserMainInfo>
        <S.FirstName>{firstName}</S.FirstName>
        <S.CC>CC {data.cc}</S.CC>
      </S.UserMainInfo>
    </S.UserInfo>
  )
}

UserInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cc: PropTypes.string.isRequired,
  }).isRequired,
  marginRight: PropTypes.number,
}

UserInfo.defaultProps = {
  marginRight: 0,
}

export default UserInfo
