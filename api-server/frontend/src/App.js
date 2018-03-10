import React, {Component} from 'react'
import Navigation from './components/Navigation'
import './css/App.css'
import { connect } from "react-redux"
import {getPosts} from './actions/postActions'

import {goToHomeScreen, goToPosts} from './actions/pageActions'

// import FloatingActionButton from 'material-ui/FloatingActionButton'
// import ContentAdd from 'material-ui/svg-icons/content/add'
// import ContentBack from 'material-ui/svg-icons/navigation/arrow-back'
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { Button } from 'react-md'

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

    if(!posts) {
      return <div>Loading...</div>
    }

    return (
      
        <div>
          
          <Navigation /> 

          <br />

          <Route path="/" exact render={() => <Home />} />

          <Route path="/addpost" exact render={() => <AddPost />} />
          
          <section className="bottom">
            <Button onClick={() => this.handleClick(currentPage)} floating secondary swapTheming>
              {(currentPage === '/') ? "add" : "arrow_back"}
            </Button>            
          </section>   

        </div>     
      
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