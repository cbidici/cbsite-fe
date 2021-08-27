import React from 'react'
import {Link} from 'react-router-dom'
import MarkdownHtml from './markdownhtml'
import queryString from 'query-string'
import TagList from "../shared/TagList";

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            posts:[],
            tags:[]
        }
    }

    fetchPosts(queryParams) {
        queryParams.ordering = '-created'

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

    fetchTags() {
        fetch(process.env.REACT_APP_API_BASE_URL+'tags/')
            .then(res=> res.json())
            .then((data)=>{
                this.setState({
                    tags:data
                });
            }).catch((e) => {console.log(e)})
    }

    isQueryParametersChanged(prevProps) {
        return prevProps !== undefined && prevProps.location.search !== this.props.location.search
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.isQueryParametersChanged(prevProps)) {
            let queryParams = queryString.parse(this.props.location.search)
            this.fetchPosts(queryParams)
        }
    }


    componentDidMount() {
        let queryParams = queryString.parse(this.props.location.search)
        this.fetchPosts(queryParams)
        this.fetchTags()
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm col-md-10">
                {this.state.posts.map((post)=>(
                    <div key={post.id} className="card" style={{"border":0}}>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={"/blog/posts/"+post.slug} className="card-link">{post.title}</Link></h5>
                            <MarkdownHtml text={post.summary} />
                        </div>
                    </div>
                ))}
                </div>
                <div className="col-sm col-md-2">
                    <TagList tags={this.state.tags}></TagList>
                </div>
            </div>
        );
    }
}

export default PostList