import React from 'react'
import {Link} from 'react-router-dom'
import MarkdownHtml from './markdownhtml'

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            posts:[]
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_BASE_URL+'blog/posts/?ordering=-created')
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
                            <MarkdownHtml text={post.summary} />
                            <Link to={"/blog/"+post.slug} className="card-link float-right">Read</Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostList