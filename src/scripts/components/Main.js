import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import PageHead from './PageHead';
import Gallery from './Gallery';
import SoloProduct from './SoloProduct';

export default class Main extends React.Component {
  render(){
    const { main } = this.props;
    return(
      <div id="main">
        <PageHead />
        <main>
          <Route path="/" exact component={Gallery} />
          <Route path="/solo" exact component={SoloProduct} />
        </main>
      </div>
    )
  }
}
