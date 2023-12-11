import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../hooks/UserContext'
import listLink from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
    const { logout } = useUser()
    return (
        <Container>
            <hr></hr>
            {listLink.map(item => (
                <ItemContainer key={item.id} isActive={true}>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px'}} >
                <LogoutIcon style={{ color: '#FFFFFF', right: '5px', top: '5px'}} />
                <ListLink to='/login' onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    )
}