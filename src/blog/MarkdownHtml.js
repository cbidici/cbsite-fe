import React from 'react';
import 'editor.md/css/editormd.preview.css';
require('editor.md/lib/prettify.min.js')
const editormd = require('editor.md/editormd.js')();
window.marked = require('editor.md/lib/marked.min.js')


class MarkdownHtml extends React.Component {
    constructor(props) {
        super(props);
        this.htmlview = null;
    }

    loadEditor = () => {
        var text = this.props.text;
        this.htmlview = editormd.markdownToHTML("markdown-view", {
            markdown : text,
            
        });
    }

    componentDidMount() {
        this.loadEditor();
    }

    componentDidUpdate(){
        this.loadEditor();
    }

    render() {
        return (
            <div>
                <div id="markdown-view"></div>
            </div>
        );

    }
}

export default MarkdownHtml;