import React from 'react';

import PageHead from './PageHead';
import Gallery from './Gallery';

class Main extends React.Component {
  render(){
    return(
      <div id="main">
        <PageHead />
        <Gallery />
      </div>
    )
  }
}

export default Main;
