import React from 'react'
import {Link} from "react-router-dom";


class Post extends React.Component {
    render() {
        return (
            <div>
                {this.props.tags.map((tag)=>(
                    <Link key={tag.slug} to={"/blog/posts/?tag="+tag.slug} className="tag badge badge-secondary">{tag.tag}</Link>
                ))}
            </div>
        );
    }
}

export default Post