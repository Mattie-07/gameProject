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
import Games from './components/Games'
import reducer from './reducer/co-opReducer'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/games' component={Games}/>
            <Route path='/explore' component={Explore}/>
        </Switch>
      </Layout>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

