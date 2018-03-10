import React, {Component} from 'react'
import {
    Button,
    Card,
    CardTitle,
    CardText,
    Divider,
    Avatar,
    Chip
  } from 'react-md'
import {connect} from 'react-redux'

const style = {
    width: "95%",
    margin: "0 auto"
}

class ViewPost extends Component{

    constructor(props) {
        super(props);
  
        this.state = {            
          votes: 0
        };
  
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this);
    }

    componentDidMount(){
        const {posts} = this.props
        const {id} = this.props.match.params
        const post = posts.filter((p) => (p.id === id))
        this.setState({
            votes: post[0].voteScore
        })
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

    render(){
        const {posts} = this.props
        const {id} = this.props.match.params
        let {votes} = this.state
        
        // This line filters the post state by id
        const post = posts.filter((p) => (p.id === id))

        // this.setState({
        //     votes: post.voteScore
        // })

        return (
            <div className="md-grid">
                <Card style={style}>
                    <CardTitle title={post[0].title} subtitle={post[0].author}>
                        <div className="md-cell--right">
                            <Chip
                                label="Votes"
                                avatar={<Avatar style={{color:"white"}} suffix="light-green">{votes}</Avatar>}
                            /> &nbsp;
                            <Button icon onClick={() => this.upVote(votes)}>add_circle</Button>
                            <Button icon onClick={() => this.downVote(votes)}>remove_circle</Button>
                        </div>
                    </CardTitle>
                    <Divider/>
                    <CardText>                
                        <p>                    
                            {post[0].body}
                        </p>
                    </CardText>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ViewPost)