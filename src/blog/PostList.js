import React from 'react'
import PostCard from './PostCard'

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
        console.log(this.state)
        return(
            <div>
                {this.state.posts.map((post)=>(
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        );
    }
}

export default PostList