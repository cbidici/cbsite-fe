import React from 'react'
import {Menu}  from 'antd'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'

class TopMenu extends React.Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
            <Menu.Item key="1">
                <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={'/blog/'}>Blog</Link>
            </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TopMenu;