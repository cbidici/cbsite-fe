import React from 'react'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post : {}
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/blog/posts/'+this.props.match.params['id']+"/")
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
                {this.state.post.text}
                <br/>
                <br/>
                <p className="float-right">{this.state.post.owner}</p>
            </div>
        );
    }
}

export default Post