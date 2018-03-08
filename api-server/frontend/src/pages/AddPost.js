import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'

const style = {
    width: "75%",
    margin: "0 auto",
    padding: "20px"
}

class AddPost extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          value: ''
        };
  
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount(){
        const {dispatch, getCategories} = this.props
        dispatch(getCategories());
    }
    
    handleCategoryChange(event){
        this.setState(
            {value: event.target.innerText}
        )
    }

    render() {        
        const {categories} = this.props

        if(!categories) {
            return <div>Loading...</div>
        }

        return (            
            <Paper zDepth={1} style={style}>

                <TextField 
                    hintText="Title"
                    floatingLabelText="Post Title"
                    floatingLabelFixed={true}
                />

                <br />

                <TextField
                    hintText="Body"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    floatingLabelText="Post Body"
                    floatingLabelFixed={true}
                />

                <br />

                <SelectField
                    floatingLabelText="Category"
                    floatingLabelFixed={true}
                    value={this.state.value}
                    onChange={this.handleCategoryChange}
                >
                    {categories.map((category, i) => (
                        <MenuItem key={i} value={category.name} primaryText={category.name} />
                    ))}
                </SelectField>

            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        getCategories: getCategories
    }
}

export default connect(mapStateToProps)(AddPost)