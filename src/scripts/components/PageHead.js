import React from 'react';
import Link from 'react-router-dom';

class PageHead extends React.Component {
  render(){
    return (
      <header>
        <nav id="topNav">
          <a href="#" id="menu-icon">Menu</a>
          <ul>
            <li><a href="#">Montessori</a></li>
            <li><a href="#">Small Items</a></li>
            <li><a href="#">Furniture</a></li>
            <li id="company-logo"><a href="#home"><img src=""/></a></li>
            <li><a href="#">Custom</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default PageHead;
