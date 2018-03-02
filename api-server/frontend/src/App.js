import React from 'react'
import AppBar from 'material-ui/AppBar'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Home from 'material-ui/svg-icons/content/add-circle'
import Menu from './IconMenu'
import './App.css'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <AppBar
      title="Readable"
      iconElementLeft={<IconButton><Home /></IconButton>}
      iconElementRight={<Menu />}
    />
    <div class="bottom">
      <FloatingActionButton secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

export default App