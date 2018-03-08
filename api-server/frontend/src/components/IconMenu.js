
import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'
import MenuItem from 'material-ui/MenuItem'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'

class Menu extends Component {
    
    componentDidMount(){
        const {dispatch, getCategories} = this.props
        dispatch(getCategories());
    }

    render() {
        const {categories} = this.props

        if(!categories) {
            return <div>Loading...</div>
        }

        return (
            <div>
            <IconMenu        
                iconButtonElement={
                    <IconButton><ContentFilter /></IconButton>
                }
                //targetOrigin={{horizontal: 'right', vertical: 'top'}}
                //anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >

                {categories.map((category, i) => (
                    <MenuItem key={i} primaryText={category.name} />
                ))}
            </IconMenu>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        getCategories: getCategories
    }
}

export default connect(mapStateToProps)(Menu)