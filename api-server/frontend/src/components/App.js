import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Navigation from './Navigation'
import '../css/App.css'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Navigation />
    <div className="bottom">
      <FloatingActionButton secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

export default App