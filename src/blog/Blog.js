import React from 'react';
import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import PostList from './PostList'
import {Layout} from 'antd';
const {Sider, Content} = Layout

class Blog extends React.Component {

    render(){
        return (
            <Layout>
                <Sider>
                    <Content>
                        <CategorySelector/>
                    </Content>
                    <Content>
                        <TagSelector/>
                    </Content>
                </Sider>
                <Content>
                    <PostList/>
                </Content>
            </Layout>
        );
    }
}

export default Blog