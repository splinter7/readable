import React, {PureComponent} from 'react'
import { Drawer, Toolbar } from 'react-md'
import KebabMenu from './KebabMenu'
import { Button } from 'react-md'
import NavItems from './NavItems'

const navItems = [
  {
      label: 'react',
      icon: "wifi",
      to: '/'
  }, 
  {
      label: 'redux',
      icon: "bluetooth",
      to: '/'
  }, 
  {
      label: 'udacity',
      icon: 'data_usage',
      to: '/'
  }
]

class Navigation extends PureComponent {
  
  state = { 
    visible: false
  }

  showDrawer = () => {
    this.setState({ visible: true })
  }

  hideDrawer = () => {
    this.setState({ visible: false })
  }

  handleVisibility = (visible) => {
    this.setState({ visible })
  }

  render(){
    const { visible } = this.state

    return (
      <div>
        <Toolbar
          colored
          nav={<Button onClick={this.showDrawer} icon>menu</Button>}
          title="Readable"
          actions={<KebabMenu />}
        />
        <Drawer
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          onVisibilityChange={this.handleVisibility}
          header={<Toolbar title={<h1>Drawer examples</h1>} />}
          renderNode={this.dialog}
          navItems={navItems.map((props) => <NavItems {...props} key={props.label} />)}
        />
      </div>
    )
  }  
}

export default Navigation