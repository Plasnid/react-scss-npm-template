import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import PageHead from './PageHead';
import Gallery from './Gallery';
import SoloProduct from './SoloProduct';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { main } = this.props;
    return(
      <div id="main">
        <PageHead />
        <main>
          <Route exact path="/montessori" component={SoloProduct}/>
          <Route exact path="/smallitems" component={Gallery}/>
          <Route exact path="/furniture" component={SoloProduct}/>
          <Route exact path="/custom" component={Gallery}/>
          <Route exact path="/contact" component={SoloProduct}/>
          <Route exact path="/about" component={Gallery}/>
          <Route exact path="/" component={Gallery}/>
        </main>
      </div>
    )
  }
}
