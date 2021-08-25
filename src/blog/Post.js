import React from 'react'
import MarkdownHtml from './markdownhtml'
import {Helmet} from "react-helmet";


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
                <MarkdownHtml text={this.state.post.text} />
                <br/>
                <br/>
                <p className="float-right">{this.state.post.owner}</p>
            </div>
        );
    }
}

export default Post