import React from 'react';
import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import PostList from './PostList'
import Post from './Post'
import {Route} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

class Blog extends React.Component {

    render(){
        return (
            <Row>
                <Col sm={9}>
                    <Route exact={true} path='/blog/' component={PostList} />
                    <Route path='/blog/:id' component={Post} />
                </Col>
                <Col sm={3}>
                    <CategorySelector/>
                    <TagSelector/>
                </Col>
            </Row>
        );
    }
}

export default Blog