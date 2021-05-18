import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Signin from './components/Signin'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Games from './pages/Games'
import Question from './pages/Question'
import reducer from './reducer/co-opReducer'
import QuestionPageTwo from './pages/QuestionPageTwo'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/games' component={Games}/>
            <Route path='/questions' component={Question}/>
            <Route path='/questionTwo' component={QuestionPageTwo}/>
            <Route path='/explore' component={Explore}/>
        </Switch>
      </Layout>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

