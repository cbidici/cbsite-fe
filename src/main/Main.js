import React from 'react'
import {Layout} from 'antd'
import TopMenu from './TopMenu'
import Blog from '../blog/Blog'
import {Route} from 'react-router-dom'

import './main.css'

const {Header, Content, Footer, Sider} = Layout

class Main extends React.Component {
    render() {
        return(
            <Layout>
                <Header style={{padding:'0', position:'fixed', zIndex:1, width:'100%'}}>
                    <TopMenu/>
                </Header>
                <Content style={{marginTop:64, padding:50}}>
                    <Route exact={true} path='/' render={()=>(<div>Home</div>)} />
                    <Route path='/blog/' component={Blog} />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Main