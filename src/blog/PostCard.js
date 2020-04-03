import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Post extends React.Component {

    render() {
        return (
            <Card style={{"border":0}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in felis placerat, tempus nunc blandit, laoreet libero. Nunc eget consequat turpis. Ut augue enim, faucibus vitae metus ac, pretium luctus dui. In mollis accumsan dui, sed tristique ex. Nunc vehicula, sapien quis porttitor porttitor, tellus lorem convallis est, eu condimentum purus sem a lacus. Vestibulum metus tellus, sagittis id varius pellentesque, efficitur vitae nibh. Sed blandit fermentum nulla eu pellentesque. Suspendisse tristique venenatis ipsum, sed aliquam justo mattis in. Vestibulum venenatis lorem turpis, quis vehicula lectus porttitor a. In porta dictum varius. Fusce justo turpis, tempor sit amet mauris facilisis, fermentum convallis mauris.</Card.Text>
                    <Link to="/blog/1/" className="card-link float-right">Read</Link>
                </Card.Body>
            </Card>
        );
    }
}

export default Post