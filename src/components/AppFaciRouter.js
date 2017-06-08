import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ContentContainer from './ContentContainer';

const router = () => (
  <Router>
    <Route exact path="/" component={ContentContainer}/>
  </Router>
)

export default router;