import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const style = {
    width: "75%",
    margin: "0 auto",
    padding: "20px"
}

class AddPost extends Component {
    state = {
        value: 1,
    };
    
    handleChange(){
        console.log('changed')
    }

    render() {
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
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="React" />
                    <MenuItem value={2} primaryText="Redux" />
                    <MenuItem value={3} primaryText="Udacity" />
                </SelectField>

            </Paper>
        )
    }
}

export default AddPost