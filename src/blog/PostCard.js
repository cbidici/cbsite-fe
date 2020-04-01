import React from 'react'
import {Card} from 'antd'

class Post extends React.Component {

    render() {
        return (
            <Card title="Post title" bordered={false}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in felis placerat, tempus nunc blandit, laoreet libero. Nunc eget consequat turpis. Ut augue enim, faucibus vitae metus ac, pretium luctus dui. In mollis accumsan dui, sed tristique ex. Nunc vehicula, sapien quis porttitor porttitor, tellus lorem convallis est, eu condimentum purus sem a lacus. Vestibulum metus tellus, sagittis id varius pellentesque, efficitur vitae nibh. Sed blandit fermentum nulla eu pellentesque. Suspendisse tristique venenatis ipsum, sed aliquam justo mattis in. Vestibulum venenatis lorem turpis, quis vehicula lectus porttitor a. In porta dictum varius. Fusce justo turpis, tempor sit amet mauris facilisis, fermentum convallis mauris.</p>
            </Card>
        );
    }
}

export default Post