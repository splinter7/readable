import React from 'react'
import AppBar from 'material-ui/AppBar'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MenuDrawer from './MenuDrawer'
import Menu from './IconMenu'
import './App.css'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <AppBar
      title="Readable"
      iconElementLeft={<IconButton><MenuDrawer /></IconButton>}
      iconElementRight={<Menu />}
    />
    <div className="bottom">
      <FloatingActionButton secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

export default App