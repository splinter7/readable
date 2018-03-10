import React, {Component} from 'react'
import { MenuButton, ListItem } from 'react-md'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'

class KebabMenu extends Component {

  componentDidMount(){
    const {dispatch, getCategories} = this.props
    dispatch(getCategories())
  }

  render() {
    const {categories} = this.props

    if(!categories){
      return <div>...Loading</div>
    }

    return (
      <MenuButton
        id="menu-button-2"
        icon
        menuItems={
          categories.map((category, i) => (
            <ListItem key={i} primaryText={category.name} />
          ))
        }
        listInline
        centered
        anchor={{
          x: MenuButton.HorizontalAnchors.CENTER,
          y: MenuButton.VerticalAnchors.CENTER,
        }}
      >
        more_vert
      </MenuButton>
    )
  }
}

function mapStateToProps(state) {
  return ({
    categories: state.categories,
    getCategories: getCategories
  })
}

export default connect(mapStateToProps)(KebabMenu)