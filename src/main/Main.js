import React from 'react'
import TopNav from './TopNav'
import Blog from '../blog/Blog'
import {Route} from 'react-router-dom'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css'


class Main extends React.Component {
    render() {
        return(
            <div>
                <TopNav/>
                <div className="container" style={{marginTop:60}}>
                    <Route exact={true} path='/' render={()=>(<div style={{minHeight:800}}>
                            This website is being developed for pure personal joy. What you're looking for is most probably not here.
                        </div>)} />
                    <Route path='/blog/' component={Blog} />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main