import React from 'react'
import TopMenu from './TopMenu'
import Blog from '../blog/Blog'
import {Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css'


class Main extends React.Component {
    render() {
        return(
            <Container fluid>
                <TopMenu/>
                <Container style={{marginTop:56}} fluid>
                    <Route exact={true} path='/' render={()=>(<div>Home</div>)} />
                    <Route path='/blog/' component={Blog} />
                </Container>
                <Container fluid>
                    Footer
                </Container>
            </Container>
        );
    }
}

export default Main