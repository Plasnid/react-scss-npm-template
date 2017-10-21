import React from 'react';

import Header from './Header';
import Gallery from './Gallery';

class Main extends React.Component {
  render(){
    return(
      <div id="main">
        <Header />
        <Gallery />
      </div>
    )
  }
}

export default Main;
