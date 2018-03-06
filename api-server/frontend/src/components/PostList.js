import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar'
import ActionDescription from 'material-ui/svg-icons/action/description'
import {blue500} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import dateFormat from 'dateformat'

const style = {
  width: "95%",
  margin: "0 auto"
}

class PostList extends Component {    
    
    convertToReadableDate(timeStamp_value){
        let theDate = new Date(timeStamp_value);
        return (dateFormat(theDate, "mmm dd, yyyy"));
    }

    render() {
        const {posts} = this.props
        const rowLen = posts.length;
        return (
            <Paper zDepth={1} style={style}>
                <List>
                    {posts.map((post, index) => (
                        <span  key={index}>
                            <ListItem
                                leftAvatar={<Avatar icon={<ActionDescription />} backgroundColor={blue500} />}
                                rightIcon={<ActionInfo />}
                                primaryText={post.title}
                                secondaryText={this.convertToReadableDate(post.timestamp)}
                            />     
                            {(rowLen !== index+1) && (<Divider />)}
                        </span>                                      
                    ))}                    
                </List>
            </Paper>
        )
    }
}

export default PostList