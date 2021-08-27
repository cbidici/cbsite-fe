import React from 'react'
import MarkdownHtml from './markdownhtml'
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post : {
                tags: []
            }
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_BASE_URL+'blog/posts/'+this.props.match.params['slug']+"/")
        .then(res=> res.json())
        .then((data)=>{
            this.setState({
                post:data
            });
        }).catch((e) => {console.log(e)})
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{'Coşkun Bıdıcı - ' + this.state.post.title}</title>
                    <meta name="description" content={this.state.post.title} />
                    <meta name="keywords" content={this.state.post.tags.map(tag => tag.tag)} />
                </Helmet>
                <h2>{this.state.post.title}</h2>
                <h6><small className="text-muted">Published at {this.state.post.created}</small></h6>
                <div className="dropdown-divider"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm col-md-10">
                            <MarkdownHtml text={this.state.post.text} />
                        </div>
                        <div className="col-sm col-md-2">
                            <div>
                                {this.state.post.tags.map((tag)=>(
                                    <Link key={tag.slug} to={"/blog/posts/?tag="+tag.slug} className="tag badge badge-secondary">{tag.tag}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Link to={"/blog/posts/?owner="+this.state.post.owner} className="card-link float-right">{this.state.post.owner}</Link>
                </div>
            </div>
        );
    }
}

export default Post