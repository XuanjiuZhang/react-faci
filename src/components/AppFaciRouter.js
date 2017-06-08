import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ContentContainer from './ContentContainer';
import ManageWrapper from './manage/ManageWrapper';

const router = () => (
  <Router>
    <Route exact path="/" component={ContentContainer}/>
    <Route path="/manage" component={ManageWrapper}/>
  </Router>
)

export default router;