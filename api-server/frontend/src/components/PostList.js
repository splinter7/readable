import React, {Component} from 'react'
import dateFormat from 'dateformat'
import { connect } from "react-redux"
import {goToPost} from '../actions/pageActions'

import {Avatar,
    Divider,
    FontIcon,
    List,
    ListItem,
    Card} from 'react-md'

const InfoIcon = () => <FontIcon>info</FontIcon>;

const style = {
    width: "95%",
    margin: "0 auto"
}

class PostList extends Component {    
    
    convertToReadableDate(timeStamp_value){
        let theDate = new Date(timeStamp_value);
        return ("Posted: "+dateFormat(theDate, "mmm dd, yyyy"));
    }

    handleClick(id){
        const {dispatch, goToPost} = this.props
        dispatch(goToPost(id))
        window.location.href = '/post/'+id
    }

    render() {
        const {posts} = this.props
        const rowLen = posts.length;
        return (
            <Card style={style}>
                <List>
                    {posts.map((post, index) => (
                        <span  key={index}>
                            <ListItem
                                leftAvatar={<Avatar suffix="blue" icon={<FontIcon>insert_drive_file</FontIcon>} />}
                                rightIcon={<InfoIcon />}
                                primaryText={post.title}
                                secondaryText={this.convertToReadableDate(post.timestamp)}
                                onClick={() => this.handleClick(post.id)}
                            />  
                            {(rowLen !== index+1) && (<Divider />)}
                        </span>                                      
                    ))}                    
                </List>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        goToPost: goToPost
    }
}

export default connect(mapStateToProps)(PostList)