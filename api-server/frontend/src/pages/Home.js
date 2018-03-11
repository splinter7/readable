import React, {Component} from 'react'
import PostList from '../components/PostList'
import {connect} from 'react-redux'
import { Card } from 'react-md'

const style = {
    width: "95%",
    margin: "0 auto"
}

class Home extends Component {
    render(){
        const {posts} = this.props

        return (
            <Card style={style}>
                {posts.map((post, index) => (
                    <PostList key={index} post={post}/>
                ))}
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)