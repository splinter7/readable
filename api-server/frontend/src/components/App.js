import React, {Component} from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Navigation from './Navigation'
import '../css/App.css'
import { connect } from "react-redux"
import {getPosts} from '../actions/postsActions'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import PostList from './PostList'

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        posts: []
      };

      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {fetchPosts, dispatch} = this.props 
    this.setState({
      posts: dispatch(fetchPosts())
    })
  }

  handleClick = () => {
    const {fetchPosts, dispatch} = this.props    
    dispatch(fetchPosts())
    this.setState({
      posts: this.props.posts
    })    
  }

  render(){    
    const {posts} = this.props

    if(!posts) {
      return <div>Loading...</div>
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          
          <Navigation /> 

          <br />

          <section>        
            <PostList posts={posts} />
          </section> 
          
          <section className="bottom">
            <FloatingActionButton secondary={true} onClick={() => this.handleClick()}>
              <ContentAdd />
            </FloatingActionButton>
          </section>   

        </div>     
      </MuiThemeProvider>
    )
  }  
}

function mapStateToProps(state) {
  return {
    posts: state,
    fetchPosts: getPosts
  }
}

export default connect(mapStateToProps)(App);