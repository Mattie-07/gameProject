import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Explore from './components/Explore'
import Results from './components/Results'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/results' component={Results}/>
            <Route path='/explore' components={Explore}/>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

