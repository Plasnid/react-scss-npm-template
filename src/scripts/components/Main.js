import React from 'react';
import render from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PageHead from './PageHead';
import Gallery from './Gallery';
import SoloProduct from './SoloProduct';

export default class Main extends React.Component {
  render(){
    return(
       <Router>
          <div id="contentArea">
            <PageHead />
            <Route exact path="/" component={Gallery}/>
            <Route path="/montessori" component={SoloProduct}/>
            <Route path="/smallitems" component={Gallery}/>
            <Route path="/furniture" component={SoloProduct}/>
            <Route path="/custom" component={Gallery}/>
            <Route path="/contact" component={SoloProduct}/>
            <Route path="/about" component={Gallery}/>
          </div>
      </Router>
    )
  }
}
