import React from 'react'
import MarkdownHtml from './markdownhtml'


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post : {}
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_BASE_URL+'blog/posts/'+this.props.match.params['id']+"/")
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
                <h3>{this.state.post.title}</h3>
                <h6><small className="text-muted">Published at {this.state.post.created}</small></h6>
                <div className="dropdown-divider"></div>
                <MarkdownHtml text={this.state.post.summary} />
                <MarkdownHtml text={this.state.post.text} />
                <br/>
                <br/>
                <p className="float-right">{this.state.post.owner}</p>
            </div>
        );
    }
}

export default Post