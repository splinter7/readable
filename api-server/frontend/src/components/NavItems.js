import React from 'react'
import { ListItem, FontIcon } from 'react-md'
import { Link, Route } from 'react-router-dom'

const NavItems = ({label, icon, to}) => (
    <Route>
    <ListItem 
        primaryText={label}
        leftIcon={<FontIcon key={icon}>{icon}</FontIcon>}
    />
    </Route>
)

export default NavItems