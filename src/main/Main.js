import React from 'react'
import TopNav from './TopNav'
import Blog from '../blog/Blog'
import {Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css'


class Main extends React.Component {
    render() {
        return(
            <Container fluid>
                <TopNav/>
                <Container style={{marginTop:76}}>
                    <Route exact={true} path='/' render={()=>(<div style={{minHeight:800}}>
                        This website is being developed for pure personal joy. What you're looking for is most probably not here.
                    </div>)} />
                    <Route path='/blog/' component={Blog} />
                </Container>
                <Footer>
                    asdas
                </Footer>
            </Container>
        );
    }
}

export default Main