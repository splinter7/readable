import React, {Component} from 'react'
import Navigation from './components/Navigation'
import './css/App.css'
import { connect } from "react-redux"
import {getPosts} from './actions/postActions'

import {goToHomeScreen, goToPosts} from './actions/pageActions'
import { Button } from 'react-md'

import {Route} from 'react-router-dom'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import ViewPost from './pages/ViewPost'

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

          <Route path="/post/:id" render={(props) => <ViewPost {...props} />} />
          
          <section className="bottom">
            <Button onClick={() => this.handleClick(currentPage)} icon primary swapTheming>
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