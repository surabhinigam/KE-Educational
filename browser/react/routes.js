import React from 'react';
//import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import KEHome from './components/App';



export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={KEHome}>
          
        </Route>
      </Router>
    </Provider>
  );
}
