import React from 'react';
import {Layout} from 'antd';
import Blog from '../blog/Blog'
const {Header, Content, Footer, Sider} = Layout

class Main extends React.Component {
    render() {
        return(
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Blog/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Main