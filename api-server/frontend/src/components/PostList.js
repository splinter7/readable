import React, {Component} from 'react'
import dateFormat from 'dateformat'
import { connect } from "react-redux"

// import Paper from 'material-ui/Paper';
// import {List, ListItem} from 'material-ui/List';
// import ActionInfo from 'material-ui/svg-icons/action/info';
// import Avatar from 'material-ui/Avatar'
// import ActionDescription from 'material-ui/svg-icons/action/description'
// import {blue500} from 'material-ui/styles/colors'
// import Divider from 'material-ui/Divider'

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
    }
}

export default connect(mapStateToProps)(PostList)