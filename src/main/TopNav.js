import React from 'react'
import {Link} from 'react-router-dom'


class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link to={"/"} className="navbar-brand"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/blog/posts'} className="nav-link">Blog Posts</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;