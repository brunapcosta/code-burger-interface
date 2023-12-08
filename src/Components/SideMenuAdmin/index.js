import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import listLink from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
    return (
        <Container>
            <hr></hr>
            {listLink.map(item => (
                <ItemContainer key={item.id}>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px'}}>
                <LogoutIcon style={{ color: '#FFFFFF'}} />
                <ListLink ></ListLink>
            </ItemContainer>
        </Container>
    )
}