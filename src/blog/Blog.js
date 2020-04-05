import React from 'react';
import PostList from './PostList'
import Post from './Post'
import {Route} from 'react-router-dom'

class Blog extends React.Component {

    render(){
        return (
            <div className="row">
                <div className="col">
                    <Route exact={true} path='/blog/' component={PostList} />
                    <Route path='/blog/:id'>
                        <Post/>
                    </Route>
                </div>
            </div>
        );
    }
}

export default Blog