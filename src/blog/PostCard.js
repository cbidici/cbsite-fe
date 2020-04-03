import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Post extends React.Component {

    render() {
        return (
            <Card style={{"border":0}}>
                <Card.Body>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Text>{this.props.post.text}</Card.Text>
                    <Link to={"/blog/"+this.props.post.id+"/"} className="card-link float-right">Read</Link>
                </Card.Body>
            </Card>
        );
    }
}

export default Post