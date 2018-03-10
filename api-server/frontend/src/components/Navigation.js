import React, {PureComponent} from 'react'
import { Drawer, Toolbar } from 'react-md'
import KebabMenu from './KebabMenu'
import { Button } from 'react-md'

const navItems = [{
  label: 'react'
}, {
  label: 'redux'
}, {
  label: 'udacity'
}];

class Navigation extends PureComponent {
  
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  }

  hideDrawer = () => {
    this.setState({ visible: false });
  }

  handleVisibility = (visible) => {
    this.setState({ visible });
  }

  render(){
    const { visible } = this.state;

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
          navItems={navItems.map(item => <div key={item.label}>{item.label}</div>)}
        />
      </div>
    )
  }  
}

export default Navigation