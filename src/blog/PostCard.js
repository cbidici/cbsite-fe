import React from 'react'
import {Card} from 'react-bootstrap'

class Post extends React.Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Subtitle>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in felis placerat, tempus nunc blandit, laoreet libero. Nunc eget consequat turpis. Ut augue enim, faucibus vitae metus ac, pretium luctus dui. In mollis accumsan dui, sed tristique ex. Nunc vehicula, sapien quis porttitor porttitor, tellus lorem convallis est, eu condimentum purus sem a lacus. Vestibulum metus tellus, sagittis id varius pellentesque, efficitur vitae nibh. Sed blandit fermentum nulla eu pellentesque. Suspendisse tristique venenatis ipsum, sed aliquam justo mattis in. Vestibulum venenatis lorem turpis, quis vehicula lectus porttitor a. In porta dictum varius. Fusce justo turpis, tempor sit amet mauris facilisis, fermentum convallis mauris.</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default Post