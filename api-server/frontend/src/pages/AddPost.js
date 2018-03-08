import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'
import Form from 'react-formal'
import yup from 'yup'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const formPostSchema = yup.object().shape({
    title: yup.string().required('Please enter a title'),
    content: yup.string().required('Please enter some content this field is required'),
    category: yup.string().required('Please select a category this field is required'),
})

const style = {
    width: "75%",
    margin: "0 auto",
    padding: "20px"
}

const btnText = {
    color:"white"
}

class AddPost extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          value: '',
          errors: {}
        };
  
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleErrors = this.handleErrors.bind(this)
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
    }

    componentDidMount(){
        const {dispatch, getCategories} = this.props
        dispatch(getCategories());
    }
    
    handleCategoryChange(event){
        console.log(event.target.innerText)
        this.setState(
            {value: event.target.innerText}
        )
    }

    handleSubmit(values){
        console.log(values)
    }

    handleInvalidSubmit(values) {
        console.log("invalid")
    }

    handleErrors(errors){
        this.setState({errors}) 
    }

    test(event){
        event.preventDefault()
        console.dir(event.target.value)
    }

    render() {        
        const {categories} = this.props
        const {errors} = this.state

        let title = ""
        let category = ""
        let content = ""

        if(!categories) {
            return <div>Loading...</div>
        }

        return (            
            <Paper zDepth={1} style={style}>

                <Form
                    schema={formPostSchema}
                    defaultValue={{
                        title: title,
                        category: category,
                        content: content
                    }}
                    onSubmit={this.handleSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                    errors={errors}
                    onError={this.handleErrors}
                    >
                    
                        <Form.Field
                            name="title"                                
                            type={TextField}
                            hintText="Title"
                            floatingLabelText="Title"
                            noMeta
                            error={!!errors.title}
                            errorText={errors.title && errors.title[0].message}
                            onChange={this.test}
                        />

                        <br />

                        <Form.Field
                            name="content"
                            type={TextField} 
                            floatingLabelText="Content" 
                            rows={4}
                            noMeta
                            error={!!errors.content}
                            errorText={errors.content && errors.content[0].message}
                        />

                        <br />

                        <Form.Field
                            name="category"
                            type={SelectField} 
                            floatingLabelText="Category"
                            noMeta
                            error={!!errors.category}
                            errorText={errors.category && errors.category[0].message}
                            onChange={this.handleCategoryChange}
                        >
                            {categories.map((category, i) => (
                                <MenuItem key={i} value={category.name} primaryText={category.name} />
                            ))}
                        </Form.Field>

                        <br />

                        <Form.Button type='submit' component={RaisedButton} primary={true} style={btnText}>
                            Submit
                        </Form.Button>
                
                </Form>

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