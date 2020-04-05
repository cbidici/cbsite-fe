import React from 'react'
import {Link} from 'react-router-dom'

class Post extends React.Component {

    render() {
        return (
            <div className="card" style={{"border":0}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.text}</p>
                    <Link to={"/blog/"+this.props.post.id+"/"} className="card-link float-right">Read</Link>
                </div>
            </div>
        );
    }
}

export default Post