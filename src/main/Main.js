import React from 'react'
import TopNav from './TopNav'
import Blog from '../blog/Blog'
import {Switch, Route} from 'react-router-dom'
import Footer from './Footer'
import './main.css'


class Main extends React.Component {
    render() {
        return(
            <div>
                <TopNav/>
                <div className="container" style={{marginTop:60}}>
                    <Switch>
                        <Route path='/blog' component={Blog} />
                        <Route path='/login' render={()=>(<div>This is login page.</div>)} />
                        <Route path='/' render={()=>(<div style={{minHeight:800}}>
                                This website is being developed for pure personal joy. What you're looking for is most probably not here.
                            </div>)} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main