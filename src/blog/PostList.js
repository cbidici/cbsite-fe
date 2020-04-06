import React from 'react'
import {Link} from 'react-router-dom'

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            posts:[]
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/blog/posts/')
        .then(res=> res.json())
        .then((data)=>{
            this.setState({
                posts:data
            });
        }).catch((e) => {console.log(e)})
    }

    render() {
        return(
            <div>
                {this.state.posts.map((post)=>(
                    <div key={post.id} className="card" style={{"border":0}}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.text}</p>
                            <Link to={"/blog/"+post.id} className="card-link float-right">Read</Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostList