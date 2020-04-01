import React from 'react';
import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import PostList from './PostList'
import Post from './Post'
import {Layout} from 'antd';
import {Route} from 'react-router-dom'
const {Sider, Content} = Layout

class Blog extends React.Component {

    render(){
        return (
            <Layout>
                <Sider theme='light'>
                    <Content style={{borderRight:'1px solid #f0f0f0', height:'100%', marginRight:40}}>
                        <Content>
                            <CategorySelector/>
                        </Content>
                        <Content>
                            <TagSelector/>
                        </Content>
                    </Content>
                </Sider>
                <Content>
                    <Route exact={true} path='/blog/' component={PostList} />
                    <Route path='/blog/:id' component={Post} />
                </Content>
            </Layout>
        );
    }
}

export default Blog