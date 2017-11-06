import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SoloProduct from './SoloProduct';
import Gallery from './Gallery';
import Main from './Main';

class PageHead extends React.Component {
  render(){
    return (
      <header>
        <nav id="topNav">
          <a href="#" id="menu-icon">Menu</a>
          <ul>
            <li><Link to="/montessori">Montessori</Link></li>
            <li><Link to="/smallitems">Small Items</Link></li>
            <li><Link to="/furniture">Furniture</Link></li>
            <li id="company-logo"><a href="#home"><img src=""/></a></li>
            <li><Link to="/custom">Custom</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default PageHead;
