import React, {Component} from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Navigation from './components/Navigation'
import './css/App.css'
import { connect } from "react-redux"
import {getPosts} from './actions/postsActions'

import {goToHomeScreen, goToPosts} from './actions/pageActions'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentBack from 'material-ui/svg-icons/navigation/arrow-back'

import {Route} from 'react-router-dom'
import Home from './pages/Home'
import AddPost from './pages/AddPost'

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
      posts: dispatch(fetchPosts()),
      currentPage: window.location.pathname
    })
  }

  handleClick = (path) => {
    const {dispatch} = this.props
    if(path === '/'){
      dispatch(goToPosts())
      window.location.href = '/addpost'
    } else {
      dispatch(goToHomeScreen())
      window.location.href = '/'
    }
  }

  render(){    
    const {posts} = this.props
    const {currentPage} = this.state
    console.log(currentPage)

    if(!posts) {
      return <div>Loading...</div>
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          
          <Navigation /> 

          <br />

          <Route path="/" exact render={() => <Home />} />

          <Route path="/addpost" exact render={() => <AddPost />} />
          
          <section className="bottom">
            <FloatingActionButton secondary={true} onClick={() => this.handleClick(currentPage)}>
              {(currentPage === '/') ? <ContentAdd /> : <ContentBack />}
            </FloatingActionButton>
          </section>   

        </div>     
      </MuiThemeProvider>
    )
  }  
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentPage: state.pages,
    fetchPosts: getPosts,
    goHome: goToHomeScreen,
    goToPosts: goToPosts
  }
}

export default connect(mapStateToProps)(App);