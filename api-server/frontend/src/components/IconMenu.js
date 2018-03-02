
import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'
import MenuItem from 'material-ui/MenuItem'

const Menu = () => (
    <div>
    <IconMenu        
        iconButtonElement={
            <IconButton><ContentFilter /></IconButton>
        }
        //targetOrigin={{horizontal: 'right', vertical: 'top'}}
        //anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="React" />
        <MenuItem primaryText="Redux" />
        <MenuItem primaryText="Udacity" />
    </IconMenu>
    </div>
)

export default Menu