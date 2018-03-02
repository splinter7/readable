import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuDrawer from './MenuDrawer'
import Menu from './IconMenu'

const Navigation = () => (
    <AppBar
        title="Readable"
        iconElementLeft={<IconButton><MenuDrawer /></IconButton>}
        iconElementRight={<Menu />}
    />
)

export default Navigation