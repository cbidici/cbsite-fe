import React from 'react';
import PostList from './PostList'
import Post from './Post'
import {Route} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

class Blog extends React.Component {

    render(){
        return (
            <Row>
                <Col sm={12}>
                    <Route exact={true} path='/blog/' component={PostList} />
                    <Route path='/blog/:id' component={Post} />
                </Col>
            </Row>
        );
    }
}

export default Blog