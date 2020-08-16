import styled from 'styled-components'

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ marginRight }) => `${marginRight}px`};

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`

export const NameInitials = styled.div`
  border-radius: 50%;
  padding: 8px;
  background-color: #28388f;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  text-align: center;
  margin-right: 5px;
  font-weight: 600;
`

export const UserMainInfo = styled.div`
  display: block;
  margin-right: 10px;
`

export const FirstName = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 600;
  font-size: 12px;
`

export const CC = styled.small`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 12px;
`
