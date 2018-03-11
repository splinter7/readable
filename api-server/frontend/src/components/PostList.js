import React, {Component} from 'react'
import dateFormat from 'dateformat'
import { connect } from "react-redux"
import {goToPost} from '../actions/pageActions'

import {Avatar,
    Button,
    FontIcon,
    List,
    ListItem,
    Grid,
    Cell} from 'react-md'
    
// const InfoIcon = () => <FontIcon>info</FontIcon>

class PostList extends Component {   
    
    constructor(props) {
        super(props);
  
        this.state = {            
          votes: 0
        }
  
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this)
        this.editPost = this.editPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.postSynopsis = this.postSynopsis.bind(this)
    }

    componentDidMount(){
        const {post} = this.props
        this.setState({
            votes: post.voteScore
        })
    }
    
    convertToReadableDate(timeStamp_value){
        let theDate = new Date(timeStamp_value)
        return ("Posted: "+dateFormat(theDate, "mmm dd, yyyy"))
    }

    postSynopsis(obj){  
        let str = this.convertToReadableDate(obj.timestamp)
        str += " | by: " + obj.author + " | "
        str += "Comments: " + obj.commentCount + " | Votes: "
        return (str)
    }

    editPost(id){
        console.log(id)
    }

    deletePost(id){
        console.log(id )
    }

    upVote(vote){
        this.setState({
            votes: vote+1
        })
    }

    downVote(vote){
        this.setState({
            votes: vote-1
        })
    }

    handleClick(id){
        const {dispatch, goToPost} = this.props
        dispatch(goToPost(id))
        window.location.href = '/post/'+id
    }

    render() {
        const {post} = this.props
        let {votes} = this.state
        return (            
            
            <Grid>
                <Cell size={10}>
                    <List>
                        <ListItem
                            leftAvatar={<Avatar suffix="blue" icon={<FontIcon>insert_drive_file</FontIcon>} />}
                            //rightIcon={<InfoIcon />}
                            primaryText={post.title}
                            secondaryText={this.postSynopsis(post)+`${votes}`}
                            onClick={() => this.handleClick(post.id)}
                        />  
                    </List>
                </Cell>
                <Cell size={2}>
                    <div style={{width:"100%", textAlign:"right"}}>
                        <Button icon onClick={() => this.upVote(votes)}>add_circle</Button>
                        <Button icon onClick={() => this.downVote(votes)}>remove_circle</Button>
                        <Button icon onClick={() => this.editPost(post.id)}>edit</Button>
                        <Button icon onClick={() => this.deletePost(post.id)}>delete</Button>
                    </div>
                </Cell>
            </Grid>

        )
    }
}

function mapStateToProps(state) {
    return {
        goToPost: goToPost
    }
}

export default connect(mapStateToProps)(PostList)