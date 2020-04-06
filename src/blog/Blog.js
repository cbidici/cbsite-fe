import React from 'react';
import PostList from './PostList'
import Post from './Post'
import {Switch, Route} from 'react-router-dom'

class Blog extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route path={this.props.match.path+'/:id'} component={Post} />
                        <Route path={this.props.match.path} component={PostList} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Blog