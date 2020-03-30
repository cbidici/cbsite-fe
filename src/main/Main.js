import React from 'react';
import {Layout} from 'antd';
const {Header, Content, Footer, Sider} = Layout

class Main extends React.Component {
    render() {
        return(
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Main