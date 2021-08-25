import React from 'react'
import {Link} from 'react-router-dom'
import MarkdownHtml from './markdownhtml'
import queryString from 'query-string'

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            posts:[]
        }
    }

    componentDidMount() {
        let queryParams = queryString.parse(this.props.location.search)
        queryParams.ordering = '-created'
        console.log(queryParams)

        fetch(process.env.REACT_APP_API_BASE_URL+'blog/posts/?' +
            Object.keys(queryParams).map(k => k + '=' + queryParams[k]).join('&')
        )
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
                            <h5 className="card-title"><Link to={"/blog/posts/"+post.slug} className="card-link">{post.title}</Link></h5>
                            <MarkdownHtml text={post.summary} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostList