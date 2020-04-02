import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


class TopMenu extends React.Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand><Link to={'/'}>CB SITE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/blog/'}>Blog</Link>
          </Nav>
          <Nav className="mr-auto">
            <Link className='nav-link' to={'/login/'}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopMenu;