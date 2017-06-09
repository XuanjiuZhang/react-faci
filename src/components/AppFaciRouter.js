import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header.js';
import ContentContainer from './ContentContainer';
import ManageWrapper from './manage/ManageWrapper';

const router = () => (
  <Router>
    <div className="full">
      <Header></Header>
      <Route exact path="/" component={ContentContainer}/>
      <Route path="/manage" component={ManageWrapper}/>
    </div>
  </Router>
)

export default router;