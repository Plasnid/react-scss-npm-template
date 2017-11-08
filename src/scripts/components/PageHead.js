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
          <ul role="menubar">
            <li><Link to="/smallitems" role="menuitem">Small Items</Link></li>
            <li><Link to="/montessori" role="menuitem">Montessori</Link></li>
            <li><Link to="/furniture" role="menuitem">Furniture</Link></li>
            <li id="company-logo" role="menuitem"><a href="#home"><img src=""/></a></li>
            <li><Link to="/custom" role="menuitem">Custom</Link></li>
            <li><Link to="/contact" role="menuitem">Contact</Link></li>
            <li><Link to="/about" role="menuitem">About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default PageHead;
