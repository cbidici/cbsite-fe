import 'editor.md/editormd.min.js'
import React from 'react';

class MarkdownHtml extends React.Component {
    constructor(props) {
        super(props);
        this.htmlview = null;
    }

    componentDidMount() {
        var text = this.props.text;
        this.htmlview = window.editormd.markdownToHTML("markdown-view", {
            markdown : text,
        });
    }

    componentDidUpdate(){
        var text = this.props.text;
        this.htmlview = window.editormd.markdownToHTML("markdown-view", {
            markdown : text,
        });
    }

    render() {
        console.log("render");
        return (
            <div>
                <div id="markdown-view"></div>
            </div>
        );

    }
}

export default MarkdownHtml;