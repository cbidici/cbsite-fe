import React from 'react';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import handlebars from 'highlight.js/lib/languages/handlebars';
import css from 'highlight.js/lib/languages/css';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import diff from 'highlight.js/lib/languages/diff';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import './markdownhtml.css'
const marked = require('marked');


class MarkdownHtml extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview : "",
            text : "",
        }

        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('handlebars', handlebars);
        hljs.registerLanguage('css', css);
        hljs.registerLanguage('java', java);
        hljs.registerLanguage('python', python);
        hljs.registerLanguage('bash', bash);
        hljs.registerLanguage('diff', diff);
        hljs.registerLanguage('sql', sql);
        hljs.registerLanguage('xml', xml);
    }

    loadEditor = () => {
        if(this.props.text && this.state.text !== this.props.text ) {
            marked.setOptions({
                gfm:true,
                breaks:true,
                highlight: function(code, lang, callback) {
                    if(hljs.getLanguage(lang)) {
                        return hljs.highlight(lang, code).value;
                    }
                    else {
                        return code;
                    }
                }
            });
            var previewHtml = DOMPurify.sanitize(marked(this.props.text));
            this.setState({
                preview:previewHtml,
                text:this.props.text,
            });
        }
    }

    componentDidMount() {
        this.loadEditor();
    }

    componentDidUpdate(){
        this.loadEditor();
    }

    render() {
        return (
            <div className="markdownhtml" dangerouslySetInnerHTML={{__html: this.state.preview}}></div>
        );

    }
}

export default MarkdownHtml;