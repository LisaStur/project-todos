import React from 'react'
import styled from 'styled-components'
import { ToDoSummary } from './ToDoSummary'
import { HeaderContainer, Title } from '../styledComponents/Header'
import { StyledLink } from 'styledComponents/StyledLink'


export const HeaderShopping = () => {

  return (

      <HeaderContainer>
          <Title>Shopping List</Title>
        <StyledLink to="/">
          To-Do List ➜
        </StyledLink>
      </HeaderContainer>
 

  )
}