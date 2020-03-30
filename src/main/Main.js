import React from 'react';
import {Layout} from 'antd';
import Blog from '../blog/Blog'
import { Link, Route } from 'react-router-dom'
const {Header, Content, Footer, Sider} = Layout

class Main extends React.Component {
    render() {
        return(
            <Layout>
                <Header>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/blog/'}>Blog</Link>
                </Header>
                <Content>
                    <Route exact={true} path='/' render={()=>(<div>Home</div>)} />
                    <Route path='/blog/' component={Blog} />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Main