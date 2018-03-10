import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'
import Form from 'react-formal'
import yup from 'yup'

import {Card, TextField, SelectField, Grid, Cell } from 'react-md'

const formPostSchema = yup.object().shape({
    title: yup.string().required('Please enter a title'),
    content: yup.string().required('Please enter some content this field is required'),
    category: yup.string().required('Please select a category this field is required'),
})

const style = {
    width: "95%",
    margin: "0 auto"
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
            <Card style={style}>

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
                    <Grid>
                        <Cell size={4}>

                            <Form.Field
                                name="title"                                
                                type={TextField}
                                label="Title"
                                id="floatingCenterTitle"
                                noMeta
                                error={!!errors.title}
                                errorText={errors.title && errors.title[0].message}
                            />

                            <br />

                            <Form.Field
                                name="content"                                
                                type={TextField}
                                label="Content"
                                rows={5}
                                id="floatingCenterTitle"
                                noMeta
                                error={!!errors.content}
                                errorText={errors.content && errors.content[0].message}
                            />

                            <br />

                            <Form.Field
                                name="category"                                
                                type={SelectField}
                                label="Category"
                                id="floatingCenterTitle"
                                style={{width:"30%"}}
                                menuItems={categories.map((category) => (category.name))}
                                noMeta
                                error={!!errors.category}
                                errorText={errors.category && errors.category[0].message}
                            />

                        </Cell>
                        <Cell size={8}></Cell>
                    </Grid>
                
                </Form>

            </Card>
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